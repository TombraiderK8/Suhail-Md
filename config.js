const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://festusbukunmi63:WYtULn7heFqGogwr@cluster0.ck4sc7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349076307503";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_19_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2elFPRy9GcEJ6ZFBXSGtlMHVnVU4wQTNodkpQMnF0cnRGUlU4eGZ1Zko4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QjgzeHRrM1RjcXhxWnV6ZEJmOHd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI4YjViYzgyLTFlYzYtNDNiYy05NTRkLTJmYmMxZGZmYjBiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDIzNixcbiAgICAgIDc5LFxuICAgICAgNTIsXG4gICAgICA1OCxcbiAgICAgIDIyNixcbiAgICAgIDEyMyxcbiAgICAgIDQ1LFxuICAgICAgNzUsXG4gICAgICAxODcsXG4gICAgICAxNzgsXG4gICAgICAxNTMsXG4gICAgICAxNjIsXG4gICAgICAxNzUsXG4gICAgICAxMjYsXG4gICAgICAyMTAsXG4gICAgICAxNDQsXG4gICAgICAyMDcsXG4gICAgICAxNjcsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgNzMsXG4gICAgICA0NixcbiAgICAgIDIzMixcbiAgICAgIDIwNCxcbiAgICAgIDEzOSxcbiAgICAgIDEyOCxcbiAgICAgIDE4NSxcbiAgICAgIDE4LFxuICAgICAgMTQ2LFxuICAgICAgNDUsXG4gICAgICAxMTksXG4gICAgICA2MixcbiAgICAgIDExOSxcbiAgICAgIDE5MSxcbiAgICAgIDIzOSxcbiAgICAgIDEwNyxcbiAgICAgIDExNixcbiAgICAgIDEzLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1BUU0yUTg3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc2MzA3NTAzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQiBCbGVzc1wiLFxuICAgIFwibGlkXCI6IFwiMTMwODg5NTY0NTYxNTM1OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYYjNxb0RFS3p6MnJRR0dDY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDlQa1NTb2l0TEpOaGlNbmVwNmljclZ5bzUvek91SmZwcWJSY2FYNnJqaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5M1ViZlpiQlhERmFUZnJIdHVsWlVTdUk5b3M0MkVyYlJTU2tDRllLM3BSUTRTeWk4SHNqNVI0K1I3RzA4NXVZZXZhZjJGelBLMVFPWHZmYjFOelhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaTlpmM1FmRWwwSjN1RHRSREFVN3N4QldudDZEMTBzelVWY0d3Vlkvb0FGdzFBM2ZhM0FBQmNGbDhCd1lkdUJPcldtNVphcmN5bWtqKy9lT0w1SEZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc2MzA3NTAzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTUzOTY4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "B Bless",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
