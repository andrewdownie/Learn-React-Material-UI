import React, {Component, Fragment} from 'react';
import {Button, Dialog} from 'material-ui';
import {
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons';
import Form from './Form';

  

export default class extends Component {
    state = {
      open: false
    }

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    }
    
    handleFormSubmit = exercise => {
      this.handleToggle();
      
      this.props.onCreate(exercise);
    }


    render(){
      const {open} = this.state, 
            {muscles, onCreate} = this.props;
      return(
          <Fragment>
            <Button variant="fab" onClick={this.handleToggle} mini>
              <Add/>
            </Button>

            <Dialog
              open={open}
              onClose={this.handleToggle}
            >
              <DialogTitle id="form-dialog-title">
                Create a new exercise
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out the form below
                </DialogContentText>
                <Form
                  muscles={muscles}
                  onSubmit={this.handleFormSubmit}
                  />
              </DialogContent>
            </Dialog>
          </Fragment>
      )
    }
  }