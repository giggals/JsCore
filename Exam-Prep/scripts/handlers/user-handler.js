handlers.getRegister = function (ctx) {
  ctx.loadPartials({
    header: '../views/common/header.hbs',
    footer: '../views/common/footer.hbs'
  }).then(function () {
    this.partial('../views/user/registerView.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.getLogin = function (ctx) {
  ctx.loadPartials({
    header: '../views/common/header.hbs',
    footer: '../views/common/footer.hbs'
  }).then(function () {
    this.partial('../views/user/loginView.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  // let repeatPassword = ctx.params.repeatPassword;
  // if (repeatPassword !== password) {
  //   notifications.showError('Passwords must match');
  //   return;
  // }
  if (username.length >= 3 && password.length >= 6) {
    userService.register(username, password).then((res) => {
      userService.saveSession(res);
      notifications.showSuccess('User registered successfully');
      ctx.redirect('#/home');
    });
  }
  else {
    notifications.showError('Error: Invalid credentials.Please retry your request with correct credentials');
  }

}

handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {
    sessionStorage.clear();
    notifications.showSuccess('User logged out successfully');
    ctx.redirect('#/home');
  })
}

handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('User logged in successfully');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}