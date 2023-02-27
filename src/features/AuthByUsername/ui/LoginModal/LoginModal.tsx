import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Suspense } from 'react';
// import { LoginForm } from '../LoginForm/LoginForm';
import LoginFormAsync from '../LoginForm/Loginform.async';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: ()=>void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className!])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={() => 'loading'}>

            <LoginFormAsync />
        </Suspense>
    </Modal>
);
