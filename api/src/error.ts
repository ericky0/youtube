class CustomError extends Error {
  status = 404;
}

export const createError = (status: number, message: string) => {
  const err = new CustomError()
  err.status = status
  err.message = message
  return err
}