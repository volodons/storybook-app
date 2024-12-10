import { Card } from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }
    }
};

export const Default = {
    args: {
        title: 'Card Title',
        content: 'This is some sample content for the card.',
        variant: 'default'
    }
};

export const WithImage = {
    args: {
        title: 'Card with Image',
        content: 'Card with an image example.',
        imageUrl: 'https://picsum.photos/300/200',
        imageAlt: 'Sample image',
        variant: 'elevated'
    }
};

export const Outlined = {
    args: {
        title: 'Outlined Card',
        content: 'This is an outlined card variant.',
        variant: 'outlined'
    }
};
