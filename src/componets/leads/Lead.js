import React from 'react'
import useGetTableData from '../../effects/useGetTableData';
import { getTitles } from '../../utils';
import Table from '../table/Table';
import Filterer from '../utils/Filterer';

//css
import './Lead.css'

function Lead() {
    const tableData = useGetTableData("/static/dummyData/leads.json");

    const titles = getTitles(tableData);
    return (
        <div className="main-content">
            <main>
                  <h2 className="main-title leads-title">Leads</h2>
                  <Filterer items={titles ? titles : []}/>
                  <div className="leads-table">
                      <Table 
                tableTitles={titles ? titles : []}
                tableBody={tableData}
            />
                  </div>
            
            </main>
          
        </div>
    )
}

export default Lead
