import { useContext } from "react";
import { GlobalContext } from "../../Context";
import "./index.css";
import React from "react";
import EventTile from "Components/EventTile";

export default function SelectedEvents (props) {
    const globalContext = useContext(GlobalContext);

    const {eventList, reducer} = globalContext;

    const selectedEvents = eventList.filter(event => event.selected === true);

    const handleEventClick = (e) => {
        try {
            const targetEle = e.target;
            if(targetEle.id === "cancelBtn"){
                const cardBodyEle = targetEle.parentElement;
                const cardEle = cardBodyEle.parentElement;
                const tileId = cardEle.id || "";
                if(tileId){
                    reducer.removeSelectedEvent(tileId);
                }
            }
        } catch (err) {
            console.warn(err);
        }
    }

    return <div className="right-side container ">
            <p className="heading">Selected Events</p>

            <div className="selected-events-listing" onClick={handleEventClick}>
                {
                    selectedEvents && selectedEvents.length
                    ?
                    selectedEvents.map(event =><EventTile {...event}/>)
                    :
                    ""
                }
            </div>
    </div>
}