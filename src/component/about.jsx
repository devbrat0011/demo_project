import React, { useState } from 'react';

const countries = [
    { name: "India", value: "IN", cities: ["Lucknow", "Delhi"] },
    { name: "Russia", value: "RS", cities: ["Moscow", "Kurgan"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chattogram"] }
];

const About=()=> {
    //populate dropdowns based on dropdowns
    const [value, setValue] = useState("IN");
    const [cities, setCities] = useState([]);
    const ddlChange = (e) => {
        setValue(e.target.value);
        const selectedCountry = countries.filter(x => x.value == e.target.value)[0].cities;
        setCities(selectedCountry);
    }
    return (
        //populate dropdowns based on dropdowns
        <>
            <select onChange={ddlChange}>
                {countries.map(item => {
                    return <option value={item.value}>{item.name}</option>;
                })}
            </select>

            {cities && cities.length > 0 &&
                <select>
                    {cities.map(val => {
                        return <option value={val}>{val}</option>;
                    })}
                </select>
            }
        </>
    );
}

export default About;