import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { FC, useState } from 'react';
import { Input } from 'shared/ui/Input/ui/Input';

const MainPage:FC = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string>('');

    const onChange = (val:string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Main Page')}
            <BugButton />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input value={value} onChange={onChange} placeholder="hello world" />
        </div>
    );
};

export default MainPage;
