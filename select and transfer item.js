for (let i=0; i<document.querySelectorAll('.items_container input[type=checkbox]').length; i++) {
    let text = document.querySelectorAll('.items_container input[type=checkbox]')[i].parentElement.getElementsByTagName('label')[0].textContent;
    const reg = /Небесная|Самоцвет|небожителя|лагеря|броня|слиток|духа/;
    if (reg.test(text)){
    let check = document.querySelectorAll('.items_container input[type=checkbox]')[i];
    check.checked=true;
    }}
document.querySelector('[type="submit"]').click();