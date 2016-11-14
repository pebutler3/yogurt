import React, { Component } from 'react';

class Classics extends Component {
  render() {
    return(
      <ul className="classics">
        <li>
          <a href="">
            <div className="fa fa-phone"></div>
            <div>
              <h2>Phone</h2>
              <span>(555) 555-5554</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="fa fa-envelope-o"></div>
            <div>
              <h2>Email</h2>
              <span>email@email.com</span>
            </div>
          </a>
        </li>
      </ul>
    )
  }
}

export default Classics;
