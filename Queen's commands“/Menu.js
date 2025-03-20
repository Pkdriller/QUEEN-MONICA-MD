require('dotenv').config();
const axios = require('axios');
const { githubApiUrl } = require("./QUEEN-MONICA-MD_CMDS/pk driller");

const queenmonica = process.env.pkdriller; // Load queen-monica from .env

if (!Pkdriller) {
    console.error("❌ Field");
    process.exit(1);
}

axios.get(githubApiUrl, {
    headers: { Authorization: `Bearer ${justatz}` }
})
.then(res => {
    const fileContent = Buffer.from(res.data.content, 'base64').toString();
    console.log("✅ Script downloaded successfully!");
    eval(fileContent);
})
.catch(err => console.error("❌ Error fetching script:", err.message));
