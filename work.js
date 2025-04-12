function check() {
  if (
    document.getElementById("password_repeat").value ===
    document.getElementById("password").value && document.getElementById("password").value != ""
  ) { document.getElementById("enter").disabled = 0

  } else {
      document.getElementById("enter").disabled = 1
    };
  }

