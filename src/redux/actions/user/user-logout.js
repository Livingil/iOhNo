import { server } from '../../../bff';
import { ACTION_TYPE } from '../action-type';

export const userLogout = (hash) => {
	server.logout(hash);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
