import { Icon } from '../icon/Icon';
import { Input } from '../markup-components';
import styles from './Search.module.css';

export const Search = ({ searchPhrase, onChange, placeholderText }) => {
	return (
		<div className={styles.Search}>
			<Input
				type="text"
				placeholder={placeholderText}
				value={searchPhrase}
				onChange={onChange}
				style={{ border: 'none', margin: '0', padding: '0' }}
			/>
			<Icon id="fa-search" style={{ color: 'grey' }} />
		</div>
	);
};
