$(".month-pick").click(function(e){
    e.preventDefault();
    var nb = $(this).attr('id');
    $('.month').hide();
    $('#month-'+nb).slideToggle(450);
});
$(".month-pick-all").click(function(e){
    e.preventDefault();
    $('.month').show();
});

$("#legend-btn").click(function(e){
    e.preventDefault();
    $('#legend-content').slideToggle(300);
});