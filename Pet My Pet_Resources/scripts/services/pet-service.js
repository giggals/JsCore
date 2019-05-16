const petsService = (() => {
    function getPet(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    };

    function getPetDetails(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    };

    function editPet(id, data) {
        return kinvey.update('appdata', `pets/${id}`, 'kinvey', data);
    }

    return {
        getPet,
        getPetDetails,
        editPet,
    }
})();


