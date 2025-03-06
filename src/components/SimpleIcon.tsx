import React from 'react';
import * as SimpleIcons from 'simple-icons';
import { cn } from '../lib/utils';

interface SimpleIconProps {
    name: string;
    size?: number;
    className?: string;
    color?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({
    name,
    size = 24,
    className,
    color
}) => {
    const iconKey = `si${name}`;
    const icon = (SimpleIcons as Record<string, any>)[iconKey];

    if (!icon) {
        console.warn(`Icon "${name}" not found in simple-icons`);
        return null;
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            style={color ? { color } : undefined}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
    );
};

export default SimpleIcon;
