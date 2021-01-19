import React, { useEffect, useState } from 'react';

//css
import './Notifications.css';



export default function Notifications({notifications}){
    const [items, setItems] = useState([])
    useEffect(() => {
        let mounted = true;
        if(mounted){
            setItems(notifications)
        }
        else{
            return
        }

        return () => {
            mounted = false
        }
    })
    return (
          <>
            {items.map((n, i) => (
                <NotificationElm key={i} title={n.title} body={n.body} />
            ))}
          </> 
    )
}


function NotificationElm({title, body}){
    return (
        <div className="notification-container">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )

}

