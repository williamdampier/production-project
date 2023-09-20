import { log } from "console";
import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInifniteScrolloptions
{
    callback?:()=>void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;

}
export function useInifniteScroll({callback, triggerRef, wrapperRef}: UseInifniteScrolloptions) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(()=>{

                const wrapperElement =  wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0
            }
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }
                return () => {
            if (observer.current && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerElement);
            }
        }

    },[callback,triggerRef, wrapperRef])

}