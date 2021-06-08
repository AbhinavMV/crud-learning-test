const { default: axios } = require("axios");


exports.getUsers = async (request, response) => {
  let users = await axios.get("http://localhost:8000/api/users");
  response.render("layout", {
    template: "userList",
    usersList: users.data,
  });
};

exports.userAddForm = (request, response) => {
  response.render("layout", { template: "userForm" });
};
