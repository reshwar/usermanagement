import { NAMECHANGE, REQUEST_POST_BODY, RESPONSE_VIEW_ALL, SELECTED_PROFILE} from './userTypes'

// const initialState = {
//     name: "username",
//     dob:"20-Oct-2000",
//     address :"11-20,medipally,hyderabad",
//     id: 1,
//     img: "http://tachyons.io/img/avatar_1.jpg",
//     description: "description",
//     price: "$20",
//     units:"2",
//     isLoading:false
// }

const initialState = { isLoading:false,
userData :[],
formData:[{}]
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case NAMECHANGE:
            return {
                ...state,
                name: "name change"
            }
        case REQUEST_POST_BODY:
            return{
                ...state,
                isLoading:true    
            } 
        case RESPONSE_VIEW_ALL:
            return Object.assign({}, state, { isFetching: false, userData: action.responseData })    
        case SELECTED_PROFILE:
            return {
                ...state,
                formData:state.userData.filter(user => user.id == action.id)
            }           
        default: return {
            state,   
        }

    }

}


export default userReducer