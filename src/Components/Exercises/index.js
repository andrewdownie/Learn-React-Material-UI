import React, {Fragment} from 'react';
import {Grid, Paper, Typography, List, IconButton} from 'material-ui';
import {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import {Delete, Edit} from '@material-ui/icons';
import {withStyles} from 'material-ui/styles';
import Form from './Form';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    padding:20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56 - 48px)',
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
});

export default withStyles(styles)(({
  classes,
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
      id,
      title = "Welcome",
      description = "Please select an exercise from the list on the left"
    },
  onDelete,
  onSelectEdit,
  onEdit
  }) => (
  <Grid container className={classes.container}>
    <Grid xs={12} sm={6} item className={classes.item}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) => 
          !category ||  category === group
           ? <Fragment key={group}>
            <Typography variant="headline" style={{textTransform: 'capitalize'}} color='secondary'>
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({id, title}) =>
                <ListItem
                  key={id}
                  button
                  onClick={() => onSelect(id)}
                >
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                   <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                     <Edit />
                   </IconButton>
                   <IconButton color='primary' onClick={() => onDelete(id)}>
                     <Delete/>
                   </IconButton>
                  
                </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </Fragment>
           : null
        )}
      </Paper>
    </Grid>
    <Grid xs={12} sm={6} item className={classes.item}>
      <Paper className={classes.paper}>
        <Typography variant="display1" color='secondary'>
          {title}
        </Typography>
        {
          editMode
          ? <Form
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
              />
          : <Fragment>
              <Typography variant="subheading" style={{marginTop: 20}}>
                {description}
              </Typography>
            </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>
))