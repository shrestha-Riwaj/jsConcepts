// Get input element
let filterInput = document.querySelector('#filterInput');

// Add event listener

const filterNames = ()=>{
    // console.log(1);
    // Get input value
    let filterValue = filterInput.value.toUpperCase();
    // console.log(filterValue);

    // Get names ul
    let ul = document.querySelector("#names");
    

    // Get list from ul

    let li = ul.querySelectorAll('li.collection-item');
    // console.log(li);

    // // loop through collection item 
    for(let i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        
        // if matched

        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }

}

filterInput.addEventListener('keyup', filterNames);

