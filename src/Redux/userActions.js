import { NAMECHANGE, SENDUSERDATA, REQUEST_POST_BODY, RESPONSE_VIEW_ALL, SELECTED_PROFILE} from './userTypes'
import axios from 'axios'
const userNameChange = () => {
    return {
        type: NAMECHANGE
    }
}

const signupUserData = () => {
    return {
        type: SENDUSERDATA
    }
}

const viewCustomersRequest = (reqData) => {
    return {
        type: REQUEST_POST_BODY,
        reqData
    };
}

const viewCustomersResponse = (responseData) => {
    return {
        type: RESPONSE_VIEW_ALL,
        responseData
    };
}

const getSelectedProfile = (id) =>{
    return{
        type:SELECTED_PROFILE,
        id
    }
}

const signupUserToApi = (userSignupData) => {
    //make api call
    console.log(userSignupData)
}

const getAllCustomersData = () => {
    //make api call
    return (dispatch) => {
         dispatch(viewCustomersRequest({"data":"UserRequestData"}))
        axios.get('/AllCustomerDetails.json')
            .then(response => {
                console.log("success",response)
                const users = response.data.data
                dispatch(viewCustomersResponse(users))
            })
            .catch(error => {
                console.log("error",error)
                const errorMSG = error.message
            }
            )
    }
}

export { userNameChange, signupUserData, signupUserToApi, getAllCustomersData, viewCustomersRequest, getSelectedProfile }


