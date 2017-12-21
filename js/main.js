;
(function() {
  window.location.hash = "#start";
  $('#btn_basic').click(function() {
    window.location.hash = "#h_basic";
  });
  $('#btn_edu').click(function() {
    window.location.hash = "#h_edu";
  });
  $('#btn_work').click(function() {
    window.location.hash = "#h_work";
  });
  $('#btn_tree').click(function() {
    window.location.hash = "#h_tree";
  });
  $('#btn_contact').click(function() {
    window.location.hash = "#h_contact";
  });
  $('.back').click(function() {
    window.location.hash = "#back";
    window.location.hash = "#start";
    document.getElementById("menu-checkbox").checked=false;
  });
})();
