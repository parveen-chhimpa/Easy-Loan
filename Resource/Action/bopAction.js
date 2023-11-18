
import {BecomeConstant} from '../Content/BecomeContent'
import {BecomeService} from '../Service/BecomeService'
export const BOPAction = {
    BecomeAction
}

function BecomeAction(data){
    return dispatch=>{
        dispatch(request());
        return BecomeService.BecomeOurService(data).then(
            response =>{
                dispatch(success(response));
                return Promise.resolve(response);
            },
            error =>{
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request(){
        return {type:BecomeConstant.GET_BECOME_REQUEST}
    }
    function success(data){
        return {type:BecomeConstant.GET_BECOME_SUCCESS,data}
    }
    function failure(error){
      return {type:BecomeConstant.GET_BECOME_FAILURE,error}
    }
}