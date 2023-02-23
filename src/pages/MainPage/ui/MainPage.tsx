import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const MainPage:FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main Page')}
        </div>
    );
};

export default MainPage;
