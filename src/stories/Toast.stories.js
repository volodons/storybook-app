import { Toast } from './Toast';

export default {
    title: 'Components/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {
        onClose: { action: 'closed' }
    }
};

export const Default = {
    args: {
        message: 'This is a default toast message',
        type: 'default'
    }
};

export const Success = {
    args: {
        message: 'Operation completed successfully!',
        type: 'success'
    }
};

export const Persistent = {
    args: {
        message: 'This toast will not auto-dismiss',
        type: 'info',
        duration: Infinity
    }
};

export const CustomPosition = {
    args: {
        message: 'Toast in bottom-left position',
        type: 'warning',
        position: 'bottom-left'
    }
};
