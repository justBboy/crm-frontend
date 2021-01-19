import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useGetFilterValueItems from '../../effects/useGetFilterValueItems';
import { useDispatch, useSelector } from 'react-redux';
import { getData, selectTableData } from '../../slices/tableSlice';


//css
import './Filterer.css';


function Filterer({items}) {
    const tableData = useSelector(selectTableData)
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [filterValue, setFilterValue] = useState('')
    const filterValueItems = useGetFilterValueItems(value);

    useEffect(() => {
        let mounted = true;
        if (mounted){
            let fullTableData = JSON.parse(localStorage.getItem("tableData"));
            if (filterValue && value){
                console.log("full table data -->", fullTableData)
                const newTableData = fullTableData.filter(d => d[value] === filterValue)
                console.log("new table data -->", newTableData)
                dispatch(getData(newTableData))
            }else{
                if (tableData.length !== fullTableData.length){
                    dispatch(getData(fullTableData))
                }
                return
            }
        }
        else{
            return;
        }
        return () => {
            mounted = false
        }
    }, [filterValue, value])
    
    const handleChange = e => {
        setValue(e.target.value)
    }
    console.log(filterValueItems)
    return (
        <>
        <div className="filterer-container">
            <FormControl className="filterer">
                <InputLabel htmlFor="filter select">Filter By</InputLabel>
                <Select value={value} onChange={handleChange}>
                    <MenuItem value="">None</MenuItem>
                    {items.map((m, i) => (
                        <MenuItem key={i} value={m}>{m}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {value && 
                <>
                <div>
                    <h2>=</h2>
                </div>
                <FormControl className="filterer">
                    <InputLabel htmlFor="filter">choose filter</InputLabel>
                    <Select value={filterValue} onChange={e => {setFilterValue(e.target.value)}}>
                        <MenuItem value="">None</MenuItem>
                        {filterValueItems.map((m, i) => (
                            <MenuItem value={m} key={i}>{m}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </>
            }
        </div>
        </>
    )
}

Filterer.propTypes = {
    items: PropTypes.array.isRequired
}

export default Filterer
