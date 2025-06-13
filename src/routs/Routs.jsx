import { Route, Routes } from 'react-router-dom';
import { Authorization, HomePage, NotesPage } from '../components';

export const Routs = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/notes" element={<NotesPage />} />
			<Route path="/login" element={<Authorization />} />
			<Route path="/info" element={<div>Info</div>} />
			<Route path="/create" element={<div>Create</div>} />
			<Route path="/vidgets" element={<div>Vidgets</div>} />
			<Route path="/weather" element={<div>Weather</div>} />
			<Route path="/profile" element={<div>Profile</div>} />
			<Route path="/calendar" element={<div>Сalendar</div>} />
			<Route path="/create-note" element={<div>Create note</div>} />
			<Route path="/create-event" element={<div>Create event</div>} />
			<Route path="/create-reminder" element={<div>Create reminder</div>} />
			<Route path="/reminders" element={<div>Reminders</div>} />

			<Route path="/register" element={<div>Registration</div>} />
			<Route path="/notes/:noteId" element={<div>Note</div>} />

			<Route path="*" element={<div>Error</div>} />
		</Routes>
	);
};
