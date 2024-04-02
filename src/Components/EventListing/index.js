import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context";
import "./index.css";
import EventTile from "../EventTile";
import React from "react";
import CardShimmer from "Components/EventTile/CardShimmer";
import SearchBar from "Components/SearchBar";
import FloatingFilter from "./FloatingFilter";
import { useLocation } from "react-router-dom";


export default function EventListing (props) {
    const globalContext = useContext(GlobalContext);
    const {eventList, reducer, loading} = globalContext;
    const [filteredList, setFilteredList] = useState(eventList);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const floatingFilter = queryParams.get("cat") || "All";


    const selectedEvents = eventList.filter(event => event.selected === true);

    const handleEventClick = (e) => {
        try {
            const targetEle = e.target;
            const btnId = targetEle.id;
            if(btnId !== "addBtn" && btnId !== "cancelBtn")return;

            const cardBodyEle = targetEle.parentElement;
            const cardEle = cardBodyEle.parentElement;
            const tileId = cardEle.id || "";
            if(btnId === "addBtn"){
                reducer.selectEvent(tileId);
            } else if(btnId === "cancelBtn") {
                reducer.removeSelectedEvent(tileId);
            }
        } catch (err) {
            console.warn(err);
        }
    }


    const handleSearchClick = (query) => {
        try {
            const lowerCaseQuery = query.trim().toLowerCase();
            const currentEventList = [...eventList];
            const filteredEventList = currentEventList.filter(event => event.event_name.trim().toLowerCase().includes(lowerCaseQuery));
            setFilteredList([...filteredEventList]);
        } catch (error) {
            console.warn(error);
        }
    }


    useEffect(() => {
        if(floatingFilter === "All") {
            setFilteredList([...eventList]);
        } else {
            const filteredList = eventList.filter(event => event.event_category === floatingFilter);
            setFilteredList(filteredList);
        }  
    },[eventList, floatingFilter]);





    return <div className="left-side">
                <div className="top-wrapper">
                    {/* <p className="heading container">Events</p> */}
                    <SearchBar searchClick={handleSearchClick}/>
                </div>

                <div className="container">
                    <FloatingFilter />
                    <div className="listing-wrapper">
                    <div className="events-listing" onClick={handleEventClick}>
                        {
                            loading
                            ?
                            [1,2,3,4,5,6,7, 8, 9, 10].map(ele => (<CardShimmer />))
                            :

                            filteredList && filteredList.length
                            ?
                            filteredList.map(event => <EventTile {...event}/>)
                            :
                            ""
                        }
                    </div>

                    {
                        selectedEvents && selectedEvents.length
                        ?
                        <div className="right-listing" onClick={handleEventClick}>
                        <p className="heading">My Events</p>
                        {
                            selectedEvents.map(event =><EventTile {...event} source={"selected"}/>)
                        }
                        </div>
                        : ""
                    }

                    

                    
                    </div>

                </div>

    </div>
}