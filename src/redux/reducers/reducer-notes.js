import { initialStateNotes } from './initial-state';

export const reducerNotes = (state = initialStateNotes, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_VALUE_NOTES': {
			return { ...state, notes: payload };
		}
		case 'SET_VALUE_NOTE': {
			return { ...state, note: payload };
		}

		default:
			return state;
	}
};
