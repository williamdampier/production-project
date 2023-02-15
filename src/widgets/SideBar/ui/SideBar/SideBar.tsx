import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className!,
            ])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <ThemeSwitcher>TOGGLE</ThemeSwitcher>
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
