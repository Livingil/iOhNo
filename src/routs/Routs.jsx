import { Route, Routes } from 'react-router-dom';
import { Authorization, HomePage, InfoPage, NotesPage, ProfilePage, Registration, RemindersPage } from '../pages';
import { NotesPageInfo, UsersPageInfo } from '../pages/info/components';
import { NotePageInfo } from '../pages/info/components/notes/components';
import { UserPageInfo } from '../pages/info/components/users/components';

export const Routs = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/notes" element={<NotesPage />} />
			<Route path="/login" element={<Authorization />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/info" element={<InfoPage />}>
				<Route path="users" element={<UsersPageInfo />} />
				<Route path="users/:id" element={<UserPageInfo />} />
				<Route path="notes" element={<NotesPageInfo />} />
				<Route path="notes/:id" element={<NotePageInfo />} />
			</Route>
			<Route path="/reminders" element={<RemindersPage />}>
				<Route path="done" element={<div>Done</div>} />
			</Route>
			<Route path="/profile" element={<ProfilePage />} />

			<Route path="/create" element={<div>Create</div>} />
			<Route path="/vidgets" element={<div>Vidgets</div>} />
			<Route path="/weather" element={<div>Weather</div>} />
			<Route path="/calendar" element={<div>Сalendar</div>} />
			<Route path="/create-note" element={<div>Create note</div>} />
			<Route path="/create-event" element={<div>Create event</div>} />
			<Route path="/create-reminder" element={<div>Create reminder</div>} />

			<Route path="*" element={<div>Error</div>} />
		</Routes>
	);
};
