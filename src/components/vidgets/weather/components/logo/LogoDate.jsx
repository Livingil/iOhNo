import { Icon } from '../../../../icon/Icon';
import styles from './LogoDate.module.css';

export const LogoDate = () => {
	return (
		<div className={styles.LogoDate}>
			<div className={styles.banner}>
				<Icon id="fa-thermometer-empty" />
				{new Date().toLocaleString('ru', {
					day: 'numeric',
					month: 'long',
				})}
			</div>
		</div>
	);
};
