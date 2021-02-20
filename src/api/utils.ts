export const isLoaded = (request: any) => {
    return request !== null && request.status !== 102
}

const arrayToStringList = (arr: string[]) =>
    arr.toString().replace(/,/g, ", ")

type TType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array";

export const checkType = (name: string, value: any, ...types: TType[]) => {
    let t: TType = typeof value;

    if (t === "object")
        if (value === null)
            t = "null";
        else if (Array.isArray(value))
            t = "array";

    if (!types.includes(t))
        throw new Error(`Expected ${arrayToStringList(types)} for ${name}, got ${typeof value}`)

    return value;
}

/**
 * Same as checkType but accepts an parent object.
 * @param obj 
 * @param field 
 * @param types 
 */
export const checkField = <T, K extends keyof T>(obj: T, field: K, ...types: TType[]) => {
    const val = obj[field];
    checkType(field as string, val, ...types);
    return val;
}