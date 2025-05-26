import { Icon } from '../../../../icon/Icon';
import styles from './City.module.css';

export const City = ({ city }) => {
	return (
		<div className={styles.City}>
			<Icon id="fa-location-arrow " />
			{city}
		</div>
	);
};
