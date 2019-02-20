// PLEASE DON'T change function name     H = 50¢, Q = 25¢, D = 10¢, N = 5¢, P = 1¢
module.exports = function makeExchange(currency) {
    var result = {};
    var H,Q,D,N,P;
    if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency>0) {
        H =  Math.floor( currency / 50 );
        if (H > 0) result['H'] = H;
        currency = currency % 50;
        if (currency > 0)  {
            Q =  Math.floor( currency / 25 );
            if (Q > 0) result['Q'] = Q;
            currency = currency % 25;
            if (currency > 0)  {
                D =  Math.floor( currency / 10 );
                if (D > 0) result['D'] = D;
                currency = currency % 10;
                if (currency > 0)  {
                    N =  Math.floor( currency / 5 );
                    if (N > 0) result['N'] = N;
                    currency = currency % 5;
                    if (currency > 0)  {
                        P =  Math.floor( currency / 1 );
                        if (P > 0) result['P'] = P;
                    }
                }
            }
        }
    }
    return result;
};