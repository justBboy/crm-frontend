import React from 'react'
import useGetTableData from '../../effects/useGetTableData';
import { getTitles } from '../../utils';
import Table from '../table/Table';
import Filterer from '../utils/Filterer';

// css
import './Tasks.css'

function Tasks() {
    const tableData = useGetTableData("/static/dummyData/tasks.json");

    const titles = getTitles(tableData);
    return (
        <div className="main-content">
            <main>
                <h2 className="main-title task-title">Tasks</h2> 
                <Filterer items={titles ? titles : []} />
                <div className="task-table">
                     <Table 
           tableTitles={titles ? titles : []}
           tableBody={tableData}
           />
                </div>
            </main>
           
        </div>
    )
}

export default Tasks
