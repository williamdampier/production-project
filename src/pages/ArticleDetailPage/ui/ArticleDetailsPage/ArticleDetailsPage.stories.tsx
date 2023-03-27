import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleDetailPage from './ArticleDetailsPage';

export default {
    title: 'shared/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => <ArticleDetailPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
