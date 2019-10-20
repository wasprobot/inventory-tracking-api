const Pool = require('pg').Pool

const pool = new Pool({
    user: 'ssuser',
    host: 'localhost',
    database: 'ssinventory',
    password: 'sspwd',
    port: 5432,
})

const getItems = (request, response) => {
    pool.query('SELECT * FROM inventoryitem', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getItems,
}