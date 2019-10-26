function clocky(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var ampm = hours>=12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12
    hours = hours>9 ? hours : '0' + hours;
    minutes = minutes>9 ? minutes : '0' + minutes;
    seconds = seconds>9 ? seconds : '0' + seconds;

    document.getElementById('hour').innerHTML = hours+':';
    document.getElementById('minute').innerHTML = minutes+':';
    document.getElementById('second').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('title').innerHTML = 'Clocky'+' '+'('+hours+':'+minutes+' '+ampm+')'
}

setInterval(clocky, 500)
