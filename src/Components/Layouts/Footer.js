import React, {Component} from 'react';
import {AppBar, Tabs} from 'material-ui';
import {Tab} from 'material-ui/Tabs';
import withWidth from 'material-ui/utils/withWidth';
import {withContext} from '../../context';

class Footer extends Component{
  onIndexSelect = (e, index) => {
    const {onCategorySelect, muscles} = this.props;
    onCategorySelect(index === 0 ? '' : muscles[index - 1])
  }
  
  getIndex = () => {
    const {category, muscles} = this.props;
    return category
      ? muscles.findIndex(group => group === category) + 1
      : 0;
  }
  
  render() {
    const {width, muscles} = this.props;
    
    return (
      <AppBar position='static'>
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
        >
          <Tab label="All" />
          {muscles.map(group =>
            <Tab key={group} label={group} />
          )}
        </Tabs>
      </AppBar>
    );
  }
}

export default withContext(withWidth()(Footer))
