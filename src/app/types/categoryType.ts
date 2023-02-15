export interface CategoryProps {
  id: number;
  title: string,
  description: string,
  subcategory: ISubcategory[],
}

export interface ISubcategory {
  id: number;
  title: string;
}
export interface SubcategoryProps {
  id: number,
  title: string,
  description: string,
  category: string,
  category_id: number,
}