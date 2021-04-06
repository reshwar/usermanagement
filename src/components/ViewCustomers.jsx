import React, { Component, useCallback, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { getAllCustomersData, getSelectedProfile } from '../Redux/userActions'
import { connect, useDispatch } from 'react-redux'
import axios from 'react'
import { useHistory } from 'react-router';
const ViewCustomers = (props) => {
   
    let history = useHistory();
    const dispatch = useDispatch();
    const navigate = (id) =>{
        dispatch(getSelectedProfile(id))
        history.push('/Profile')
    }

    return (
        <div>
            <h1>view customers</h1>
            <div className="d-flex justify-content-around">
                {props.userDataArray.map((person, index) => (
                    <ProfileCard buttonName="Go To Profile"  navigate={navigate} key={index} id={person.id} name={person.name} dob={person.dob} address={person.address} navigateTo="/Profile"></ProfileCard>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        userDataArray: state.userReducer.userData,
        name: state.userReducer.name,
        dob: state.userReducer.dob,
        address: state.userReducer.address
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(getAllCustomersData)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCustomers)

