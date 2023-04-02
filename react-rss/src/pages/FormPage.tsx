import { FormModel, IUser } from '../components/Form';
import { FormCard } from '../components/FormCardItem';
import React, { useState } from 'react';

export const Form = () => {
  const [cards, setCards] = useState<IUser[]>([]);

  const onSubmit = (newCard: IUser) => {
    setCards((prevState) => [...prevState, newCard]);
  };

  return (
    <>
      <h2 className="text-center text-3xl my-5">Form</h2>
      <FormModel onSubmit={onSubmit} />
      <div className="justify-items-center grid grid-cols-4 gap-3">
        {cards.map((item) => (
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
};
