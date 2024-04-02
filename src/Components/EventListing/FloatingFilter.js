import { GlobalContext } from "Context";
import { useContext } from "react";
import swimming from "../../assets/img/swimming.svg";
import boxing from "../../assets/img/boxing.svg";
import athletics from "../../assets/img/athletics.svg";
import allTabs from "../../assets/img/allTabs.svg";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const icoMap = {
    "All": allTabs,
    "Swimming": swimming,
    "Boxing": boxing,
    "Athletics": athletics
}


function FloatingFilter () {
    const globalContext = useContext(GlobalContext);
    const navigate = useNavigate();
    const {eventList} = globalContext;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const activeFilter = queryParams.get("cat") || "All";
    const categoryList = eventList.map(event => event.event_category);
    const floatingFilters = [{label: "All", count: eventList.length}];
    categoryList.forEach(cat => {
        const filterIdx = floatingFilters.findIndex(item => item.label === cat);
        if(filterIdx !== -1) {
            floatingFilters[filterIdx].count++;
        } else {
            floatingFilters.push({label: cat, count: 1});
        }
    })


    const handleFilterClick = (e) => {
        try {
            const target = e.target;
            const parentFilter = target.parentElement;
            const filterId = parentFilter?.id || "";

            if(filterId) {
                const path = window.location.pathname;
                navigate(`${path}?cat=${filterId}`);
            }

        } catch (error) {
            console.warn(error);
        }
    }


    return <ul className="floating-filters-wrapper" onClick={handleFilterClick}>
        {
            floatingFilters && floatingFilters.length
            ?
            floatingFilters.map(filter => <li key={filter.label} className={`filter ${activeFilter === filter.label ? "active": ""}`} id={filter.label} >
                <img width="36px" height="36px" src={icoMap[filter.label]} alt={`ico-${filter.label}`} />
                <span className="value">{filter.label}</span>
            </li>)
            : ""
        }
    </ul>

}

export default FloatingFilter;