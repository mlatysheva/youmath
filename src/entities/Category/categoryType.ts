import { SubcategoryProps } from '../Subcategory/subcategoryType';

export interface CategoryProps {
  id: number;
  title: string,
  description?: string,
  subcategory?: SubcategoryProps[],
}
