import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Spinner = ({path = "login"}) => {
    const [count, serCount] = useState(5);
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            serCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&  navigate(`/${path}`);
        return () => clearInterval(interval)
    }, [count, navigate, path])
    return (
        <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div
                className="spinner-border position-relative txt-primary"
                role="status"
            ></div>
        </div>
    )
}

export default Spinner