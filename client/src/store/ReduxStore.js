import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "../redux/reducers";

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore == null) return undefined;
    return JSON.parse(serializedStore);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLD_EXTENSION_COMPOSE || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

//runs anytime theres a change in store its saved to local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
