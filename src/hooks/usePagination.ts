import { useState } from 'react';

type ReturnType<T> = [Array<T>, () => void, () => void, boolean, boolean];

export const usePagination = <T>(items: Array<T>, showCount: number): ReturnType<T> => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(showCount);

  const handleBackward = () => {
    setStart((prev) => (prev === 0 ? prev : prev - 1));
    setEnd((prev) => prev - 1);
  };

  const handleForward = () => {
    setStart((prev) => prev + 1);
    setEnd((prev) => (prev === items.length ? prev : prev + 1));
  };

  return [
    items.slice(start, end),
    handleBackward,
    handleForward,
    start === 0,
    end === items.length,
  ];
};
