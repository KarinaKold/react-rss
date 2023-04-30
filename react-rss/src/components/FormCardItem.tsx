import React from 'react';
import { IUser } from './Form';

export const FormCard = ({ username, birthday, country, gender, file }: IUser) => {
  return (
    <div className="form-card">
      <div>
        <b>Username: </b> {username}
      </div>
      <div>
        <b>Birthday: </b> {birthday}
      </div>
      <div>
        <b>Country: </b> {country}
      </div>
      <div>
        <b>Gender: </b> {gender}
      </div>
      <div className="align-self-center">
        <img className="w-30 h-30" src={file} alt={username} />
      </div>
    </div>
  );
};
