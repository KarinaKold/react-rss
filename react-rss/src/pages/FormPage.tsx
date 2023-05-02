import React from 'react';
import { useAppSelector } from '../store/store';
import { FormModel } from '../components/Form';
import { FormCard } from '../components/FormCardItem';

export const Form = () => {
  const formList = useAppSelector((state) => state.form);

  return (
    <>
      <h2>Form</h2>
      <FormModel />
      <div className="form-card_list">
        {formList.map((item) => (
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
