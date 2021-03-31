  const urlParams = new URLSearchParams(window.location.search);
  const info = urlParams.get('info');

  if (info) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerText = info;
      errorMessage.style.display = "block";
  }
  //   swal({
  //       title: "Failed",
  //       text: `${message}`,
  //       icon: "error",
  //       button: "Okay",
  //   }).then(() => {
  //       console.log(window.location.hostname)
  //       window.location.replace(window.location.origin + '/login');

  //   })