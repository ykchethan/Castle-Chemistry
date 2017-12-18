 $(document).on('change', '.validateNumber', function() { 
        var abc = parseInt($(this).val());
        console.log('New_V2functions.js abc ',abc);
        if (isNaN(abc)) { $(this).val(null); }
        
    });



$(document).on('change', '.firstNum_foronchange_v2_new', function () {
    var abc = parseInt($(this).val());
    console.log('New_V2functions.js abc ', abc);
    var tempid = $(this).attr('id');
    var res = tempid.slice(0, -1);
    var resId = '#' + res + '2';
    var tempVal = $(resId).val();
    if (abc === 0) {
        $(resId).html(
            '<option value="1">1</option>' +
            ' <option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            ' <option value="6">6</option>' +
            ' <option value="7">7</option>' +
            ' <option value="8">8</option>' +
            ' <option value="9">9</option>'
        );
    } else {
        $(resId).html(
            '<option value="1">1</option>' +
            ' <option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            ' <option value="6">6</option>' +
            ' <option value="7">7</option>' +
            ' <option value="8">8</option>' +
            ' <option value="9">9</option>' +
            ' <option value="0">0</option>'
        );

    }//if (abc === 0)
    if (abc !== 0) {
        $(resId).val(tempVal);
    } else {
        $(resId).val(1);
        $(resId).trigger('change');
    }

});