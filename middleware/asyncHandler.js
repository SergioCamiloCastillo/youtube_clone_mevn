const asyncHandler = fn => (erq, res, next) => Promise.resolve(fn(req, res, next)).catch(next)
module.exports = asyncHandler 