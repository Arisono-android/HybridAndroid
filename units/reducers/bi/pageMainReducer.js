import * as T from "../../actions/actionTypes";

const initialState = {
    btnText: '',
};

const pageMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case T.CHANGE_BTN_TEXT:
            return {
                ...state,
                btnText: action.payload
            };
        default:
            return state;
    }
};

export default pageMainReducer;