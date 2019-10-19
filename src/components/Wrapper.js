import React from "react";
import '../style/Wrapper.css';
import Header from './Header'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
      </div>
    );
  }
}

export default Wrapper;
