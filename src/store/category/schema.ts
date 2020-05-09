import { schema } from 'normalizr';

const categorySchema = new schema.Entity('categories', {}, { idAttribute: 'uid' });
const subcategories = new schema.Array(categorySchema);

categorySchema.define({ subcategories });

export { categorySchema };
