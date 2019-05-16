handlers.getAddPet = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/pets/addPet.hbs');
    }).catch(function (err) {
        console.log(err);
    });
};

handlers.createPet = function (ctx) {
    let data = { ...ctx.params, likes: 0 };
    console.log(data);

    kinvey.post('appdata', 'pets', 'kinvey', data).then(function (res) {
        notifications.showSuccess('Pet created.');
        ctx.redirect('#/home');
    }).catch(function (err) {
        console.log(err);
    });

};

handlers.getAllMyPets = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        let id = sessionStorage.getItem('id');
        ctx.AllPets = res.filter(p => p._acl.creator == id);
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            myPet: '../views/pets/myPetPartial.hbs',
        }).then(function () {
            this.partial('../views/pets/allMyPets.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};

handlers.getEditPet = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    try {
        let data = await kinvey.get('appdata', `pets/${id}`, 'kinvey');
        ctx.pet = data;

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
        }).then(function () {
            this.partial('../views/pets/editPet.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};


handlers.postEditPet = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;
    let newDescription = ctx.params.description;

    kinvey.get('appdata' , `pets/${id}` , 'kinvey').then(function(res){
          let data = {...res};
          data.description = newDescription;
        kinvey.update('appdata' , `pets/${id}` , 'kinvey' , data).then(function(){
                notifications.showSuccess('Pet Edited');
                ctx.redirect('#/allMyPets');
        });
           
    }).catch(function(err){
            console.log(err);
    });

    // petsService.getPet(id).then(function (res) {
    //     let data = { ...res };
    //     data.description = newDescription;

    //     petsService.editPet(id, data)
    //         .then(function () {
    //             notifications.showSuccess('Updated successfully!');
    //             ctx.redirect('#/allMyPets');
    //         });
    // }).catch(function (err) {
    //     console.log(err);
    // });


};


handlers.deletePet2 = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    kinvey.remove('appdata', `pets/${id}`, 'kinvey').then(function () {
        notifications.showSuccess('Deleted');
        ctx.redirect('#/allMyPets');
    }).catch(function (err) {
        console.log(err);
    });
};

handlers.deletePet = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;
    try {
        await kinvey.remove('appdata', `pets/${id}`, 'kinvey')
        notifications.showSuccess('Pet removed successfully!');
        ctx.redirect('#/allMyPets');
    } catch (error) {
        console.log(error);
    }

};

handlers.getAllCats = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        ctx.AllPets = res.filter(p => p.category == 'Cat');
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};

handlers.getAllDogs = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        ctx.AllPets = res.filter(p => p.category == 'Dog');
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};

handlers.getAllParrots = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        ctx.AllPets = res.filter(p => p.category == 'Parrot');
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};

handlers.getAllOthers = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        ctx.AllPets = res.filter(p => p.category == 'Other');
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};


handlers.getAllReptiles = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        ctx.AllPets = res.filter(p => p.category == 'Reptile');
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    } catch (error) {
        console.log(error);
    }

};

//then syntax
handlers.getAllReptiles2 = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');


    kinvey.get('appdata', 'pets', 'kinvey').then(function (res) {
        ctx.AllPets = res.filter(p => p.category == 'Reptile');
    }).then(function () {
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherPets: '../views/pets/otherPetPartial.hbs',
        }).then(function () {
            this.partial('../views/dashbord/dashBoard.hbs');
        });
    }).catch(function (err) {
        console.log(err);
    });
    
};


handlers.getPetDetails = function(ctx){
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let petId = ctx.params.id;

    kinvey.get('appdata' , `pets/${petId}` , 'kinvey').then(function(res){
            ctx.pet = res;
    }).then(function () {
        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
        }).then(function () {
            this.partial('../views/pets/petDetails.hbs');
        });
    }).catch(function (err) {
        console.log(err);
    });


};

