"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
mport * as;
functions;
from;
'firebase-functions';
const admin = require("firebase-admin");
const app = admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map