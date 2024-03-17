fetch('content/header/header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

fetch('content/main/__description/main__description.html')
    .then(response => response.text())
    .then(html => document.getElementById('about').innerHTML = html);

fetch('content/footer/footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);

