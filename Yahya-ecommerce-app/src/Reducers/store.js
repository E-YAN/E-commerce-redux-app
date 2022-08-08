import cartReducer from "./Reducers/cartReducer";
import { createStore } from "redux";

// createStore creates a Redux store that holds the complete app state.
// There should only be a single store in your app.
const store = createStore(cartReducer);

export default store;
