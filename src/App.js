import React, { Component } from 'react';
import jQuery from 'jquery';

import SocialLinks from './Socials';
import Classics from './Classics';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      socials: []
    };

  }

  componentWillMount() {
    this._fetchSocials();
  }

  render() {

    const socials = this._getSocials();

    return(
      <div className="modalWrapper">

        <a href="#modal-one" className="chat icon"></a>

        <div className="modal" id="modal-one" aria-hidden="true">

          <div className="modal-dialog">

            <div className="modal-header">
              <h2>Contact Me</h2>
              <a href="#close" className="btn-close" aria-hidden="true">×</a>
            </div>

            <div className="modal-body">
            {socials}
            <div className="modal-header">
             <h2>Classics</h2>
            </div>
             <Classics />
            </div>

            <div className="modal-footer">
            </div>

          </div>

        </div>

      </div>
     )
  }

  _getSocials() {
    return this.state.socials.map((social) => {
      return <SocialLinks name={social.name}
               url={social.url}
               key={social.id}
               icon={social.icon}/>
    });
  }

  _fetchSocials() {
    jQuery.ajax({
      method: 'GET',
      url: 'socials.json',
      success: (socials) => {
        this.setState({socials})
      }
    });
  }

}

export default App;
