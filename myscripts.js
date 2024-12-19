var niitdun = 0;
var checkSubmit = 0;
var americanouuh = document.getElementById('americanost');
var americanoyawah = document.getElementById('americanotk');
var espressouuh = document.getElementById('espressost');
var espressoyawah = document.getElementById('espressotk');
var cappucinouuh = document.getElementById('cappucinost');
var cappucinoyawah = document.getElementById('cappucinotk');
var latteeuuh = document.getElementById('caffeeLattest');
var latteeyawah = document.getElementById('caffeeLattetk');
var carameluuh = document.getElementById('caramelLattest');
var caramelyawah = document.getElementById('caramelLattetk');
var vanillauuh = document.getElementById('vanillaLattest');
var vanilayawah = document.getElementById('vanillaLattetk');
var mochauuh = document.getElementById('mochast');
var mochayawah = document.getElementById('mochatk');
var greanteauuh = document.getElementById('greenteast');
var greanteayawah = document.getElementById('greenteatk');
var greanteaguts = document.getElementById('greenteagts');
var fruituuh = document.getElementById('fruitteast');
var fruityawah = document.getElementById('fruitteatk');
var fruitguts = document.getElementById('fruitteagts');
var earlgreyuuh = document.getElementById('earlgreyst');
var earlgreyyawah = document.getElementById('earlgreytk');
var earlgreyguts = document.getElementById('earlgreygts');
var chocolatemilkuuh = document.getElementById('chocolatemilkst');
var chocolatemilkyawah = document.getElementById('chocolatemilktk');
var greantealatteuuh = document.getElementById('greentealattest');
var greantealatteyawah = document.getElementById('greantealattetk');
var milkhoneyuuh = document.getElementById('milkhoneyst');
var milkhoneyyawah = document.getElementById('milkhoneytk');
var anisuuh = document.getElementById('anisst');
var manisyawah = document.getElementById('anistk');
var chyatsarganauh = document.getElementById('chatsarganast');
var chyatsarganayawah = document.getElementById('chatsarganatk');
var minihuushuurs = document.getElementById('minihuushuur');
var sandwhichs = document.getElementById('sandwhich');
var chickens = document.getElementById('chicken');
var salats = document.getElementById('salat');
var eclerones= document.getElementById('eclerone');
var eclerfours = document.getElementById('eclerfour');
var banshs = document.getElementById('bansh');
var redvelvets = document.getElementById('redvelvet');
var burritos = document.getElementById('burrito');
var fuzeteas = document.getElementById('fuzetea');
var millenias = document.getElementById('millenia');
var redbulls = document.getElementById('redbull');
var targets = document.getElementById('target');
var tymbarkjs = document.getElementById('tymbarkj');
var pepsis = document.getElementById('pepsi');
var tymbarkcs = document.getElementById('tymbarkc');
var chibatas = document.getElementById('chibata');

