import React from "react";
import {makeStyles} from "@material-ui/core";
import GridItem from "./GridItem";

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% - 300px)',
        position: 'absolute',
        right: '0',
        height: '600px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    },
    half: {
        width: '47.5%',
        height: '96%',
    },
    commandContainer: {
        display: 'grid',
        gridTemplateColumns: '200px auto',
        gridTemplateRows: '50px 100px auto',
        alignItems: 'start',
        justifyItems: 'center'
    }
}));

export default function CommandInfo(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.half + ' ' + classes.commandContainer} style={{backgroundColor: 'white', display: 'grid'}}>
                <GridItem Column="1" Row="1" TextAlign="right" >Command Name: </GridItem>
                <GridItem Column="2" Row="1" TextAlign="left" >{props.command?.commandName}</GridItem>
                <GridItem Column="1" Row="2" TextAlign="right" >Keywords: </GridItem>
                <GridItem Column="2" Row="2" TextAlign="left" >{props.command?.keywords.join(', ')}</GridItem>
                <GridItem Column="1" Row="3" TextAlign="right" >Description: </GridItem>
                <GridItem Column="2" Row="3" TextAlign="left" >{props.command?.description}</GridItem>
            </div>
            <div className={classes.half} style={{border: '2px solid #aaa'}}>
                {props.command?.img ?
                    <img src={`data:image/${props.command.img.fileExtension};base64,${props.command.img.image}`} style={{width: '100%', height: '100%'}} /> :
                    'some text'
                }
            </div>
        </div>
    )
}