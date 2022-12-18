let objectToForm = (data: object): FormData => {
  let obj = JSON.parse(JSON.stringify(data));
  const form = new FormData();
  if (obj.keys().length > 0) {
    for (const key in obj) {
      form.append(key, obj[key]);
    }
  }
  return form;
};

export default objectToForm;
