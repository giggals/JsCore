handlers.getAddSong = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/songs/createSongView.hbs');
    }).catch(function (err) {
        console.log(err);
    });
};

handlers.postAddSong = function (ctx) {
    

    let data = { ...ctx.params, likeCounter: 0, listenCounter: 0 };
    kinvey.post('appdata', 'Songs', 'kinvey', data)
        .then(function (res) {
            notifications.showSuccess('Song created successfully!');
            ctx.redirect('#/allSongs');
        })
        .catch(function (err) {
            console.log(err);
        });

};

handlers.getAllSongs = async function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let songs = await kinvey.get('appdata', 'Songs', 'kinvey', '?query={}&sort={"likeCounter": -1}');
        let userId = sessionStorage.getItem('id');
        ctx.allOtherSongs = songs.filter(song => song._acl.creator != userId);
        ctx.allMySongs = songs.filter(song => song._acl.creator == userId);

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            otherSongPartial: '../views/songs/otherSongPartial.hbs',
            mySongPartial: '../views/songs/mySongPartial.hbs',
        }).then(function () {
            this.partial('../views/songs/allSongsView.hbs');
        });
    } catch (error) {
        console.log(error);
    }


};

handlers.getMySongs = async function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let songs = await kinvey.get('appdata', 'Songs', 'kinvey', '?query={}&sort={"likeCounter": -1}');
        let userId = sessionStorage.getItem('id');
        ctx.allMySongs = songs.filter(song => song._acl.creator == userId);

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            mySongPartial: '../views/songs/mySongPartial.hbs',
        }).then(function () {
            this.partial('../views/songs/mySongsView.hbs');
        });
    } catch (error) {
        console.log(error);
    }


};

function getSong(id) {
    return kinvey.get('appdata', `Songs/${id}`, 'kinvey');
};

handlers.listenSong = async function (ctx) {
    let id = ctx.params.id; 

    try {
        let song = await getSong(id);
        console.log(song.title);
        let newLikes = Number(song.listenCounter) + 1;
        song.listenCounter = newLikes;
        await kinvey.update('appdata', `Songs/${id}`, 'kinvey', song);
        notifications.showSuccess(`You just listened ${song.title}`);
        ctx.redirect('#/allSongs');
    } catch (error) {
        console.log(error);
    }


};

handlers.likeSong = async function (ctx) {
    let id = ctx.params.id; 

    try {
        let song = await getSong(id);
        console.log(song.title);
        let newLikes = Number(song.likeCounter) + 1;
        song.likeCounter = newLikes;
        await kinvey.update('appdata', `Songs/${id}`, 'kinvey', song);
        notifications.showSuccess(`Liked`);
        ctx.redirect('#/allSongs');
    } catch (error) {
        console.log(error);
    }


};

handlers.removeSong = async function (ctx) {
    let id = ctx.params.id;
 
    try {
       
        await kinvey.remove('appdata', `Songs/${id}`, 'kinvey');
        notifications.showSuccess(`Song removed successfully`);
        ctx.redirect('#/allSongs');
    } catch (error) {
        console.log(error);
    }

};

