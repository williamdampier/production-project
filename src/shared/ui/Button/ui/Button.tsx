/* eslint-disable no-unused-vars */
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?:boolean;
    children?:ReactNode;
}

export const Button = memo<ButtonProps>(({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}:ButtonProps) => {
    const mainTheme = theme || '';

    const mods: Mods = {
        [cls[mainTheme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
