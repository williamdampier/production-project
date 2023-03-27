import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            Article Details
        </div>
    );
};
export default memo(ArticleDetailsPage);
