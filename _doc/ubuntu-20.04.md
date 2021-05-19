# Prepearing Ubuntu 20.04 to run PHProjectMan

## Install Microsoft Chrome

```bash
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
sudo apt update
sudo apt install google-chrome-stable
chrome
```

### Install Chrome Extensions for React Development

- Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) extension

- Install [React Context DevTool](https://chrome.google.com/webstore/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf) extension

## Install MariaDB server

```bash
sudo apt update
sudo apt install mariadb-server
```

## Install PHP 8.0

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.0 php8.0-curl php8.0-dom php8.0-gd php8.0-mbstring php8.0-mysql php8.0-xdebug php8.0-xml
php -v
echo -e "output_buffering=off\nxdebug.mode=debug\nxdebug.client_port=9003\nxdebug.client_host=127.0.0.1\nxdebug.start_with_request=yes\nxdebug.discover_client_host=0\nxdebug.idekey=VSCODE\nxdebug.show_error_trace = 1\nxdebug.max_nesting_level=250\nxdebug.var_display_max_depth=10\nxdebug.log=/tmp/xdebug.log\nxdebug.log_level=0" | sudo tee -a /etc/php/8.0/mods-available/xdebug.ini
```

## Install nvm

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install --lts --latest-npm
```

Reopen terminal

```bash
npm -v // must be 7+
```

If npm version is not 7+:

```bash
npm install -g npm@latest
```

## Install git

```bash
sudo apt update
sudo apt install git
git --version
```

## Clone PHProjectMan

```bash
mkdir ~/Projects
cd ~/Projects
git clone https://github.com/re-pe/php20-project-manager.git
cd php20-project-manager
git branch develop
git checkout develop
```

## Install composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === file_get_contents ('https://composer.github.io/installer.sig')) { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
php -r "unlink('composer-setup.php');"
```

## Create database and database user

```bash
sudo mysql
CREATE DATABASE laravel;
USE laravel;
CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON laravel.* to '<username>'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
\q
```

## Configure PHProjectMan

```bash
cp .env.development .env
sed -i 's/DB_USERNAME=root/DB_USERNAME=<usename>/g' .env
sed -i 's/DB_PASSWORD=/DB_PASSWORD=<password>/g' .env
sudo sh -c 'echo "127.0.0.1 lieta.local" >> /etc/hosts'

composer install
php artisan migrate
php artisan db:seed
npm install
npm run dev
```

## Run PHProjectMan

```bash
composer start
```

On web page, press button \<Generate app key>. Refresh page
