import { createApp } from './app';
import { connectDB } from './database/db';
import { config } from './config/index';




async function start() {
    try {
        await connectDB();
        const app = createApp();

        const port = Number(config.port) || 9000;

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to start server', err);
        process.exit(1);
    }
}

start();