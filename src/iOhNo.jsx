import { Route, Routes } from 'react-router-dom';
import { Footer, Header, Weather } from './components';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	return (
		<div className={styles.iOhNo}>
			<Header />
			<div>
				<div className={styles.content}>
					<Weather />
					<Routes>
						<Route path="/" element={<div>Home page</div>} />
						<Route path="/login" element={<div>Authorization</div>} />
						<Route path="/info" element={<div>Info</div>} />
						<Route path="/create" element={<div>Create</div>} />
						<Route path="/vidgets" element={<div>Vidgets</div>} />

						<Route path="/register" element={<div>Registration</div>} />
						<Route path="/notes" element={<div>Notes</div>} />
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
