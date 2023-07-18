const logger = require('../utils/logger');

const handleError = (error, res) => {
  const errorMessage = (typeof error === 'object' && error.message) ? error.message : error.toString();
  logger.error(errorMessage);

  if (res) {
    let status = error.status || 500;
    
    if (status >= 400 && status < 500) {
    return res.status(status).json({ error: errorMessage });
    }
    return res.status(status).render('server-error', { error: errorMessage });
  }

  throw new Error(errorMessage);
};

module.exports = handleError;





// const logger = require('../utils/logger');

// const handleError = (error, message, res) => {
//   const errorMessage = `${message}: ${error.message}`;
//   logger.error(errorMessage);

//   if (res) {
//     res.status(500).render('error', {
//       error: 'Internal Server Error'
//     });
//   }

//   throw new Error(errorMessage);
// };

// module.exports = handleError;

