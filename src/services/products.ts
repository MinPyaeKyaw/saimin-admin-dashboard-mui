import { DummyJsonApi } from '@api/instances';

export function getAllProducts() {
  return DummyJsonApi.get('/products');
}
