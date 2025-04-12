function check() {
  if (
    document.getElementById("password_repeat").value ===
    document.getElementById("password").value
  ) {
    return true;
  } else { return false; }
}
