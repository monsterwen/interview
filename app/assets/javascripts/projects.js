/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 var thIndex = 0;
 var curThIndex = null;

$( document ).ready(function() {
    $('.aaa').click(function(){
    thIndex = $(this).index();
    if(thIndex != curThIndex){
      curThIndex = thIndex;
      sorting = [];
      tbodyHtml = null;
      $('table tbody tr').each(function(){
        sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
      });
      sorting = sorting.sort();
      sortIt();
    }
  });
});


function sortIt(){
  for(var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++){
  	rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
  	tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
  }
  $('table tbody').html(tbodyHtml);
}
    
     
$(document).ready(function(){
    var show_per_page = 2; 
    var number_of_items = $('.display').length;
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
    navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
    current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
    $('#page_navigation').html(navigation_html);
    $('#page_navigation .page_link:first').addClass('active_page');
    $('.display').slice(show_per_page).css('display','none');
});


function previous(){
   new_page = parseInt($('#current_page').val()) - 1;
   if($('.active_page').prev('.page_link').length==true){
    go_to_page(new_page);
   }
}

function next(){
   new_page = parseInt($('#current_page').val()) + 1;
   //if there is an item after the current active link run the function
   if($('.active_page').next('.page_link').length==true){
    go_to_page(new_page);
   }
}

function go_to_page(page_num){
   var show_per_page = parseInt($('#show_per_page').val());
   start_from = page_num * show_per_page;
   end_on = start_from + show_per_page;
   $('.display').slice(0, start_from).hide();
   $('.display').slice(end_on).hide();
   $('.display').slice(start_from, end_on);
   $('.display').slice(start_from, end_on).show();
   $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
   $('#current_page').val(page_num);
}
  