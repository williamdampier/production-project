import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
 className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation('error');

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className!])}>
            {t('Error occured')}
            <Button type="button" onClick={refreshPage}>{t('Refresh page')}</Button>
        </div>

    );
};
