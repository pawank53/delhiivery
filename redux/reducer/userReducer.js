import { UPDATE_USER_DETAILS } from "../action/actionTypes"

const initialState={
    id:1,
    name:"Pawan Kumar",
    mobile:9304569744
}

export const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case UPDATE_USER_DETAILS:{
            return {...state, ...action.payload};
        }
        default:{
            return state;
        }
    }
}