var choice = prompt('Enter 1 for addition and 2 for multiplication')

if (choice == 1) {
    document.getElementById('head').innerHTML=('<title> Addition or Multiplication </title><link href="taskCSS.css" type="text/css" rel="stylesheet">');
    document.getElementById('title').textContent='Addition of 3';
    document.getElementById('table').innerHTML='<p>1+3=4<br/>2+3=5<br/>3+3=6<br/>4+3=7<br/>5+3=8<br/>6+3=9<br/>7+3=10<br/>8+3=11<br/>9+3=12<br/>10+3=13<p/>';

}else {
    document.getElementById('head').innerHTML=('<title> Addition or Multiplication </title><link href="taskCSS.css" type="text/css" rel="stylesheet">');
    document.getElementById('title').textContent='Multiplication of 3';
    document.getElementById('table').innerHTML='<p>1&#215;3=3<br/>2&#215;3=6<br/>3&#215;3=9<br/>4&#215;3=12<br/>5&#215;3=15<br/>6&#215;3=18<br/>7&#215;3=21<br/>8&#215;3=24<br/>9&#215;3=27<br/>10&#215;3=30<p/>';

}
