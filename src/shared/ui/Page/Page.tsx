import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInifniteScroll } from 'shared/lib/hooks/useInifniteScroll/useInifniteScroll';


interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd? : () => void;
}

export const Page: FC<PageProps> = (props) => {
   const { className, children,  onScrollEnd } = props;
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

   useInifniteScroll({
      triggerRef, wrapperRef, callback:onScrollEnd
      }
   )

   return (
      <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
         {children}
         <div ref={triggerRef}></div>
      </section>
   );
}