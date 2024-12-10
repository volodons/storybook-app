import { Alert } from './Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs'],
    argTypes: {
        onDismiss: { action: 'dismissed' }
    }
};

export const Info = {
    args: {
        type: 'info',
        title: 'Information',
        message: 'This is an informational alert message.'
    }
};

export const Success = {
    args: {
        type: 'success',
        message: 'Operation completed successfully!'
    }
};

export const Warning = {
    args: {
        type: 'warning',
        title: 'Warning',
        message: 'Please be careful with this action.'
    }
};

export const Error = {
    args: {
        type: 'error',
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        dismissible: false
    }
};
