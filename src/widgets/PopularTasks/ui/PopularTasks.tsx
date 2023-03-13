import { Typography } from '@mui/material';
import classes from './PopularTasks.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { useEffect } from 'react';
import { getPopularTasks } from '../model/popularTasksSlice';
import { hardCodedpopularTasks } from '../model/popularTasksList';
import { TaskCard, TaskCardProps } from '../../../shared/ui/TaskCard/TaskCard';
import { styleOptions } from '../model/popularTasksList';

export const PopularTasks = () => {

  const dispatch = useAppDispatch();
  const popularTasks: TaskCardProps[] = useAppSelector((state) => state.popularTasks);

  /**
   * @description: Fetch and place the Categories to the Redux store on component mount
   */
  useEffect(() => {
    dispatch(getPopularTasks());
  }, []);

  return (
    <div className={classes.PopularTasks}>
      <div className={`${classes.tasksWrapper} wrapper`}>
        <Typography 
          sx={{
            fontSize: '2rem', 
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontWeight: 700, 
            color: '#000000',
            textAlign: 'left',
          }}
        >
          Популярные задачи
        </Typography>
        <div className={classes.popularTasksList}>
          {(popularTasks.length > 0) ? popularTasks.map((task: TaskCardProps, index) => (
            <TaskCard 
              key={task.title}
              backgroundColor={styleOptions[index].backgroundColor}
              options={task.options} 
              textColor={styleOptions[index].textColor} 
              title = {task.title} 
              question_text = {task.question_text}
              description = {task.description}            
            />
              
          )) : hardCodedpopularTasks.map((task: TaskCardProps) => (
            <TaskCard 
              key={task.title}
              backgroundColor={task.backgroundColor}
              options={task.options} 
              textColor={task.textColor} 
              title = {task.title} 
              question_text = {task.question_text}
              description = {task.description}            
            />
          ))}
        </div>
      </div>      
    </div>
  )
}
