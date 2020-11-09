
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
$("#logout").on("click",(e)=>{
  e.preventDefault();
  localStorage.clear();
  let url=window.location.href.split("/")
  url[url.length-1]="login.html";
 let navigateUrl=url.join("/")
  window.location.href=navigateUrl
})
$(document).ready(()=>{
  let elems= $(".data")
  if(elems.length>0){

    elems.map((index,elem)=>{
      info=$(elem).data("info")
      elem.innerText= localStorage.getItem(info)
    })
    document.getElementById("picture").src=localStorage.getItem("pictureid")
    document.getElementById("picture2").src=localStorage.getItem("pictureid")
  }
})
$("a.dropdown-item,a.menu").on("click",function(e){
  e.preventDefault()
  let data=$(this).data("target")
  console.log("hello")
  if(data){
  let elem =$(`${data}`)
  
  if(!elem.is(":visible"))
    elem=elem.closest("main").nextAll(`${data}`);
  // console.log(continueElem)
  var top_space = $('#header').outerHeight();
  $('html, body').animate({
    scrollTop: elem.offset().top-top_space
  }, 1000, 'swing');
}
})

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

$("#button").on("click",()=>{
  $.ajax({
    url:"datauts.json",
    datatType:"json",
    method:"get"
  }).done((res)=>{
    data=res;
    let nim=document.getElementById("nim");
    let password=document.getElementById("password");
  
    if(data[nim.value] && data[nim.value].password==password.value){
      let login=data[nim.value];
      for(key in login){
        localStorage.setItem(key,login[key])
        
      }
      localStorage.setItem("nim",nim.value);
      let url=window.location.href.split("/")
      url[url.length-1]="index.html";
     let navigateUrl=url.join("/")
      window.location.href=navigateUrl
    }else{
      nim.value=""
      password.value=""
      alert("Gagal Login, Password atau username tidak sesuai")
    }
  }).fail((jqxhr,status,error)=>{
    // console.log("asdas")
    alert("Login gagal, tidak terhubung pada server!");
    // console.log("error "+error)
  })
  
})

