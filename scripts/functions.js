function loader() {
  thisVar = setTimeout(showPage(), 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('page').style.display = 'block';
}

function pullForm(id) {
  var button = document.getElementById('selectTopic');
  $('.form').hide();
  if($(id).is(':visible')) return;
  $(id).show();
  switch (id) {
    case '#commissionForm':
    button.innerHTML = 'Commission';
    break;
   
    case '#requestForm':
    button.innerHTML = 'Request';
    break;
    
    case '#addonForm':
    button.innerHTML = 'Profile Add On';
    break;
    
    case '#pictureForm':
    button.innerHTML = 'Photo Manipulation';
    break;

    case '#profileForm':
    button.innerHTML = 'Profile Edit';
    break;

    case '#askForm':
    button.innerHTML = 'Inquiry';
    break;

    default:
    button.innerHTML = 'Select a topic';
  }
}

function filterGallery(type){
  var boi = $('.circle.'+type);
  if(boi.hasClass('selected')) {
    boi.removeClass('selected');
    $('.gallery-item').show();
  } else {
    var thisClass;
    $('.circle').removeClass('selected');
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

$(document).ready(()=>{
  $('.gallery-item').click(event=>{
    $(event.currentTarget).toggleClass('selected');
    $('.shadow').toggle();
  })

  $('.shadow').click(()=>{
    $('.gallery-item').removeClass('selected');
    $('.shadow').hide();
  })
})