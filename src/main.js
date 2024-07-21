function AnimateNavBar() {
  const sildeBar = document.getElementById('silde-bar');
  const closeBar = document.getElementById('close-bar');
  const listBar = document.getElementById('list-bar');
  const navBar = document.getElementById('nav-bar');

  function toggleFun() {
    navBar.classList.toggle('hidden');
    navBar.classList.toggle('flex');
  }

  sildeBar.addEventListener('click', toggleFun);
  closeBar.addEventListener('click', toggleFun);
  listBar.addEventListener('click', toggleFun);
}

document.addEventListener('DOMContentLoaded', AnimateNavBar);
