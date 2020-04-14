import React, {Component} from 'react';
//Function Component
export default function FirstComponent() {
    return (
      <div className="firstComponent">
        First Component
      </div>
    );
  }

//Class Component
export class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
          Second Component
      </div>
    );
  }
}