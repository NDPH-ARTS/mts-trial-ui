let assert = require('assert');
class utils {

    presenceOfData(tablepath) {
        const rows = $$(tablepath)
        let columnArray = []
        rows.forEach(row => {
            const columns = row.$$('td')
            columnArray.push(columns[0].getText())

        })
        return columnArray;
    }
}
module.exports = new utils();
