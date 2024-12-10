import PropTypes from 'prop-types';

import './alert.css';

export const Alert = ({ type = 'info', message, title, dismissible = true, onDismiss, icon }) => {
    const getIcon = () => {
        if (icon) return icon;
        switch (type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            default:
                return 'ℹ';
        }
    };

    return (
        <div className={`alert alert--${type}`} role="alert">
            <div className="alert__content">
                <span className="alert__icon">{getIcon()}</span>
                <div className="alert__text">
                    {title && <strong className="alert__title">{title}</strong>}
                    <p className="alert__message">{message}</p>
                </div>
            </div>
            {dismissible && (
                <button className="alert__close" onClick={onDismiss} aria-label="Close alert">
                    ×
                </button>
            )}
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    dismissible: PropTypes.bool,
    onDismiss: PropTypes.func,
    icon: PropTypes.node
};
