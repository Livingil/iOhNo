import { initialStateFlags } from './initial-state';

export const reducerFlags = (state = initialStateFlags, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_VALUE_LOADING': {
			return { ...state, loading: payload };
		}
		default:
			return state;
	}
};
