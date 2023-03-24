import React, { Component } from 'react';

export interface IUser {
  username: '';
  birthday: '';
  country: '';
  gender: '';
  file: '';
  agreement: '';
}

interface FormProps {
  addCard: (newCard: IUser) => void;
}

interface FormState {
  isValid: boolean;
}

export default class FormList extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
  }

  state = {
    username: '',
    birthday: '',
    country: '',
    gender: '',
    file: '',
    agreement: '',
  };

  usernameInput: React.RefObject<HTMLInputElement> = React.createRef();
  bdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  countrySelect: React.RefObject<HTMLSelectElement> = React.createRef();
  agreementCheck: React.RefObject<HTMLInputElement> = React.createRef();
  femaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  maleInput: React.RefObject<HTMLInputElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCard: IUser = {
      id: Date.now(),
      username,
      birthday,
      country,
      gender,
      file,
    };
    this.props.addCard(newCard);
  };

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" ref={this.usernameInput} minLength={2} id="name" />
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
