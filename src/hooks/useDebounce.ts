import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useDebounce = <T>(initialValue: T, delay: number): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        let timer;
        const debounceValue = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
        };

        debounceValue();
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return [debouncedValue, setValue];
};

export default useDebounce;
