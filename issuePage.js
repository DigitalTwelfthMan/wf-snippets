
  // Reusable function to convert any string/text to css-friendly format
  var conv = function (str) {
    if (!str) {
        str = 'empty';
        }
    return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
    	      .replace(/ /g, "-")
              .toLowerCase()
              .trim();
  };
  
  // Creating dynamic elements classes from its categories + clubs + issue:
  var catArray = document.querySelectorAll('.w-dyn-item .categ');
  catArray.forEach( function(elem) {
    var text = elem.innerText || elem.innerContent;
    var className = conv(text);
    if (!isNaN(parseInt(className.charAt(0), 10))) {
            className = ("_" + className);
          }
    elem.parentElement.parentElement.classList.add(className);
  });  
  
  //multi-filters
	var filterGroups = document.querySelectorAll('.filter-group');
  filterGroups.forEach( function(group) {
        group.setAttribute('data-filter-group','');
  });

	//set up & call library
  var containerEl = document.querySelector('.digi-mag-sec');
  var selectFilter = document.querySelector('.filter_select');
  var mixer = mixitup(containerEl, {
  	multifilter: {
    	enable: true
    },
    callbacks: {
    	onMixEnd: function(){
        var coverEl = $("#cover-story .mix").length;
        var coverEmpty = $("#cover-story .mix:hidden").length;
        var coverMsg = $('#noItems-cover');
        var shortEl = $("#short-passes .mix").length;
        var shortEmpty = $("#short-passes .mix:hidden").length;
        var shortMsg = $('#noItems-short');
        var longEl = $("#long-balls .mix").length;
        var longEmpty = $("#long-balls .mix:hidden").length;
        var longMsg = $('#noItems-long');

				if (coverEl == coverEmpty){
        	coverMsg.css("display", "block");
        } else{
        	coverMsg.css("display", "none");
        }
      	if (shortEl == shortEmpty){
        	shortMsg.css("display", "block");
        } else{
        	shortMsg.css("display", "none");
        }
        if (longEl == longEmpty){
        	longMsg.css("display", "block");
        } else{
        	longMsg.css("display", "none");
        }
      }
    }
  });

  // We must bind 'change' event handlers to our <select> elements
  selectFilter.addEventListener('change', function() {
    var selector = selectFilter.value;
    mixer.filter(selector);
  });

//add options to select based on results
function addOptions(from, where){
	var categOpt = [];
$(from).each(function(){
    categOpt.push($(this).text());
});

categOpt = categOpt.filter(item => item);
	
var uniqueCateg = [];
$.each( categOpt, function(i, el){
    if($.inArray(el, uniqueCateg) === -1) {
        uniqueCateg.push(el);
    }
});

uniqueCateg.sort();

var categList = "";
var categCode = "";

uniqueCateg.forEach(function(elem){
    categList += elem;
    categList += ", ";  

    var lowerOption = elem.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase().trim();  
    categCode += "." + lowerOption;
    categCode += ", ";
    
});

    var categories = categList.split(", ");
    var code = categCode.split(", ");
    
    for(var c=0; c<categories.length; c++){
        $(where).append('<option value="' + code[c] + '">' + categories[c] + '</option>');
    }
	
	jQuery('.filter_select option').filter(function(){
		return $.trim($(this).text()) == ''
	}).remove();
}

addOptions('.w-dyn-item .categ.category', '#categ-select');
addOptions('.w-dyn-item .categ.club', '#club-select');
