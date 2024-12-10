import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './toast.css';

export const Toast = ({ message, type = 'default', duration = 5000, onClose, position = 'top-right' }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (duration === Infinity) return;

        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, duration);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev - 100 / (duration / 100);
                return newProgress < 0 ? 0 : newProgress;
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast toast--${type} toast--${position}`}>
            <div className="toast__content">
                {message}
                <button
                    className="toast__close"
                    onClick={() => {
                        setIsVisible(false);
                        onClose?.();
                    }}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>
            {duration !== Infinity && <div className="toast__progress" style={{ width: `${progress}%` }} />}
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'error', 'warning', 'info']),
    duration: PropTypes.number,
    onClose: PropTypes.func,
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left'])
};
