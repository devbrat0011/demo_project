import { useRef } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useAuth } from '../../routes/privateRoute';
import { useNavigate } from 'react-router-dom';

const IdleTimerContainer = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleOnIdle = event => {
        // console.log('user is idle', event)
        // console.log('last active', getLastActiveTime());
        auth.login(null);
        localStorage.clear();
        navigate("/login");
    }

    const handleOnActive = event => {
        // console.log('user is active', event)
        // console.log('time remaining', getRemainingTime())
    }

    const handleOnAction = (e) => {
        //console.log('user did something', e)
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 100 * 18, // 30 mins
        //timeout: 10000, // 10 sec
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })
    return (
        <div></div>
    );
}

export default IdleTimerContainer;