export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//react context api
//state is referring to the state of the data layer
//action is whatever we are dispatching into the data layer
const reducer = (state, action) => {
    console.log(action);

    //listen to the dispatch action
    switch(action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
            default:
                return state;
    }
};

export default reducer