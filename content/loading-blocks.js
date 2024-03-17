fetch('content/header/header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').insertAdjacentHTML('beforeend', html));

fetch('content/main/__description/main__description.html')
    .then(response => response.text())
    .then(html => document.getElementById('about').insertAdjacentHTML('beforeend', html));

fetch('content/footer/footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').insertAdjacentHTML('beforeend', html));