function submit (){
  nemeh("",0);
  var americano = (6900 * americanouuh.value) + (7900 * americanoyawah.value);
  if(americano > 0){
    nemeh('Americano', americano)
  }

  var espresso = (5900 * espressouuh.value) + (6900 * espressoyawah.value);
  if(espresso > 0){
    nemeh('Espresso', espresso)
  }

  var cappucino = (7700 * cappucinouuh.value) + (8700 * cappucinoyawah.value);
  if(cappucino > 0){
    nemeh('Cappucino', cappucino)
  }

  var lattee = (7300 * latteeuuh.value) + (8300 * latteeyawah.value);
  if(lattee > 0){
    nemeh('Caffee Lattee', lattee)
  }

  var caramel = (7800 * carameluuh.value) + (8800 * caramelyawah.value);
  if(caramel > 0){
    nemeh('Caramel Lattee', caramel)
  }

  var vanilla = (7800 * vanillauuh.value) + (8800 * vanilayawah.value);
  if(vanilla > 0){
    nemeh('Vanilla Lattee', vanilla)
  }

  var mocha= (8300 * mochauuh.value) + (9300 * mochayawah.value);
  if(mocha > 0){
    nemeh('Mocha', mocha)
  }

  var greantea= (4500 * greanteauuh.value) + (5500 * greanteayawah.value) + (11000 * greanteaguts.value);
  if(greantea > 0){
    nemeh('GreanTea', greantea)
  }

  var fruittea= (5500 * fruituuh.value) + (6500 * fruityawah.value) + (11000 * fruitguts.value);
  if(fruittea > 0){
    nemeh('Fruit Tea', fruittea)
  }

  var earlgrey= (4900 * earlgreyuuh.value) + (5900 * earlgreyyawah.value) + (11000 * earlgreyguts.value);
  if(earlgrey > 0){
    nemeh('Earl Grey', earlgrey)
  }

  var chocolatemilk= (5900 * chocolatemilkuuh.value) + (6900 * chocolatemilkyawah.value);
  if(chocolatemilk > 0){
    nemeh('Chocolate Milk', chocolatemilk)
  }

  var greantealatte= (7300 * greantealatteuuh.value) + (8300 * greantealatteyawah.value);
  if(greantealatte > 0){
    nemeh('Green Tea Latte', greantealatte)
  }

  var milkhone= (5700 * milkhoneyuuh.value) + (6700 * milkhoneyyawah.value);
  if(milkhone > 0){
    nemeh('Milk & Honey', milkhone)
  }

  var anis= (5900 * anisuuh.value) + (6900 * manisyawah.value);
  if(anis > 0){
    nemeh('Анис', anis)
  }

  var chyatsargana= (5900 * chyatsarganauh.value) + (6900 * chyatsarganayawah.value);
  if(chyatsargana > 0){
    nemeh('Чяцаргана', chyatsargana)
  }
  
  var minihuushuur= 7800 * minihuushuurs.value;
  if(minihuushuur > 0){
    nemeh('Мини хуушуур', minihuushuur);
  }

  var sandwhich= 5500 * sandwhichs.value;
  if(sandwhich > 0){
    nemeh('Sandwhich', sandwhich);
  }
  
  var chicken= 8600 * chickens.value;
  if(chicken > 0){
    nemeh('BBQ Chicken', chicken);
  }

  var salat= 7150 * salats.value;
  if(salat > 0){
    nemeh('Cesar salat', salat);
  }

  var eclerone= 2300 * eclerones.value;
  if(eclerone > 0){
    nemeh('Ecler 1', eclerone);
  }

  var eclerfour= 4950 * eclerfours.value;
  if(eclerfour > 0){
    nemeh('Ecler 4', eclerfour);
  }

  var bansh= 7000 * banshs.value;
  if(bansh > 0){
    nemeh('Цөцгийтэй банш', bansh);
  }

  var redvelvet= 6700 * redvelvets.value;
  if(redvelvet > 0){
    nemeh('Цөцгийтэй банш', redvelvet);
  }

  var burrito= 6100 * burritos.value;
  if(burrito > 0){
    nemeh('Burrito', burrito);
  }

  var fuzetea= 2500 * fuzeteas.value;
  if(fuzetea > 0){
    nemeh('Fuze Tea', fuzetea);
  }

  var millenia= 2100 * millenias.value;
  if(millenia > 0){
    nemeh('Millenia', millenia);
  }

  var redbull= 5900 * redbulls.value;
  if(redbull > 0){
    nemeh('Red Bull', redbull);
  }

  var target= 4400 * targets.value;
  if(target > 0){
    nemeh('Target', target);
  }

  var tymbarkj= 2000 * tymbarkjs.value;
  if(tymbarkj > 0){
    nemeh('Tymbark juice', tymbarkj);
  }

  var pepsi= 2300 * pepsis.value;
  if(pepsi > 0){
    nemeh('Pepsi', pepsi);
  }

  var tymbarkc= 3000 * tymbarkcs.value;
  if(tymbarkc > 0){
    nemeh('Pepsi', tymbarkc);
  }

  var chibata= 5900 * chibatas.value;
  if(chibata > 0){
    nemeh('Чибата', chibata);
  }

  checkSubmit = +1;
  if(niitdun == 0){
    window.alert('Сонголт хийнэ үү!!')
  }
}

function cleara(){ 

americanouuh.value = 0
americanoyawah.value = 0
espressouuh.value = 0
espressoyawah.value = 0
cappucinouuh.value = 0
cappucinoyawah.value = 0
latteeuuh.value = 0
latteeyawah.value = 0
carameluuh.value = 0
caramelyawah.value=0;
vanillauuh.value=0;
vanilayawah.value=0;
mochauuh.value=0;
mochayawah.value=0;
greanteauuh.value=0;
greanteayawah.value=0;
greanteaguts.value=0;
fruituuh.value=0;
fruityawah.value=0;
fruitguts.value=0;
earlgreyuuh.value=0;
earlgreyyawah.value=0;
earlgreyguts.value=0;
chocolatemilkuuh.value=0;
chocolatemilkyawah.value=0;
greantealatteuuh.value=0;
greantealatteyawah.value=0;
milkhoneyuuh.value=0;
milkhoneyyawah.value=0;
anisuuh.value=0;
manisyawah.value=0;
chyatsarganauh.value=0;
chyatsarganayawah.value=0;
minihuushuurs.value=0;
sandwhichs.value=0;
chickens.value=0;
salats.value=0;
eclerones.value=0;
eclerfours.value=0;
banshs.value=0;
redvelvets.value=0;
burritos.value=0;
fuzeteas.value=0;
millenias.value=0;
redbulls.value=0;
targets.value=0;
tymbarkjs.value=0;
pepsis.value=0;
tymbarkcs.value=0;
chibatas.value=0;

nemeh("", 0);
niitdun = 0;
checkSubmit = 0;
}

function nemeh(ner, une){ 
  const div = document.getElementById('urdun')
  const newElement = document.createElement('p');
  if(ner == '' && une == 0){
    while(div.firstChild){
      div.removeChild(div.firstChild);
  }
  } else {
    newElement.innerHTML = ner + ' : ' + une;
    div.appendChild(newElement)
    niitdun = niitdun + une;
  }
}

function duusgah (){
  if(checkSubmit < 1){
    window.alert('Үргэлжлүүлэх дарна уу')
  } else {
  const div = document.getElementById('urdun')
  const newElement = document.createElement('H1');
  newElement.innerHTML = 'Нийт үнэ : ' + niitdun;
  div.appendChild(newElement)
  }
}