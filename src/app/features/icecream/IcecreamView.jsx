import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
export const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Icecream</button>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch(restocked(parseInt(value)))}>Restocked Icecreams</button>
        </div>
    )
}