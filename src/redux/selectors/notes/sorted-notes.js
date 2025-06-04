import { sortByCreationDate } from '../../../utils';

export const selectSortedNotes = (state) => sortByCreationDate(state.notes.searchResult);
