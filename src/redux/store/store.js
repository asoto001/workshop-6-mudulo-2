import { configureStore } from "@reduxjs/toolkit";
// import { loadingReducer } from "../reducers/loadingReducer";
// import { userReducer } from "../reducers/userReducer";

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addBurger":
            /** Se agregan nuevos elementos al arreglo
             * OJO: la acción debe contener una propiedad 'price'
             * que contiene información
             */
            const newState = state.concat([action.price]);
            return newState;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
