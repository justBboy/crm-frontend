import React from 'react'
import useGetTableData from '../../effects/useGetTableData'
import { getTitles } from '../../utils'
import Table from '../table/Table'
import Filterer from '../utils/Filterer'

//css
import './Note.css'

function Note() {
    const tableData = useGetTableData("/static/dummyData/notes.json");

    const titles = getTitles(tableData);
    return (
        <div className="main-content">
        
        <main>
            <h2 className="main-title note-title">Notes</h2> 
            <Filterer items={titles ? titles : []}/>
        <div className="note-table">
        <Table 
        tableTitles={titles ? titles : []}
        tableBody={tableData}
        />
        </div>
        
        
        </main>
        
        </div>
        )
    }
    
    export default Note
    