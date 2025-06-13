import { reducerNotes, reducerError, reducerFlags, reducerUsers, reducerUser } from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	users: reducerUsers,
	user: reducerUser,
	notes: reducerNotes,
	error: reducerError,
	flags: reducerFlags,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
