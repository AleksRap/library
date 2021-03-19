type ConvertObject = {
  [key: string]: any;
}

export const camelCaseToSnakeCase = (convertObject: ConvertObject) => {
  const newObject: ConvertObject = {};
  Object.keys(convertObject).forEach((key) => {
    const newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
    if (key === 'filter') {
      newObject[key] = convertObject[key];
      return;
    }
    if (typeof convertObject[key] === 'object' && !Array.isArray(convertObject[key])) {
      newObject[newKey] = camelCaseToSnakeCase(convertObject[key]);
    } else if (Array.isArray(convertObject[key])) {
      newObject[newKey] = convertObject[key].map((item) => camelCaseToSnakeCase(item));
    } else {
      newObject[newKey] = convertObject[key];
    }
    if (newKey === 'ordercolumn') {
      newObject[newKey] = convertObject[key].replace(/([A-Z])/g, '_$1').toLowerCase();
    }
  });
  return newObject;
};

export const snakeCaseToCamelCase = (convertObject: ConvertObject) => {
  if (typeof convertObject === 'object' && convertObject) {
    const newObject: ConvertObject = {};
    Object.keys(convertObject).forEach((key) => {
      const newKey = key.replace(/(_\w)/g, (k) => k[1].toUpperCase());
      if (typeof convertObject[key] === 'object' && !Array.isArray(convertObject[key])) {
        newObject[newKey] = snakeCaseToCamelCase(convertObject[key]);
      } else if (Array.isArray(convertObject[key])) {
        newObject[newKey] = convertObject[key].map((item) => snakeCaseToCamelCase(item));
      } else {
        newObject[newKey] = convertObject[key];
      }
    });
    return newObject;
  }
  return convertObject;
};
