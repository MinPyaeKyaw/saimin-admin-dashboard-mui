import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from './products';

export function useGetAllProducts() {
  return useQuery({ queryKey: ['all-products'], queryFn: getAllProducts });
}
