import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from 'widgets/SideBar/model/items';
import { FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?:SidebarItemType;
    collapsed:boolean;
}

export const SidebarItem = memo<FC<SidebarItemProps>>(
    ({ item, collapsed }: SidebarItemProps) => {
        const { t, ready } = useTranslation();

        if (item) {
            return (
                <AppLink
                    // @ts-ignore
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
                >
                    <item.Icon className={cls.icon} />

                    <span className={cls.link}>
                        {ready && t(item.text)}
                    </span>

                </AppLink>

            );
        }
        return null;
    },
);
