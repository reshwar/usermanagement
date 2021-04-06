import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { getSelectedProfile } from '../Redux/userActions';
import ProfileCard from './ProfileCard'

const Profile = (props) => {
    let history = useHistory();

    function navigate(){
        history.push('/UserEdit')
    }
    return (
        <div>
            <div>
                <h1>profile page</h1>
            </div>
            <ProfileCard buttonName="Edit Profile" navigate= {navigate} name={props.person.name} dob={props.person.dob} address={props.person.address}  />
        </div>
    )
}


const mapStateToProps = state => {

    return {
        person: state.userReducer.formData[0]
    }
}

export default connect(mapStateToProps)(Profile)
