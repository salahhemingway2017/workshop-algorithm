import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'step1',get peanut butter and jelly jars and 2 slices of bread and a knife 
        'step2'open the jelly and peanut butter jars and pick up the knife
        'step3',start putting jelly on one bread and peanut butter on the other
        'step4',close the jars back and put it back where it was
        'step5'put both slices of bread together and enjoy 
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
