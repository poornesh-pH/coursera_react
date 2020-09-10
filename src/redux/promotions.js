import * as ActionTypes from './ActionTypes'

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
},action) =>{
switch(action.type){
    case ActionTypes.ADD_PROMS:
        return{...state, isLoading:false,errMess:null,promotions:action.payload}
    case ActionTypes.PROMO_LOADING:
        return{...state, isLoading:true,errMess:false,promotions:[]}
    case ActionTypes.PROMO_FAILED:
        return{...state, isLoading:false, errMess:action.payload,promotions:[]}
    default :
    return state;
}
}