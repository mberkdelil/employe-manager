import { data } from "../data";

const initialState = {
    employe: data
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, employe: [...state.employe, action.payload]
            }

        case "DELETE":
            return {
                ...state, employe: state.employe.filter(emp => emp.id !== action.payload)
            }
        case "EDIT":
            return {
                ...state, employe: state.employe.map(emp => emp.id === action.payload.id ? action.payload : emp)
            }

        case "SEARCH":
            if (action.payload !== "") {
                return {
                    ...state, employe: state.employe.filter(emp => {
                        return emp.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                    })
                }
            } else {
                return state;
            }

        default:
            return state;
    }
}