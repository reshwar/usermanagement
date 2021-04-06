import React from 'react'
import { connect } from 'react-redux';
import UserForm from './UserForm';
function UserEdit(props) {
    return (
        <div>
             <UserForm person={props.person}></UserForm>
        </div>
    )
}

const mapStateToProps = state => {

    return {
      person: state.userReducer.formData[0]
    }
  }

export default connect(mapStateToProps)(UserEdit)
