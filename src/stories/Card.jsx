import PropTypes from 'prop-types';

import './card.css';

export const Card = ({ title, content, imageUrl, imageAlt, variant = 'default', onClick }) => {
    return (
        <div className={`card card--${variant}`} onClick={onClick}>
            {imageUrl && (
                <div className="card__image-container">
                    <img src={imageUrl} alt={imageAlt} className="card__image" />
                </div>
            )}
            <div className="card__content">
                {title && <h3 className="card__title">{title}</h3>}
                {content && <p className="card__text">{content}</p>}
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
    onClick: PropTypes.func
};
