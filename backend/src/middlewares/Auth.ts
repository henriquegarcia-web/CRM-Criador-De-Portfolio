const User = require('../models/User')

module.exports = {
  private: async (req, res, next) => {
    if (!req.query.token && !req.body.token) {
      res.status(401).json({ message: 'Not allowed' })
      return
    }

    const token = req.query.token || req.body.token

    if (!token) {
      res.status(401).json({ message: 'Not allowed' })
      return
    }

    const user = await User.findOne({ token })

    if (!user) {
      res.status(401).json({ message: 'Not allowed' })
      return
    }

    next()
  }
}
