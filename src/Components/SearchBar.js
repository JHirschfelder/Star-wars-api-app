import React from 'react';

import axios from 'axios'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }


  GenerateRandomSet(){
    const set = new Set()
    while(set.size < 10) {
      set.add(Math.floor(Math.random() * 83) + 1)
    }
    return set
  }

    render() {
      return <input type="text"></input>;
    }
 }

 export default SearchBar