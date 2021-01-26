class Base64 {

    decrypt = (hash) => {
        let buff = new Buffer(hash, 'base64');
        let text = buff.toString('ascii');
        return text;
    };
}

module.exports = new Base64();