
//test json file
$.getJSON('vines.json', function(data) {
  console.log(data);
  console.log(data.vines.length);
  console.log(data.vines[1].vine);
});


function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}


chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  if (tab) {
    $(document).ready(function() {
   $("#randomize").click(function(event){
      $.getJSON('vines.json', function(data) {
        let num = randomNumber(data.vines.length)
         $('#captured-image').attr('src', "assets/" + data.vines[num].vine);
         console.log(data.vines[1].vine)
      });
   });

});


  }
});
