import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesPage, {}, [className])}>
            Article Page
        </div>
    );
};

export default memo(ArticlesPage);
