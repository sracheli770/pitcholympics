import { ICON_COLORS, ICON_SIZES } from '@/constants';
import { IconProps } from '@/types';

export const LinkedinLogo = ({
    color = 'primary',
    size = 'medium',
}: IconProps) => {
    return (
        <svg
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            className={`${ICON_COLORS[color]}  ${ICON_SIZES[size]}`}>
            <rect x='0' fill='none' width='20' height='20' />

            <g>
                <path d='M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z' />
            </g>
        </svg>
    );
};
