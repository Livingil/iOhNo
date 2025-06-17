import { useNavigate } from 'react-router-dom';

export const useClickVidgets = (adres) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(adres);
	};
	return handleClick;
};
