import React from 'react'
import useGetTableData from '../../effects/useGetTableData';
import { getTitles } from '../../utils';
import Table from '../table/Table';
import Filterer from '../utils/Filterer';

//css
import './Clients.css';

function Clients() {
    const tableData = useGetTableData("/static/dummyData/clients.json");

    const titles = getTitles(tableData);
    return (
        <div className="main-content">
        <main>
             <h2 className="main-title client-title">Clients</h2> 
             <Filterer items={titles ? titles : []}/>
             <div className="client-table">
                  <Table 
                tableTitles={titles ? titles : []} 
                tableBody={tableData}
            />
             </div>
           
        </main>
          
        </div>
    )
}

export default Clients
