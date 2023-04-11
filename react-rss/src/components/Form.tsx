import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validDate, validFile, validName, validGender, validCountry } from '../utils/validation';

export interface IUser {
  id: number;
  username: string;
  birthday: string;
  country: string;
  gender: string;
  file: FileList;
  agreement?: boolean;
}

interface FormProps {
  onSubmit: (newCard: IUser) => void;
}

export const FormModel = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({ reValidateMode: 'onSubmit' });

  const [message, setMessage] = useState({ isMessage: '' });

  const onSubmit = (item: IUser) => {
    const username = item.username;
    const birthday = item.birthday;
    const country = item.country;
    const gender = item.gender;
    const file = URL.createObjectURL(item.file[0]) as unknown as FileList;

    const newCard: IUser = {
      id: Date.now(),
      username,
      birthday,
      country,
      gender,
      file,
    };
    props.onSubmit(newCard);

    setMessage({ ...message, isMessage: `Success!` });
    reset();
    setTimeout(() => {
      setMessage({ ...message, isMessage: `` });
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="m-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="name"
          {...register('username', {
            required: true,
            minLength: 2,
            validate: {
              validate: (value) => validName(value),
            },
          })}
          className="block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
        />
        {errors.username && (
          <span className="text-red-500">The length must be at least 2 characters in English</span>
        )}
        <br />
        <label htmlFor="birthday">Birthday </label>
        <input
          type="date"
          {...register('birthday', {
            required: true,
            validate: {
              validate: (value) => validDate(value),
            },
          })}
        />
        <br />
        {errors.birthday && (
          <span className="text-red-500">Choose date later then 1910, not tomorrow</span>
        )}
        <br />
        <label htmlFor="country">Country </label>
        <select
          id="country"
          {...register('country', {
            required: true,
            validate: {
              validate: (value) => validCountry(value),
            },
          })}
        >
          <option value="">-</option>
          <option value="Narnia">Narnia</option>
          <option value="Gondor">Gondor</option>
          <option value="Neverland">Neverland</option>
        </select>
        <br />
        {errors.country && <span className="text-red-500">Choose your country</span>}
        <br />
        <div>
          <p>Gender:</p>
          <label htmlFor="male">Male </label>
          <input
            type="radio"
            value="male"
            {...register('gender', {
              required: true,
              validate: {
                validate: (value) => validGender(value),
              },
            })}
          />
          <br />
          <label htmlFor="female">Female </label>
          <input
            type="radio"
            value="female"
            {...register('gender', {
              required: true,
              validate: {
                validate: (value) => validGender(value),
              },
            })}
          />
        </div>
        {errors.gender && <span className="text-red-500">You need to choose your gender!</span>}
        <br />
        <label>Upload file </label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register('file', {
            required: true,
            validate: {
              validate: (value) => validFile(value[0].name),
            },
          })}
        />
        <br />
        {errors.file && (
          <span className="text-red-500">Check your image file: jpg, jpeg or png</span>
        )}
        <br />
        <label>I agree to submit my data </label>
        <input
          type="checkbox"
          {...register('agreement', {
            required: true,
            validate: {
              validate: (value) => value === true,
            },
          })}
        />
        {errors.agreement && <span className="text-red-500"> It is necessary!</span>}
        <br />
        <button
          type="submit"
          className="block min-w-0 my-2 py-1 px-2 flex-auto rounded border border-solid hover:bg-cyan-500 hover:text-gray-200"
        >
          Submit
        </button>
      </form>
      <hr />
      {message.isMessage && (
        <div className="flex justify-center text-green-700">
          <b>{message.isMessage}</b>
        </div>
      )}
    </>
  );
};
