import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Main Page')}
            <BugButton />
        </div>
    );
};

export default MainPage;
