import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?:SidebarItemType;
    collapsed:boolean;
}

export const SidebarItem = memo<FC<SidebarItemProps>>(
    ({ item, collapsed }: SidebarItemProps) => {
        const { t } = useTranslation('translation');
        const isAuth = useSelector(getUserAuthData);

        if (item?.authOnly && !isAuth) return null;

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

                        { t(item.text)}
                    </span>

                </AppLink>

            );
        }
        return null;
    },
);
