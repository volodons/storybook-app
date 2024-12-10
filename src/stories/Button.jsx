import PropTypes from 'prop-types';

import './button.css';

export const Button = ({ primary, backgroundColor, size, label, disabled, className, ...props }) => {
    const baseClass = 'storybook-button';
    const mode = primary ? `${baseClass}--primary` : `${baseClass}--secondary`;
    const sizeClass = `${baseClass}--${size}`;
    const classes = [baseClass, sizeClass, mode, className].filter(Boolean).join(' ');

    return (
        <button
            type="button"
            className={classes}
            style={backgroundColor ? { backgroundColor } : undefined}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /** Is this the principal call to action on the page? */
    primary: PropTypes.bool,
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Is it disabled? */
    disabled: PropTypes.bool,
    /** Optional extra classes */
    className: PropTypes.string,
    /** Optional click handler */
    onClick: PropTypes.func
};

Button.defaultProps = {
    primary: false,
    backgroundColor: null,
    size: 'medium',
    disabled: false,
    className: '',
    onClick: undefined
};
