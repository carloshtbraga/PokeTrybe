import express from 'express';

class App {
    constructor(
        // inicializa o express
        private readonly _app = express()
    ) { }

    private createRoutes(): void {
        // cria uma rota de teste
        this._app.get('/', (_req, res) => {
            res.status(200).json({ message: 'Hello, world!' });
        });
    }

    private useMiddlewares(): void {
        this._app.use(express.json()); // permite que o express entenda requisições com o corpo em JSON
    }

    public start(port = 3000): void {
        this.useMiddlewares(); // aplica os middlewares

        this.createRoutes(); // cria as rotas

        // inicia o servidor, ouvindo na porta especificada
        this._app.listen(port, () => {
            console.log(`Server is listening on port ${port}!`);
        });
    }
}

// exporta uma instância da classe App
export const app = new App();
