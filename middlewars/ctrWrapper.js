const ctrWrapper = (ctr) => {
  return async (rec, res, next) => {
    try {
      await ctr(rec, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = ctrWrapper;
