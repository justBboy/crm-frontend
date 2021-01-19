import { Button, IconButton, TextareaAutosize, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getData,  selectDateFields,  selectTextAreaFields } from '../../slices/tableSlice';


//css
import './ActionForm.css';

function ActionForm({titles, id, handleClose}) {
    const textAreaFields = useSelector(selectTextAreaFields);
    const dateFields = useSelector(selectDateFields);
    const [fields, setFields] = useState([])
    const [currentField, setCurrentField] = useState(null)
    const [fieldState, setFieldState] = useState(null);
    const [newFieldValues, setNewFieldValues] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        let mounted = true;
        if(mounted){
            setFields(titles);
            setCurrentField(id);

            if(currentField){
                const fullTableD = JSON.parse(localStorage.getItem("tableData"));
                let f = fullTableD.filter(tb => tb.id === currentField)[0];
                setFieldState(f);
            }
        }
        else{
            return
        }
        return () => {
            mounted = false
        }
    }, [fields, currentField])

    function handleClick(){
        console.log("handleclick", currentField)
        if(currentField){
           const fullTableD = JSON.parse(localStorage.getItem("tableData"));
           let indx;
           fullTableD.forEach((tb, i) => {
               if(tb.id === currentField){
                   indx = i
                   console.log(tb)
               }
           })
           if(indx === 0 || indx){
               fullTableD[indx] = fieldState;
               localStorage.setItem("tableData", JSON.stringify(fullTableD));
               dispatch(getData(fullTableD))
               handleClose();
           }
        }else{
            const fullTableD = JSON.parse(localStorage.getItem("tableData"))
            let id = fullTableD.length + Math.ceil(Math.random() * 10000);
            newFieldValues.id = id;
            let newField = {};
            newField.id = newFieldValues.id;
            titles.forEach(t => {
                newField[t] = newFieldValues[t]
            })
            fullTableD.push(newField);
            localStorage.setItem("tableData", JSON.stringify(fullTableD))
            dispatch(getData(fullTableD))
            handleClose()
        }
    }

    return (
        <div className="modal">
            <IconButton className="close-btn" onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <form className="modal-form">
                {fields.map(t => {
                    if (textAreaFields.includes(t)){
                        return (
                            <TextareaAutosize key={t} rowsMin={6} placeholder={`enter ${t}`} label={t} value={fieldState ? fieldState[t] : newFieldValues[t] ? newFieldValues[t] : ""} onChange={fieldState ? (e) => {setFieldState(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })} : (e) => setNewFieldValues(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })}  />
                        )
                    }else if(dateFields.includes(t)){
                        return (<TextField key={t} type="date" label={t} value={fieldState ? fieldState[t] : newFieldValues[t] ? newFieldValues[t] : ""} onChange={fieldState ? (e) => {setFieldState(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })} : (e) => setNewFieldValues(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })} />)
                    }
                    else{
                        return (
                            <TextField key={t} label={t} value={fieldState ? fieldState[t] : newFieldValues[t] ? newFieldValues[t] : ""} onChange={fieldState ? (e) => {setFieldState(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })} : (e) => setNewFieldValues(prevState => {
                                return {...prevState, [t]: e.target.value}
                            })} />
                        )
                    }
                })}
                <Button variant="contained" onClick={handleClick} className="btn-submit">{currentField ? 'Update' : 'Create'}</Button> 
            </form>
        </div>
    )
}

export default ActionForm
