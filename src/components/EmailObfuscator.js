import React from 'react';

/**
 * ObfuscatedEmailLink - Simple Component for protected email links
 *
 * Usage:
 *   <ObfuscatedEmailLink email="hi@veloclubband.de" className="btn">
 *     Kontakt
 *   </ObfuscatedEmailLink>
 *
 * Or with encoded email:
 *   <ObfuscatedEmailLink encoded="aGlAdmVsb2NsdWJiYW5kLmRl" className="btn">
 *     Kontakt
 *   </ObfuscatedEmailLink>
 */

const EmailObfuscator = ({ email, encoded, children, className, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();

        // Decode email if encoded, otherwise use plain email
        const decodedEmail = encoded ? atob(encoded) : email;

        if (decodedEmail) {
            window.location.href = `mailto:${decodedEmail}`;
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

