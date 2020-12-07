
//import state from 'react-redux'

const INITIAL_STATE = {
    textMatrix: null,
    textDictionary: null,
    textStore: [],//<!--TODO: SYNC WORD STORE TO STEP TWO-->
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

        case "SET_TEXT_STORE":

            let id = action.payload;
            let tempTextStore = state.textStore;
            if (tempTextStore.includes(id)) {
                tempTextStore = tempTextStore.filter(val => val != id)
            }
            else {
                tempTextStore.push(id)
            }
            return {
                ...state,
                textStore: tempTextStore
            };
            break;

        default:
            break;
    }

    return state;

}

export default Reducer;