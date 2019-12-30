import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Drawer, TextField} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const navWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    nav: {
        width: navWidth,
        flexShrink: 0
    },
    navPaper: {
        width: navWidth,
        background: '#eee'
    },
    searchBar: {
        width: "95%"
    }
}));


const CommandNav = props => {
    const classes = useStyles();

    const [state, setState] = useState({
        filter: '',
        // selectedCommand: '',
    });

    let filteredCommands = state.filter ?
        [...props.commands].filter(cmd => {
            return cmd.keywords.some(keyword =>
                keyword.toUpperCase().includes(state.filter.toUpperCase()))
                || cmd.commandName.includes(state.filter.toUpperCase())
        }) :
        props.commands;

    let searchChanged = (event) => {
        setState({
            filter: event.target.value,
            // selectedCommand: state.selectedCommand
        })
    };

    // let commandSelected = (event) => {
    //     setState({
    //         filter: state.filter,
    //         selectedCommand: event.target.textContent
    //     });
    // };

    filteredCommands = filteredCommands.map(cmd => (
        <ListItem button key={cmd.commandName}
                  selected={cmd.commandName === props.selectedCommand}
                  onClick={props.selectionChanged}
        >
            <ListItemText primary={cmd.commandName} />
        </ListItem>
    ));

    return (
            <Drawer
                className={classes.nav}
                variant="permanent"
                classes={{
                    paper: classes.navPaper,
                }}
                anchor="left"
            >
                <List>
                    <TextField id="standard-basic" label="Search" variant="standard" className={classes.searchBar}
                        value={state.filter} onChange={searchChanged}
                    />
                    {filteredCommands}
                </List>
            </Drawer>
    )
};

export default CommandNav;