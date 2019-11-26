temp = 0;
function action1() {
    temp=temp+1;
    document.getElementById('incident').innerHTML+='<div class="row"><div class="col-1">'+temp+'</div><div class="col-7" id="text-result-'+temp+'"></div><div class="col-3" id="date-result-'+temp+'"></div><div class="col-1" id="close"></div></div>';
    document.getElementById('text-result-'+temp).innerHTML = document.getElementById('textArea').value;
    document.getElementById('date-result-'+temp).innerHTML = document.getElementById('date').value;
}