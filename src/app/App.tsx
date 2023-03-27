import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthInited, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

export default function App() {
    const dispatch = useDispatch();
    const inited = useSelector(getUserAuthInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
