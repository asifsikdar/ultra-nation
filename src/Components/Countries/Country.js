import React from 'react';

const Country = (props) => {
    const { name, flag, population, region } = props.country;
    const handleButton = props.handleButton;
    return (
        <div>
            <h1>This is {name}</h1>
            <img style={{ height:"70px" }} src={flag} alt="" srcset="" />
            <h3>Population: {population}</h3>
            <p><small>Region: {region}</small></p>
            <button onClick={()=>handleButton(props.country)}>Add Me</button>
        </div>
    );
};

export default Country;