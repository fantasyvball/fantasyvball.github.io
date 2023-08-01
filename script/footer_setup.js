window.addEventListener('scroll', function() {
var footer = document.getElementById('footer');
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

if (scrollPosition + windowHeight >= documentHeight-30) {
  footer.style.display = 'block';
} else {
  footer.style.display = 'none';
}
});
