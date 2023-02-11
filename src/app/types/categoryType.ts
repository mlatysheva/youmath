export interface CategoryProps {
  id: number;
  title: string,
  description: string,
  subcategory: number[],
}

export interface SubcategoryProps {
  id: number,
  title: string,
  description: string,
  category: string,
  category_id: number,
}