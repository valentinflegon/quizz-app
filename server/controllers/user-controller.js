const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

createUser = async (req, res) => {
  const { body } = req;
  const { username, email } = body;
  try {
    const usernameExist = await User.findOne({ username: username });
    const emailExist = await User.findOne({ email: email });
    if (usernameExist) {
      return res.status(200).json({
        success: false,
        message: { username: "Username already exist" }
      });
    }
    if (emailExist) {
      return res.status(200).json({
        success: false,
        message: { email: "Email already exist" }
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "failed to load data to compare with"
    });
  }

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    })
  }

  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: user,
        message: 'User created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'User not created!',
      });
    });
}

updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found!',
      });
    }
    if (body.username) user.username = body.username;
    if (body.password) user.password = body.password;
    if (body.email) user.email = body.email;
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user,
          message: 'User updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'User not updated!',
        });
      })
  })
}

deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404)
        .json({ success: false, error: `User not found` })
    }

    return res.status(200).json({ success: true, data: user });
  }).catch(err => console.log(err))
}

deleteUserByUsername = async (req, res) => {
  await User.findOneAndDelete({ username: req.params.username }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404)
        .json({ success: false, error: `User not found, delete user by username failed` })
    }

    return res.status(200).json({ success: true, data: user });
  }).catch(err => console.log(err))
}

// Get User by Id
getUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    return res.status(404).json({
      success:false,
      data: "User by id not found"
    });
  }
}

// Get User by Id
getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if(!user) return res.sendStatus(404).json({
      success: false,
      data: "User by username not found"
    });
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    return res.sendStatus(404);
  }
}

// Get all Users
getUsers = async (req, res) => {
  let total = await User.countDocuments({});
  let limit = parseInt(total);
  try {
    const users = await User.find().limit(limit);
    res.status(200).json({
      success: true,
      data: users,
      total: total.toString()
    });
  } catch (err) {
    return { success: false, message: "Users not found " + err };
  }
}

//Log in
logIn = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password);
  const user = await User.findOne({ username: username });
  if (user == undefined)
    return res.status(200).json({
      success: false,
      message: "username inconnu"
    });
  else {
    bcrypt.compare(password, user.password).then(
      (response) => {
        if (!response)
          return res.status(200).json({
            success: response,
            message: "Username and password does not match !"
          });
        else {
          return res.status(200).json({success: true});
        }
      }
    );
  }
};

// Add score to user
addScore = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found!',
      });
    }
    if (body.scores.distancePays) user.scores.distancePays.push(body.scores.distancePays);
    if (body.scores.distanceVilles) user.scores.distanceVilles.push(body.scores.distanceVilles);
    if (body.scores.populationPays) user.scores.populationPays.push(body.scores.populationPays);
    if (body.scores.populationVilles) user.scores.populationVilles.push(body.scores.populationVilles);
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user,
          message: "User score updated!",
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'User score not updated!',
        });
      })
  })
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  deleteUserByUsername,
  getUsers,
  getUserById,
  getUserByUsername,
  logIn,
  addScore,
}