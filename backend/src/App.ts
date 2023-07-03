import express from 'express';
import cors from 'cors';
import router from './api/routes';

class App {
    constructor(
        // inicializa o express
        private readonly _app: express.Express = express()
    ) {
        this.useMiddlewares(); // aplica os middlewares
        this.createRoutes(); // cria as rotas
    }

    private createRoutes(): void {
        // cria as rotas da API
        this._app.use(router);

        // cria uma rota de teste
        this._app.get('/', (_req, res) => {
            res.status(200).json({ message: 'Hello, world!' });
        });
    }

    private useMiddlewares(): void {
        this._app.use(express.json()); // permite que o express entenda requisições com o corpo em JSON
        this._app.use(cors()); // permite que o express aceite requisições de outros domínios
    }

    public start(port = 3001): void {
        // inicia o servidor, ouvindo na porta especificada
        this._app.listen(port, () => {
            console.log(`Server is listening on port ${port}!`);
        });
    }
}

// exporta uma instância da classe App
export const app = new App();
