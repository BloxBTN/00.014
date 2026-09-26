let cartOpen=false;
function openSupport(){if(window.Tawk_API&&typeof Tawk_API.maximize==='function'){Tawk_API.maximize();}}
function toggleMenu(){const nav=document.querySelector('.topbar nav');if(nav)nav.classList.toggle('open');}
function toggleCart(){cartOpen=!cartOpen;document.getElementById('cartPanel')?.classList.toggle('open',cartOpen);document.getElementById('cartShade')?.classList.toggle('open',cartOpen);}
