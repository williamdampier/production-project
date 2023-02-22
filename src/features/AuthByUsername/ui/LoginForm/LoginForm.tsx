import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Input
                autofocus
                className={cls.input}
                type="text"
                placeholder={t('Enter username')}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Enter password')}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
