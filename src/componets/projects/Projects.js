import React from 'react'
import useGetTableData from '../../effects/useGetTableData'
import { getTitles } from '../../utils'
import Table from '../table/Table'
import Filterer from '../utils/Filterer'


//css
import './Projects.css'

function Projects() {
    const tableData = useGetTableData("/static/dummyData/projects.json");

    const titles = getTitles(tableData)
    return (
        <div className="main-content">
            <main>
                   <h2 className="main-title project-title">Projects</h2> 
                   <Filterer items={titles ? titles : []}/>
                   <div className="project-table">
                       <Table 
            tableTitles={titles ? titles : []} 
            tableBody={tableData}
           />
                   </div>
           
            </main>
        
        </div>
    )
}

export default Projects
