import { Typography } from '@mui/material';
import classes from './TaskCard.module.scss';

export interface OptionsListProps {
  backgroundColor?: string;
  textColor?: string;
  nums?: number[];
}
export const OptionsList = (props: OptionsListProps) => {
  const {  
    backgroundColor,
    textColor,
    nums,
  } = props;
  return (
    <div className={classes.options}>
      <Typography 
        sx={{
          fontSize: '1.5rem', 
          color: backgroundColor,
          textAlign: 'left',
          paddingRight: '1.75rem'
        }}
      >
        Варианты
      </Typography>
      {nums && nums.map((num, index) => (
        <div 
          className={classes.option} 
          key={index}
          style={{backgroundColor: backgroundColor, color: textColor}}
        >
          {num}
        </div>
      ))}
    </div>
  )
}