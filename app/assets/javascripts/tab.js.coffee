jQuery ->
  url = document.location.toString()
  if url.match('#')
    $('.nav-tabs a[href=#' + url.split('#')[1] + ']').tab('show')
    $('html, body').css("scrollTop", 0);

  $('.nav-tabs a').on 'shown', (e) ->
    history.pushState(null, document.title, e.target.hash)
