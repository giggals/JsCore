// handlers.getDashboard = function (ctx) {
//     ctx.isAuth = userService.isAuth();
//     ctx.username = sessionStorage.getItem('username');

//     ctx.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/dashbord/dashBoard.hbs');
//     }).catch(function (err) {
//         console.log(err);
//     });
// };

handlers.AllOtherPets = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let res = await kinvey.get('appdata', 'pets', 'kinvey');
        let id = sessionStorage.getItem('id');
        ctx.AllPets = res.filter(p => p._acl.creator != id);

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

