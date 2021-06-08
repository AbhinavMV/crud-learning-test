var userDB = require("../model/model");

//create and save new user
exports.create = (request, response) => {
  if (request.body.length === 0)
    return response.status(400).send({ message: "Content cannot be empty" });
  const user = new userDB({
    name: request.body.name,
    email: request.body.email,
    gender: request.body.gender,
    status: request.body.status,
  });

  user
    .save()
    .then((data) => {
      response.redirect("/users");
    })
    .catch((error) => {
      response.status(500).send({
        message: error.message || "Some error occured",
      });
    });
};

exports.find = (request, response) => {
  if (
    Object.keys(request.query).length === 0 &&
    request.query.constructor === Object
  ) {
    userDB
      .find((err, data) => {
        if (err) response.send(err);
        else response.send(data);
      })
      .sort({ name: 1 });
  } else {
    userDB
      .find(request.query, (err, data) => {
        if (err) response.send(err);
        else response.send(data);
      })
      .sort();
  }
};

exports.delete = async (request, response) => {
  await userDB
    .findByIdAndDelete(request.params.id, (err, data) => {
      if (err) response.send(err);
    })
    .then(response.send("Deleted Successfully"));
};

exports.update = (request, response) => {
  if (
    Object.keys(request.body).length === 0 &&
    request.body.constructor === Object
  )
    response.status(400).send({ message: "Content cannot be empty" });
  else {
    let user = {};
    if (request.body.name) user.name = request.body.name;
    if (request.body.email) user.email = request.body.email;
    if (request.body.status) user.status = request.body.status;
    if (request.body.gender) user.gender = request.body.gender;
    userDB.findByIdAndUpdate(request.params.id, user, (err, data) => {
      if (err) response.send(err);
      else response.send("Item updated");
    });
  }
};
