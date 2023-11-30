/**
 * Első függvény lekéri a BTC árfolyamát
 * token  = BTCUSDT
 */
function gettokendata() {
    $.ajax({
        type: 'GET',
        url: 'https://api.binance.com/api/v3/ticker/price',
        data: { symbol: 'BTCUSDT' },
        success: function(ex) {
            var r1 = parseFloat(ex['price']);
            console.log(ex);
            $('#szamInput').val(r1);


            $('#btc').text($('#btc').text() + " <br/> " + r1);
        }
    });
}

function getbtcprice() {
    setInterval(gettokendata, 1000);
}