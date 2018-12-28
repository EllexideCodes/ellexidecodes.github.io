$(document).ready(() => {

  $('.profile').each(function(i){
    var image=$(this).attr('image');

    if(!image) {
      image = "https://i5.walmartimages.com/asr/30c82fc1-dd73-4b3b-b10f-80112c2205f5_1.3402272c8e98bb1ea6da2ccd491e3164.png";
    };
    
    var background=`background-image:url(${image})`;
    $(this).attr('style',background);
  })

  $('.profile').click(async (event) => {
    var image = $(event.currentTarget).attr('image');
    var source = $(event.currentTarget).attr('code');
    if(!image) {
      image = "https://i5.walmartimages.com/asr/30c82fc1-dd73-4b3b-b10f-80112c2205f5_1.3402272c8e98bb1ea6da2ccd491e3164.png";
    };
    
    if(source) {
      $('#gallery-overlay img').attr('code', source);
    } else if (!source) {
      $('#gallery-overlay img').removeAttr('code');
    }

    $('#gallery-overlay img').attr('src',  image);
    $('#gallery-overlay').fadeIn('fast', 'swing');
  });

  $('#gallery-overlay').mouseenter(() => {
    var thisImage = $('#gallery-overlay img');
    var code = thisImage.attr('code');
    var height = thisImage.height();
    var width = thisImage.width();

    if(code) {
      $('#gallery-overlay .source ul').html(`<a href="${code}" target="_blank">Get the code.</a>`);
    } else {
      $('#gallery-overlay .source ul').html('Source code not available.');
    }

    $('#gallery-overlay .source').css({
      height: height,
      width: width
    });
  })
})

function toggleGallery() {
  $('#gallery-overlay .source').attr('style', '');
  $('#gallery-overlay').fadeToggle(200, 'swing');
}

function filterGallery(type){
  var boi = $('.tab.'+type);
  if(boi.hasClass('selected')) {
    boi.removeClass('selected');
    $('.profile').show();
  } else {
    var thisClass;
    $('.tab').removeClass('selected');
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
    $('.profile').hide();
    $('.profile.'+thisClass).show();
    
  }
}

function tab(tab) {
  $('.contentBox').hide();
  $('.gallerySettings').fadeOut();
  $(tab).show();
}

function openGal() {
  $('.contentBox').hide();
  $('#gallery, .gallerySettings').show();
}