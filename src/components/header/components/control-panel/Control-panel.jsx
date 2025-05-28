import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../icon/Icon';
import styles from './Control-panel.module.css';

export const ControlPanel = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.ControlPanel}>
			<div>
				<Link className={styles.profil} to="/login">
					User
					<Icon id="fa-user-circle" />
				</Link>
				<div className={styles.buttonsPanel}>
					<div onClick={() => navigate(-1)} className={styles.button}>
						<Icon id="fa-chevron-circle-left" />
					</div>
					<Link to="/create" className={styles.button}>
						<Icon id="fa-plus-circle" />
					</Link>
					<Link to="/vidgets" className={styles.button}>
						<Icon id="fa-th" />
					</Link>
					<Link to="/info" className={styles.button}>
						<Icon id="fa-info-circle" />
					</Link>
				</div>
			</div>
		</div>
	);
};
