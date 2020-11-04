
document.addEventListener("readystatechange",()=>{
  const elm=$('.about-us-carousel')
  if(elm.length>0){
    $(".about-us-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    });
  }
})
$("a.dropdown-item,a.menu").on("click",function(e){
  e.preventDefault()
  let data=$(this).data("target")
  
  if(data){
  let elem =$(`${data}`)
  var top_space = $('#header').outerHeight();
  $('html, body').animate({
    scrollTop: elem.offset().top-top_space
  }, 1000, 'swing');
}
})
// $('.search_input').keyup(function (e) {
//   console.log(e.which);
//   //listening if the key pressed is the enter button
//   if (e.which === 13) {
//       //inserting the value of textfield content, you can add if statement to check if the field is null or empty
//       var search_param = $(this).val();
//       //value of field stored into a variable
//       $('tr').removeClass('item_found');
//       //remove item_found class attributed to a td AND search all td to find the one that march the search parameter
//       if ($('td:contains("' + search_param + '")').html() !== undefined) {
//           //if there is any td that has that record... then check for the closest tr and add a class with item_found as value
//           $('td:contains("' + search_param + '")').closest('tr').attr('class', 'item_found');
//           //add some highlight to it.
//           $('td:contains("' + search_param + '")').closest('tr').css({background:'yellow',color:'black'});
//           //then scroll to the item
//           $(window).scrollTop($('.item_found').first().offset().top);
//       } else {
//           //if item is not found display no result found
//           alert("Sorry no result found")
//       }
//   }
// });
$("#burgerMenu").on("click",(ev)=>{
    ev.preventDefault()
    $("#checkShow").click()
    $("#checkShow2").click()
    showNav=$("#checkShow").is(":checked")
    
    navElem=$("nav#nav-menu-container ul li")
    
    if(showNav){
      navElem.map((index,elem)=>{
        $(elem).css({"transition": `none`,'opacity':'0','right':'-20%'})
    
              })
     
      setTimeout(()=>{
        navElem.map((index,elem)=>{
          
          $(elem).css({"transition": `all 0.5s ease-in ${index*0.5}s`,"opacity":"1",'right':'0%'})
        })
      },1000)
    }
})
