import { authorize, fetchRoles, fetchUsers, logout, register, removeUser, updateUserRole } from './operations';

export const server = { authorize, logout, register, fetchRoles, fetchUsers, updateUserRole, removeUser };
