import { UPDATE_USER_DETAILS } from "./actionTypes";

export const updatUser=userDetails=>({
    type:UPDATE_USER_DETAILS,
    payload:userDetails
})
