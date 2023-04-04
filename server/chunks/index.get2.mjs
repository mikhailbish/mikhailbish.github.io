import { defineEventHandler } from 'h3';
import { p as products } from './data.mjs';

const index_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    const result = products.find((element) => {
      if (element.id === 1)
        return element;
    });
    return result;
  } catch {
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
