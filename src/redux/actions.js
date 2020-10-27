import { ACTION_SET_LEVEL } from "./actionTypes";

export const setLevel = level => {
    return {
        type: ACTION_SET_LEVEL,
        payload: { level } 
    }
}