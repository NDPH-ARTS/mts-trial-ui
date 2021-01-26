class Base64 {

    decrypt = (hash) => {
        let buff = new Buffer(hash, 'base64');
        let text = buff.toString('ascii');
        console.log('this is the decrypted value' + text)
        return text;
    };
}

module.exports = new Base64();