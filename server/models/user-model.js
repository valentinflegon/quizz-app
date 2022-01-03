const mongoose = require('mongoose');
const { Schema } = mongoose;

const { isEmail } = require('validator'); //require to valid an email address
const bcrypt = require('bcryptjs'); //require to hash a password
const SALT_WORK_FACTOR = 10;


const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid email'],
    createIndexes: { unique: true }
  },
});

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
