$('#WeatherButton').click(function () {
    $('#chart-container').hide();
    console.log('Button clicked');
    var city = $('#city').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=40270a4e620a959e111a89bac9cb3e57`,
        success: function (response) {
            console.log('In success callback');
            console.log(response);
            var currentTemp = Math.round(response.main.temp - 270);
            var currentWind = response.wind.speed;
            var humidity = response.main.humidity;
            $('#currentTemperature').html(currentTemp + `°C`);
            $('#currentHumidity').html(humidity + `%`);
            $('#Wind').html(currentWind + 'Km/h');

            $('table').show();
        },
        error: function (err) {
            console.log('In error callback');
            console.log(err);
        }
    });
})
$('#ForecastButton').click(function () {
    $('table').hide();
    var city = $('#city').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=40270a4e620a959e111a89bac9cb3e57`,
        success: function (response) {
            console.log('In success callback');
            console.log(response);

            listOfDates = response.list.map(function(element) { return element.dt/*moment(element.dt * 1000).format('dddd, h:mm a')*/});
            console.log(listOfDates);
            listOfTemp = response.list.map(function(element) {return (Math.round(element.main.temp - 270))});
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
        },
        error: function (err) {
            console.log('In error callback');
            console.log(err);
        }
    });
    const plotChart = function(temperatureArray, datesArray) {
        $('#chart-container').show();
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Temperature'
            },
            xAxis: {
                categories: datesArray
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () { return this.value + '°'; }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: city,
                marker: {
                    symbol: 'square'
                },
                data: temperatureArray

            }]
        });
    }
})