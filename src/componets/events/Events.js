import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from '../table/Table';
import Filterer from '../utils/Filterer';
import useGetTableData from '../../effects/useGetTableData';
import { getTitles } from '../../utils';
//css
import './Events.css';

function Events() {
    const tableData = useGetTableData("/static/dummyData/events.json");

    const titles = getTitles(tableData)
    return (
        <div className="main-content">
            <main>
                  <h2 className="main-title event-title">Events</h2>
                  <Filterer items={titles ? titles : []}/>
                  <div className="event-table">
                        <Table 
                             tableTitles={titles ? titles : []}
                              tableBody={tableData}  
            /> 
                  </div>
           
            </main>
          
        </div>
    )
}

export default Events
