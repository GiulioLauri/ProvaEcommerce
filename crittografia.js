var crypto = require('crypto');

function makeSalt(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

exports.funzioneHash = function(pwd){
    var salt = makeSalt(10);
    var res = {
        'pwd':crypto.createHash('sha256').update(pwd+salt).digest('base64'),
        'salt':salt };
    return res;
}