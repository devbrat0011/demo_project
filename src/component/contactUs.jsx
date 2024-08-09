import React, { useState } from 'react';

const options = ["cricket", "football", "hockey"];
const days = ["weekend", "weekdays"];

const ContactUs = () => {
    const [option, setOption] = useState("");
    const [day, setDays] = useState("");

    const changeRadio = (val) => {
        setOption(val);
    }

    const changeRadioDays = (val) => {
        setDays(val);
    }

    return (
        <>
            <b>Game: </b>
            {options.map(val => {
                return <><input type="radio" onChange={() => changeRadio(val)} id={val} name="game" value={val} /><label for="html">{val}</label></>;
            })}
            <br />
            <b style={{marginLeft:"-33px"}}>Days: </b>
            {days.map(val => {
                return <><input onChange={() => changeRadioDays(val)} type="radio" id={val} name="days" value={val} /><label for="html">{val}</label></>;
            })}

            <br /><br /><br /><span>{option + (day ? "  -->  " : "")}</span><span>{day}</span>
        </>
    );
}

export default ContactUs;