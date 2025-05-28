import { setValueLoading, setError, setValueNotes } from '../../actions';

export const fetchData = (adres) => {
	return async (dispatch) => {
		dispatch(setValueLoading(true));
		dispatch(setError(null));
		try {
			const response = await fetch(`http://localhost:3000/${adres}`);
			const loadedNotes = await response.json();
			dispatch(setValueNotes(loadedNotes));
		} catch {
			dispatch(setError('Все пропало'));
		} finally {
			dispatch(setValueLoading(false));
			dispatch(setError(null));
		}
	};
};
