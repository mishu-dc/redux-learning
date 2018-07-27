import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_DISTRIBUTOR, RECEIVED_DISTRIBUTORS } from './action-types';

export function addDistributor(distributor){
    return{
        type:ADD_DISTRIBUTOR,
        payload:distributor
    }
}

export function receivedDistributors(response){
    return {
        type: RECEIVED_DISTRIBUTORS,
        payload: response
    }
}


export function fetchDistributors(params){
    return function(dispatch){
        dispatch(networkCallStart());

        let url='http://localhost:59821/api/distributors?';

        if(params!==undefined){          
            if(this.isValid(params.code)){
                url += "code=" + params.code + "&";
            }

            if(this.isValid(params.name)){
                url += "name=" + params.name + "&";
            }

            if(this.isValid(params.page)){
                url += "page=" + params.page + "&";;
            }

            if(this.isValid(params.size)){
                url += "size=" + params.size + "&";;
            }
        }  

        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd({'message':'distributors fetched successfully'}))
                    dispatch(receivedDistributors(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}