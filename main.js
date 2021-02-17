var paragraph_array = [];
function Para1(){

   var display_para = [];

   for(var i=1; i<=6; i++){
      var para = document.getElementById("para1_input"+i).value;
      paragraph_array.push(para);
   } 

   console.log(paragraph_array);
    var lenth_of_array = paragraph_array.length ;
 
   for(var x=0; x<lenth_of_array; x++){
    display_para.push("<h4>NAME - "+ paragraph_array[x] + "</h4>");
    console.log(display_para);
}
document.getElementById("Display_Para-1").innerHTML = paragraph_array.join(". ");

};

var paragraph2_array = [];
function Para2(){

    var display_para2 = [];

    for(var y=1; y<=6; y++){
       var para2 = document.getElementById("para2_input"+y).value;
       paragraph2_array.push(para2);
      } 
    console.log(paragraph2_array)
     var lenth_of_array = paragraph2_array.length;
  
    for(var z=0; z<lenth_of_array; z++){
        display_para2.push("<h4>NAME - "+ paragraph2_array[z] + "</h4>");
     console.log(display_para2);
 }
 
 document.getElementById("Display_Para-2").innerHTML = paragraph2_array.join(". ");
 
};