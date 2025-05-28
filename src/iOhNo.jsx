import { Routs } from './routs/Routs';
import { useSelector } from 'react-redux';
import { Footer, Header, Loader } from './components';
import { selectLoading } from './redux/selectors';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	const loading = useSelector(selectLoading);

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
