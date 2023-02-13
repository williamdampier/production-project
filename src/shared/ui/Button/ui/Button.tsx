import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={classNames(cls.Button, { [cls[theme!]]: true }, [className!])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
