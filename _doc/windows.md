# Getting started with windows

## Download

### Browsers

- Download from here [Chrome](https://www.google.com/chrome/).

### Tools

- Download from here [Visual Studio Code](https://code.visualstudio.com/Download).

- Download from here [Git](https://git-scm.com/download/win).

- Download from here [Github](https://desktop.github.com/).

- Download from here [Node.js](https://nodejs.org/en/), click on **Recommended For Most Users**.

- Download from here [XAMPP](https://www.apachefriends.org/download.html), click on at least with PHP 8.0.3 version.

- Download from here [Composer](https://getcomposer.org/download/)

## Installation

### Chrome

- Go to **Downloads** directory and Duble click on **ChromeSetup.exe**
  It will install itself and after the instalation it will open.
- When Chrome browser will open Click on **Set as default**.
- Then it will open **Default apps** and in **Choose an application** click on **Google Chrome**.
- And in **Before you switch** click **Switch anyway**.

Open Chrome browser and Add extentions:

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [React Context DevTool](https://chrome.google.com/webstore/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf)

### Visual Studio Code

- Go to **Downloads** directory and Duble click on **VSCodeUserSetup.exe**:

  - **I accept the agreement** radio then click **Next**, **Next**, **Next**,
    in **Select Additional Tasks** check all boxes and click **Next**, **Install**, **Finish**.

- Open **Visual Studio Code**, then type **Ctrl+Shift+X**:

  - In Search field type **PHP Intelephense**, then click install:

    - Go to Extensions.
    - Search for @builtin php
    - Disable PHP Language Features. Leave PHP Language Basics enabled for syntax highlighting.

    - Type **Ctrl+,** and in **Search settings** type **files.associations**
    - Click on **Add Item**, then in **Item** field type **\*.module** and in **Value** field type **php**.

### Git

- Go to **Downloads** directory and Duble click on **Git.exe**:
- Click **Next**, **Next**, **Next**, **Next**, **Next**,
  choose **Git from the command line and also from 3rd-party software** then click **Next**,
  choose **Use the OpenSSL library** then click **Next**,
  choose **Checkout Windows-style, commit Unix-style line endings** then click **Next**,
  choose **Use MinTTY (the default terminal of MSYS2)** then click **Next**,
  in **Configure extra options** keep default check boxes and click **Next**,
  and click **Install**. and **Finish**.

### Github

- Create new account in [Github](https://github.com/)
  - Go to **Downloads** directory and Duble click on **GitHubDesktopSetup.exe**.
  - Sing in to account and authenticate in browser, then open Github in your desktop.
  - Type your **Name** **Email** and click **Continue**.

### Node.js

- Go to **Downloads** directory and Duble click on **node.msi**:
  - Click **Next**, Check **I accept the terms** then click **Next**, **Next**, **Next**,
  - Check **Automatically install the necessary tools** then click **Next**,
  - Click **Install** and **Finish**.

### XAMPP

- Go to **Downloads** directory and Duble click on **xampp-windows.exe**:
- If pops up **Continue with installation?** click **Yes**,then **OK**,
- Click **Next**, **Next**, **Next**, **Next**, **Next**, **Next** and **Finish**.
- Select language.
- Open **XAMPP Control Panel**, Clik Apache **Start** and MySQL **Start**.
- And if pops up **Windows Security Alert** then click **Allow access**.
- Clik Apache **Config** > config.inc.php > find

```php
$cfg['Servers'][$i]['auth_type'] = 'config';
```

line and change it to

```php
$cfg['Servers'][$i]['auth_type'] = 'cookie';
```

- Open where MySQL click **Admin** login as root **Username:** **root**
- Leave **Password:** empty and click **Go**.
- Click in navigation header **Databases**, type **laravel** in **Database name** choose **utf8mb4_lithuanian_ci** and click **Create**.
- Go to mane page, click in navigation header **User accounts**,
- In **New** click **Add user account**:
- In **Login Information** section **User name:** choose **Use text field** and in field type your any given name.
- In **Host name:** choose **Local**,
- In **Password:** choose **Use text field** and in field type your any given password.
- In **Re-type:** re-type your password.
- (**Remember password and name**).
- In the bottom click **Go**.
- Go to mane page, click in navigation header **User accounts**,
- Find user than you just created and click on it.
- Then click **Databases** for that user.
- In **Database-specific privileges** find database that you have created and click **Go**.
- Then in **Database-specific privileges** check **Check all** and click **Go**.
- Then logout and log in with new user name and pasword.

### Composer

- Go to **Downloads** directory and Duble click on **Composer-Setup.exe**:
- Window **Select Setup Install Mode**, click **Install for all users**.
- Then leave check box empty and click **Next**.
- Then find your xampp directory where you instaled it and find a path for php.exe file (default C:\xampp\php\php.exe), then click **Next**.
- Then leave everything and click **Next** and **Install**.
- Then **Next** and **Finish**.

## Adding paths for php and mysql in windows

- Rigth-click on **windows** > **System**
- **Advance system settings** > **Advanced** tab > **Environment Variables** button
- **System variables** section > highlight the **Path** > click the **Edit** button
- Click **New** type path to php (default C:\xampp\php) and again
  click **New** type path to mysql (default C:\xampp\mysql\bin)
- Click **OK**, **OK**, **OK**.
- Restart Windows System.

## Adding laravel react project

- Create new folder.
- Rigth-click on it and select **Git Bash Here**.
- Type

```bash
git clone https://github.com/re-pe/php20-project-manager.git
```

- then

```bash
cd php20-project-manager

git checkout develop

git pull

code .
```

- Insted of comand **code .** you can open **Visual Studio Code** editor and
  click **File** > **Open folder** and find folder **php20-project-manager**.
- Where **PHP20-PROJECT-MANAGER** click on new file icon.
- name it **.env**
- Copy **.env.develop** file to **.env**. Add username and password for mysql login user that you have created:

```env
DB_USERNAME=<username>
DB_PASSWORD=<password>
```

Add to **C:\Windows\System32\drivers\etc\hosts**

```hosts
127.0.0.1 lieta.local
```

- Type **Ctrl+`**, terminal will open, then choose **New Git Bash**.
- Type

```bash
composer install
npm install
npm run dev
```

- Then open XAMPP Control panel and click for MySQL **Start** button
- Then in terminal

```bash
php artisan migrate
php artisan db:seed
npm run watch-poll
```

- Then in **Visual Studio Code** editor where terminal is click **+**
  and in terminal type

```bash
php artisan serve
```

- Chrome browser should open page where you will be asked to **generate api key** click it and refresh the page.
