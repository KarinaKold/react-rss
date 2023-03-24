import React, { Component } from 'react';
import { IUser } from './Form';

export default class FormCard extends Component<IUser> {
  render() {
    return (
      <div className="justify-items-center grid grid-cols-4 gap-3">
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
          <img className="w-20 h-20" src={this.props.file} alt={this.props.username} />
        </div>
      </div>
    );
  }
}
