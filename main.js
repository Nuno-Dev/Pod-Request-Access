function btn() {
  let x = document.getElementById('email').value;

  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      x
    )
  ) {
    document.getElementById('error').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'none';
  }
}
