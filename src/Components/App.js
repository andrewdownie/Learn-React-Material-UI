import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js';

export default class extends Component{
  state =  {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;
      
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];
      
      return exercises;
    }, {}));
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  
  handleExerciseSelected = id => {
    console.log("meow");
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const {category, exercise} = this.state;
    
    return(
      <Fragment>
        <Header/>
        
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExcercisesSelected}
        />
        
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}
