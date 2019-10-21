import React from 'react';

const NotesForm = (props) => { 
    
    return(
        <div>
            <form>
                <input type="text" placeholder="input notes" id="notesinput" onChange={props.method} />
            </form>
        </div>
    )
    
}

export default NotesForm;
