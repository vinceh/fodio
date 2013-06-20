$(window).load(function() {
  $('.tab').click(function() {
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#'+$(this).attr('data-tab')).addClass('active');
  });
});
