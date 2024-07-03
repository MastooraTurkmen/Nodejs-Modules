const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf8', () => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result ${first}, ${second}`, { flag: 'a' }
            , (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
            }
        )
    })
})