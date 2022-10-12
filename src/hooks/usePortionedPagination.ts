import { useReducer, useEffect, DispatchWithoutAction } from 'react';

export const usePortionedPagination = <T>(
  array: Array<T>,
  maxCount: number
): [Array<T>, DispatchWithoutAction] => {
  const [page, setPage] = useReducer((prev) => prev + 1, 1);
  const [items, setItems] = useReducer(
    () => array.slice(0, page * maxCount),
    array.slice(0, page * maxCount)
  );

  useEffect(() => setItems(), [page, array]);

  return [items, setPage];
};
