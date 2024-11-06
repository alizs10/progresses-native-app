import { useEffect } from "react";
import { useAppStore } from "../store/app-store";

export default function useSearch(handleSearch) {
    const { searchStr, setSearchStr } = useAppStore(state => state);

    useEffect(() => {
        if (searchStr === "") return;

        const timer = setTimeout(() => {
            handleSearch(searchStr);
        }, 1000);

        console.log('timer')

        return () => clearTimeout(timer);
    }, [searchStr]);

    return [searchStr, setSearchStr];
}