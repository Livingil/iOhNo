import { Routs } from './routs/Routs';
import { Footer, Header } from './components';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	return (
		<div className={styles.iOhNo}>
			<Header />

			<div className={styles.content}>
				<Routs />
			</div>

			<Footer />
		</div>
	);
};
