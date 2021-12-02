$(".month-pick").click(function(e){
    e.preventDefault()
    var nb = $(this).attr('id');
    $('.month').hide(200);
    $('#month-'+nb).slideToggle(500);
});