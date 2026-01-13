import React from 'react';

/**
 * Simple Component for protected email links from bots/spam.
 *
 * Usage:
 * ```
 *   <EmailObfuscator email="hi@veloclubband.de" className="btn">
 *     Kontakt
 *   </EmailObfuscator>
 * ```
 */

const EmailObfuscator = ({ email, children, className, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();

        if (email) {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            href="#"
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children}
        </a>
    );
};

export default EmailObfuscator;

