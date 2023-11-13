import responseMessage from '../../common/responseMessage'
/**
 * @function errorHandler
 * @description error handler middleware for catching errors ocurred in app controllers
 * @param {string} err - ocurred error in controllers
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @param {function} next - function that sends request to the next middleware
 */
import messages from '../../common/messages'
import utils from '../../services/utils'
import logger from '../../services/backendLogger'

// eslint-disable-next-line no-unused-vars
export default async (err, req, res, next) => {

  utils.deleteFile(req.files)
  const { name, status, message } = err,
    sequelizeErrorDisptcher = {
      SequelizeUniqueConstraintError: messages.m.UNIQUE_CONSTRAINT_ERROR,
      SequelizeForeignKeyConstraintError:
        messages.m.FOREIGN_KEY_CONSTRAINT_ERROR,
    },
    sequelizeErrorMessage = name && sequelizeErrorDisptcher[name]

  logger.errorLog({ res, err })

  responseMessage({
    res,
    statusCode: (sequelizeErrorMessage && 400) || status || 500,
    status: 'error',
    data: status ? message : sequelizeErrorMessage || messages.m.SERVER_ERROR,
    errStack: err.stack,
  })
}
