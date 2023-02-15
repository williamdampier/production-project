import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { FC } from 'react';

const MainPage:FC = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Main Page')}
            <BugButton />
        </div>
    );
};

export default MainPage;
