import React from 'react';
import { useAppSelector } from '../store/store';
import { FormModel } from '../components/Form';
import { FormCard } from '../components/FormCardItem';

export const Form = () => {
  const formList = useAppSelector((state) => state.form);

  return (
    <>
      <h2 className="text-center text-3xl my-5">Form</h2>
      <FormModel />
      <div className="justify-items-center grid grid-cols-4 gap-3">
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
