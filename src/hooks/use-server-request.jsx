import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserHash } from '../redux/selectors';
import { server } from '../bff';

export const useServerRequest = () => {
	const hash = useSelector(selectUserHash);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'autirize'].includes(operation) ? params : [hash, ...params];
			return server[operation](...request);
		},
		[hash],
	);
};
