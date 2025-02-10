import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import category from './category'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, user],
}
