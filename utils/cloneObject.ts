const cloneObject = (obj: Object): Object => JSON.parse(JSON.stringify(obj));

export default cloneObject;
