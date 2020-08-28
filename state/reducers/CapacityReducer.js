import {_storeData} from "../AsyncStorage/storeData"

export default function CapacityReducer(state,action){

    if(action.infoType=='StoreData'){
        const newCapacity = action.capacity
        if(newCapacity){
            console.log("000000000capacity is",newCapacity)
            state.Capacity = newCapacity
            _storeData('capacity',newCapacity)
        }


    }

    if(action.infoType=="RetrieveData"){
        state.Capacity = action.capacity
    }


    return{
        ...state,
    };
}