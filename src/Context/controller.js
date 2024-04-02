
import { actions } from "./reducer";
import {doesOverlap} from "../util";
import { toast } from 'react-toastify';

const MAX_SELECTION = 3;

export class GlobalController {
    dispatch;
    state;

    constructor(dispatch) {
        this.dispatch = dispatch;
        this.state = null;
    }

    getContextValue(state){
        this.state = state;
    }

    setLoading(value){
        this.dispatch({type: actions.SET_LOADING, data: value});
    }

    setEventList(data) {
        try {
            this.dispatch({type: actions.LOAD_EVENTS, data: data});
        } catch (error) {
            console.warn(error);
        }
    }


    selectEvent (eventId){
        try {
            const currentSelectedEventList = [...this.state.eventList].filter(item => item.selected === true);
            const newitem = this.state.eventList.find(item => item.id === parseInt(eventId));
            let isOverlapping = false;
            const disableSelection = currentSelectedEventList.length === MAX_SELECTION;
            if(disableSelection) {
                toast("Max 3 events is allowed!!!");
                return;
            }
            currentSelectedEventList.forEach(ev => {
                if(doesOverlap(newitem.start_time, newitem.end_time, ev.start_time, ev.end_time)){
                    isOverlapping = true;
                    return;
                }
            })
            if(isOverlapping === false) {
                this.dispatch({type: actions.SELECT_EVENT, data: parseInt(eventId)})
            } else {
                toast("You are already Occupied at this time!!");
                console.log("You are already Occupied at this time");
            }
            
        } catch (error) {
            console.warn(error);
        }
    }
    removeSelectedEvent(eventId){
        try {
            this.dispatch({type: actions.REMOVE_SELECTED_EVENT, data: parseInt(eventId)})
        } catch (error) {
            console.warn(error);
        }
    }

}