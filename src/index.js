import app from './app.js';
import { sequelize } from './database/db.js';
import './models/Users.js';
import './models/Posts.js';

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(process.env.PORT || 80);
        console.log('App listening at 80');
    } catch (error) {
        console.log('Error de conexion')
    }
}

main();

