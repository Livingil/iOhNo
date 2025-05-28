import { setValueLoading, setError, setValueNotes } from '../../actions';
import { selectNotes } from '../../selectors';

export const delTodo = (id, adres) => {
	return async (dispatch, getState) => {
		dispatch(setValueLoading(true));
		dispatch(setError(null));
		try {
			await fetch(`http://localhost:3000/${adres}/${id}`, {
				method: 'DELETE',
			});
			const todos = selectNotes(getState());
			dispatch(setValueNotes(todos.filter((note) => note.id !== id)));
		} catch {
			dispatch(setError('Все пропало'));
		} finally {
			dispatch(setValueLoading(false));
			dispatch(setError(null));
		}
	};
};
