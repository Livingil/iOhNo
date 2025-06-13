import { createSelector } from 'reselect';
import { sortByCreationDate } from '../../../utils';
import { selectSearchResult } from './search-result';
import { selectUser } from '../users/user';

export const selectSortedNotes = createSelector([selectSearchResult, selectUser], (notes, user) =>
	sortByCreationDate(notes, user),
);
