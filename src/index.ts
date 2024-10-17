import { Hello } from "./hello";

async function main() {
    let hello = new Hello()
    await hello.world()
}

void main()