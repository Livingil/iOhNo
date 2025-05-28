import { setValueLoading, setError, setValueNotes } from '../../actions';
import { selectNotes } from '../../selectors';

export const createTodo = (title, body, adres) => {
	return async (dispatch, getState) => {
		dispatch(setValueLoading(true));
		dispatch(setError(null));

		try {
			const response = await fetch(`http://localhost:3000/${adres}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: title,
					body: body,
				}),
			});
			const newTodo = await response.json();
			const currentTodos = selectNotes(getState());
			dispatch(setValueNotes([...currentTodos, newTodo]));
		} catch {
			dispatch(setError('Все пропало'));
		} finally {
			dispatch(setValueLoading(false));
			dispatch(setError(null));
		}
	};
};
