import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';
import CreateDialog from '../Exercises/Dialogs/Create';

export default ({muscles, onExerciseCreate}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise database
      </Typography>
      
      <CreateDialog
        onCreate={onExerciseCreate}
        muscles={muscles}
      />
    </Toolbar>
  </AppBar>
);
