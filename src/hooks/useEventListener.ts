import { useEffect, useRef } from 'react';

export const useEventListener = (event: any, handler: () => any) => {
    const handlerRef = useRef(handler);
    // useEffect(() => {
    //     handlerRef.current = handler;
    // })

    useEffect(() => {
        function internalHandler(event: any) {
            return handlerRef.current().value(event); // TODO
        }

        document.addEventListener(event, internalHandler);

        return () => document.removeEventListener(event, internalHandler);
    }, [event]);
};
