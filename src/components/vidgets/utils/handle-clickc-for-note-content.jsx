import { setNote } from '../../../redux/actions';

export const handleClickForNoteContent = (dispatch, note) => {
	return dispatch(setNote(note));
};
