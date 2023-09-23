import { useState, useEffect } from "react";

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {

    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [storageValue, setStorageValue] = useState<T>(initial);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storageValue));
    }, [key, storageValue]);

    return [storageValue, setStorageValue];
};

export default useLocalStorage;
