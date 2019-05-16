const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    //PetsRout
    this.get('#/addPet' , handlers.getAddPet);
    this.post('#/addPet' , handlers.createPet);

    this.get('#/allMyPets' , handlers.getAllMyPets);
    this.get('#/getEditPet/:id' , handlers.getEditPet);
    this.post('#/editPet/:id', handlers.postEditPet);
    this.get('#/delete/:id', handlers.deletePet2);
    this.get('#/petDetails/:id' , handlers.getPetDetails);

    //Dashboard
    this.get('#/dashboard' , handlers.AllOtherPets);
    this.get('#/allCats' , handlers.getAllCats);
    this.get('#/allDogs' , handlers.getAllDogs);
    this.get('#/allParrots' , handlers.getAllParrots);
    this.get('#/allOthers' , handlers.getAllOthers);
    this.get('#/allReptiles' , handlers.getAllReptiles);
    


    // ADD YOUR ROUTES HERE
  });
  app.run('#/home');
});