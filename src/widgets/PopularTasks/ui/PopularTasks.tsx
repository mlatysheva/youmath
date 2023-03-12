import { Typography } from '@mui/material';
import classes from './PopularTasks.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { useEffect } from 'react';
import { getPopularTasks } from '../model/slice';
import { hardCodedpopularTasks } from '../model/popularTasksList';
import { TaskCard, TaskCardProps } from '../../../shared/ui/TaskCard/TaskCard';

export const PopularTasks = () => {

  const dispatch = useAppDispatch();
  const popularTasks = useAppSelector((state) => state.popularTasks);

  /**
   * @description: Fetch and place the Categories to the Redux store on component mount
   */
  useEffect(() => {
    dispatch(getPopularTasks());
    console.dir(hardCodedpopularTasks);
  }, []);

  return (
    <div className={classes.PopularTasks}>
      <div className={`${classes.tasksWrapper} wrapper`}>
        <Typography 
          sx={{
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#000000',
            textAlign: 'left',
          }}
        >
          Популярные задачи
        </Typography>
        <div className={classes.popularTasksList}>
          {(popularTasks.length > 0) ? popularTasks.map((task: TaskCardProps) => (
            <TaskCard 
              key={task.title}
              backgroundColor={task.backgroundColor}
              options={[]} 
              textColor={task.textColor} 
              title = {task.title} 
              question_text = {task.question_text}
              description = {task.description}            
            />
              
          )) : hardCodedpopularTasks.map((task: TaskCardProps) => (
            <TaskCard 
              key={task.title}
              backgroundColor={task.backgroundColor}
              options={[]} 
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
