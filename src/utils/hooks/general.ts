import { useCallback, useEffect, useRef, useState } from 'react'

export const useSignal = () => {
    const [, updateState] = useState();
    // @ts-ignore
    return useCallback(() => updateState({}), []);
}

export const useForkedState = <T extends any[], R>(fn: (...args: T) => R, ...args: T) => {
    const ref = useRef(null as unknown as [R, (value: R) => void]);
    const signal = useSignal();

    if (ref.current === null) {
        const value: R = fn(...args);
        const setState = (val: R) => { ref.current[0] = val; signal(); }

        ref.current = [value, setState];
    }

    useEffect(() => {
        const value = fn(...args);

        if (ref.current[0] !== value)
            ref.current[1](value);
    }, [fn, args]);

    return ref.current;
}

export const useToken = () => {

    const getToken = () => {
        const storedItem = localStorage.getItem("token");

        if (!storedItem) {
            return ''
        }

        let tkn = null as unknown as string;

        try {
            tkn = atob(storedItem) as unknown as string;
        } catch (err) {
            // error handling...
        }

        const timestamp = Number(tkn) * 1000;
        const date = new Date(timestamp);

        /* if (tkn )
        {
            // error handling... 
        } */
        return tkn;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (tk?: string) => {
        if (!tk) tk = createToken();
        localStorage.setItem('token', tk);
        setToken(tk);
    };
    const createToken = () => {
        const date = Date.now();
        const tkn = btoa(date.toString());
        return tkn;
    }

    return {
        setToken: saveToken,
        token
    }
}