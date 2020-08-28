export default function MLSizeReducer(state,action){

    // Accepts Index values 0,1,2 that corespond to various ML sizes
    if(action.newML !=null){
        state.MLSize = state.dataML[action.newML]
        
    }

    return{
        ...state,
    };
}