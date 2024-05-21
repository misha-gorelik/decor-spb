document.addEventListener('DOMContentLoaded', function(){
    let banner = document.getElementById('banner-wrapper');
    let devLayer = banner.querySelector('.dev');
    let delta = 0;
    banner.addEventListener('mousemove', function(e){
        delta = ((e.pageX - banner.getBoundingClientRect().left) - banner.offsetWidth / 2) * 0.5;
        devLayer.style.width = (e.pageX - banner.getBoundingClientRect().left) + 200 + delta + 'px';
    });
})

// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     scrollbar: {
//         el: ".swiper-scrollbar",
//         hide: false,
//     },

//     slidesPerView: 4,
//     spaceBetween: 30,
//     loop: true,
// });


const priceTabs = document.querySelectorAll('.value-tab__label');

priceTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(!e.target.previousSibling.getAttribute('checked')){
            e.target.previousSibling.setAttribute('checked', 'checked');
        } else {
            e.target.previousSibling.removeAttribute('checked')
        }
    })
})

const checkboxes = document.querySelectorAll('.checkbox__input');
checkboxes.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(!e.target.getAttribute('checked')){
            e.target.setAttribute('checked', 'checked');
        } else {
            e.target.removeAttribute('checked')
        }
    })
})



// Price calculating



const priceCalculating = () => {

    let finalPrice = 1000;
    const visualCoef = document.getElementById('tab02');
    const materialCoef = document.getElementById('tab03');
    const cityCoef = document.getElementById('check1');
    const finishingCoef = document.getElementById('check2');
    const selfBuyCoef = document.getElementById('check3');
    const coloristCoef = document.getElementById('check4');
    const areaCoef = document.getElementById('areaCoef').value;
    const roomsCoef = document.getElementById('roomsCoef').value;
    const typeCoef = document.getElementById('typeCoef').value;
    const premiumCoef = document.getElementById('premiumCoef').value;

    //Смотрим площадь помещения и количество комнат
     finalPrice *= (areaCoef * roomsCoef / 1.8);

    //Смотрим тип помещения
    switch (typeCoef) {
        case 'flat':
            finalPrice *= 1.4;
            break;
        case 'office':
            finalPrice *= 1.1;
            break;
        case 'shop':
            finalPrice *= 1.2;
            break;
        case 'wearhouse':
            finalPrice *= 1.3;
            break;
        default:
            finalPrice *= 1;
            break;
    }

    //Смотрим на премиальность материалов
    switch (premiumCoef) {
        case 'premium':
            finalPrice *= 2;
            break;
        case 'econom':
            finalPrice *= 1;
            break;
        default:
            finalPrice *= 1;
            break;
    }

    // Проверяем выбрана ли визуализация
    if (visualCoef.getAttribute('checked')){
        finalPrice *= 2;
    }

    // Проверяем выбран ли подбор материало
    if (materialCoef.getAttribute('checked')){
        finalPrice *= 2;
    }
    
    // Проверяем доп чекбоксы
    if (cityCoef.getAttribute('checked')){
        finalPrice *= 1.4;
    } 
    if (finishingCoef.getAttribute('checked')){
        finalPrice *= 0.9;
    } 
    if (selfBuyCoef.getAttribute('checked')){
        finalPrice *= 0.9;
    }
    if (coloristCoef.getAttribute('checked')){
        finalPrice *= 1.1;
    }

    // Выводим результат
    document.querySelector('.cost__value').innerText = parseInt(finalPrice, 10) + ' руб.';
};

document.querySelector('.value__btn').addEventListener('click', priceCalculating);



