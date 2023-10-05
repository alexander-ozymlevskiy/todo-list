import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { todoReducer } from "./store/TodoList";
import { userReducer } from "./store/UserList";
import App from "./App";
import thunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todo: todoReducer,
  users: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();

