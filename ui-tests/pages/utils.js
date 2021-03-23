let assert = require('assert');
class utils {

    presenceOfData(tablepath) {
        //'//div//div[@class="title"]/parent::div/app-sites-view/table//tr'
        const rows = $$(tablepath)
        let columnArray = []
        rows.forEach(row => {
            const columns = row.$$('td')
            console.log(columns[0].getText())

            columnArray.push(columns[0].getText())

        })
        // console.log('columnArray ' + columnArray.length)
        return columnArray;
    }
}
module.exports = new utils();
