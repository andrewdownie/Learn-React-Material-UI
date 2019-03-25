import React, { Component } from "react";
import {TextField, Select, Button} from 'material-ui';
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();
  
  getInitState() {
    const { exercise } = this.props;
  
    return exercise ? exercise : {
      title: "",
      description: "",
      muscles: ""
    }
  }

  componentWillReceiveProps({exercise}) {
    this.setState({
      ...exercise
    });
  }
  
    handleChange = (name) => ({target: {value}}) => {
      this.setState({
        [name]: value
      });
    }
    
    handleSubmit = () => {
      //TODO: validation needed
      
      
      this.props.onSubmit({
        id: this.state.title.toLowerCase().replace(/ /g, '-'),
        ...this.state,
      });
      
      this.setState(this.getInitState());
    }

    render() {
      const {title, description, muscles} = this.state;
      const { classes, muscles: categories, exercise } = this.props;
      
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            className={classes.FormControl}
          />
          <br/>
          <Button
            onClick={this.handleSubmit}
            color="primary"
            variant="raised"
          >
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      );
    }
  }
);
