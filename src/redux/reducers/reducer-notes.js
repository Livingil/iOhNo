import { ACTION_TYPE } from '../actions';
import { initialStateNotes } from './initial-state';

export const reducerNotes = (state = initialStateNotes, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_VALUE_NOTES: {
			return { ...state, notes: payload };
		}
		case ACTION_TYPE.SET_VALUE_NOTE: {
			return { ...state, note: payload };
		}
		case ACTION_TYPE.SET_VALUE_SEARCH_RESULT: {
			return { ...state, searchResult: payload };
		}

		default:
			return state;
	}
};
