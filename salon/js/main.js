function showBlock(trigger, block){
  document.querySelectorAll(trigger).forEach((item)=>{
    item.addEventListener('click', (e)=>{
      e.preventDefault();
      document.querySelector(block).style.display = 'block';
      if (trigger == '.header__btn'){
        document.querySelector('.goal').style.zIndex = -1;
        overflowMenu();
      }
    });
  });
}

try{
  showBlock('.profit__change', '.profit__list');
} catch{}
try{
  showBlock('.partnerBtn', '.iamPartner');
} catch{}
try{
  showBlock('.header__btn', '.header__menu');
} catch{}

function overflowMenu(){
  document.body.style.overflow = 'hidden';
}
function overflowBack(){
  document.body.style.overflow = '';
}

function backToPoint(items){
  if (document.documentElement.clientWidth < 800){
    document.querySelectorAll(items).forEach(item => {
      item.addEventListener('click', ()=>{
        document.querySelector('.header__close').click();
      })
    });
  }
}





//_________________________________________________________________________

function closeBlock(trigger, block){
  document.querySelectorAll(trigger).forEach(item => {
    item.addEventListener('click', ()=>{
      document.querySelector(block).style.display = 'none';
      if (trigger == '.header__close'){
        overflowBack();
        document.querySelector('.goal').style.zIndex = 1;
      }
    });
  });
}

function backToPoint(items){
  if (document.documentElement.clientWidth < 800){
    document.querySelectorAll(items).forEach(item => {
      item.addEventListener('click', ()=>{
        document.querySelector('.header__close').click();
      })
    });
  }
}


try{
  backToPoint('.header__list li a')
} catch{}

try{
  closeBlock('.hood', '.iamPartner')
} catch{}
try{
  closeBlock('.application__close', '.application')
} catch{}
try{
  closeBlock('.sorry__close', '.sorry')
} catch{}
try{
  closeBlock('.sorry__btn', '.sorry')
} catch{}
try{
  closeBlock('.thanks__btn', '.thanks')
} catch{}
try{
  closeBlock('.thanks__close', '.thanks')
} catch{}
try{
  closeBlock('.header__close', '.header__menu')
} catch{}

function cityCheck(btn, input, city, block, anotherBlock){
  setTimeout(function(){
    document.querySelector(btn).addEventListener("click", function(event){
      event.preventDefault();
      let myCity = document.querySelector(input).value,
          cityList = document.querySelectorAll(city);
      for (let i = 0; i < cityList.length; i++){
        if (cityList[i].textContent == myCity){
          if (cityList[i].dataset.city == 0){
            // document.querySelector(block).style.display = "block";
            $.magnificPopup.open({
                items: {
                    src: block,
                    type: 'inline'
                },
               
              });
          } else if (cityList[i].dataset.city == 1){
            document.querySelector(anotherBlock).style.display = "block";
          }
        }
      }
    });
  }, 1500);
}

try{
  cityCheck('.map__check', '.map__input input', '.my__city', '.application' ,'.sorry');
} catch{}


function inputFocus(input, block){
  document.querySelector(input).addEventListener('click', ()=>{
    document.querySelector(block).style.display = 'block';
    if (document.querySelector(block).classList.contains('active')){
      document.querySelector(block).style.display = 'none';
      document.querySelector(block).classList.remove('active');
    } else {
      document.querySelector(block).classList.add('active');
    }
  });
}

try{
  inputFocus('.map__input input', '.map__list');
} catch{}
try{
  inputFocus('.map__arrow', '.map__list');
} catch{}
try{
  inputFocus('.kategory__choose', '.kategory__list');
} catch{}
try{
  inputFocus('.kategory__arrow', '.kategory__list');
} catch{}


function chooseText(input, textBlocks, block){
  document.querySelectorAll(textBlocks).forEach(item =>{
    item.addEventListener('click', ()=>{
      document.querySelector(input).value = item.textContent;
      document.querySelector(block).style.display = 'none';
      document.querySelector(block).classList.remove('active');
    });
  });
}

try{
  chooseText('.map__input input', '.my__city', '.map__list')
} catch{}
try{
  chooseText('.kategory__choose', '.my__city', '.kategory__list')
} catch{}


