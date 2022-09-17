import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

export async function CreateDatabase() {
    const client = createClient({
        url: process.env.REDIS_URL
    });
    
    await client.connect();

    return client;
}
