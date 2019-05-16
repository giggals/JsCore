function attachEvents() {
    let button = $('#submit');
    let code = '';
    let weatherObj = {
        Sunny: '&#x2600;',
        PartlySunny: '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614;',
        Degrees: '&#176;'
    };


    button.on('click', async function () {
        let location = $('#location').val();
        try {
            let weather = await $.ajax({
                url: 'https://judgetests.firebaseio.com/locations.json',
                method: 'GET',
            });
            for (let i = 0; i < weather.length; i++) {
                const current = weather[i];
                if (current.name == location) {
                    code = current.code;
                }

            }
            let currentConditions = await $.ajax({
                method: 'GET',
                url: `https://judgetests.firebaseio.com/forecast/today/${code}.json `,
            });
            let condition = '';
            if (currentConditions.forecast.condition === 'Partly sunny') {
                condition = '&#x26C5;';
            }
            else {
                condition = weatherObj[currentConditions.forecast.condition];
            }

            let currentDiv = $('#current');
            let spanForCondition = $(`<span class="condition symbol">${condition}</span>`);
            let spanInfo = $(`<span class="condition">
                    <span class="forecast-data">${currentConditions.name}</span>
                    <span class="forecast-data">${currentConditions.forecast.low}&#176;/${currentConditions.forecast.high}&#176;</span>
                    <span class="forecast-data">${currentConditions.forecast.condition}</span>
                            </span>`)
            currentDiv.append(spanForCondition);
            currentDiv.append(spanInfo);

            let threeDaysForecast = await $.ajax({
                method: 'GET',
                url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`,
            });

            $('#forecast').css('display', '');
            let upcomingDiv = $('#upcoming');
            //  console.log(threeDaysForecast.forecast);

            for (let i = 0; i < threeDaysForecast.forecast.length; i++) {
                let currentObj = threeDaysForecast.forecast[i];

                let span = $(`<span class="upcoming">
                            <span class="symbol">${condition}</span>
                            <span class="forecast-data">${currentObj.low}&#176;/${currentObj.high}&#176;</span>
                            <span class="forecast-data">${currentObj.condition}</span>

                        </span>`);

                upcomingDiv.append(span);
            }



        } catch (error) {
            console.log(error);
        }

    });

    function currentConditions() {

    };


};