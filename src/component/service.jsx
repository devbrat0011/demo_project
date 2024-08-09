import React, { useState } from 'react';

const arr = ["play cricket", "play video game", "read book"];

const Service = () => {

    // make a list and Delete button from array afterthat checkbox should come
    const [list, setList] = useState(arr);
    const [cricket, setCricket] = useState(false);
    const [video, setVideo] = useState(false);
    const [book, setReadBook] = useState(false);

    const removeRow = (val) => {
        const newList = list.filter(x => x !== val);
        setList(newList);
    }

    const changeValue = (e, val) => {
        if (val == "play cricket") {
            setCricket(e.target.checked);
        }
        if (val == "play video game") {
            setVideo(e.target.checked);
        }
        if (val == "read book") {
            setReadBook(e.target.checked);
        }
    }
    return (
        // make a list and Delete button from array afterthat checkbox should come
        <>
            <ul style={{ listStyleType: "none" }}>
                {list.map(item => {
                    return (
                        <>
                            <li value={item}>
                                <input type="checkbox" value={item}
                                    checked={item == "play cricket" ? cricket : (item == "play video game" ? video : book)}
                                    onChange={(event) => changeValue(event, item)} />{item}
                                {(cricket && item == "play cricket") &&
                                    <input type="button" value="Delete" onClick={() => removeRow(item)} />
                                }
                                {(video && item == "play video game") &&
                                    <input type="button" value="Delete" onClick={() => removeRow(item)} />
                                }
                                {(book && item == "read book") &&
                                    <input type="button" value="Delete" onClick={() => removeRow(item)} />
                                }
                            </li>
                        </>
                    );
                })}
            </ul>
        </>

    );
}

export default Service;