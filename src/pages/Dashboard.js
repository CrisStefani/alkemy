import React from "react";
import {grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles (()=>({
    root:{
        flexGrow:1
    }
}));

function Dashboard(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <grid item xs={12}>

            </grid>
        </div>
    );
}

export default Dashboard;