export interface CategoryEntity {
    uid: number; // TODO need to be string
    parentUid: number;
    name: string;
    slug: string;
    subcategories: Array<number>;
}
