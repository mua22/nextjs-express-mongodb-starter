const processJoiErrors = (error) => {
  let errors = {};
  error.details.map((err) => {
    errors[err.context.key] = err.message;
  });
  return errors;
};

export default processJoiErrors;
