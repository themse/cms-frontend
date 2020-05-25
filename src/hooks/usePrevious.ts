import { useEffect, useRef } from 'react';
// TODO check
export const usePrevious = <T extends {}>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

/*
Example

const Component = (props) => {
    const {receiveAmount, sendAmount } = props
    const prevAmount = usePrevious({receiveAmount, sendAmount});
    useEffect(() => {
        if(prevAmount.receiveAmount !== receiveAmount) {

         // process here
        }
        if(prevAmount.sendAmount !== sendAmount) {

         // process here
        }
    }, [receiveAmount, sendAmount])
}

*/
