import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
    test('render title', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Text title="TEST TITLE" />);
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
    });

    test('render text', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Text text="TEST TEXT" />);
        expect(screen.getByText('TEST TEXT')).toBeInTheDocument();
    });

    test('render text and title', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Text title="TEST TITLE" text="TEST TEXT" />);
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
        expect(screen.getByText('TEST TEXT')).toBeInTheDocument();
    });
});
