import Elysia, { AnyElysia } from "elysia";
import index from '../app/index.html'

export class AppRouter {
    public app: Elysia;
    constructor() {
        this.app = new Elysia({
            serve: {
                routes: { '/': index }
            }
        });
    }
    public addController(controller: AnyElysia) {
        this.app.group('/api', app => app.use(controller));
    }
    public init(port: number) {
        this.app.listen(port);
    }
}
