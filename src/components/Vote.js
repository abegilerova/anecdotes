import React from 'react';

const Vote = (props) => {


    return (
        <div>
            <p>has {props.numberOfVotes} votes</p>
            <button onClick={props.handleVote}>vote</button>

        </div>
    )
}

export default Vote;