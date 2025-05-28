import { initialStateError } from './initial-state';

export const reducerError = (state = initialStateError, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ERROR': {
			return { ...state, error: payload };
		}
		default:
			return state;
	}
};
