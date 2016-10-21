var css = 0;
var ruby = 0;
var sharp =0;

if (design === "yes") {
  css += 1;

} else{
  ruby += 1;
}
if (big === "yes") {
  sharp += 1;

} else{
  ruby += 1;
}
if (color === "yes") {
  css += 1;

} else{
  sharp += 1;
}
if (small === "yes") {
  ruby += 1;

} else{
  css += 1;
}
if (drive === "yes") {
  sharp += 1;

} else{
  ruby += 1;
}
if (boot === "yes") {
  ruby += 1;

} else{
  css += 1;
}

$(".css").text(css);
$(".ruby").text(ruby);
$(".sharp").text(sharp)





$(document).ready(function() {

  $("#survey form").submit(function(event){

    var design = $("input:radio[name=design]:checked").val();
    var big = $("input:radio[name=big]:checked").val();
    var color = $("input:radio[name=color]:checked").val();
    var small = $("input:radio[name=small]:checked").val();
    var drive = $("input:radio[name=drive]:checked").val();
    var boot = $("input:radio[name=boot]:checked").val();

    event.preventDefault();
    });
  });
