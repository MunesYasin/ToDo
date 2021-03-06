import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
// import './list.scss';
import Auth from '../auth/auth';
export default function List(props) {
    const { item, toggleComplete, toggleDelete } = props;
    return (
        <>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h5 data-testid='todoHeader'>{item.text}</h5>
                <p>Assigned to: {item.assignee}</p>
                <p>Difficulty: {item.difficulty}</p>
                <Auth capability='update'>
                    Completed: <Button class="bp3-button" onClick={() => toggleComplete(item.id)}>{item.complete.toString()}</Button>
                </Auth>
                <Auth capability='delete'>
                    <br/><Button class="bp3-button" onClick={() => toggleDelete(item.id)}>Clear</Button>
                </Auth>
            </Card>
            {/* <hr /> */}
            <br />
        </>
    )
}