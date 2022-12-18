let joinObject = (params: object): string => {
  console.log('params joinObject', params);
  let obj = JSON.parse(JSON.stringify(params));
  let arr: string[] = [];
  for (const key in obj) {
    arr.push(`${[key]}=${obj[key]}`);
  }

  return arr.join('&');
};

export default joinObject;
