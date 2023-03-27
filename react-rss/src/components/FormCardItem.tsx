import React, { Component } from 'react';
import { IUser } from './Form';

export default class FormCard extends Component<IUser> {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div>
          <b>Username: </b> {this.props.username}
        </div>
        <div>
          <b>Birthday: </b> {this.props.birthday}
        </div>
        <div>
          <b>Country: </b> {this.props.country}
        </div>
        <div>
          <b>Gender: </b> {this.props.gender}
        </div>
        <div className="align-self-center">
          <img className="w-30 h-30" src={this.props.file} alt={this.props.username} />
        </div>
      </div>
    );
  }
}
