function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.querySelector('#messages').appendChild(div);

}

function printResults(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('results').appendChild(div);

}



function printResults_top_You(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('results_top_You').appendChild(div);

}


function printResults_top_Maku(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('results_top_Maku').appendChild(div);

}


function clearMessages() {
    document.getElementById('messages').innerHTML = '';

}





function clearResults() {
    document.getElementById('results').innerHTML = '';

}





function clearResults_top_Maku() {
    document.getElementById('results_top_Maku').innerHTML = '';

}





function clearResults_top_You() {
    document.getElementById('results_top_You').innerHTML = '';

}