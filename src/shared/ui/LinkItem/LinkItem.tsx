import { LinkItemType } from './LinkItem.type';
import { Link } from 'react-router-dom';

interface LinkItemProps {
  item: LinkItemType;
  className?: string;
}
export const LinkItem = (props:LinkItemProps) => {
  const { item, className } = props;
  return (
    <div className={className}>
      <Link
        to={item.path || ''}      
      > 
        {item.title}
      </Link>
    </div>
  );
};
