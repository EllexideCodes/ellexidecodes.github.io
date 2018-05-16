function loader() {
  thisVar = setTimeout(showPage(), 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('page').style.display = 'block';
}

function pullForm(id) {
  $('.form').hide();
  if($(id).is(':visible')) return;
  $(id).show();
  select(event);
}

function select(event) {
  if($(event.currentTarget).hasClass('selected')) return;
  
  $('li.link').removeClass('selected');
  $(event.currentTarget).addClass('selected');
}

function filterGallery(type){
  var boi = $('.link.'+type);
  if(boi.hasClass('selected')) {
    boi.removeClass('selected');
    $('.gallery-item').show();
  } else {
    var thisClass;
    $('.link').removeClass('selected');
    boi.addClass('selected');
    if(boi.hasClass('commission')) {
      thisClass = 'commission';
    } else if (boi.hasClass('request')) {
      thisClass = 'request';
    } else if (boi.hasClass('free')) {
      thisClass = 'free';
    } else if (boi.hasClass('raffle')) {
      thisClass = 'raffle';
    }
    $('.gallery-item').hide();
    $('.gallery-item.'+thisClass).show();
    
  }
}

function toggleMenu() {
  $('#menu-overlay').fadeToggle(200, 'swing');
}

function toggleLang() {
  $('.lang').slideToggle();
}

function toggleGallery() {
  $('#gallery-overlay').fadeToggle(200, 'swing');
}

$(document).ready(()=>{
  $('.gallery-item').click((event)=>{
    var src = $(event.currentTarget).find('img').attr('src');
    var preview;
    var code;

    if (!$(event.currentTarget).find('img').attr('preview') && !$(event.currentTarget).find('img').attr('code')) {
      $('#gallery-overlay').show();
      $('#gallery-overlay .img').css('background-image', 'url(' + src + ')');
      $('a.code').attr('href', '#');
      $('a.code, a.preview').removeAttr('target');
      $('a.preview').attr('href', '#');
      $('a.preview').attr('title', 'No preview available');
      $('a.code').attr('title', 'No code available');
    } else if (!$(event.currentTarget).find('img').attr('code')) {
      preview = $(event.currentTarget).find('img').attr('preview');

      $('#gallery-overlay').show();
      $('#gallery-overlay .img').css('background-image', 'url(' + src + ')');
      $('a.preview').attr('href', preview);
      $('a.preview').attr('target', '_blank');
      $('a.code').removeAttr('target');
      $('a.code').attr('href', '#');
      $('a.code').attr('title', 'No code available');
    } else if (!$(event.currentTarget).find('img').attr('preview')) {
      code = $(event.currentTarget).find('img').attr('code');

      $('#gallery-overlay').show();
      $('#gallery-overlay .img').css('background-image', 'url(' + src + ')');
      $('a.preview').attr('href', '#');
      $('a.preview').attr('title', 'No preview available');
      $('a.preview').removeAttr('target');
      $('a.code').attr('href', code);
      $('a.code').attr('target', '_blank');
    } else {
      preview = $(event.currentTarget).find('img').attr('preview');
      code = $(event.currentTarget).find('img').attr('code');

      $('#gallery-overlay').show();
      $('#gallery-overlay .img').css('background-image', 'url(' + src + ')');
      $('a.preview').attr('href', preview);
      $('a.code').attr('href', code);
      $('a.code, a.preview').attr('target', '_blank');
    }
  });
});