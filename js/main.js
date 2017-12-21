;
(function() {
  window.location.hash = "#start";
  var fade1 = $('#fade1');
  $('#fade1').click(function() {
    // fade1.hide();
    $('#fade1').text('Yo~');
  });
  var fade2 = $('#fade2');
  fade2.click(function() {
    fade2.text('Yo~');
  });
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
