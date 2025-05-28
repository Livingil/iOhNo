import { reducerNotes, reducerError, reducerFlags } from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	notes: reducerNotes,
	error: reducerError,
	flags: reducerFlags,
});

export const store = createStore(reducer, applyMiddleware(thunk));
