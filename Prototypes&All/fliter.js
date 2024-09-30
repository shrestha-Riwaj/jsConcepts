let filterInput = document.querySelector("#filterInput");



filterInput.addEventListener('keyup', ()=>{
    console.log(1);

    // storing the value in a variable
    let filterNames = filterInput.value.toUpperCase();
   

    // console.log(filterNames);

    // getting the ul
    let ul = document.querySelector('#names');
    // console.log(ul);

    // getting the list
    let li = ul.querySelectorAll("li.collection-item");
    // console.log(li);
    for(let i=0; i<li.length;i++){
        var a = li[i].getElementsByTagName('a')[0];
        // console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(filterNames)>-1){
            li[i].style.display="";
            console.log("a", a.innerHTML.toUpperCase().indexOf(filterNames));
        }
        else{
            li[i].style.display = "none";
        }
    }
    // console.log("a", a);

});