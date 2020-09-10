import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {isLoading:true, errMess:null, dishes:[] }, action)=>{
switch(action.type){
    case ActionTypes.ADD_DISHS:
        return{...state, isLoading:false,errMess:null,dishes:action.payload}
    case ActionTypes.DISH_LOADING:
        return{...state, isLoading:true,errMess:false,dishes:[]}
    case ActionTypes.DISH_FAILED:
        return{...state, isLoading:false, errMess:action.payload,dishes:[]}
    default:
        return state;
}
}