function ShowMyCity(input, cities){
    document.querySelector(input).addEventListener('input', ()=>{
        let inputValue = document.querySelector(input).value;
        document.querySelectorAll(cities).forEach(item =>{
            let myReg = new RegExp(inputValue);
            let result = item.textContent.match(myReg);
            if (result !== null){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

try{
    ShowMyCity('.map__input input', '.my__city');
} catch{}



let profitCity = document.querySelector('.profit__city'),
    setCakeOne = document.querySelector('.setCakeOne'),
    setCakeTwo = document.querySelector('.setCakeTwo'),
    readyCakeOne = document.querySelector('.readyCakeOne'),
    readyCakeTwo = document.querySelector('.readyCakeTwo'),
    readyOne = document.querySelector('.readyOne'),
    readyTwo = document.querySelector('.readyTwo'),
    weddingOne = document.querySelector('.weddingOne'),
    weddingTwo = document.querySelector('.weddingTwo'),
    cakeOne = document.querySelector('.cakeOne'),
    cakeTwo = document.querySelector('.cakeTwo'),
    homeCakeOne = document.querySelector('.homeCakeOne'),
    homeCakeTwo = document.querySelector('.homeCakeTwo'),
    childOne = document.querySelector('.childOne'),
    childTwo = document.querySelector('.childTwo'),
    conversion = document.querySelector('.conversion'),
    monthConversion = document.querySelector('.monthConversion'),
    yearConversion = document.querySelector('.yearConversion'),
    monthQuantity = document.querySelector('.monthQuantity'),
    yearQuantity = document.querySelector('.yearQuantity'),
    averageCheck = document.querySelector('.averageCheck'),
    autoCity = document.querySelector('.autoCity'),
    averageCheckMonth = document.querySelector('.averageCheckMonth'),
    averageCheckYear = document.querySelector('.averageCheckYear'),
    profitText = document.querySelector('.profitText');

function chooseBlock(item, input, block){
  document.querySelectorAll(item).forEach((one)=>{
    one.addEventListener('click', ()=>{
      document.querySelector(input).value = one.textContent;
      document.querySelector(block).style.display = 'none';
      switch(document.querySelector(input).value){
        case 'Барнаул':
          profitCity.textContent = 'Барнаул';
          setCakeOne.textContent = '4183';
          setCakeTwo.textContent = '50196';
          readyCakeOne.textContent = '359';
          readyCakeTwo.textContent = '4308';
          readyOne.textContent = '112';
          readyTwo.textContent = '1344';
          weddingOne.textContent = '5089';
          weddingTwo.textContent = '61068';
          cakeOne.textContent = '54';
          cakeTwo.textContent = '648';
          homeCakeOne.textContent = '174';
          homeCakeTwo.textContent = '2088';
          childOne.textContent = '7005';
          childTwo.textContent = '84060';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '16976';
          yearConversion.textContent = '203712';
          monthQuantity.textContent = '339,52';
          yearQuantity.textContent = '4074,24';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '339520';
          averageCheckYear.textContent = '4074240';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 339 520₽ и 4 074 240₽ в год!'
          break;
        case 'Белгород':
          profitCity.textContent = 'Белгород';
          setCakeOne.textContent = '4160';
          setCakeTwo.textContent = '49920';
          readyCakeOne.textContent = '345';
          readyCakeTwo.textContent = '4140';
          readyOne.textContent = '120';
          readyTwo.textContent = '1440';
          weddingOne.textContent = '10815';
          weddingTwo.textContent = '129780';
          cakeOne.textContent = '122';
          cakeTwo.textContent = '1464';
          homeCakeOne.textContent = '62';
          homeCakeTwo.textContent = '744';
          childOne.textContent = '3509';
          childTwo.textContent = '42108';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '19133';
          yearConversion.textContent = '229596';
          monthQuantity.textContent = '191,33';
          yearQuantity.textContent = '2295,96';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '191330';
          averageCheckYear.textContent = '2295960';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 191 330₽ и 2 295 960₽ в год!'
          break;
        case 'Вологда':
          profitCity.textContent = 'Вологда';
          setCakeOne.textContent = '4160';
          setCakeTwo.textContent = '49920';
          readyCakeOne.textContent = '345';
          readyCakeTwo.textContent = '4140';
          readyOne.textContent = '120';
          readyTwo.textContent = '1440';
          weddingOne.textContent = '10815';
          weddingTwo.textContent = '129780';
          cakeOne.textContent = '122';
          cakeTwo.textContent = '1464';
          homeCakeOne.textContent = '62';
          homeCakeTwo.textContent = '744';
          childOne.textContent = '3509';
          childTwo.textContent = '42108';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '19133';
          yearConversion.textContent = '229596';
          monthQuantity.textContent = '191,33';
          yearQuantity.textContent = '2295,96';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '191330';
          averageCheckYear.textContent = '2295960';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 3% и среднем чеке в 2500₽, Вы увеличите свой оборот в месяц на 703 200₽ и 8 438 400₽ в год!'
          break;
        case 'Зеленоград':
          profitCity.textContent = 'Зеленоград';
          autoCity.textContent = 'Зеленоград';
          setCakeOne.textContent = '9';
          setCakeTwo.textContent = '108';
          readyCakeOne.textContent = '32';
          readyCakeTwo.textContent = '384';
          readyOne.textContent = '5';
          readyTwo.textContent = '60';
          weddingOne.textContent = '2';
          weddingTwo.textContent = '24';
          cakeOne.textContent = '329';
          cakeTwo.textContent = '3948';
          homeCakeOne.textContent = '720';
          homeCakeTwo.textContent = '8640';
          childOne.textContent = '187';
          childTwo.textContent = '2244';
          conversion.textContent = '3,00%';
          monthConversion.textContent = '1284';
          yearConversion.textContent = '15408';
          monthQuantity.textContent = '38,52';
          yearQuantity.textContent = '462,24';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '57780';
          averageCheckYear.textContent = '693360';
          profitText.innerHTML = 'Сотрудничая с нами, при конверсии в 3% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 57 780₽ и 693 360₽ в год!';
          break;
        case 'Ижевск':
          profitCity.textContent = 'Ижевск';
          setCakeOne.textContent = '5532';
          setCakeTwo.textContent = '66384';
          readyCakeOne.textContent = '389';
          readyCakeTwo.textContent = '4668';
          readyOne.textContent = '131';
          readyTwo.textContent = '1572';
          weddingOne.textContent = '8475';
          weddingTwo.textContent = '101700';
          cakeOne.textContent = '42';
          cakeTwo.textContent = '504';
          homeCakeOne.textContent = '93';
          homeCakeTwo.textContent = '1116';
          childOne.textContent = '6287';
          childTwo.textContent = '75444';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '20949';
          yearConversion.textContent = '251388';
          monthQuantity.textContent = '209,49';
          yearQuantity.textContent = '2513,88';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '209490';
          averageCheckYear.textContent = '2513880';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 209 490₽ и 2 513 880₽ в год!'
          break;
        case 'Иркутск':
          profitCity.textContent = 'Иркутск';
          setCakeOne.textContent = '3117';
          setCakeTwo.textContent = '37404';
          readyCakeOne.textContent = '426';
          readyCakeTwo.textContent = '5112';
          readyOne.textContent = '184';
          readyTwo.textContent = '2208';
          weddingOne.textContent = '6328';
          weddingTwo.textContent = '75936';
          cakeOne.textContent = '93';
          cakeTwo.textContent = '1116';
          homeCakeOne.textContent = '178';
          homeCakeTwo.textContent = '2136';
          childOne.textContent = '7235';
          childTwo.textContent = '86820';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '17561';
          yearConversion.textContent = '210732';
          monthQuantity.textContent = '175,61';
          yearQuantity.textContent = '2107,32';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '175610';
          averageCheckYear.textContent = '2107320';
          profitText.innerHTML = 'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 175 610₽ и 2 107 320₽ в год!'
          break;
        case 'Калининград':
          profitCity.textContent = 'Калининград';
          setCakeOne.textContent = '2199';
          setCakeTwo.textContent = '26388';
          readyCakeOne.textContent = '204';
          readyCakeTwo.textContent = '2448';
          readyOne.textContent = '135';
          readyTwo.textContent = '1620';
          weddingOne.textContent = '3405';
          weddingTwo.textContent = '40860';
          cakeOne.textContent = '49';
          cakeTwo.textContent = '588';
          homeCakeOne.textContent = '117';
          homeCakeTwo.textContent = '1404';
          childOne.textContent = '4042';
          childTwo.textContent = '48504';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '10151';
          yearConversion.textContent = '121812';
          monthQuantity.textContent = '203,02';
          yearQuantity.textContent = '2436,24';
          averageCheck.textContent = '2000';
          averageCheckMonth.textContent = '406040';
          averageCheckYear.textContent = '4872480';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 2000₽, Вы увеличите свой оборот в месяц на 406 040₽ и 4 872 480₽ в год!'
          break;
        case 'Киров':
          profitCity.textContent = 'Киров';
          setCakeOne.textContent = '3624';
          setCakeTwo.textContent = '43488';
          readyCakeOne.textContent = '292';
          readyCakeTwo.textContent = '3504';
          readyOne.textContent = '199';
          readyTwo.textContent = '2388';
          weddingOne.textContent = '7520';
          weddingTwo.textContent = '90240';
          cakeOne.textContent = '52';
          cakeTwo.textContent = '624';
          homeCakeOne.textContent = '114';
          homeCakeTwo.textContent = '1368';
          childOne.textContent = '5207';
          childTwo.textContent = '62484';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '17008';
          yearConversion.textContent = '204096';
          monthQuantity.textContent = '170,08';
          yearQuantity.textContent = '2040,96';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '170080';
          averageCheckYear.textContent = '2040960';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 170 080₽ и 2 040 960₽ в год!'
          break;
        case 'Кострома':
          profitCity.textContent = 'Кострома';
          setCakeOne.textContent = '2711';
          setCakeTwo.textContent = '32532';
          readyCakeOne.textContent = '204';
          readyCakeTwo.textContent = '2448';
          readyOne.textContent = '93';
          readyTwo.textContent = '1116';
          weddingOne.textContent = '7276';
          weddingTwo.textContent = '87312';
          cakeOne.textContent = '32';
          cakeTwo.textContent = '384';
          homeCakeOne.textContent = '80';
          homeCakeTwo.textContent = '960';
          childOne.textContent = '2913';
          childTwo.textContent = '34956';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '13309';
          yearConversion.textContent = '159708';
          monthQuantity.textContent = '266,18';
          yearQuantity.textContent = '3194,16';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '399270';
          averageCheckYear.textContent = '4791240';
          profitText.innerHTML = 'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 399 270₽ и 4 791 240₽ в год!'
          break;
        case 'Миасс':
          profitCity.textContent = 'Миасс';
          setCakeOne.textContent = '1173';
          setCakeTwo.textContent = '14076';
          readyCakeOne.textContent = '46';
          readyCakeTwo.textContent = '552';
          readyOne.textContent = '30';
          readyTwo.textContent = '360';
          weddingOne.textContent = '1778';
          weddingTwo.textContent = '21336';
          cakeOne.textContent = '3';
          cakeTwo.textContent = '36';
          homeCakeOne.textContent = '39';
          homeCakeTwo.textContent = '468';
          childOne.textContent = '1341';
          childTwo.textContent = '16092';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '4410';
          yearConversion.textContent = '52920';
          monthQuantity.textContent = '88,2';
          yearQuantity.textContent = '1058,4';
          averageCheck.textContent = '2000';
          averageCheckMonth.textContent = '176400';
          averageCheckYear.textContent = '2116800';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 2000₽, Вы увеличите свой оборот в месяц на 176 400₽ и 2 116 800₽ в год!'
          break;
        case 'Мурманск':
          profitCity.textContent = 'Мурманск';
          setCakeOne.textContent = '2917';
          setCakeTwo.textContent = '35004';
          readyCakeOne.textContent = '169';
          readyCakeTwo.textContent = '2028';
          readyOne.textContent = '143';
          readyTwo.textContent = '1716';
          weddingOne.textContent = '7912';
          weddingTwo.textContent = '94944';
          cakeOne.textContent = '58';
          cakeTwo.textContent = '696';
          homeCakeOne.textContent = '145';
          homeCakeTwo.textContent = '1740';
          childOne.textContent = '3161';
          childTwo.textContent = '37932';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '14505';
          yearConversion.textContent = '174060';
          monthQuantity.textContent = '290,1';
          yearQuantity.textContent = '3481,2';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '290100';
          averageCheckYear.textContent = '3481200';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 290 100₽ и 3 481 200₽ в год!'
          break;
        case 'Москва':
          profitCity.textContent = 'Москва';
          setCakeOne.textContent = '40502';
          setCakeTwo.textContent = '486024';
          readyCakeOne.textContent = '18424';
          readyCakeTwo.textContent = '221088';
          readyOne.textContent = '22535';
          readyTwo.textContent = '270420';
          weddingOne.textContent = '24347';
          weddingTwo.textContent = '292164';
          cakeOne.textContent = '3503';
          cakeTwo.textContent = '42036';
          homeCakeOne.textContent = '8196';
          homeCakeTwo.textContent = '98352';
          childOne.textContent = '174548';
          childTwo.textContent = '2094576';
          conversion.textContent = '0,50%';
          monthConversion.textContent = '292055';
          yearConversion.textContent = '3504660';
          monthQuantity.textContent = '1460,275';
          yearQuantity.textContent = '17523,3';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '1460275';
          averageCheckYear.textContent = '17523300';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 0,5% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 1 460 275₽ и 17 523 300₽ в год!'                      
break;
        case 'Нальчик':
          profitCity.textContent = 'Нальчик';
          setCakeOne.textContent = '1658';
          setCakeTwo.textContent = '19896';
          readyCakeOne.textContent = '42';
          readyCakeTwo.textContent = '504';
          readyOne.textContent = '26';
          readyTwo.textContent = '312';
          weddingOne.textContent = '1144';
          weddingTwo.textContent = '13728';
          cakeOne.textContent = '9';
          cakeTwo.textContent = '108';
          homeCakeOne.textContent = '40';
          homeCakeTwo.textContent = '480';
          childOne.textContent = '1503';
          childTwo.textContent = '18036';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '4422';
          yearConversion.textContent = '53064';
          monthQuantity.textContent = '88,44';
          yearQuantity.textContent = '1061,28';
          averageCheck.textContent = '2000';
          averageCheckMonth.textContent = '176880';
          averageCheckYear.textContent = '2122560';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 2000₽, Вы увеличите свой оборот в месяц на 176 880₽ и 2 122 560₽ в год!'
          break;
        case 'Новосибирск':
          profitCity.textContent = 'Новосибирск';
          setCakeOne.textContent = '8294';
          setCakeTwo.textContent = '99528';
          readyCakeOne.textContent = '1029';
          readyCakeTwo.textContent = '12348';
          readyOne.textContent = '536';
          readyTwo.textContent = '6432';
          weddingOne.textContent = '11773';
          weddingTwo.textContent = '141276';
          cakeOne.textContent = '230';
          cakeTwo.textContent = '2760';
          homeCakeOne.textContent = '583';
          homeCakeTwo.textContent = '6996';
          childOne.textContent = '19996';
          childTwo.textContent = '239952';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '42441';
          yearConversion.textContent = '509292';
          monthQuantity.textContent = '424,41';
          yearQuantity.textContent = '5092,92';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '424410';
          averageCheckYear.textContent = '5092920';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 424 410₽ и 5 092 920₽ в год!'         
        break;
        case 'Ногинск':
          profitCity.textContent = 'Ногинск';
          setCakeOne.textContent = '1878';
          setCakeTwo.textContent = '22536';
          readyCakeOne.textContent = '117';
          readyCakeTwo.textContent = '1404';
          readyOne.textContent = '75';
          readyTwo.textContent = '900';
          weddingOne.textContent = '2609';
          weddingTwo.textContent = '31308';
          cakeOne.textContent = '23';
          cakeTwo.textContent = '276';
          homeCakeOne.textContent = '44';
          homeCakeTwo.textContent = '528';
          childOne.textContent = '1246';
          childTwo.textContent = '14952';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '5992';
          yearConversion.textContent = '71904';
          monthQuantity.textContent = '119,84';
          yearQuantity.textContent = '1438,08';
          averageCheck.textContent = '2000';
          averageCheckMonth.textContent = '239680';
          averageCheckYear.textContent = '2876160';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 2000₽, Вы увеличите свой оборот в месяц на 239 680₽ и 2 876 160₽ в год!'
          break;
        case 'Омск':
          profitCity.textContent = 'Омск';
          setCakeOne.textContent = '5684';
          setCakeTwo.textContent = '68208';
          readyCakeOne.textContent = '461';
          readyCakeTwo.textContent = '5532';
          readyOne.textContent = '306';
          readyTwo.textContent = '3672';
          weddingOne.textContent = '11117';
          weddingTwo.textContent = '133404';
          cakeOne.textContent = '115';
          cakeTwo.textContent = '1380';
          homeCakeOne.textContent = '410';
          homeCakeTwo.textContent = '4920';
          childOne.textContent = '10623';
          childTwo.textContent = '127476';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '28716';
          yearConversion.textContent = '344592';
          monthQuantity.textContent = '287,16';
          yearQuantity.textContent = '3445,92';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '430740';
          averageCheckYear.textContent = '5168880';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 430 740₽ и 5 168 880₽ в год!'
          break;
        case 'Пенза':
          profitCity.textContent = 'Пенза';
          setCakeOne.textContent = '4364';
          setCakeTwo.textContent = '52368';
          readyCakeOne.textContent = '420';
          readyCakeTwo.textContent = '5040';
          readyOne.textContent = '156';
          readyTwo.textContent = '1872';
          weddingOne.textContent = '6706';
          weddingTwo.textContent = '80472';
          cakeOne.textContent = '69';
          cakeTwo.textContent = '828';
          homeCakeOne.textContent = '246';
          homeCakeTwo.textContent = '2952';
          childOne.textContent = '6091';
          childTwo.textContent = '73092';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '18052';
          yearConversion.textContent = '216624';
          monthQuantity.textContent = '180,52';
          yearQuantity.textContent = '2166,24';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '270780';
          averageCheckYear.textContent = '3249360';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 270 780₽ и 3 249 360₽ в год!'
          break;
        case 'Санкт-Петербург':
          profitCity.textContent = 'Санкт-Петербург';
          setCakeOne.textContent = '35253';
          setCakeTwo.textContent = '423036';
          readyCakeOne.textContent = '1022';
          readyCakeTwo.textContent = '12264';
          readyOne.textContent = '10152';
          readyTwo.textContent = '121824';
          weddingOne.textContent = '21625';
          weddingTwo.textContent = '259500';
          cakeOne.textContent = '2018';
          cakeTwo.textContent = '24216';
          homeCakeOne.textContent = '3496';
          homeCakeTwo.textContent = '41952';
          childOne.textContent = '2323';
          childTwo.textContent = '27876';
          conversion.textContent = '0,50%';
          monthConversion.textContent = '75889';
          yearConversion.textContent = '910668';
          monthQuantity.textContent = '379,445';
          yearQuantity.textContent = '4553,34';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '379445';
          averageCheckYear.textContent = '4553340';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 0,5% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 379 445₽ и 4 553 340₽ в год!'
          break;
        case 'Самара':
          profitCity.textContent = 'Самара';
          setCakeOne.textContent = '6411';
          setCakeTwo.textContent = '76932';
          readyCakeOne.textContent = '876';
          readyCakeTwo.textContent = '10512';
          readyOne.textContent = '463';
          readyTwo.textContent = '5556';
          weddingOne.textContent = '3506';
          weddingTwo.textContent = '42072';
          cakeOne.textContent = '143';
          cakeTwo.textContent = '1716';
          homeCakeOne.textContent = '536';
          homeCakeTwo.textContent = '6432';
          childOne.textContent = '13220';
          childTwo.textContent = '158640';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '25155';
          yearConversion.textContent = '301860';
          monthQuantity.textContent = '251,55';
          yearQuantity.textContent = '3018,6';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '251550';
          averageCheckYear.textContent = '3018600';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 251 550₽ и 3 018 600₽ в год!'
          break;
        case 'Тольятти':
          profitCity.textContent = 'Тольятти';
          setCakeOne.textContent = '4362';
          setCakeTwo.textContent = '52344';
          readyCakeOne.textContent = '457';
          readyCakeTwo.textContent = '5484';
          readyOne.textContent = '107';
          readyTwo.textContent = '1284';
          weddingOne.textContent = '5990';
          weddingTwo.textContent = '71880';
          cakeOne.textContent = '52';
          cakeTwo.textContent = '624';
          homeCakeOne.textContent = '217';
          homeCakeTwo.textContent = '2604';
          childOne.textContent = '6519';
          childTwo.textContent = '78228';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '17704';
          yearConversion.textContent = '212448';
          monthQuantity.textContent = '354,08';
          yearQuantity.textContent = '4248,96';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '354080';
          averageCheckYear.textContent = '4248960';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 354 080₽ и 4 248 960₽ в год!'
          break;
        case 'Томск':
          profitCity.textContent = 'Томск';
          setCakeOne.textContent = '3244';
          setCakeTwo.textContent = '38928';
          readyCakeOne.textContent = '238';
          readyCakeTwo.textContent = '2856';
          readyOne.textContent = '114';
          readyTwo.textContent = '1368';
          weddingOne.textContent = '4833';
          weddingTwo.textContent = '57996';
          cakeOne.textContent = '56';
          cakeTwo.textContent = '672';
          homeCakeOne.textContent = '130';
          homeCakeTwo.textContent = '1560';
          childOne.textContent = '3928';
          childTwo.textContent = '47136';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '12543';
          yearConversion.textContent = '150516';
          monthQuantity.textContent = '125,43';
          yearQuantity.textContent = '1505,16';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '125430';
          averageCheckYear.textContent = '1505160';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 125 430₽ и 1 505 160₽ в год!';
          break;
        case 'Тула':
          profitCity.textContent = 'Тула';
          setCakeOne.textContent = '6886';
          setCakeTwo.textContent = '82632';
          readyCakeOne.textContent = '480';
          readyCakeTwo.textContent = '5760';
          readyOne.textContent = '318';
          readyTwo.textContent = '3816';
          weddingOne.textContent = '11410';
          weddingTwo.textContent = '136920';
          cakeOne.textContent = '126';
          cakeTwo.textContent = '1512';
          homeCakeOne.textContent = '207';
          homeCakeTwo.textContent = '2484';
          childOne.textContent = '7315';
          childTwo.textContent = '87780';
          conversion.textContent = '1,50%';
          monthConversion.textContent = '26742';
          yearConversion.textContent = '320904';
          monthQuantity.textContent = '401,13';
          yearQuantity.textContent = '4813,56';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '401130';
          averageCheckYear.textContent = '4813560';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1,5% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 401 130₽ и 4 813 560₽ в год!'
          break;
        case 'Краснодар':
          profitCity.textContent = 'Краснодар';
          setCakeOne.textContent = '5107';
          setCakeTwo.textContent = '61284';
          readyCakeOne.textContent = '1100';
          readyCakeTwo.textContent = '13200';
          readyOne.textContent = '417';
          readyTwo.textContent = '5004';
          weddingOne.textContent = '7839';
          weddingTwo.textContent = '94068';
          cakeOne.textContent = '127';
          cakeTwo.textContent = '1524';
          homeCakeOne.textContent = '578';
          homeCakeTwo.textContent = '6936';
          childOne.textContent = '13538';
          childTwo.textContent = '162456';
          conversion.textContent = '1,00%';
          monthConversion.textContent = '28706';
          yearConversion.textContent = '344472';
          monthQuantity.textContent = '287,06';
          yearQuantity.textContent = '3444,72';
          averageCheck.textContent = '1000';
          averageCheckMonth.textContent = '287060';
          averageCheckYear.textContent = '3444720';
          profitText.innerHTML = 'Сотрудничая с нами, при конверсии в 1% и среднем чеке в 1000₽, Вы увеличите свой оборот в месяц на 79 180₽ и 950 160₽ в год!';
          break;
        case 'Новгород Великий':
          profitCity.textContent = 'Новгород Великий';
          setCakeOne.textContent = '2687';
          setCakeTwo.textContent = '32244';
          readyCakeOne.textContent = '149';
          readyCakeTwo.textContent = '1788';
          readyOne.textContent = '91';
          readyTwo.textContent = '1092';
          weddingOne.textContent = '5175';
          weddingTwo.textContent = '62100';
          cakeOne.textContent = '29';
          cakeTwo.textContent = '348';
          homeCakeOne.textContent = '76';
          homeCakeTwo.textContent = '912';
          childOne.textContent = '2589';
          childTwo.textContent = '31068';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '10796';
          yearConversion.textContent = '129552';
          monthQuantity.textContent = '215,92';
          yearQuantity.textContent = '2591,04';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '323880';
          averageCheckYear.textContent = '3886560';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 323 880₽ и 3 886 560₽ в год!';
          break;
        case 'Ярославль':
          profitCity.textContent = 'Ярославль';
          setCakeOne.textContent = '9354';
          setCakeTwo.textContent = '112248';
          readyCakeOne.textContent = '643';
          readyCakeTwo.textContent = '7716';
          readyOne.textContent = '348';
          readyTwo.textContent = '4176';
          weddingOne.textContent = '10091';
          weddingTwo.textContent = '121092';
          cakeOne.textContent = '110';
          cakeTwo.textContent = '1320';
          homeCakeOne.textContent = '162';
          homeCakeTwo.textContent = '1944';
          childOne.textContent = '7239';
          childTwo.textContent = '86868';
          conversion.textContent = '1,50%';
          monthConversion.textContent = '27947';
          yearConversion.textContent = '335364';
          monthQuantity.textContent = '419,205';
          yearQuantity.textContent = '5030,46';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '628807,5';
          averageCheckYear.textContent = '7545690';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1,5% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 628 807₽ и 7 545 690₽ в год!';
          break;
        case 'Волгоград':
          profitCity.textContent = 'Волгоград';
          setCakeOne.textContent = '5058';
          setCakeTwo.textContent = '60696';
          readyCakeOne.textContent = '548';
          readyCakeTwo.textContent = '6576';
          readyOne.textContent = '282';
          readyTwo.textContent = '3384';
          weddingOne.textContent = '9336';
          weddingTwo.textContent = '112032';
          cakeOne.textContent = '103';
          cakeTwo.textContent = '1236';
          homeCakeOne.textContent = '285';
          homeCakeTwo.textContent = '3420';
          childOne.textContent = '10935';
          childTwo.textContent = '131220';
          conversion.textContent = '1,50%';
          monthConversion.textContent = '26547';
          yearConversion.textContent = '318564';
          monthQuantity.textContent = '398,205';
          yearQuantity.textContent = '4778,46';
          averageCheck.textContent = '1500';
          averageCheckMonth.textContent = '597307,5';
          averageCheckYear.textContent = '7167690';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 1,5% и среднем чеке в 1500₽, Вы увеличите свой оборот в месяц на 597 307₽ и 7 167 690₽ в год!'
          break;
        case 'Раменское':
          profitCity.textContent = 'Раменское';
          setCakeOne.textContent = '2726';
          setCakeTwo.textContent = '32712';
          readyCakeOne.textContent = '134';
          readyCakeTwo.textContent = '1608';
          readyOne.textContent = '75';
          readyTwo.textContent = '900';
          weddingOne.textContent = '3560';
          weddingTwo.textContent = '42720';
          cakeOne.textContent = '11';
          cakeTwo.textContent = '132';
          homeCakeOne.textContent = '71';
          homeCakeTwo.textContent = '852';
          childOne.textContent = '1565';
          childTwo.textContent = '18780';
          conversion.textContent = '2,50%';
          monthConversion.textContent = '8142';
          yearConversion.textContent = '97704';
          monthQuantity.textContent = '203,55';
          yearQuantity.textContent = '2442,6';
          averageCheck.textContent = '2500';
          averageCheckMonth.textContent = '508875';
          averageCheckYear.textContent = '6106500';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2,5% и среднем чеке в 2500₽, Вы увеличите свой оборот в месяц на 508 875₽ и 6 106 500₽ в год!'
          break;
        case 'Псков':
          profitCity.textContent = 'Псков';
          setCakeOne.textContent = '2744';
          setCakeTwo.textContent = '32928';
          readyCakeOne.textContent = '175';
          readyCakeTwo.textContent = '2100';
          readyOne.textContent = '100';
          readyTwo.textContent = '1200';
          weddingOne.textContent = '4870';
          weddingTwo.textContent = '58440';
          cakeOne.textContent = '68';
          cakeTwo.textContent = '816';
          homeCakeOne.textContent = '102';
          homeCakeTwo.textContent = '1224';
          childOne.textContent = '2295';
          childTwo.textContent = '27540';
          conversion.textContent = '2,50%';
          monthConversion.textContent = '10354';
          yearConversion.textContent = '124248';
          monthQuantity.textContent = '258,85';
          yearQuantity.textContent = '3106,2';
          averageCheck.textContent = '2500';
          averageCheckMonth.textContent = '647125';
          averageCheckYear.textContent = '7765500';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2,5% и среднем чеке в 2500₽, Вы увеличите свой оборот в месяц на 647 125₽ и 7 765 500₽ в год!'
          break;
        case 'Старый Оскол':
          autoCity.textContent = 'Старый Оскол';
          setCakeOne.textContent = '1588';
          setCakeTwo.textContent = '19056';
          readyCakeOne.textContent = '83';
          readyCakeTwo.textContent = '996';
          readyOne.textContent = '74';
          readyTwo.textContent = '888';
          weddingOne.textContent = '2829';
          weddingTwo.textContent = '33948';
          cakeOne.textContent = '13';
          cakeTwo.textContent = '156';
          homeCakeOne.textContent = '56';
          homeCakeTwo.textContent = '672';
          childOne.textContent = '2525';
          childTwo.textContent = '30300';
          conversion.textContent = '3,00%';
          monthConversion.textContent = '7168';
          yearConversion.textContent = '86016';
          monthQuantity.textContent = '215,04';
          yearQuantity.textContent = '2580,48';
          averageCheck.textContent = '2500';
          averageCheckMonth.textContent = '537600';
          averageCheckYear.textContent = '6451200';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 3% и среднем чеке в 2500₽, Вы увеличите свой оборот в месяц на 537 600₽ и 6 451 200₽ в год!'
          break;
        case 'Солнечногорск':
          autoCity.textContent = 'Солнечногорск';
          setCakeOne.textContent = '1170';
          setCakeTwo.textContent = '14040';
          readyCakeOne.textContent = '62';
          readyCakeTwo.textContent = '744';
          readyOne.textContent = '40';
          readyTwo.textContent = '480';
          weddingOne.textContent = '1652';
          weddingTwo.textContent = '19824';
          cakeOne.textContent = '13';
          cakeTwo.textContent = '156';
          homeCakeOne.textContent = '9';
          homeCakeTwo.textContent = '108';
          childOne.textContent = '644';
          childTwo.textContent = '7728';
          conversion.textContent = '2,00%';
          monthConversion.textContent = '3590';
          yearConversion.textContent = '43080';
          monthQuantity.textContent = '71,8';
          yearQuantity.textContent = '861,6';
          averageCheck.textContent = '2000';
          averageCheckMonth.textContent = '143600';
          averageCheckYear.textContent = '1723200';
          profitText.innerHTML = 
'Сотрудничая с нами, при конверсии в 2% и среднем чеке в 2000₽, Вы увеличите свой оборот в месяц на 143 600₽ и 1 723 200₽ в год!';
          break;
      }
    });
  });
}
chooseBlock('.profit__item', '.profit__change', '.profit__list');
