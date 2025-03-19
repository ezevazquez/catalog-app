import type { SchemaTypeDefinition } from "sanity"
import category from "./category"
import product from "./product"
import header from "./header"
import catalog from "./catalog"
import faq from "./faq"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, header, catalog, faq],
}

