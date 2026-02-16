class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const handleError = (error) => {
  console.error('Error:', error);
  
  if (error.isOperational) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      success: false,
      error: 'Internal server error'
    })
  };
};

module.exports = { AppError, handleError };