import { reducerFlags, reducerLoadUser, reducerNote, reducerNotes, reducerUser } from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	note: reducerNote,
	notes: reducerNotes,
	user: reducerUser,
	loadUser: reducerLoadUser,
	flags: reducerFlags,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
