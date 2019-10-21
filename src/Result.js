import React from 'react';

const Result = ({chords}) => {

    let items = [];
    let key = 1;
    let spanStyle = {
        margin: '2px'
    }
    if(chords){
        chords.forEach((chord) => {
            items.push(<span key={key} style={spanStyle}>{chord}</span>)
            key++;
        }) 
    }
    
    return(
        <div>
            {items}
        </div>
    )
}

export default Result;