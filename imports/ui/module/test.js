// $( document ).ready(function() {
//     aaa();
// });
function aaa(refs){
    // alert(refs)
    if(refs.abc){
       $(refs.abc).css("background-color", "yellow");
    }
     $( "li" ).addClass( "myClass yourClass" )
}

export { aaa };
