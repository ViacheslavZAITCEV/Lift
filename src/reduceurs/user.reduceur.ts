import {ReducerActionType} from './types'
export default function userReducer(
    user = {
        token: "vide"
    }, action : ReducerActionType) {
    var newUser;

    if (action.type === 'token') {
        newUser = action.user;
        return newUser;


    } else if (action.type === 'initialisation') {
        newUser = {
            token: "vide",
        };
        return newUser;

    } else {
        return user;
    }
}