export const initialState =  {
    user: null,
}

export const actions = {
    SET_USER: 'SET_USER',
}

const reducer = (state, action) => {
    console.log(action.type+ " "+ action.payload);
    switch(action.type){
        case actions.SET_USER:
            return{
                ...state,
                user: action.payload
            };
        default: return state;
    }
}

export default reducer;

