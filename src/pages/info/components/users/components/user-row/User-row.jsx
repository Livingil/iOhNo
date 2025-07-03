import { useState } from 'react';
import { Icon, Loader } from '../../../../../../components';
import { useClickUrl, useServerRequest } from '../../../../../../hooks';
import styles from './User-row.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../../../../redux/selectors';

export const UserRow = ({ user, roles, onUserRemove }) => {
	const [initialRoleId, setInitialRoleId] = useState(user.roleId);
	const [selectedRoleId, setSelectedRoleId] = useState(user.roleId);
	const serverRequest = useServerRequest();

	const inSaveButtonDisabled = selectedRoleId === initialRoleId;

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(target.value);
	};

	const onRoleSave = (userId, newUserRoleId) => {
		serverRequest('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isLoading = useSelector(selectIsLoading);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div onClick={useClickUrl(`/info/users/${user.id}`)} className={styles.tableRow}>
			<div className={styles.loginColumn}>{user.login}</div>
			<div className={styles.regAtColumn}>{user.registeredAt}</div>
			<div className={styles.roleColumn} onClick={(e) => e.stopPropagation()}>
				<select value={selectedRoleId} onChange={onRoleChange} onClick={(e) => e.stopPropagation()}>
					{roles.map((role) => (
						<option key={role.id} value={role.id} onClick={(e) => e.stopPropagation()}>
							{role.name}
						</option>
					))}
				</select>
			</div>
			<div className={styles.buttons}>
				<div
					className={styles.buttonSave}
					style={{ color: inSaveButtonDisabled ? '#000' : '' }}
					onClick={(e) => e.stopPropagation()}
				>
					<Icon
						id="fa-floppy-o"
						onClick={(e) => {
							e.stopPropagation();
							onRoleSave(user.id, selectedRoleId);
						}}
					/>
				</div>
				<div className={styles.buttonTrash} onClick={(e) => e.stopPropagation()}>
					<Icon
						id="fa-trash-o"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onUserRemove();
						}}
					/>
				</div>
			</div>
		</div>
	);
};
