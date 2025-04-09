# TELEGRAM QUERY GETTER (NODE JS)

Telegram Query Getter is a Node.js-based CLI tool that helps you create and manage Telegram client sessions, retrieve bot query data, and automate session processing.

## BOT FEATURES

- Create new Telegram sessions
- Manage and select existing sessions - Delete all sessions
- Get queries from Telegram bots
- Process all sessions automatically
- Support multiple bot and query types

## PREREQUISITES

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps)
- Telegram Bot Username & Telegram Web Apps Url (Or you can use provided list)

## SETUP & CONFIGURE BOT
### LINUX

1. Clone project repository
   ```bash
   git clone https://github.com/Rambeboy/telegram-query-getter-bot.git && cd telegram-query-getter-bot
   ```

2. Install dependencies
   ```bash
   npm install && npm run setup
   ```

3. To configure the app, run
   ```bash
   nano config/config.js
   ```
   And add your telegram app id and hash there

4. Configure the bot url
   ```bash
   nano accounts/bot_url_list.js
   ```

5. To start the app, run
   ```bash
   npm run start
   ```

## CLI MENU OVERVIEW

After starting, the CLI will present this menu:

```javascript
1. Create Sessions
2. Reset Sessions
3. Get Query
4. Process All Sessions

Input your choice:
```

1. **Create Session**
- Prompts for session name
- Asks for phone number, verification code, and 2FA password (if enabled)
- Saves session into the sessions/ folder

2. **Reset Sessions**
- Deletes all session files from the sessions/ folder

3. **Get Query**
- Lets you select a session and bot
- Retrieves query data from the bot using that session
- Supports different result formats:
- URI Component
- JSON String
- Init Params (default)

4. **Process All Sessions**
- Automatically logs in and processes each saved session with the selected bot
- Aggregates all query results and displays them at the end

## NOTES

- Session files are stored persistently in the sessions/ folder
- You can back up or move session files to another machine (same app ID and hash required)
- The app uses gramJS (telegram) under the hood

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.