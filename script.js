
function Min()
{
    d=document
    var a = Number(d.form1.A.value);
    var b = Number(d.form1.B.value);
    var x1 = Math.min (a,b);
    d.form1.x1.value=x1;
}

function admin()
{
    d=document
    var adm = (d.form2.adm.value)
    var name;
    name = adm;
    (name == 'Егор')?
      d.form2.name.value = name : alert("Ты не админ!");
}

function age()
{
    d=document
    var ag = (d.form3.ag.value)
    let ok = confirm('Вы уверены?')
    if (ok) {
        alert('Спасибо! Вам ' +ag  + ' лет.');
    } else {
        alert('Попробуйте ввести возраст заново!');
    }
}

function com()
{
    let ok = confirm('Вы действительно хотите отправить данные на сервер?')
    if (ok) {
        alert('Данные успешно отправлены на сервер');
    } else {
        alert('Отправка на сервер прервана!');
    }
}

function fun1()
{
    var checkbox=document.getElementById('one');
  if(checkbox.checked!=false)
  {
    alert("Вам полагается повышенный статус");
  }
  else
  alert("Только что были студентом ...");
    
}
