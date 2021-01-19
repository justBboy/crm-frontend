import React from 'react'
import useGetTableData from '../../effects/useGetTableData'
import { getTitles } from '../../utils'
import Table from '../table/Table'
import Filterer from '../utils/Filterer'


//css
import './Contacts.css'

function Contacts() {
    const tableData = useGetTableData("/static/dummyData/contacts.json");

    const titles = getTitles(tableData)
    return (
        <div className="main-content">
            <main>
                  <h2 className="main-title contact-title">Contacts</h2> 
                  <Filterer items={titles ? titles : []}/>
                  <div className="contact-table">
                      <Table
            tableTitles={titles ? titles : []}
            tableBody={tableData}
           />
                  </div>
           
            </main>
         
        </div>
    )
}

export default Contacts
