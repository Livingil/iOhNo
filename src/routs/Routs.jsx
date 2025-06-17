import { Route, Routes } from 'react-router-dom';
import { Authorization, HomePage, InfoPage, NotesPage, Registration } from '../components';
import { NotesPageInfo, UsersPage } from '../components/pages/info/components';

export const Routs = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/notes" element={<NotesPage />} />
			<Route path="/login" element={<Authorization />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/info" element={<InfoPage />}>
				<Route path="users" element={<UsersPage />} />
				<Route path="users/:id" element={<div>USERID</div>} />
				<Route path="notes" element={<NotesPageInfo />} />
				<Route path="notes/:id" element={<div>NOTEID</div>} />
			</Route>

			<Route path="/create" element={<div>Create</div>} />
			<Route path="/vidgets" element={<div>Vidgets</div>} />
			<Route path="/weather" element={<div>Weather</div>} />
			<Route path="/profile" element={<div>Profile</div>} />
			<Route path="/calendar" element={<div>Сalendar</div>} />
			<Route path="/create-note" element={<div>Create note</div>} />
			<Route path="/create-event" element={<div>Create event</div>} />
			<Route path="/create-reminder" element={<div>Create reminder</div>} />
			<Route path="/reminders" element={<div>Reminders</div>} />

			<Route path="*" element={<div>Error</div>} />
		</Routes>
	);
};
