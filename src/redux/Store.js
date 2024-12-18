import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { useSelector, useDispatch, Provider, connect} from 'react-redux';
import rootReducer from './reduces/combine';
import { logging } from "./middlewares/logging";


const Store = createStore(rootReducer, applyMiddleware(logging));

export default Store;