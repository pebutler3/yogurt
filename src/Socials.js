import React, { Component } from 'react';

class SocialLinks extends Component {

  render() {
    return(
      <ul className="socials">
        <li>
          <a href={this.props.url}>
            <div className={this.props.icon}></div>
            <div>
              <h2>{this.props.name}</h2>
              <span>{this.props.url}</span>
            </div>
          </a>
        </li>
      </ul>
    );
  }

}

export default SocialLinks;
