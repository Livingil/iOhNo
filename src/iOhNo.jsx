import { Routs } from './routs/Routs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Footer, Header, Loader } from './components';
import { selectLoading } from './redux/selectors';
import { fetchData } from './redux/actions';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	const loading = useSelector(selectLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData('notes'));
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
