import _0x1071b from 'input';
import { TelegramClient } from 'telegram';
import { StoreSession } from 'telegram/sessions/StoreSession.js';
import { Config } from '../../config/config.js';
import { Core } from '../core/core.js';
import { Helper } from './helper.js';
import _0x1ada46 from './logger.js';
import { botUrlList } from '../../accounts/bot_url_list.js';

let sessionName = 'sessions';

export async function onBoarding() {
  const _0x55f436 = await _0x1071b.text("\nWelcome to Telegram Query Getter \nAuthor : Nofan Rambe\n\nLet's getting started.\n1. Create Session.\n2. Reset Sessions\n3. Get Query\n4. Process All Sessions\n \nInput your choice:");
  switch (parseInt(_0x55f436)) {
    case 0x1:
      await sessionCreation();
      await onBoarding();
      break;
    case 0x2:
      Helper.resetSession("sessions");
      await onBoarding();
      break;
    case 0x3:
      if (Helper.getSession("sessions").length === 0x0) {
        console.info("You don't have any sessions, please create one first");
        await onBoarding();
      } else {
        await sessionSelection();
        await processSingleSession(sessionName);
        await onBoarding();
      }
      break;
    case 0x4:
      await processAllSessions();
      await postProcessingMenu();
      break;
    default:
      console.error("Invalid input, Please try again");
      await onBoarding();
      break;
  }
}
async function sessionCreation() {
  const _0x577ba6 = Helper.getSession('sessions');
  let _0x593bf3 = "Your session List:\n\n";
  for (const _0x4a33c8 of _0x577ba6) {
    _0x593bf3 += _0x577ba6.indexOf(_0x4a33c8) + 0x1 + ". " + _0x4a33c8 + "\n";
  }
  _0x593bf3 += _0x577ba6.length === 0x0 ? "<empty>\n\nPlease enter Session Name:" : "\n\nYou already have sessions, cancel(CTRL+C) or create new Session:";
  const _0x28e1db = await _0x1071b.text(_0x593bf3);
  sessionName = Helper.createDir(_0x28e1db);
  const _0xad04ca = new TelegramClient(new StoreSession(sessionName), Number(Config.TELEGRAM_APP_ID), Config.TELEGRAM_APP_HASH, {
    'connectionRetries': 0xa,
    'connectionTimeout': 0x1e
  });
  try {
    await _0xad04ca.start({
      'phoneNumber': async () => await _0x1071b.text("Enter your Telegram Phone Number: "),
      'password': async () => await _0x1071b.text("Enter your Telegram Password: "),
      'phoneCode': async () => await _0x1071b.text("Enter the Telegram Verification Code you received: "),
      'onError': _0x50d954 => console.log(_0x50d954)
    });
    console.log("Session created and logged in successfully.");
    _0x1ada46.info("Session " + _0x28e1db + " - Created and connected");
  } catch (_0x57b37d) {
    console.error("Error creating session " + _0x28e1db + ':', _0x57b37d);
    _0x1ada46.error("Session " + _0x28e1db + " Error - " + _0x57b37d.message);
  } finally {
    try {
      await _0xad04ca.disconnect();
      console.log("Client disconnected.");
      _0x1ada46.info("Session " + _0x28e1db + " - Client disconnected");
    } catch (_0x37cc38) {
      console.error("Error disconnecting client:", _0x37cc38);
    }
  }
}
async function sessionSelection() {
  const _0x5ee5e3 = Helper.getSession("sessions");
  if (_0x5ee5e3.length === 0x0) {
    console.info("No sessions available. Please create a new session.");
    await sessionCreation();
    return;
  }
  let _0x5de0e9 = "Your session List:\n\n";
  for (const _0x518df9 of _0x5ee5e3) {
    _0x5de0e9 += _0x5ee5e3.indexOf(_0x518df9) + 0x1 + ". " + _0x518df9 + "\n";
  }
  _0x5de0e9 += "\n\nPlease select Session:";
  const _0x34af8f = await _0x1071b.text(_0x5de0e9);
  const _0x407ef9 = _0x5ee5e3[parseInt(_0x34af8f) - 0x1];
  if (_0x407ef9) {
    sessionName = "sessions/" + _0x407ef9;
    console.info("Using session " + _0x407ef9);
  } else {
    console.error("Invalid choice. Please try again.");
    await sessionSelection();
  }
}
async function processSingleSession(_0x39e21e) {
  const _0x73b25a = await selectBot();
  const _0x5bcb0b = _0x73b25a.url;
  const _0x45fc8e = await selectQueryResultType();
  const _0x23af98 = new TelegramClient(new StoreSession(_0x39e21e), Number(Config.TELEGRAM_APP_ID), Config.TELEGRAM_APP_HASH, {
    'connectionRetries': 0xa,
    'connectionTimeout': 0xea60
  });
  try {
    await _0x23af98.start({
      'phoneNumber': async () => await _0x1071b.text("Enter your Telegram Phone Number: "),
      'password': async () => await _0x1071b.text("Enter your Telegram Password: "),
      'phoneCode': async () => await _0x1071b.text("Enter the Telegram Verification Code you received: "),
      'onError': _0x27368d => console.log(_0x27368d)
    });
    console.log('Connected.');
    _0x1ada46.info("Session " + _0x39e21e + " - Connected");
    const _0x1f13bc = new Core(_0x23af98, _0x39e21e, _0x73b25a.bot, _0x5bcb0b, _0x45fc8e);
    const _0x28c076 = await _0x1f13bc.process();
    console.log("Query Data for session " + _0x39e21e + ": " + _0x28c076);
  } catch (_0x177cca) {
    console.error("Error processing session " + _0x39e21e + ':', _0x177cca);
  } finally {
    await _0x23af98.disconnect()["catch"](() => {});
    _0x1ada46.info("Session " + _0x39e21e + " - Client disconnected");
  }
}
async function processAllSessions() {
  const _0x5276e6 = Helper.getSession("sessions");
  if (_0x5276e6.length === 0x0) {
    console.info("No sessions available to process.");
    return;
  }
  const _0x3d6a36 = await selectBot();
  const _0x25fc5e = _0x3d6a36.url;
  const _0x42fb47 = await selectQueryResultType();
  const _0x3b8393 = [];
  for (const _0x540004 of _0x5276e6) {
    const _0x4b3a72 = "sessions/" + _0x540004;
    const _0x422977 = new TelegramClient(new StoreSession(_0x4b3a72), Number(Config.TELEGRAM_APP_ID), Config.TELEGRAM_APP_HASH, {
      'connectionRetries': 0xa,
      'connectionTimeout': 0xea60
    });
    try {
      await _0x422977.start({
        'phoneNumber': async () => await _0x1071b.text("Enter your Telegram Phone Number: "),
        'password': async () => await _0x1071b.text("Enter your Telegram Password: "),
        'phoneCode': async () => await _0x1071b.text("Enter the Telegram Verification Code you received: "),
        'onError': _0x103c0e => console.log(_0x103c0e)
      });
      console.log("Connected to session " + _0x540004 + '.');
      const _0x270c3d = new Core(_0x422977, _0x4b3a72, _0x3d6a36.bot, _0x25fc5e, _0x42fb47);
      const _0x28b1ed = await _0x270c3d.process();
      _0x3b8393.push(_0x28b1ed);
    } catch (_0x4e50f0) {
      console.error("Error processing session " + _0x540004 + ':', _0x4e50f0);
    } finally {
      await _0x422977.disconnect()["catch"](() => {});
      _0x1ada46.info("Session " + _0x4b3a72 + " - Client disconnected");
    }
  }
  console.log("\nAggregated Queries from All Sessions:\n");
  _0x3b8393.forEach((_0x98929c, _0x3c5373) => {
    console.log(_0x3c5373 + 0x1 + ". " + _0x98929c);
  });
}
async function selectBot() {
  let _0x4c8bcd = "Bot List:\n";
  botUrlList.forEach((_0x9b36fa, _0x392ec3) => {
    _0x4c8bcd += _0x392ec3 + 0x1 + ". " + _0x9b36fa.bot + "\n";
  });
  const _0x5b3d45 = parseInt(await _0x1071b.text(_0x4c8bcd + "\nEnter bot number to connect:")) - 0x1;
  const _0x157537 = botUrlList[_0x5b3d45];
  if (!_0x157537) {
    throw new Error("Invalid bot choice.");
  }
  return _0x157537;
}
async function selectQueryResultType() {
  return await _0x1071b.text("Select Query Result Type ?\n \n1. URI Component \n2. JSON String\n3. Init Params (DEFAULT)\n \nPlease select result type :");
}
async function postProcessingMenu() {
  const _0x3fa7e0 = await _0x1071b.text("All sessions have been processed.\n\n1. Return to Welcome Menu\n2. Exit Program\n\nInput your choice:");
  switch (parseInt(_0x3fa7e0)) {
    case 0x1:
      await onBoarding();
      break;
    case 0x2:
      console.log("Exiting program...");
      _0x1ada46.info("Program exited by user.");
      process.exit(0x0);
    default:
      console.error("Invalid input, Please try again.");
      await postProcessingMenu();
      break;
  }
}
