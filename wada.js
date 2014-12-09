function cut_decimal (num) {
  return Math.floor(num);
}

$(document).ready(function () {
  var a = 2.3333
  alert (cut_decimal(2.333));
  });
