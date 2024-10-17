import axios, { AxiosInstance } from "axios";

export class Hello {
    message: string = "typescript"
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:9000"
        })
    }

    async world() {
        const response = await this.client.get(`/?hello=${this.message}`)
        console.log(response.data)
    }
}