import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
 // eslint-disable-next-line no-unused-vars
 PRIMARY = 'primary',
 // eslint-disable-next-line no-unused-vars
 ERROR = 'error'

}
interface TextProps {
    className? : string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo(({
    className, title, text, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className!])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
