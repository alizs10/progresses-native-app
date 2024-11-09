import { createContext, useCallback } from "react";
import { useAppStore } from "../store/app-store";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

export const DataSelectModeContext = createContext()

export function DataSelectModeProvider({ children }) {

    const { selectedData, selectModeDataType, setSelectModeDataType, selectData, selectMode, unselectData, closeSelectMode } = useAppStore(state => state)

    const dataSelectMode = selectMode && selectModeDataType === 0;

    function handlePress(id, cb = undefined) {

        if (dataSelectMode) {
            toggleSelect(id)
            return
        }

        cb && cb()
    }

    function handleLongPress(id, cb = undefined) {
        if (selectMode && selectModeDataType === 1) return

        setSelectModeDataType(0)
        toggleSelect(id)
        cb && cb()
    }

    function toggleSelect(id) {
        dataSelectMode && selectedData.includes(id) ? unselectData({ id }) : selectData({ id })
    }

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (selectMode) {
                    closeSelectMode();
                    return true;
                } else {
                    return false;
                }
            };

            const subscription = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => subscription.remove();
        }, [selectMode, closeSelectMode])
    );


    let values = {
        handlePressData: handlePress,
        handleLongPressData: handleLongPress,
        dataSelectMode
    }

    return (
        <DataSelectModeContext.Provider value={values}>
            {children}
        </DataSelectModeContext.Provider>
    )
}