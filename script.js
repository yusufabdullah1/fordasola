(function(){
  emailjs.init("V2E8EwIWj4jAHCp-2");
})();

function sendAnswer(answer, redirectPage) {

  emailjs.send("service_bgbgdja", "template_ow3i2c5", {
    answer: answer
  })
  .then(function(response) {
      window.location.href = redirectPage;
  }, function(error) {
      alert("Failed to send response.");
  });

}



