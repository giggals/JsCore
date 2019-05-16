function solve() {

    let currentId = 'depot';
    let currentStop = '';

    function depart() {
        $.ajax({
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            method: 'GET',
            success: loadSuccess,
            error: loadErr,
        });

        function loadSuccess(data) {
            currentId = data.next;
            currentStop = data.name;
            $('.info').text(`Next stop ${data.name}`);
            $('#depart').attr('disabled', true);
            $('#arrive').attr('disabled', false);
        };

        function loadErr() {
            $('#info').text(`Error`);
            $('#depart').attr('disabled', true);
            $('#arrive').attr('disabled', true);
        };


    }

    function arrive() {
        $('#depart').attr('disabled', false);
        $('#arrive').attr('disabled', true);

        $('.info').text(`Arriving at ${currentStop}`);

    }

    return {
        depart,
        arrive
    };
}
 let result = solve();