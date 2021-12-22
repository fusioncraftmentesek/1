var uploadButton = $('<input type="file">');
uploadButton.change(function() {
  var reader = new FileReader();
  reader.onload = function (e) {
    var target = e.target;
    var data = JSON.parse(target.result);
    console.log(data);
  }
  reader.readAsText(uploadButton[0].files[0]);
});
$('body').append(uploadButton);
