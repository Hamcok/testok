const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
require('./Hanz.js')
nocache('./Hanz.js', module => console.log(`${module} telah di update!`))

const starts = async (Hanz = new WAConnection()) => {
    Hanz.logger.level = 'warn'
    Hanz.version = [2, 2143, 3]
    Hanz.browserDescription = [ 'WH TEAM', 'SAFARI', '3.0' ] 
    console.log(banner)
    Hanz.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Hanz.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Hanz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./Hanz.json') && Hanz.loadAuthInfo('./Hanz.json')
    Hanz.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    Hanz.on('open', () => {
        success('2', 'Terhubung Jangan Lupa Subscribe Hanz Ofc')
    })
    await Hanz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Hanz.json', JSON.stringify(Hanz.base64EncodedAuthInfo(), null, '\t'))

    Hanz.on('chat-update', async (message) => {
        require('./Hanz.js')(Hanz, message, _welkom)
    })
Hanz.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Hanz.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Hanz.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await Hanz.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(Hanz.user.jid)) {
        Hanz.sendMessage(anu.jid, "Haii.", "conversation")
      }
      if (!isWelkom) return
      if (anu.action == "add" && !mem.includes(Hanz.user.jid)) {       
		 mdata = await Hanz.groupMetadata(anu.jid)
        memeg = mdata.participants.length
		num = anu.participants[0]
        let v = Hanz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `Halo @${anu_user} \nWelcome In ${mdata.subject}\n
ɴᴀᴍᴀ:
ᴀꜱᴀʟ:
ᴀꜱᴋᴏᴛ:
ᴀʟᴀꜱᴀɴ ɢᴀʙᴜɴɢ:`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/JKdHDL9/20211215-153843.jpg`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Welcome' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "Selamat Datang", buff, but)
      }
      if (!isWelkom) return
      if (anu.action == "remove" && !mem.includes(Hanz.user.jid)) {        	   
	     mdata = await Hanz.groupMetadata(anu.jid)
	    num = anu.participants[0]
        let w = Hanz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `ᴜꜱᴇʀ: ${anu_user}\nɴᴏᴍᴏʀ: @${num.split('@')[0]}\nᴍᴇᴍʙᴇʀ: ${groupMembers.length}`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/1ZVpJGg/20211215-153748.jpg`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Member Gay Out aja Kntl' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "Mati Aja Lo Kontol", buff, but)
      }
      if (anu.action == "promote") {
      const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `ʜᴀɴᴢ々ᴏꜰᴄ`, 'jpegThumbnail': fs.readFileSync('./media/Bot.jpg')}}}
        const mdata = await Hanz.groupMetadata(anu.jid)
        anu_user = Hanz.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await Hanz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        Hanz.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
      const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `ʜᴀɴᴢ々ᴏꜰᴄ`, 'jpegThumbnail': fs.readFileSync('./media/Bot.jpg')}}}
        anu_user = Hanz.contacts[mem]
        num = anu.participants[0]
        const mdata = await Hanz.groupMetadata(anu.jid)
        try {
          ppimg = await Hanz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        Hanz.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
