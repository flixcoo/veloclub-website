import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type EmailObfuscatorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
    email?: string;
    children: ReactNode;
};

const EmailObfuscator = ({ email, children, className, ...props }: EmailObfuscatorProps) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();

        if (email) {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <a href="#" onClick={handleClick} className={className} {...props}>
            {children}
        </a>
    );
};

export default EmailObfuscator;
