import { ACTION_TYPE } from '../actions';
import { initialStateError } from './initial-state';

export const reducerError = (state = initialStateError, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.ERROR: {
			return { ...state, error: payload };
		}
		default:
			return state;
	}
};
