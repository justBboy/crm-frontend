import { Button } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

//css
import './QuickAdd.css'

function QuickAdd({actions}) {
   return (
       <>
        {actions.map((a, i) => (
            <QuickAddElm key={i} Icon={a.Icon} name={a.name} url={a.url}/>
        ))}
       </>
   ) 
}

QuickAdd.propTypes = {
    actions: PropTypes.array
}


function QuickAddElm({Icon, name, url}){
    const history = useHistory();
    const handleClick = () => {
        history.push(url);
        setTimeout(() => {
            document.querySelector(".table-content .MuiButtonBase-root").click();
        }, 1000)
    }
    return (
            <div>
            <Button className="add-btn" onClick={handleClick} variant="contained">
                <Icon />
                <span>{name}</span>
            </Button> 
        </div>
    )
}

QuickAddElm.propTypes = {
    Icon: PropTypes.element
}

export default QuickAdd
