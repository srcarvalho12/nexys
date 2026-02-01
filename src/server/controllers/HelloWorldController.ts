import Elysia from "elysia";

export const HelloWorldController = new Elysia()
.get('/login', ctx => {
    return {
        hello: 'world!'
    }
})
