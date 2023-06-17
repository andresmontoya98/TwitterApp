import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => {
    return (
        <section className='error'>
            <h1>Error</h1>
            <p>{message}</p>
            <Link to={"/"}>Go to Home</Link>
        </section>
    )
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
}
