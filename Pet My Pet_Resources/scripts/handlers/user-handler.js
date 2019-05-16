handlers.getRegister = function (ctx) {
  ctx.loadPartials({
    header: '../views/common/header.hbs',
    footer: '../views/common/footer.hbs'
  }).then(function () {
    this.partial('../views/user/register.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.getLogin = function (ctx) {
  ctx.loadPartials({
    header: '../views/common/header.hbs',
    footer: '../views/common/footer.hbs'
  }).then(function () {
    this.partial('../views/user/login.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  if (username.length < 3) {
    notifications.showError('Username must be at least 3 symbols');
    return;
  }
  else if (password.length < 6) {
    notifications.showError('Password must be at least 6 symbols');
    return;
  }
  userService.register(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('User registered successfully');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
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

  if (username.length < 3) {
    notifications.showError('Username must be at least 3 symbols');
    return;
  }
  else if (password.length < 6) {
    notifications.showError('Password must be at least 6 symbols');
    return;
  }

  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('User logged in successfully');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}
