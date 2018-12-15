class Utils {
  static succeed(data) {
    return {
      status: 'successful',
      data,
    };
  }

  static fail(err, message) {
    return {
      status: 'failed',
      err,
      message,
    };
  }
}

module.exports = Utils;
