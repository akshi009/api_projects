import { Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;
