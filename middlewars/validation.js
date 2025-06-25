const validation = (schema) => {
  return (rec, res, next) => {
    const { body } = rec;

    const { error } = schema.validate(body);
    if (error) {
      next(error);
    }
    next();
  };
};

module.exports = validation;
