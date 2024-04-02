import mock from "../mock";
import { GlobalController } from "./controller";
import { reducer } from "./reducer";
import React, { useCallback, useEffect } from "react";
const defaultContextValue = {
    eventList: [],
    selectedEventIds: [],
    loading: false,
}

export const GlobalContext = React.createContext(defaultContextValue);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, defaultContextValue);

    const controller = new GlobalController(dispatch);
    const value = {...state, reducer: controller};

    controller.getContextValue(state);

    const fetchEventList = useCallback(()=> {
        controller.setLoading(true);
        // fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
        //     .then(response => {
        //         return response.json()
        //     }).catch(err => {
        //         console.warn(err);
        //         return mock;
        //     })
        setTimeout(async () => {
            const data = mock;
            controller.setEventList(data);
            controller.setLoading(false);
        }, 4000);
    },[]);


    useEffect( () => {
       fetchEventList();
    },[fetchEventList]);

    return (
        <GlobalContext.Provider value = {value}>
            {children}
        </GlobalContext.Provider>
    )
}