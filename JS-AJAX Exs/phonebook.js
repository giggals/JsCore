function attachEvents() {

    $('#btnLoad').on('click', function () {
        $.ajax({
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            method: 'GET',
            success: loadSuccess,
            error: loadError,
        });


        function loadSuccess(data) {
            let ulElement = $('#phonebook');
            Object.keys(data).forEach(d => {
                let li = `<li>${data[d].person}: ${data[d].phone} <button>Delete</button></li>`;
                

                ulElement.append(li);
            })
        };

        function loadError() {

        }
    });

    $('#btnCreate').on('click', function () {

        let person = $('#person').val();
        let phone = $('#phone').val();

        $.ajax({
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify({
                'person': `${person}`,
                'phone': `${phone}`

            }),
            success: loadSuccess,
            error: loadError
        });


        function loadSuccess(){
            $('#person').val('');
            $('#phone').val('');
            $('#btnLoad').trigger('click');
        }
        

        function loadError() {

        }

    });
}
