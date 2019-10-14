import React from 'react';

const NextAnecdote = (props) => {


    return (
        <div>
            <button onClick={props.handleClick}>next anecdote</button>
        </div>
    )
}

export default NextAnecdote;