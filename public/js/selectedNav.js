$('.flex-container > a.md-button').click(function (e) {
    $('.navbar-item a.active').removeClass('active');
    var $this = $(this);
    $this.addClass('active');
    e.preventDefault();
});