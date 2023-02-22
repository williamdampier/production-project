import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, SyntheticEvent, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?:(value:string)=>void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
        if (event.target instanceof HTMLInputElement) {
            setCaretPosition(event.currentTarget.selectionStart || 0);
        }
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className!])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
