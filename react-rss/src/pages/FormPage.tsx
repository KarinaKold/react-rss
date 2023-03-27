import FormModel, { IUser } from '../components/Form';
import FormCard from '../components/FormCardItem';
import React, { Component } from 'react';

type UserProps = Record<string, never>;
type UserState = {
  cards: IUser[];
};

export default class Form extends Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);

    this.state = {
      cards: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(newCard: IUser) {
    this.setState((prevState) => ({
      ...prevState,
      cards: [...prevState.cards, newCard],
    }));
  }

  render(): React.ReactNode {
    return (
      <>
        <h2 className="text-center text-3xl my-5">Form</h2>
        <FormModel onSubmit={this.onSubmit} />
        <div className="justify-items-center grid grid-cols-4 gap-3">
          {this.state.cards.map((item) => (
            <FormCard
              id={item.id}
              username={item.username}
              birthday={item.birthday}
              country={item.country}
              gender={item.gender}
              file={item.file}
              agreement={item.agreement}
              key={item.id}
            />
          ))}
        </div>
      </>
    );
  }
}
