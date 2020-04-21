//counter clicker adapted with code from https://www.virtualspecies.com/2017/09/click-count-with-javascript.html
window.onload = function(){
let count = 0;
let countButton = document.getElementById("randomize");
let message = document.getElementById("message");
let video = document.querySelector("#vine-video");
countButton.onclick = function() {
  count++;
  //screen disappears after you have viewed 5 vines
  if (count >= 5){
  message.innerHTML = "you have viewed " + count + " vines, get back to work!";
  $("video").hide();
  $("button").hide();
  video.muted = true;


}

}

};


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

    //sets a random default vine to appear on the page when there is a tab
    //grabs json data
    $.getJSON('vines.json', function(data) {
    let first = randomNumber(data.vines.length)
    let firstVideo =data.vines[first].vine
    $('#vine-video').attr('src', "assets/" + firstVideo);

    });

    //random video plays when button is clicked
    $(document).ready(function() {

   $("#randomize").click(function(event){

      $.getJSON('vines.json', function(data) {
        let num = randomNumber(data.vines.length)
         $('#vine-video').attr('src', "assets/" + data.vines[num].vine);
         console.log(data.vines[num].vine)
      }); //closing for get Json

   }); // closing for randomize

});

  }
});
