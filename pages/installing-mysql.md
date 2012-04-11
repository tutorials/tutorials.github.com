---
layout: default
title: Installing MySQL
---

Installing MySQL
================

<div markdown="1" class="tutorial" data-author="Whitespace" data-facets='{"Operating System": "Ubuntu", "Package Management": "APT", "MySQL Version": "5.1"}'>
To install MySQL, run the following command from a terminal prompt:

{% highlight sh %}
sudo apt-get install mysql-server
{% endhighlight %}

During the installation process you will be prompted to enter a password for the __MySQL__ root user.

Once the installation is complete, the MySQL server should be started automatically. You can run the following command from a terminal prompt to check whether the MySQL server is running:

{% highlight sh %}
sudo netstat -tap | grep mysql
{% endhighlight %}

When you run this command, you should see the following line or something similar:

{% highlight sh %}
tcp        0      0 localhost.localdomain:mysql           *:* LISTEN -
{% endhighlight %}

If the server is not running correctly, you can type the following command to start it:

{% highlight sh %}
sudo /etc/init.d/mysql restart
{% endhighlight %}

Configuration
-------------
You can edit the `/etc/mysql/my.cnf` file to configure the basic settings -- log file, port number, etc. For example, to configure __MySQL__ to listen for connections from network hosts, change the `bind_address` directive to the server's IP address:

{% highlight sh %}
bind-address            = 192.168.0.5
{% endhighlight %}
	
Note Replace 192.168.0.5 with the appropriate address.

After making a change to `/etc/mysql/my.cnf` the __mysql__ daemon will need to be restarted:

