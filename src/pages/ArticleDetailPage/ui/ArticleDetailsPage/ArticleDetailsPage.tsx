import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailPage, {}, [className])}>
                {t('Error occured')}
            </div>
        );
    }
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.title} title={t('Comments')} />
            <CommentList
                className={cls.title}
                comments={[]}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
