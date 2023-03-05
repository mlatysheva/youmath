import { LinkItemType } from '../../../shared/ui/LinkItem/LinkItem.type';
import { BASE_URL } from '../../../app/constants/baseUrl';

export const menuItems: LinkItemType[]  = [
  { title: 'Разделы', path: `${BASE_URL}/categories` },
  { title: 'О проекте', path: `${BASE_URL}/about` },
]