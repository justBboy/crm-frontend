import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';


//css
import './Popper.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function PopperContainer({children, trig}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <span aria-describedby={id} type="button" onClick={handleClick}>
          {trig}
      </span>
      <Popper id={id} open={open} placement="bottom-end"  className="popper" anchorEl={anchorEl}>
        <div className={classes.paper}>
            {children}
        </div>
      </Popper>
    </div>
  );
}