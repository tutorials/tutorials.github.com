---
layout: default
title: Creating a Production Storm Cluster
---

# Creating a Production Storm Cluster

[Storm](http://storm-project.net/) is a [free and open source](http://storm-project.net/about/free-and-open-source.html) distributed realtime computation system. Storm makes it easy to reliably process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing. Storm is [simple](http://storm-project.net/about/simple-api.html), can be used with [any programming language](http://storm-project.net/about/multi-language.html), and is a lot of fun to use!

This tutorial will help you set up a production storm cluster from scratch.

<div
markdown="1"
class="tutorial"
data-author-github="Whitespace"
data-license="http://creativecommons.org/licenses/by/3.0/"
data-facets='{"Operating System": "Centos 6", "Zookeeper Version": "3.4.3", "ZeroMQ Version": "2.1.7"}'>

## Assumptions
We assume you have two machines that you can ssh into as the `deploy` user, and that user has `sudo` privleges.  We'll call these machines `storm` and `zookeeper`.  It's ok if you only have one machine, this tutorial will handle that case as well.

## Java

We need to install the JDK (which includes the JRE).  Oracle requires you accept the license agreement, so I prefer to download this locally and then `scp` the file to my host.  To download the JDK, go to [the jdk download page](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1637583.html), accept the license agreement, and download the file called `jdk-7u5-linux-x64.rpm`.  Then copy it to the `deploy` user's home directory using `scp`:

{% highlight sh %}
scp -C jdk-7u5-linux-x64.rpm deploy@zookeeper:/home/deploy
scp -C jdk-7u5-linux-x64.rpm deploy@storm:/home/deploy
{% endhighlight %}

Then we install it on each machine (and setup our `JAVA_HOME` and `PATH` to find all the java binaries):

{% highlight sh %}
ssh zookeeper
sudo rpm -Uvh jdk-7u5-linux-x64.rpm
echo "export JAVA_HOME=/usr/java/default \
export PATH=$PATH:$JAVA_HOME/bin:$HOME/bin" > ~/.bash_profile
logout

ssh storm
sudo rpm -Uvh jdk-7u5-linux-x64.rpm
echo "export JAVA_HOME=/usr/java/default \
export PATH=$PATH:$JAVA_HOME/bin:$HOME/bin" > ~/.bash_profile
logout
{% endhighlight %}

## Zookeeper

### Installing Dependencies

First we need to install some dependencies and setup a place to keep our source files:

{% highlight sh %}
ssh deploy@zookeeper
mkdir -p ~/src
sudo yum install -y libtool libuuid-devel gcc-c++ make
{% endhighlight %}

### Installing Zookeeper

Now we're ready to install zookeeper:

{% highlight sh %}
cd ~/src
wget http://mirrors.axint.net/apache/zookeeper/zookeeper-3.4.3/zookeeper-3.4.3.tar.gz
tar xzf zookeeper-3.4.3.tar.gz
{% endhighlight %}

### Running Zookeeper

Zookeeper is configured by a file located in `conf/zookeper.conf`.  We'll use this as our zookeeper config when we start the zookeeper server:

{% highlight sh %}
~/src/zookeeper-3.4.3/bin/zkServer.sh start ~/src/zookeeper-3.4.3/conf/zoo_sample.cfg
{% endhighlight %}

## Storm

Now that zookeeper is running, we can setup our storm servers.  First we need to [install native dependencies](https://github.com/nathanmarz/storm/wiki/Installing-native-dependencies):

### Installing Dependencies

{% highlight sh %}
ssh deploy@zookeeper
sudo yum install -y git libtool libuuid-devel gcc-c++ make
mkdir -p ~/src /tmp/storm
{% endhighlight %}

### Installing ZeroMQ

{% highlight sh %}
cd ~/src
wget http://download.zeromq.org/zeromq-2.1.7.tar.gz
tar xzf zeromq-2.1.7.tar.gz
cd zeromq-2.1.7
./configure
make
sudo make install
{% endhighlight %}

### Installing JZMQ

{% highlight sh %}
cd ~/src
git clone https://github.com/nathanmarz/jzmq.git
cd jzmq
./autogen.sh
./configure
make
sudo make install
{% endhighlight %}

### Installing Storm

{% highlight sh %}
cd ~/src
wget https://github.com/downloads/nathanmarz/storm/storm-0.7.0.zip
unzip storm-0.7.0.zip
{% endhighlight %}

## Configuring Storm

We need to point storm to the correct zookeeper servers, as well as [setup other config options](https://github.com/nathanmarz/storm/wiki/Setting-up-a-Storm-cluster).  For now, we'll just modify the `conf/storm.yaml` file to look like this:

{% highlight yaml %}
storm.local.dir: "/tmp/storm"
storm.zookeeper.servers:
  - "zookeeper"
nimbus.host: "localhost"
{% endhighlight %}

You'll want to put some real values in there depending on the size of your cluster, and you'll definitely want to change `/tmp/storm` to something more persistent, but this sufices for a demo.

## Running Storm

In order to run storm, you need both nimbus and supervisor processes running.  We can run them with `nohup`:

{% highlight sh %}
nohup ~/src/storm-0.7.0/bin/storm nimbus &
nohup ~/src/storm-0.7.0/bin/storm supervisor &
{% endhighlight %}

Now it should be ready to process topologies!

## Running the Storm UI

Storm comes with a nifty dashboard to view cluster stats.  To run it, just do:

{% highlight sh %}
nohup ~/src/storm-0.7.0/bin/storm ui &
{% endhighlight %}
</div>
