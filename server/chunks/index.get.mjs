import { defineEventHandler } from 'h3';
import { p as products } from './data.mjs';

const index_get = defineEventHandler(async () => {
  try {
    return products;
  } catch {
    return "error";
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
