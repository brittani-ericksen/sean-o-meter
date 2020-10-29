import { ACTION_SET_LEVEL } from "../actionTypes";

const initialState = {
    level: ""
};

const levelReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_SET_LEVEL: {
            const { level } = action.payload;
            return {
                ...state,
                level
            };
        }
        default:
            return state;
    }
}   

export default levelReducer;