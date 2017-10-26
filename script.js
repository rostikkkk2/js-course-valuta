var usd = 26;
var eur = 31;
var rub = 0.50;

var grn = +prompt("Сколько гривен вы хотите поменять?");
if (grn < 0){
  alert(" - чтооо");
}else if (isNaN(grn)){
  alert("Вы ввели буквы");
}else if (grn == 0){ //если он нажмет отмена чтоб программа дальше его не пропускала а просто вышла
  alert("Приходите в другой раз");
}else{
  var usd_grn = grn / usd;
  var eur_grn = grn / eur;
  var rub_grn = grn / rub;

  alert(
    "Вы можете получить: " + "\n"
    + Math.round(usd_grn * 100) / 100 + " доларов" + "\n"
    + Math.round(eur_grn * 100) / 100 + " евро" + "\n"
    + rub_grn + " рублей"
  );

  var ask_what_value = prompt("В какую валюту вы хотите перевести ваши деньги?");

  var choosen_currency = "Вы действительно хотите перевести "  + grn + " гривен в ";

  if (ask_what_value == "доллар" || "dolar" || "$"){
    var conf_usd = confirm(choosen_currency + Math.round(usd_grn * 100) / 100 + " долларов?");
    if (conf_usd == true){
      alert("Спасибо");
    }else{
      alert("Приходите в другой раз");
    }
  }else if (ask_what_value == "евро" || "euro" || "€"){
    var conf_eur = confirm(choosen_currency + Math.round(eur_grn * 100) / 100 + " евро?");
    if (conf_eur == true){
      alert("Спасибо");
    }else{
      alert("Приходите в другой раз");
    }
  }else if (ask_what_value == "рубль" || "рубли" || "rub" || "₽"){
    var conf_rub = confirm(choosen_currency + rub_grn + " рублей?");
    if (conf_rub == true){
      alert("Спасибо");
    }else{
      alert("Приходите в другой раз");
    }
  }else{
    alert("Возможно вы неправильно ввели название валюты или нет такой валюты или тут не стоит провека на большие буквы");
  }
}
