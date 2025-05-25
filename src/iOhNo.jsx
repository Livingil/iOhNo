import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	return (
		<div className={styles.iOhNo}>
			<Header />
			<div>
				<div className={styles.content}>
					<h2>Список дел</h2>

					<Routes>
						<Route path="/" element={<div>Home page</div>} />
						<Route path="/login" element={<div>Authorization</div>} />
						<Route path="/register" element={<div>Registration</div>} />
						<Route path="/users" element={<div>Users</div>} />
						<Route path="/notes" element={<div>Notes</div>} />
						<Route path="/notecreate" element={<div>Note Create</div>} />
						<Route path="/notes/:noteId" element={<div>Note</div>} />
						<Route path="/schedule" element={<div>Schedule</div>} />
						<Route path="/calendar" element={<div>Сalendar</div>} />
						<Route path="*" element={<div>Error</div>} />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
};
