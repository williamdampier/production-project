import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { Sidebar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';

export default function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme!])}>
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
