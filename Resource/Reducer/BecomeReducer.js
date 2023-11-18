import {BecomeConstant} from '../Content/BecomeContent'

const initialState={
    BecomeOur:{}
}

export function BecomeOurReducer(state = initialState,action){
    switch(action.type){
        case BecomeConstant.GET_BECOME_REQUEST:
            return state;

        case BecomeConstant.GET_BECOME_SUCCESS:
            return {
                ...state,
                BecomeOur:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case BecomeConstant.GET_BECOME_FAILURE:
                return state;

        default:
            return state
    }
}