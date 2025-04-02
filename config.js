const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7zqOYog0FZ11aCgIqIieMGpqakAASLIJYkgdvnvU/Sluh/mnOnhKZWQtVfWWnu/gCzHFBmoAaMXUBBcQYbaJWsKBEZgfA1DREAXBJBBMAJQzef52UxF1Tv0dWn4dEvje3yO5VBXQ/2i7SDkVc6Vp9P6GTy6oLh6KfZ/A+ieh6FxKtedSN4ViUmj9XYytsOmF9h4lsTGKRE3imtMh7X1DB4tIsQEZ5FWxOiCCEwN1GwgJt+j319Ui1UqJqThtk2SBbfEdu98f7JRT2S/2YnHTrob3tyFk5jfo+9tLKlXderj8Cy6whjVhqFwLsc6vTTreTdJL+/5xr0n87P/Rp/iKEOBHqCMYdZ8W/dam/X8meCeWT4WD1tz4iwddrwkpKBOLkxJfxeZ99OyHmjR94ivxsFRn5RLwVOK9LpIgsmkbNbWCs7Gthknh2QP50dD0mrN+kp8Qz6ykvwf3c1VacE4HVjXSqdHGm2HxoK/sLP1hJXVcjaP+5vxPQ3iYv5N3edyWavV4nYcSKlIyR7VsZlQgdeJ2tzOrlXtDWXFBEbU+pM+ZFfyO5Z0B4uVE8ZpZit9sfOU+etSrjLXztV6X9PDXfYmiFPGSJetxHbMVEF6wZ3uJ8crp1OCzyVPbaxeqqXdkxa9cUedS6ry/PqiBDV6AEbcowsIijBlBDKcZ697ktQFMKhs5BPEXuUFXCoNbZfzysUSuyHU0ep0kTe5V5fFTRPNSJcWNascqyDaM+iCguQ+ohQFc0xZThoTUQojRMHoz7+6IEM39mZcW47nuiDEhLJddi3SHAYfrn4cQt/Prxmzm8yftAtEwKj/uY0Yw1lEWx2vGSR+jCs0iSGjYBTClKJHFwSowj5q8UAlhBOVeX87T0Y53YczZyifsdVSjvPs7Rf4BEVOEAc/BC8QfggDAf3w5KH3A/FhwIkiP+T4EHQBfu+Z9s4vLfTrTd/xfG2pW6ZEcQO9hSXp0T0bWq82vGmPCArAiJEr6gIP+sm1cPIEZb/BzTBNTpfF8Uk4UYTjpdvvXw40W8/c/hfcN0/B6OVzTk3yoMXjOHFmusf24ZfXCOL25QNeEiV5IMv8gBvJ0h/0Z90KCYviZ4ZYi/suensjQAzilIIRmCzWTblSVG0VniiRZzPFj5RJpIBPkz7S/pYmkeN7ZbnpKG4dVO7YvEth0emttNBmpnm72stDHe97hjRVk+d/AQEjUAiTW7otpzPe61Am66Vw3cqbY6ZHQ2Oq3twpzhS+MvSDaC6n9spq5ru1mZfGvhrYxkE9CUROkvlJs3xuUXZqbcqlpho9t9XewvK12KTizl6v1yfOWDvEjlXMvbl2XxEiLVxPutz025ObR8uwnnMH86IpyqzwqcRnRWFp4VBcoFsZNt5+a+xWibRQmw5eW+PorQ9f50D6Pn/xa4e8vEcrxOh1nGWwtei/zPma8v6j+wXjfUD+IkljxIKeWJ570cycewPFMTu8GFb37bxPHNX0EsxRfR8215s1BI/HX11QpJCFObm0rZIFJMcB6IIUUqZ8NqqDL4gyeCnacSLwQ1Ho94ddcGmUorAZZB/9DZT226w48PgH+S+IgvsHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "marc.ju",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "237678288321",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

