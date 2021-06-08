/*!
 * Start Bootstrap - Bare v5.0.1 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */

// This file is intentionally blank
// Use this file to add JavaScript to your project

async function handleDelete(id) {
  try {
    await fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    }).then((data) => window.location.reload());
  } catch (err) {
    console.log(err);
  }
}

async function handleUpdate(id, key) {
  const userName = document.getElementById(`name${key}`).value;
  const userEmail = document.getElementById(`email${key}`).value;
  const userGender = document.getElementById(`male${key}`).checked
    ? "Male"
    : "Female";
  const userStatus = document.getElementById(`active${key}`).checked
    ? "Active"
    : "Inactive";

  try {
    await fetch(`http://localhost:8000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: userName,
        gender: userGender,
        email: userEmail,
        status: userStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => window.location.reload());
  } catch (err) {
    console.log(err);
  }
}
