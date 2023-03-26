import React, { Component } from 'react';

export interface IUser {
  id: number;
  username?: string;
  birthday?: string;
  country?: string;
  gender: string;
  file: string;
  agreement?: string;
}

interface FormProps {
  onSubmit: (newCard: IUser) => void;
}

interface FormState {
  isValid: boolean;
}

export default class FormModel extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
  }

  usernameInput: React.RefObject<HTMLInputElement> = React.createRef();
  bdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  countrySelect: React.RefObject<HTMLSelectElement> = React.createRef();
  femaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  maleInput: React.RefObject<HTMLInputElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();
  agreementCheck: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = this.usernameInput.current?.value;
    const birthday = this.bdayInput.current?.value;
    const country = this.countrySelect.current?.value;
    const gender = this.femaleInput.current?.checked ? 'female' : 'male';
    const file = URL.createObjectURL(this.fileInput.current!.files![0]);
    const newCard: IUser = {
      id: Date.now(),
      username,
      birthday,
      country,
      gender,
      file,
    };
    this.props.onSubmit(newCard);
  };

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="m-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            ref={this.usernameInput}
            minLength={2}
            id="name"
            className="block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          />
          <br />
          <label htmlFor="birthday">Birthday </label>
          <input type="date" ref={this.bdayInput} required />
          <br />
          <label htmlFor="country">Country </label>
          <select ref={this.countrySelect} className="" required id="country" name="country">
            <option value="narnia">Narnia</option>
            <option value="gondor">Gondor</option>
            <option value="neverland">Neverland</option>
          </select>
          <br />
          <div>
            <p>Gender </p>
            <label htmlFor="male">Male</label>
            <input ref={this.maleInput} name="sex" value="male" required type="radio" />
            <label htmlFor="female">Female</label>
            <input ref={this.femaleInput} name="sex" value="female" required type="radio" />
          </div>
          <br />
          <label>Upload file </label>
          <input type="file" ref={this.fileInput} required />
          <br />
          <label>You agree to submit your data </label>
          <input type="checkbox" ref={this.agreementCheck} required />
          <br />
          <button
            type="submit"
            className="block min-w-0 my-2 py-1 px-2 flex-auto rounded border border-solid hover:bg-cyan-500 hover:text-gray-200"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
