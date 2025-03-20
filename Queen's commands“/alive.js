const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 ${message}
 
 
QUEEN-MONICA 🚀*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("*𝚫𝚳 𝚫𝐋𝚰𝛁𝚵 *") ; return};

      await   repondre("*UEEN-MONICA* ~𝚰𝐒 𝚫𝐋𝚰𝛁𝚵");
         repondre("don't do fake thinks :)")
     }
 } else {

    if(!superUser) { repondre ("QUEENONLY") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre('𝐖𝚵𝐋𝐂𝚯𝚳𝚵 𝚻𝚯 QUEEN-MONICA 🚀 𝐃𝚰𝛁𝚵 𝚰𝚴𝚻𝚯 𝚻𝚮𝚵 𝐖𝚯𝚪𝐋𝐃 𝚯𝐅 𝐖𝚮𝚫𝚻𝐒𝚫𝚸𝚸 𝚩𝚯𝚻𝐒 𝚫𝚴𝐃 𝛁𝚸𝚴 𝐔𝚸𝐃𝚫𝚻𝚵𝐒.')

}
    });
