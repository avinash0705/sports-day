export const actions = {
    SELECT_EVENT: "SELECT_EVENT",
    REMOVE_SELECTED_EVENT: "REMOVE_SELECTED_EVENT",
    LOAD_EVENTS: "LOAD_EVENTS",
    SET_LOADING: "SET_LOADING"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.SELECT_EVENT: {
            const currentEventList = [...state.eventList];
            const eventIdx = currentEventList.findIndex(item => item.id === action.data);
            if(eventIdx !== -1) {
                currentEventList[eventIdx].selected = true;
            }
            return {
                ...state,
                eventList: [...currentEventList]
            }
        }
        case actions.REMOVE_SELECTED_EVENT:
            const currentEventList = [...state.eventList];
            const eventIdx = currentEventList.findIndex(item => item.id === action.data);
            if(eventIdx !== -1) {
                currentEventList[eventIdx].selected = false;
            }
            return {
                ...state,
                eventList: [...currentEventList]
            }
        case actions.LOAD_EVENTS:
            return {
                ...state,
                eventList: action.data.map(item => ({selected: false, ...item}))
            };
        case actions.SET_LOADING: 
            return {
                ...state,
                loading: action.data
            }
    
        default:
            return state;
    }
}