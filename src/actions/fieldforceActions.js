import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_FIELDFORCE, RECEIVED_FIELDFORCES } from './action-types';

export function addFieldforce(distributor){
    return{
        type:ADD_FIELDFORCE,
        payload:distributor
    }
}

export function receivedFieldforces(response){
    return {
        type: RECEIVED_FIELDFORCES,
        payload: response
    }
}


export function fetchFieldforces(params){
    return function(dispatch){
        dispatch(networkCallStart());

        let url='http://localhost:59821/api/fieldforces?';

        if(params!==undefined){          
            if(this.isValid(params.code)){
                url += "code=" + params.code + "&";
            }

            if(this.isValid(params.name)){
                url += "name=" + params.name + "&";
            }

            if(this.isValid(params.distributorId)){
                url += "distributorId=" + params.distributorId + "&";
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
                dispatch(networkCallEnd({'message':'fieldforces fetched successfully'}))
                    dispatch(receivedFieldforces(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}