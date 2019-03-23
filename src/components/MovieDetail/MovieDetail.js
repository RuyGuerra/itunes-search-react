import React from 'react';

const MovieDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div>Movie Detail Works {`ID: ${id}`}</div>
    )
}

export default MovieDetail;