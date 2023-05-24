import { Link } from 'react-router-dom';

const BtnConnect = ({ actionType, complement, goTo }) => {
	return (
		<Link
			className={`hidden lg:inline-block py-2 px-6 ${complement} text-base font-bold rounded-xl transition duration-200`}
			to={`/${goTo}`}
		>
			{actionType}
		</Link>
	);
};

export default BtnConnect;
