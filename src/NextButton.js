import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from '@moxy/next-link';

export const NextButton = forwardRef(({ children, href, className, ...rest }, ref) => {
    if (href) {
        return (
            <NextLink
                ref={ ref }
                className={ classNames('next-button_link', className) }
                href={ href }
                { ...rest }>
                { children }
            </NextLink>
        );
    }

    return (
        <button
            ref={ ref }
            className={ classNames('next-button_button', className) }
            { ...rest }>
            { children }
        </button>
    );
});

NextButton.propTypes = {
    children: PropTypes.any.isRequired,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default NextButton;
