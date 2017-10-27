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
  if (!isNaN(ask_what_value)){
   alert("вы ввели цифры");
 }else{
    var choosen_currency = "Вы действительно хотите перевести "  + grn + " гривен в ";
    var part_value;
    if(ask_what_value == "доллар" && "dolar" && "$"){
      part_value = Math.round(usd_grn * 100) / 100 + " долларов?";
    }else if (ask_what_value == "евро" && "euro" && "€"){
      part_value = Math.round(eur_grn * 100) / 100 + " евро?";
    }else{
      part_value = rub_grn + " рублей?";
    }
    var confirm_money = confirm(choosen_currency + part_value);
    if (ask_what_value == "доллар" && "dolar" && "$"){
      var conf = confirm_money;
    }else if (ask_what_value == "евро" && "euro" && "€"){
      var conf = confirm_money;
    }else if (ask_what_value == "рубль" && "рубли" && "rub" && "₽"){
      var conf = confirm_money;
    }
      conf ? (alert("Спасибо")) : (alert("Приходите в другой раз"));
  }
}
