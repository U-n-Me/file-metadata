// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $('form').submit(function(event) {
    event.preventDefault();
    var file = document.getElementById("file-input").files[0]; // we only have one file
    console.log(file);
    var size = file.size;
    if(size > 1000000)
      size = (size / 1000000) + 'MB';
    else if(size > 1000)
      size = (size / 1000) + 'KB';
    else
      size += 'B';
    alert('File name: '+file.name+ '\nFile size:'+size+'\nLast modified: '+file.lastModifiedDate);    
    
    /*
      You can do this stuff, here at client side itself. Below code will upload the
      file to server. It's not needed now, so commenting out.
    */
    
    /*
     var http = new XMLHttpRequest(),
        formData = new FormData(), // Note: This won't work on older browsers
        url = 'upload'; // Our endpoint address
 
    formData.append('data', file); // Remember we defined 'data' as the fieldname in multer
    http.open('POST', url, true);
    http.send(formData); http.onload = function() {
      // Response is available here as this.responseText
      alert(this.responseText);
    };  
    
    */
  });
  
});
