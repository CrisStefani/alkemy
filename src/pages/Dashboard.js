import React from "react";
import {grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Navbar from "../components/Navbar";
import 'fontsource-roboto'

const useStyles = makeStyles (()=>({
    root:{
        flexGrow:1
    }
}));

function Dashboard(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <grid container spacing={3}>
                <grid item xs={12}>
                    <Navbar/>
                </grid>

            </grid>
            
        </div>
    );
}

export default Dashboard;