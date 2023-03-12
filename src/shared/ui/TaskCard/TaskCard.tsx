import { Button } from '@mui/material';
import classes from './TaskCard.module.scss';
import { OptionsList, OptionsListProps } from './OptionsList';

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
  options?: OptionsListProps;
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
        <div className={classes.text}>{question_text}</div>
        <div className={classes.options}>
          <OptionsList {...options} />
        </div>
      </div>
      <div className={classes.secondColumn}>
        <div className={classes.text}>{description}</div>
        <Button 
          variant="contained"
          sx={{
            background: 'none',
            color: textColor,
            textDecoration: 'underline',
            marginLeft: 0,
            paddingLeft: 0,
            '&:hover': {
              color: 'var(--accent-color)',
              background: 'none'
            }
          }}
        >
          Подробнее
        </Button>
      </div>      
    </div>
  );
};
