/**
 * Első függvény lekéri a BTC árfolyamát
 */
function getTokenData(token = BTCUSDT)
{
    $.ajax({
        type: 'GET',
        url: 'https://www.binance.com/api/v3/ticker',
        data: 'symbol=' + token,
        success: function(ex) {
            var r1 = ex['lastPrice']*1;
            console.log(r1);
          }
        });
}
