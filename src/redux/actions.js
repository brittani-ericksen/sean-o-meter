import { ACTION_SET_LEVEL } from "./actionTypes";

export const setLevel = (level, index) => {
    return {
        type: ACTION_SET_LEVEL,
        payload: { level, index } 
    }
}
