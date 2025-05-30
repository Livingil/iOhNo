import styles from './Search.module.css';

export const Search = () => {
	return (
		<div className={styles.Search}>
			<input type="text" placeholder="Search" />
			<button>Search</button>
		</div>
	);
};
