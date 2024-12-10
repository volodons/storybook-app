import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Interactive button component with multiple variants and sizes'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large']
        },
        onClick: { action: 'clicked' }
    }
};

export const Primary = {
    args: {
        primary: true,
        label: 'Primary Button'
    }
};

export const Secondary = {
    args: {
        label: 'Secondary Button'
    }
};

export const Large = {
    args: {
        size: 'large',
        label: 'Large Button'
    }
};

export const Small = {
    args: {
        size: 'small',
        label: 'Small Button'
    }
};

export const CustomColor = {
    args: {
        backgroundColor: '#ff4785',
        label: 'Custom Color',
        primary: true
    }
};

export const LongLabel = {
    args: {
        label: 'Button with a very long label that might wrap'
    }
};

export const Disabled = {
    args: {
        label: 'Disabled Button',
        disabled: true
    }
};
