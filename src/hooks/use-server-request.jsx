import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserHash } from '../redux/selectors';

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
