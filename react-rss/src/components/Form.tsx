import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validDate, validFile, validName, validGender, validCountry } from '../utils/validation';
import { useAppDispatch } from '../store/store';
import { addToList } from '../store/formSlice';

export interface IUser {
  id: number;
  username: string;
  birthday: string;
  country: string;
  gender: string;
  file: FileList;
  agreement?: boolean;
}

export const FormModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({ reValidateMode: 'onSubmit' });

  const dispatch = useAppDispatch();

  const [message, setMessage] = useState({ isMessage: '' });

  const onSubmit = (item: IUser) => {
    const username = item.username;
    const birthday = item.birthday;
    const country = item.country;
    const gender = item.gender;
    const file = URL.createObjectURL(item.file[0]) as unknown as FileList;
    dispatch(
      addToList({
        id: Date.now(),
        username,
        birthday,
        country,
        gender,
        file,
      })
    );

    setMessage({ ...message, isMessage: `Success!` });
    reset();
    setTimeout(() => {
      setMessage({ ...message, isMessage: `` });
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
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
          className="user-form_username"
        />
        {errors.username && (
          <span className="user-form_error">
            The length must be at least 2 small characters in English
          </span>
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
          className="user-form_date"
        />
        <br />
        {errors.birthday && (
          <span className="user-form_error">Choose date later then 1910, not tomorrow</span>
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
          className="user-form_country"
        >
          <option value="">-</option>
          <option value="Narnia">Narnia</option>
          <option value="Gondor">Gondor</option>
          <option value="Neverland">Neverland</option>
        </select>
        <br />
        {errors.country && <span className="user-form_error">Choose your country</span>}
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
        {errors.gender && <span className="user-form_error">You need to choose your gender!</span>}
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
          className="user-form_file"
        />
        <br />
        {errors.file && (
          <span className="user-form_error">Check your image file: jpg, jpeg or png</span>
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
        {errors.agreement && <span className="user-form_error"> It is necessary!</span>}
        <br />
        <button type="submit" className="user-form_submit">
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
