import React from 'react'
import { colorsArray } from '../../constants/Colors';
import { randomArrayIndex } from '../../utils';

import "./Card.css";

function Card({title, data}) {
    return (
        <div className="cardContainer" style={{backgroundColor: randomArrayIndex(colorsArray)}}>
            <div className="card__header" style={{borderBottom: `2px solid ${randomArrayIndex(colorsArray)}`}} >
                <h3>{title}</h3>
            </div>
            <div className="card__body">
                {data.map((d, i) => (
                <div key={i} className="card__bodyItem">
                    <p>{d.title}</p>
                    {d.date &&
                    <>
                    <h2> - </h2>
                    <p>{d.date}</p>
                    </>
                    }
                </div>
                ))}
            </div>
        </div>
    )
}

export default Card
