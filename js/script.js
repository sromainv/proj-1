// Show one month, hide the rest
$(".month-pick").click(function(e){
    e.preventDefault();
    var nb = $(this).attr('id');
    $('.month').hide();
    $('#month-'+nb).slideToggle(400);
});
// Show all months
$(".month-pick-all").click(function(e){
    e.preventDefault();
    $('.month').show();
});
// Toggle legend
$("#legend-btn").click(function(e){
    e.preventDefault();
    $('#legend-content').slideToggle(300);
});


// --- Display current month ---
// Get user's local date
function getDate(){
    let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return mm+"/"+yyyy;
}
// Adapt display depending on user's current date
function displayMonth(){
    var today = getDate();
    switch (today) {
        case "12/2021" :
            $('#month-1').slideToggle(400);
            break; 
        case "01/2022" :
            $('#month-2').slideToggle(400);
            break; 
        case "02/2022" :
            $('#month-3').slideToggle(400);
            break;
        case "03/2022" :
            $('#month-4').slideToggle(400);
            break;
        case "04/2022" :
        case "05/2022" :
            $('#month-5').slideToggle(400);
            break;
        default : 
            $('.month').show();
    }
};
// Launch when page has loaded
$(document).ready(function(){
    displayMonth();
});