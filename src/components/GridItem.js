import React from "react";

export default function GridItem(props) {
    const gridItem = {
        height: '100%',
        width: '100%',
        borderBottom: '1px solid #aaa',
        display: 'flex',
        flexDirection: 'column',
        JustifyContent: 'center',
        color: '#333',
        gridColumn: props.Column,
        gridRow: props.Row,
        textAlign: props.TextAlign
    }

    return (
        <div style={gridItem}>
            <span style={{padding: '5px', paddingTop: '15px', verticalAlign: 'top'}}>{props.children}</span>
        </div>
    )
}