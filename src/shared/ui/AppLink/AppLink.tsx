/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps, Link } from 'react-router-dom';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className!, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
