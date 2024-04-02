import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { formatDate } from "../../util";
import "./index.css"

function EventTile(props) {
    const {id, event_name, event_category, start_time, end_time, selected, source} = props;
    const startDate =  formatDate(start_time);
    const endDate = formatDate(end_time)
    const ctaTxt = source === "selected" ? "Remove": "Cancel"
    const disabledView = source !== "selected" && selected;
    return (
    <Card id={id} className={disabledView ? "disabled": ""} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://fakeimg.pl/286x150" />
        <Card.Body>
        <Card.Title>{event_name}</Card.Title>
        <Card.Text>
            {event_category}
        </Card.Text>
        <Card.Text>
            {startDate} - {endDate}
        </Card.Text>
        <Button id={selected ? "cancelBtn": "addBtn"} variant="outline-secondary">{selected ? ctaTxt : "Participate"}</Button>
        </Card.Body>
    </Card>
    );
}

export default EventTile;