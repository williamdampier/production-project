import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';
import { Profile } from '../model/types/profile';

interface ProfileCardProps {
 className?: string;
 isLoading?:boolean;
 error?:string;
 data?:Profile;
 onChangeFirstName:(value:string)=>void;
 onChangeLastName: (value:string)=>void;
 onChangeCity: (value:string)=>void;
 onChangeAge: (value:string)=>void;
 readonly?:boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        isLoading,
        error,
        data,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        readonly,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error occured')}
                    text={t('Please try to refresh the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>

            <div>
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Your last name')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

            </div>
        </div>
    );
};
