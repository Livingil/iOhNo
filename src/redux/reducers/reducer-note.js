import { ACTION_TYPE } from '../actions';
import { initialStateNote } from './initial-state';

export const reducerNote = (state = initialStateNote, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_NOTE: {
			return { ...state, ...payload };
		}

		default:
			return state;
	}
};
