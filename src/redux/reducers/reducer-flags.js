import { ACTION_TYPE } from '../actions';
import { initialStateFlags } from './initial-state';

export const reducerFlags = (state = initialStateFlags, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_VALUE_LOADING: {
			return { ...state, loading: payload };
		}
		case ACTION_TYPE.LOGOUT: {
			return { ...state, wasLogout: !state.wasLogout };
		}
		default:
			return state;
	}
};
