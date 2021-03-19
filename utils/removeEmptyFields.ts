import cloneObject from './cloneObject';

const removeEmptyFields = (obj: Object): Object => {
  const newObject = cloneObject(obj);

  Object.keys(newObject).forEach((key) => {
    if (newObject[key] && typeof newObject[key] === 'object') {
      removeEmptyFields(newObject[key]);
    } else if (
      newObject[key] === null ||
      newObject[key] === undefined ||
      newObject[key] === ''
    ) {
      delete newObject[key];
    }
  });

  return newObject;
};

export default removeEmptyFields;
