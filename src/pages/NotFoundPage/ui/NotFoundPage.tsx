import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
 className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notfound');
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className!])}>
            {t('Page not found')}
        </div>
    );
};
