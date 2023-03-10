/* eslint-disable no-unused-vars */
import { FC, ReactNode, memo } from 'react';
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
  children?: ReactNode;
}

export const AppLink:FC = memo((props:AppLinkProps) => {
    const {
        to,
        className,
        children,
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
});
