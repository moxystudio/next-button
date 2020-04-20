import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NextButton } from '../src/NextButton';

const mockOnClick = jest.fn();

const defaultProps = {
    onClick: mockOnClick,
};

const renderWithProps = (props = {}) => render(<NextButton { ...defaultProps } { ...props }>foo</NextButton>);

describe('NextButton Component', () => {
    it('should render correctly', () => {
        const { getByRole } = renderWithProps();
        const button = getByRole('button');

        expect(button).toHaveClass('next-button_button');
        expect(button).toHaveTextContent('foo');
    });

    it('should render correctly when passing href', () => {
        const { getByRole } = renderWithProps({ href: 'bar' });
        const buttonAsLink = getByRole('link');

        expect(buttonAsLink).toHaveClass('next-button_link');
        expect(buttonAsLink).toHaveAttribute('href', 'bar');
        expect(buttonAsLink).toHaveTextContent('foo');
    });

    it('should call onClick correctly when passed', () => {
        const { getByRole } = renderWithProps({ onClick: mockOnClick });

        fireEvent.click(getByRole('button'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
