fetch('content/order/order.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('orderBlock').innerHTML = html
        order()
        emailValidate()
        setOptions()
        getRangeValue()
        getFileName()
        submitForm()
    });

function order() {
    let dataSteps = [
        {img: 'assets/svg/loop.svg', title: 'Lorem ipsum dolorsit amet', alt: 'loop icon'},
        {img: 'assets/svg/percent.svg', title: 'Сonsecte turadipiscing elit', alt: 'percent icon'},
        {img: 'assets/svg/doc.svg', title: 'Sed do eiusmod tempor', alt: 'document icon'},
        {img: 'assets/svg/mail-white.svg', title: 'Esse cillum doloreeu fugiat', alt: 'mail icon'},
        {img: 'assets/svg/money.svg', title: 'Excepteur sint occaecat cupidatat non proident', alt: 'money icon'},
    ];

    const getSeparatorsCircles = (count) => {
        let separatorsCircles = '';
        for (let i = 0; i < count; i++) {
            separatorsCircles += '<img src="/assets/svg/circle.svg" class="order__circleIcon">';
        }
        return separatorsCircles;
    };

    const getTemplate = (img, title, alt, separatorCircles) => {
        return `
        <div class="order__step">
            <div class="order__circle">
            <img src="${img}" alt="${alt}" class="order__image"/>
            </div>
            <span class="order__subtitle">${title}</span>
            ${separatorCircles}
        </div>
    `;
    };

    const getAllSteps = (dataSteps) => {
        let content = '';

        dataSteps.forEach((el, index) => {
            let separatorCircles = '';
            if (index < dataSteps.length - 1) {
                separatorCircles += `<div class="order__separatorsCircles">${getSeparatorsCircles(5)}</div>`;
            }
            content += getTemplate(el.img, el.title, el.text, separatorCircles);
        });

        return content;
    };

    const renderAllSteps = (dataSteps) => {
        document.getElementById('orderSteps').innerHTML = getAllSteps(dataSteps);
    };

    renderAllSteps(dataSteps);
}

function emailValidate() {
    const emailInput = document.querySelector('.order__input');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('blur', function () {
        const email = emailInput.value.trim();

        if (email === '') {
            emailError.textContent = 'Поле email не должно быть пустым';
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Пожалуйста, введите корректный email';
        } else {
            emailError.textContent = '';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

function setOptions() {
    let dataOptions = [
        {value: '1', title: 'Lorem ipsum dolorsit amet'},
        {value: '2', title: 'Сonsecteturadipiscing elit'},
        {value: '3', title: 'Sed do eiusmod tempor',},
        {value: '4', title: 'Esse cillum doloreeu fugiat'},
        {value: '5', title: 'Excepteur sint occaecat cupidatat'},
        {value: '6', title: 'Sed ut perspiciatis'},
        {value: '7', title: 'Nemo enim ipsam'},
        {value: '8', title: 'Et harum quidem'},
        {value: '9', title: 'Temporibus autem'},
        {value: '10', title: 'Itaque earum rerum'},
        {value: '11', title: 'Dolor sit '},
        {value: '12', title: 'At vero eos et'},
        {value: '13', title: 'Sit voluptatem ipsa'},
        {value: '14', title: 'Totam rem error iste'},
    ];

    const getOptionTemplate = (title) => {
        return `
        <div onclick="show('${title}')" class="order__option">${title}</div>
    `;
    };

    const getAllOptions = (dataOptions) => {
        let content = '';

        dataOptions.forEach(el => {
            content += getOptionTemplate(el.title);
        });

        return content;
    };

    const renderAllOptions = (dataOptions) => {
        document.getElementById('select').innerHTML = getAllOptions(dataOptions);
    };
    let dropdown = document.querySelector(".order__dropdown")
    dropdown.onclick = function () {
        dropdown.classList.toggle("active")
    }


    renderAllOptions(dataOptions);
}

function show(value) {
    document.querySelector(".order__select").value = value;
}

function getRangeValue() {
    const rangeInput = document.querySelector('.order__range');
    const rangeValueDisplay = document.querySelector('.order__rangeValue');

    rangeInput.addEventListener("change", function () {
        rangeValueDisplay.textContent = rangeInput.value + '%';
    });
}

function getFileName() {
    document.querySelector('.order__file input[type=file]').addEventListener('change', function () {
        let file = this.files[0];
        document.querySelector('.order__fileName').innerHTML = file.name;
    });
}

function submitForm() {
    const submit = document.querySelector('.order__submit');

    submit.addEventListener("click", function () {
        let form = document.getElementById("form");

        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
            .then(response => {
                if (!response.ok) {
                    alert('Произошла ошибка, повторите попытку')
                    throw new Error('Произошла ошибка ' + response.status);
                }
                alert('Форма отправлена успешно');
                form.reset();
            })
            .catch(error => {
                alert('Произошла ошибка, повторите попытку')
                console.error('Ошибка отправки формы:', error);
            });
    });
}
