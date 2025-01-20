import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import category from './category'
import abc from './abc'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, abc],
}
