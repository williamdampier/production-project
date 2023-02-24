import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(userActions.initAuthData())
    }, [dispatch])
    
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
