-cmd install own.js const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐄𝐟𝐚𝐭',
      choise: '𝐎𝐧𝐥𝐲 𝐑𝐮𝐬𝐬𝐢𝐚𝐧 🥵🔥',
      habit: '𝐏𝐥𝐚𝐲𝐢𝐧𝐠 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞 🔥',
      gender: '𝐌𝐚𝐥𝐞',
      age: '𝟏𝟔+',
      height: '_𝐡𝐚𝐭 𝐦𝐚𝐠𝐢 🐸🤠',
      facebookLink: 'https://www.facebook.com/profile.php?id=61583133093928',
      nick: '𝐄𝐅Λ𝐓 乂 𝐀𝐍𝐓𝐈𝐊 ⚔️'
    };

    const bold = 'https://wallpapers-clan.com/wp-content/uploads/2024/04/zenitsu-lightning-demon-slayer-gif-preview-desktop-wallpaper.gif'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

const response = `╭────────────◊
├‣ 𝑶𝑾𝑵𝑬𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 📃
├───────────◊
├‣ 𝑵𝒂𝒎𝒆: ${ownerInfo.name}
├‣ 𝑪𝒉𝒐𝒊𝒔𝒆: ${ownerInfo.choise}
├‣ 𝑯𝒂𝒃𝒊𝒕: ${ownerInfo.habit}
├‣ 𝑮𝒆𝒏𝒅𝒆𝒓: ${ownerInfo.gender}
├‣ 𝑨𝒈𝒆: ${ownerInfo.age}
├‣ 𝑯𝒆𝒊𝒈𝒉𝒕: ${ownerInfo.height}
├‣ 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌: ${ownerInfo.facebookLink}
├‣ 𝑵𝒊𝒄𝒌: ${ownerInfo.nick}
╰───────────◊`;
    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
