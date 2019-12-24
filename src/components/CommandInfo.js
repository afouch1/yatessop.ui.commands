import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    content: {
        backgroundColor: 'red',
        width: 'calc(100% - 350px)',
        height: '100px',
        right: '0',
        position: 'absolute'
    }
}));

export default function CommandInfo(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>

            </main>
        </div>
    )
}