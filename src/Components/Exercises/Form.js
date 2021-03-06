import React, { Component } from "react";
import {TextField, Select, Button} from 'material-ui';
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";

export default
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
      
      //this.setState(this.getInitState());
    }

    render() {
      const {title, description, muscles} = this.state;
      const { muscles: categories, exercise } = this.props;
      
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            fullWidth
          />
          <br />
          <FormControl fullWidth>
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
            fullWidth
          />
          <br/>
          <Button
            onClick={this.handleSubmit}
            color="primary"
            variant="raised"
            disabled={!title || !muscles}
          >
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      );
    }
  };
