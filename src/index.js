import app from './app.js';
import { sequelize } from './database/db.js';
import './models/Users.js';
import './models/Posts.js';
import { PORT } from './config.js'
async function main() {
    try {
        await sequelize.sync({ force: true })
        app.listen(PORT);
        console.log('App listening at 4000');
    } catch (error) {
        console.log('Error de conexion')
    }
}

main();

