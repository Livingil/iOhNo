import { fetchData } from '../redux/actions';

export const handleFetchData = async (dispatch, adres) => {
	return dispatch(fetchData(adres));
};
