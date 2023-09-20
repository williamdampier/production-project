import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { log } from "console";

export const fetchNextArticlesPage = createAsyncThunk<
void,void,ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        console.log(`hasMore: ${hasMore} isLoading: ${isLoading}`);
        
        if (hasMore && !isLoading){
            dispatch(articlesPageActions.setPage(page +1));
            dispatch(fetchArticlesList({
                page: page +1
            }))
        }

    }
)