var menu_btn = document.getElementsByClassName("navbar-toggler");
var cond = true;
$(menu_btn).click(function() {
  if (cond) {
    $(this).addClass("bnt_clicked");
    cond = false;
  } else {
    $(this).removeClass("bnt_clicked");
    cond = true;
  }
});
