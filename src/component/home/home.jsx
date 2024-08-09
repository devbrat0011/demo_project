import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../../app/features/user/userSlice';
import './home.css';
import img from './../../images/AutoPayFailCA.png';
import DinerClub from './../../images/DinerClub.svg';

const Home = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <>
            <h2>This is Home Page</h2>
            {/* <img src={img} width={300} height={200}/>
            <img src={DinerClub} width={300} height={200}/> */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                    </tr>
                </thead>
                {user && user.users && user.users.length > 0 &&
                    <tbody>
                        {user.users.map(x =>
                            <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.phone}</td>
                                <td>{x.website}</td>
                            </tr>
                        )}
                    </tbody>
                }
            </table>
        </>
    );
}

export default Home;