url=window.location.href.split("/")
pathUrl=url[url.length-1]
if(pathUrl!="login.html"){
    if(localStorage.length==0){
        url[url.length-1]="login.html"
        redirectUrl=url.join("/")
        window.location.href=redirectUrl;
        alert("Harap Login Terlebih Dahulu")
    }
}else{
    if(localStorage.length>0){
        url[url.length-1]="index.html"
        redirectUrl=url.join("/")
        
        window.location.href=redirectUrl;
    }
}
