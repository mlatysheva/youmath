import { Button } from '@mui/material';
import classes from './TaskCard.module.scss';

export interface TaskCardProps {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  question_text?: string;
  description?: string;
  question_file?: string;
  type?: number;
  create_date?: string;
  category?: string;
  category_id?: string;
  options: number[];
}

export const TaskCard = (props: TaskCardProps) => {
  const {  
    backgroundColor, 
    textColor, 
    title, 
    question_text, 
    description, 
    options 
  } = props;
  return (
    <div className={`${classes.TaskCard} wrapper`}
      style={{backgroundColor: backgroundColor, color: textColor}}
    >
      <div className={classes.firstColumn}>
        <div className={classes.title}>{title}</div>
        <div className={classes.author}>{question_text}</div>
        <div className={classes.options}>
          {options.map((option, index) => (
            <div className={classes.option} key={index}>{option}</div>
          ))}
        </div>
      </div>
      <div className={classes.secondColumn}>
        <div className={classes.description}>{description}</div>
        <Button >
          Подробнее
        </Button>
      </div>      
    </div>
  );
};
