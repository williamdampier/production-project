import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../../types/sidebar';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Main Page',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About Page',
            },

        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile Page',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }

        return sidebarItemList;
    },
);
