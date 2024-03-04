import { DummyJsonApi } from '@api/instances';

export function getAllProducts(params: PaginationParams) {
  return DummyJsonApi.get('/products', { params });
}
