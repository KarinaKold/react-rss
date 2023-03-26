import React, { Component } from 'react';
import { validDate, validFile, validName } from '../utils/validation';

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
  usernameValid: boolean;
  bdayValid: boolean;
  fileValid: boolean;
  agreeValid: boolean;
}

export default class FormModel extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      usernameValid: true,
      bdayValid: true,
      fileValid: true,
      agreeValid: true,
    };
  }

  usernameInput: React.RefObject<HTMLInputElement> = React.createRef();
  bdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  countrySelect: React.RefObject<HTMLSelectElement> = React.createRef();
  femaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  maleInput: React.RefObject<HTMLInputElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();
  agreementCheck: React.RefObject<HTMLInputElement> = React.createRef();

  checkValid() {
    const username = validName(this.usernameInput.current?.value ?? '');
    const birthday = validDate(this.bdayInput.current?.value ?? '');
    const file = validFile(this.fileInput.current?.value ?? '');
    const agreement = this.agreementCheck.current?.checked ?? false;

    this.setState({ usernameValid: username });
    this.setState({ bdayValid: birthday });
    this.setState({ fileValid: file });
    this.setState({ agreeValid: agreement });
    return username && birthday && file;
  }

  clearForm() {
    if (this.usernameInput.current) this.usernameInput.current.value = '';
    if (this.bdayInput.current) this.bdayInput.current.value = '';
    if (this.maleInput.current) this.maleInput.current.checked = false;
    if (this.femaleInput.current) this.femaleInput.current.checked = false;
    if (this.fileInput.current) this.fileInput.current.value = '';
    if (this.agreementCheck.current) this.agreementCheck.current.checked = false;
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = this.checkValid();

    const username = this.usernameInput.current?.value;
    const birthday = this.bdayInput.current?.value;
    const country = this.countrySelect.current?.value;
    const gender = this.femaleInput.current?.checked ? 'female' : 'male';
    const file = URL.createObjectURL(this.fileInput.current!.files![0]);

    if (!isValid) return;
    const newCard: IUser = {
      id: Date.now(),
      username,
      birthday,
      country,
      gender,
      file,
    };
    this.props.onSubmit(newCard);
    this.clearForm();
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
            required
            className="block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          />
          {!this.state.usernameValid && (
            <span className="text-red-500">
              The length must be at least 2 characters in English
            </span>
          )}
          <br />
          <label htmlFor="birthday">Birthday </label>
          <input type="date" ref={this.bdayInput} required />
          {!this.state.bdayValid && (
            <span className="text-red-500">Choose date later then 1910</span>
          )}
          <br />
          <label htmlFor="country">Country </label>
          <select ref={this.countrySelect} className="" required id="country" name="country">
            <option value="Narnia">Narnia</option>
            <option value="Gondor">Gondor</option>
            <option value="Neverland">Neverland</option>
          </select>
          <br />
          <div>
            <p>Gender:</p>
            <label htmlFor="male">Male </label>
            <input type="radio" ref={this.maleInput} value="male" name="gender" required />
            <br />
            <label htmlFor="female">Female </label>
            <input type="radio" ref={this.femaleInput} value="female" name="gender" required />
          </div>
          <br />
          <label>Upload file </label>
          <input type="file" ref={this.fileInput} accept=".jpg, .jpeg, .png" required />
          {!this.state.fileValid && (
            <span className="text-red-500">Check your image file: jpg, jpeg or png</span>
          )}
          <br />
          <label>I agree to submit my data </label>
          <input type="checkbox" ref={this.agreementCheck} required />
          {!this.state.agreeValid && <span className="text-red-500">It is necessary!</span>}
          <br />
          <button
            type="submit"
            className="block min-w-0 my-2 py-1 px-2 flex-auto rounded border border-solid hover:bg-cyan-500 hover:text-gray-200"
          >
            Submit
          </button>
        </form>
        <hr />
      </>
    );
  }
}
