
$(document).ready(function(){
$("#order-button").attr("disabled", "true");

var cov1 = $(".season-select-img.cover-btn-01");
var cov2 = $(".season-select-img.cover-btn-02");
var cov3 = $(".season-select-img.cover-btn-03");
var cov4 = $(".season-select-img.cover-btn-04");
var act1 = $(".season-select-img.cover-btn-01.active");
var act2 = $(".season-select-img.cover-btn-02.active");
var act3 = $(".season-select-img.cover-btn-03.active");
var act4 = $(".season-select-img.cover-btn-04.active");
var right = $(".disabled-arrow");

$("#cover-right").click(function(){
	var indexR = $(".cover-slide").index($('.cover-slide:not(.hide)'));
	var plus = indexR + 1;
	var currentR = $(".cover-slide")[indexR];
	var next = $(".cover-slide")[plus];
	var first = $(".cover-slide")[0];
	
	if (indexR === 3){
		$(currentR).addClass('hide');
		$(first).removeClass('hide');
	} else {
		$(currentR).addClass('hide');
		$(next).removeClass('hide');
	};
});

$("#cover-left").click(function(){
	var indexL = $(".cover-slide").index($('.cover-slide:not(.hide)'));
	var minus = indexL - 1;
	var currentL = $(".cover-slide")[indexL];
	var prev = $(".cover-slide")[minus];
	var last = $(".cover-slide")[3];
	
	if (indexL === 0){
		$(currentL).addClass('hide');
		$(last).removeClass('hide');
	} else {
		$(currentL).addClass('hide');
		$(prev).removeClass('hide');
	};
});

var arrow = function(){
	var index = $(".cover-slide").index($('.cover-slide:not(.hide)'));
	
	if (index === 0){
		$("#cover-left").css("display", "none");
		$("#cover-right").css("display", "flex");
	} else if (index === 3){
		$("#cover-left").css("display", "flex");
		$("#cover-right").css("display", "none");
	} else {
		$("#cover-left").css("display", "flex");
		$("#cover-right").css("display", "flex");
	};
	
	if (index === 0 && act1[0]){
		$(right).addClass("hide");
	} else if (index === 1 && act2[0]){
		$(right).addClass("hide");
	} else if (index === 2 && act3[0]){
		$(right).addClass("hide");
	} else if(index === 3 && act4[0]){
		$(right).addClass("hide");
	} else{
		$(right).removeClass("hide");
	};
	
};

$("#cover-left").click(arrow);
$("#cover-right").click(arrow);

cov1.on('click', function(){
    cov1.removeClass("active greyed");
    $(this).addClass("active");
    var select1 = $(this).attr('id');
    var dis1 = $(".season-select-img.cover-btn-01:not(.active)");
    dis1.addClass("greyed");
    right.addClass("hide");
    act1 = $(".season-select-img.cover-btn-01.active");
    
    $(".season-form input[name='Issue 01']").val(select1);

});

cov2.on('click', function(){
    cov2.removeClass("active greyed");
    $(this).addClass("active");
    var select2 = $(this).attr('id');
    var dis2 = $(".season-select-img.cover-btn-02:not(.active)");
    dis2.addClass("greyed");
    right.addClass("hide");
    act2 = $(".season-select-img.cover-btn-02.active");
    
    $(".season-form input[name='Issue 02']").val(select2);
});

cov3.on('click', function(){
    cov3.removeClass("active greyed");
    $(this).addClass("active");
    var select3 = $(this).attr('id');
    var dis3 = $(".season-select-img.cover-btn-03:not(.active)");
    dis3.addClass("greyed");
    right.addClass("hide");
    act3 = $(".season-select-img.cover-btn-03.active");
    
    $(".season-form input[name='Issue 03']").val(select3);
});

cov4.on('click', function(){
    cov4.removeClass("active greyed");
    $(this).addClass("active");
    var select4 = $(this).attr('id');
    var dis4 = $(".season-select-img.cover-btn-04:not(.active)");
    dis4.addClass("greyed");
    right.addClass("hide");
    act4 = $(".season-select-img.cover-btn-04.active");
    $("#order-button").removeAttr("disabled", "true");
    
    $(".season-form input[name='Issue 04']").val(select4);
});

var reset = function(){
	var first = $(".cover-slide")[0]
  $(".season-select-img").removeClass("active greyed");
  $('.gift-fields').addClass("hide");
  $(".gift-fields input[name='Gift_Recipient']").val("");
  $(".gift-fields textarea[name='Gift_Message']").val("");
  $(".season-form input[name='shipto']").val("");
  $(".season-form input[name='2:shipto']").val("");
  $(".season-form input[name='2:Gift_Message']").val("");
  $(".season-form input[name='2:quantity']").val("0");
  act1 = $(".season-select-img.cover-btn-01.active");
  act2 = $(".season-select-img.cover-btn-02.active");
  act3 = $(".season-select-img.cover-btn-03.active");
  act4 = $(".season-select-img.cover-btn-04.active");
  $(".cover-slide").addClass("hide");
  $(first).removeClass("hide");
  	$("#cover-left").css("display", "none");
	$("#cover-right").css("display", "flex");
  right.removeClass("hide");
  $('.gift-toggle input').prop( "checked", false );
  $("#order-button").attr("disabled", "true");
};

$("#order-button").click(function(){setTimeout(reset, 1000)});
$("#close-btn").click(function(){setTimeout(reset, 1000)});


	$('.gift-fields').addClass("hide");

	$('.gift-toggle input').change(function(){
    if($(this).prop("checked")) {
      $('.gift-fields').removeClass("hide");
    } else {
      $('.gift-fields').addClass("hide");
      $(".gift-fields input[name='Gift_Recipient']").val("");
      $(".gift-fields textarea[name='Gift_Message']").val("");
      $(".season-form input[name='shipto']").val("");
      $(".season-form input[name='2:shipto']").val("");
      $(".season-form input[name='2:Gift_Message']").val("");
      $(".season-form input[name='2:quantity']").val("0");
    }
  });
  
  $(".gift-fields input[name='Gift_Recipient']").on('keyup keypress', function(e) {
    var giftRecipient = $(this).val();
    $(".season-form input[name='shipto']").val(giftRecipient);
    $(".season-form input[name='2:shipto']").val(giftRecipient);
  });
  
  $(".gift-fields textarea[name='Gift_Message']").on('keyup keypress', function(e) {
    var giftMessage = $(this).val();
    $(".season-form input[name='2:Gift_Message']").val(giftMessage);

    if (giftMessage != '') {
      $(".season-form input[name='2:quantity']").val("1");
    } else {
      $(".season-form input[name='2:quantity']").val("0");
    }
  });
  
});
