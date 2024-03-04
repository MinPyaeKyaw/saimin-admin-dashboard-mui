import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from './products';
import { productKeys } from './tanstack-query-keys';

export function useGetAllProducts(params: PaginationParams) {
  return useQuery({
    queryKey: [productKeys.lists(), ...Object.values(params)],
    queryFn: () => getAllProducts(params),
    select: (data) => data.data,
  });
}
