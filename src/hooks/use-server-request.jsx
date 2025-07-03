import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { server } from '../bff';
import { selectUserHash } from '../redux/selectors';
import { setIsLoading } from '../redux/actions';

export const useServerRequest = () => {
	const dispatch = useDispatch();
	const hash = useSelector(selectUserHash);

	return useCallback(
		async (operation, ...params) => {
			dispatch(setIsLoading(true));

			try {
				const request = ['register', 'authorize'].includes(operation) ? params : [hash, ...params];
				return await server[operation](...request);
			} finally {
				dispatch(setIsLoading(false));
			}
		},
		[dispatch, hash],
	);
};
