import { useNavigate } from 'react-router-dom';

export const handlerClickVidgets = (adres) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(adres);
	};
	return handleClick;
};
