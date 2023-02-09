import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { FC, ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
