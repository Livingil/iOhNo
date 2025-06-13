import { ACTION_TYPE } from './action-type';

export const setError = (data) => ({ type: ACTION_TYPE.ERROR, payload: data });
