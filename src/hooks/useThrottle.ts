import { useCallback, useEffect, useRef } from 'react';

type CallbackFunction<T extends unknown[]> = (...args: T) => void;

interface UseThrottleProps<T extends unknown[]> {
   callback: CallbackFunction<T>;
   delay: number;
}

export function useThrottle<T extends unknown[]>({ callback, delay }: UseThrottleProps<T>) {
   const throttleRef = useRef<boolean | null>(null);
   const throttleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

   const throttledCallback = useCallback(
      (..._args: T) => {
         if (!throttleRef.current) {
            callback(..._args);
            throttleRef.current = true;
            throttleTimeout.current = setTimeout(() => {
               throttleRef.current = false;
            }, delay);
         }
      },
      [callback, delay],
   );

   useEffect(() => {
      return () => {
         if (throttleTimeout.current) {
            clearTimeout(throttleTimeout.current as number);
         }
      };
   }, []);
   return throttledCallback;
}

// EXAMPLES

// ONE argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useDebounce<[string]>({
//    callback: (value) => {
//       console.log('Throttled value:', value);
//    },
//    delay: 1000,
// });
//
// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//    const value = event.target.value;
//    setInputValue(value);
//    throttledLog(value); // Передаем значение в throttle-функцию
// };

// TWO argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useDebounce<[string, number]>({
//    callback: (value, index) => {
//       console.log('Throttled value:', value, 'index:', index);
//    },
//    delay: 1000,
// });
//
// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//    const value = event.target.value;
//    setInputValue(value);
//    throttledLog(value, 2); // Передаем значение в throttle-функцию
// };

// NO argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useDebounce({
//    callback: () => {
//       console.log('Throttled value');
//    },
//    delay: 1000,
// });
//
// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//    const value = event.target.value;
//    setInputValue(value);
//    throttledLog();
// };
