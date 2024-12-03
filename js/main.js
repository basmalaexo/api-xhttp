
 function getApi(){
    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var x =this.responseText;
            var basmala = JSON.parse(x);
            var exo = basmala.recipes;
            var myText ="";
            for(var i=0; i<exo.length; i++){
                var cartoona = ` <div class="col-md-4 text-conter md-4">
                              <img src="${exo[i].image_url}" style="height:350px" class="img-fluid">
                             <h3>${exo[i].publisher}</h3>
                             <h5>${exo[i].title}</h5>
                             </div>
                              `
                              ;

                myText =myText + cartoona;
            }

             document.querySelector(".test").innerHTML = myText
        }
    }
    xhttp.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza",true);
    xhttp.send();
 }
 getApi()