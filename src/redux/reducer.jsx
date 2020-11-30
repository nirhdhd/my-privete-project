
//import state from 'react-redux'

const INITIAL_STATE = {
    textMatrix: null,
    textDictionary: null,
    textStore: null,//<!--TODO: SYNC WORD STORE TO STEP TWO-->
    CurrentUser: null
}

const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_TEXT_TO_MATRIX":
            return {
                ...state,
                textMatrix: action.payload
            };
            break;
        case "SET_TEXT_TO_DICTIONARY":
            return {
                ...state,
                textDictionary: action.payload
            };
            break;

        case "SET_WORDS_STORE":
            return {
                ...state,
                textDictionary: action.payload
            };
            break;

        default:
            break;
    }

    return state;

}

export default Reducer;