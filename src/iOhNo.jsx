import { Routs } from './routs/Routs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Footer, Header, Loader } from './components';
import { selectLoading, selectNotes } from './redux/selectors';
import { handleFetchData } from './utils';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	const loading = useSelector(selectLoading);

	const notes = useSelector(selectNotes);

	const dispatch = useDispatch();

	useEffect(() => {
		handleFetchData(dispatch, 'notes');
	}, [dispatch]);

	return (
		<div className={styles.iOhNo}>
			<Header />

			<div>
				<div className={styles.content}>{loading ? <Loader /> : <Routs />}</div>
			</div>

			<Footer />
		</div>
	);
};
