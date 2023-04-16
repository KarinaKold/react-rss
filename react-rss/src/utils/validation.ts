export const validName = (name: string) => {
  if (name.length < 2 || name.length > 20) {
    return false;
  }
  const regex = new RegExp(/^[a-z]*$/);
  return regex.test(name);
};

export const validDate = (date: string) => {
  const today = new Date();
  const inputDate = new Date(date);
  const minBirthDay = new Date('1910-01-01');
  return inputDate > minBirthDay && inputDate <= today;
};

export const validFile = (fileName: string) => {
  const regex = new RegExp(/\.(jpe?g|png)/i);
  return regex.test(fileName);
};

export const validGender = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validCountry = (name: string) => {
  if (name.length === 0) return false;
  return true;
};
