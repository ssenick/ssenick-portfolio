import { useCallback, useEffect, useRef } from 'react';

type CallbackFunction<T extends unknown[]> = (...args: T) => void;

interface UseDebounceProps<T extends unknown[]> {
   callback: CallbackFunction<T>;
   delay: number;
}

export function useDebounce<T extends unknown[]>({ callback, delay }: UseDebounceProps<T>) {
   const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

   const debounceCallback = useCallback(
      (..._args: T) => {
         if (timer.current) {
            clearTimeout(timer.current as number);
         }
         timer.current = setTimeout(() => {
            callback(..._args);
         }, delay);
      },
      [callback, delay],
   );

   useEffect(() => {
      return () => {
         if (timer.current) {
            clearTimeout(timer.current as number);
         }
      };
   }, []);

   return debounceCallback;
}

// EXAMPLES

// ONE argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useThrottle<[string]>({
//       callback: (value: string) => {
//             console.log('Throttled value:', value);
//       },
//       delay: 1000,
// });
//
// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//       const value = event.target.value;
//       setInputValue(value);
//       throttledLog(value); // Передаем значение в throttle-функцию
// };

// TWO argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useThrottle<[string, number]>({
//       callback: (value, index) => {
//             console.log('Throttled value:', value, 'index:', index);
//       },
//       delay: 1000,
// });
//
// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//       const value = event.target.value;
//       setInputValue(value);
//       throttledLog(value, 2); // Передаем значение в throttle-функцию
// };

// NO argument
// const [inputValue, setInputValue] = useState('');
//
// const throttledLog = useThrottle({
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
