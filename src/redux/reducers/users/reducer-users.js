import { ACTION_TYPE } from '../../actions';
import { initialStateUsers } from '../initial-state';

export const reducerUsers = (state = initialStateUsers, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_VALUE_USERS: {
			return { ...state, users: payload };
		}

		default:
			return state;
	}
};
