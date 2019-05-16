const songService = (() => {

    function getAllSongs(){
        return kinvey.get('appdata' , 'Songs' , 'kinvey' , '?query={}&sort={"likeCounter": -1}');
    };

    function getSong(){
        return kinvey.get('appdata', `Songs${id}`, 'kinvey');
    }

})();