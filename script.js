$(document).ready(function() {
    $.getJSON('devices.json', function(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            $('#div-1').append(element);
        }
    })
})