{% highlight sh %}
sudo /etc/init.d/mysql restart
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-author="Whitespace" data-facets='{"Operating System": "OS X", "Package Management": "Source", "MySQL Version": "5.1"}'>
These are instructions for compiling and installing a 64-bit version of [MySQL](http://www.mysql.com/), the world's most popular open source database, on Mac OS X 10.6 (Snow Leopard).

The benefits of manually building MySQL yourself in `/usr/local` are detailed [here](http://hivelogic.com/articles/using_usr_local/). I also wrote a in-depth explanation of why you might want to build MySQL yourself in my [Compiling MySQL on Leopard](http://hivelogic.com/articles/installing-mysql-on-mac-os-x/) article.

NO SUPPORT
----------
These instructions will probably work just fine and you won't run into any trouble, but if you do, **please don't email me about it**. I wish I could help everybody who might have an issue, but I just don't have the time to help you troubleshoot hundreds of potential variables with your specific configuration, and I probably won't even reply to the email, and I'm sorry in advance for that.

PREREQUISITES
-------------
Before following these instructions, you will need:

- Mac OS X 10.6 Snow Leopard
- The latest Xcode Tools (from the Snow Leopard DVD or downloaded from [Apple](http://developer.apple.com/) - the 10.5 version _won't work_)
- Confidence running UNIX commands using the Terminal

If you want to learn more about UNIX and the command line, check out [my PeepCode screencast](http://peepcode.com/products/meet-the-command-line) on this topic.

STEP 1: SET THE PATH
--------------------
Launch Terminal.app from the `/Applications/Utilities` folder.

We need to set your shell's `PATH` variable first. The `PATH` variable determines where your system searches for command-line programs. Using the editor of your choice, create and edit a file in your home directory named `.profile` (note the "." preceding the filename).

If you're using [TextMate](http://macromates.com/) like you should be and have [installed the UNIX `mate` command](http://manual.macromates.com/en/using_textmate_from_terminal.html), then you can create and start editing the file like this:

{% highlight sh %}
mate ~/.profile
{% endhighlight %}

To the end of this file, add the following line (or verify that it's already there):

{% highlight sh %}
export PATH="/usr/local/bin:/usr/local/sbin:/usr/local/mysql/bin:$PATH"
{% endhighlight %}

Close and save the file and run this command to load the new setting into your current shell:

source ~/.profile
To verify that you've updated your path, enter the following command:

{% highlight sh %}
echo $PATH
{% endhighlight %}

You should see `/usr/local/bin` at the beginning of the line returned by the system.

STEP 2: DOWNLOAD
----------------

We're going to create a folder to contain the files we're about to download and compile. If you want, you can delete this folder when you're done, but keeping it around makes it easier to re-install (or uninstall) these apps later.

Make the new folder:

{% highlight sh %}
mkdir ~/src
cd ~/src
{% endhighlight %}

I used to provide a link to download the latest version of MySQL, but they update frequently and sometimes the links die, so instead, please go to the MySQL site, and download the latest version from [this page](http://dev.mysql.com/get/Downloads/MySQL-5.1/mysql-5.1.39.tar.gz/from/pick#mirrors), picking a mirror near you. Then move or copy it to your `src` folder.

For those of you who expect the world, you can try this command, but please don't email me if it's broken:

{% highlight sh %}
curl -O http://mysql.mirrors.pair.com/Downloads/MySQL-5.1/mysql-5.1.39.tar.gz
{% endhighlight %}

STEP 3: COMPILE AND INSTALL
---------------------------

Build and install MySQL like this:

{% highlight sh %}
tar xzvf mysql-5.1.37.tar.gz
cd mysql-5.1.37
./configure --prefix=/usr/local/mysql --with-extra-charsets=complex --enable-thread-safe-client --enable-local-infile --enable-shared --with-plugins=innobase
make
sudo make install
cd /usr/local/mysql
sudo ./bin/mysql_install_db --user=mysql
sudo chown -R mysql ./var
cd ..
{% endhighlight %}

STARTING (AND AUTO-STARTING) MYSQL
----------------------------------

In most cases, you'll want MySQL to auto-start every time you boot (or reboot) your Mac. The easiest way to do this is using launchd, Mac OS X's infrastructure for managing system processes.

I've prepared a launchd plist file that will allow you to manage MySQL, starting it at boot and stopping it cleanly at shutdown. Save the plist file to your `~/src` directory and then move it to the proper place with the following commands:

{% highlight sh %}
cd ~/src
curl -O http://hivelogic.com/downloads/com.mysql.mysqld.plist
sudo mv ~/src/com.mysql.mysqld.plist /Library/LaunchDaemons
sudo chown root /Library/LaunchDaemons/com.mysql.mysqld.plist
{% endhighlight %}

Finally, tell `launchd` to load and startup MySQL:

{% highlight sh %}
sudo launchctl load -w /Library/LaunchDaemons/com.mysql.mysqld.plist
{% endhighlight %}

If you see no response, it probably means that everything worked correctly, and that MySQL is running. You can verify this by launching MySQL's command-line monitor:

{% highlight sh %}
mysql -uroot
{% endhighlight %}

You should see something like this:

{% highlight sh %}
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 1
Server version: 5.1.37 Source distribution
Type 'help;' or 'h' for help. Type 'c' to clear the buffer.
mysql>
{% endhighlight %}

If this prompt appears, MySQL has been installed correctly. Type `exit` and press return to quit the MySQL monitor.

If you didn't see that message, it's possible that something "bad" happened, or that you may have missed a step above. You can always try running through the instructions again.

You now have a custom-built 64-bit version of MySQL.

STARTING AND STOPPING MYSQL MANUALLY
------------------------------------

If you ever want to stop MySQL manually, use this command:

{% highlight sh %}
sudo launchctl unload -w /Library/LaunchDaemons/com.mysql.mysqld.plist
{% endhighlight %}

To (re)start MySQL manually, use this command:

{% highlight sh %}
sudo launchctl load -w /Library/LaunchDaemons/com.mysql.mysqld.plist
{% endhighlight %}

EXTRA CREDIT: THE RAILS GEM
---------------------------

You can install the Rails MySQL Gem by pointing it at your new MySQL installation direcory:

{% highlight sh %}
sudo gem install mysql -- --with-mysql-dir=/usr/local/mysql
{% endhighlight %}

That should do it.
</div>

<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew", "MySQL Version": "5.5"}'>
If you already have a `/usr/local` folder and it's not owned by your user:

{% highlight sh %}
sudo chown -R `whoami` /usr/local
{% endhighlight %}

Install Homebrew:

{% highlight sh %}
cd /usr/local
git init
git remote add origin git://github.com/mxcl/homebrew.git
git pull origin master
{% endhighlight %}

This is kind of odd -- you install Homebrew right into the base of your `/usr/local` folder. It nicely ignores other folders that already exists there. Just do it.

Install MySQL:

{% highlight sh %}
brew install mysql
{% endhighlight %}

Yeah, it's really that easy. This will take a while.

Now warm it up:

{% highlight sh %}
mysql_install_db
{% endhighlight %}

And make sure it automatically starts again on login:

{% highlight sh %}
launchctl load -w /usr/local/Cellar/mysql/5.1.43/com.mysql.mysqld.plist
{% endhighlight %}
