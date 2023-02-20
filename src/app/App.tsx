import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useState } from 'react';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button } from 'shared/ui/Button';
import { AppRouter } from './providers/router';

export default function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme!])}>
            <Suspense fallback="">
                <Navbar />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Button onClick={openModal}>toggle modal</Button>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
