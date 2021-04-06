import React, { Component, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllCustomersData } from '../Redux/userActions'

const Welcome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCustomersData())
    }, [])
        return (
            <div>
                <h1>Welcome to User Management System</h1>
            </div>
        )
}

export default Welcome
