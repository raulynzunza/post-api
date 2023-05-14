import app from './app.js';
import { sequelize } from './database/db.js';
import './models/Users.js';
import './models/Posts.js';

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(4000);
        console.log('App listening at 4000');
    } catch (error) {
        console.log('Error de conexion')
    }
}

main();

