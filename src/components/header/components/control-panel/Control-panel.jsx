import { Icon } from '../../../icon/Icon';
import styles from './Control-panel.module.css';

export const ControlPanel = () => {
	return (
		<div className={styles.ControlPanel}>
			<div>
				<div className={styles.profil}>
					User
					<Icon id="fa-user-circle" />
				</div>
				<div className={styles.buttonsPanel}>
					<Icon id="fa-chevron-circle-left" />
					<Icon id="fa-plus-circle" />

					<Icon id="fa-info-circle" />
				</div>
			</div>
			<div className={styles.menu}>
				<Icon id="fa-bars" />
			</div>
		</div>
	);
};
