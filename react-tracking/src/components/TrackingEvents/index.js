import React, {Fragment} from "react";

function TrackingEvents({events}) {
    if(!events || events.length === 0) return  null;

    return (
        <Fragment>
            <h1>Tracking Events</h1>
            <ul className='list-group'>
                {events.map(item => {
                    return (
                        <li key={item.descricao} className='list-group-item'>
                            <span>{item.data} {item.hora}</span>
                            <span>{item.descricao}</span>
                            <span>{item.cidade}/{item.UF}</span>

                        </li>)
                    })}
            </ul>
        </Fragment>

    )
}

export default  TrackingEvents;
