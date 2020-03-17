;(function() {
  window.location.hash = '#start'
  $('#btn_basic').click(function() {
    window.location.hash = '#basic'
    $('.back').show()
  })
  $('#btn_edu').click(function() {
    window.location.hash = '#education'
    $('.back').show()
  })
  $('#btn_work').click(function() {
    window.location.hash = '#work-experience'
    $('.back').show()
  })
  $('#btn_tree').click(function() {
    window.location.hash = '#skills'
    $('.back').show()
  })
  $('#btn_contact').click(function() {
    window.location.hash = '#contact-me'
    $('.back').show()
  })
  $('.back').click(function() {
    window.location.hash = '#back'
    window.location.hash = '#start'
    document.getElementById('menu-checkbox').checked = false
    $('.back').hide()
  })
})()
