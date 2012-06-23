---
layout: default
title: Retrieving Storm Cluster Statistics from Nimbus
---

# Retrieving Storm Cluster Statistics from Nimbus

This tutorial will show how to obtain basic storm topology statistics from nimbus (similar to the information show in the storm ui dashboard) so you can store that data in a separate location -- such as graphite -- for monitoring.  Since storm topologies are thrift-based, you can use almost any language to connect to nimbus to download your data.

<div
  markdown="1"
  class="tutorial"
  data-author-github="Whitespace"
  data-license="http://creativecommons.org/licenses/by/3.0/"
  data-facets='{"Operating System": "OS X 10.7", "Language": "Ruby", "Storm Version": "0.7.0", "Thrift Version": "0.7.0", "Package Management": "Homebrew"}'>

## Assumptions

We assume you'll store your data in `~/code`.  We also assume that your homebrew is newer enough that the `/usr/local` directory is homebrew's git repo.

## Setup

Let's make a location to store our project:

{% highlight sh %}
mkdir -p ~/code/nimbus-thrift-demo
{% endhighlight %}

## Download the Storm Source Code

In order to connect to nimbus, we need to get the `storm.thrift` file from the storm source, and use that to generate the thrift bindings in ruby:

{% highlight sh %}
cd ~/code
wget https://github.com/downloads/nathanmarz/storm/storm-0.7.0.zip
unzip storm-0.7.0.zip
{% endhighlight %}

## Install Thrift 0.7.0 and the Thrift Gem

Now let's install the same version of thrift that storm 0.7.0 uses:

{% highlight sh %}
cd /usr/local
brew update
brew versions thrift
git checkout 141ddb6 /usr/local/Library/Formula/thrift.rb
brew install thrift
{% endhighlight %}

And the thrift gem:

{% highlight sh %}
gem install thrift
{% endhighlight %}

## Generate the Ruby Bindings

{% highlight sh %}
cd ~/code/nimbus-thrift-demo
cp ~/code/storm-0.7.0/src/storm.thrift .
thrift --gen rb storm.thrift
{% endhighlight %}

## Connect to Nimbus

Now that we have the ruby bindings in place, we can create a sample app to connect to our nimbus cluster.  Copy the following to `test.rb`, replacing `localhost` with the hostname of your nimbus instance:

{% highlight ruby %}
$:.push('gen-rb')

require 'rubygems'
require 'thrift'
require 'nimbus'

begin
  socket    = Thrift::Socket.new('localhost', 6627)
  transport = Thrift::FramedTransport.new(socket)
  protocol  = Thrift::BinaryProtocol.new(transport)
  client    = Nimbus::Client.new(protocol)

  transport.open

  summary = client.getClusterInfo
  puts summary.inspect

  transport.close

rescue Thrift::Exception => tx
  print 'Thrift::Exception: ', tx.message, "\n"
end
{% endhighlight %}

Now we can run our test app:

{% highlight sh %}
ruby test.rb
{% endhighlight %}

Now you can take that data and write it to where you'd like.  Enjoy!
<hr />
</div>

<div
  markdown="1"
  class="tutorial"
  data-author-github="Whitespace"
  data-license="http://creativecommons.org/licenses/by/3.0/"
  data-facets='{"Operating System": "OS X 10.7", "Language": "Python", "Storm Version": "0.7.0", "Thrift Version": "0.7.0", "Package Management": "PyPI"}'>

## Assumptions

We assume you'll store your data in `~/code`.

## Setup

Let's make a location to store our project:

{% highlight sh %}
mkdir -p ~/code/nimbus-thrift-demo
{% endhighlight %}

## Download the Storm Source Code

In order to connect to nimbus, we need to get the `storm.thrift` file from the storm source, and use that to generate the thrift bindings in python:

{% highlight sh %}
cd ~/code
wget https://github.com/downloads/nathanmarz/storm/storm-0.7.0.zip
unzip storm-0.7.0.zip
{% endhighlight %}

## Install Thrift 0.7.0 and the Thrift Python Package

Now let's install the same version of thrift that storm 0.7.0 uses:

{% highlight sh %}
cd /usr/local
brew update
brew versions thrift
git checkout 141ddb6 /usr/local/Library/Formula/thrift.rb
brew install thrift
{% endhighlight %}

And the thrift python package:

{% highlight sh %}
pip install thrift==0.7.0
{% endhighlight %}

## Generate the Python Bindings

{% highlight sh %}
cd ~/code/nimbus-thrift-demo
cp ~/code/storm-0.7.0/src/storm.thrift .
thrift --gen py storm.thrift
{% endhighlight %}

## Connect to Nimbus

Now that we have the python bindings in place, we can create a sample app to connect to our nimbus cluster.  Copy the following to `test.py`, replacing `localhost` with the hostname of your nimbus instance:

{% highlight python %}
import sys

sys.path.append('gen-py')

from thrift import Thrift
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol

from storm import Nimbus
from storm.ttypes import *
from storm.constants import *

try:
    socket      = TSocket.TSocket('localhost', 6627)
    transport   = TTransport.TFramedTransport(socket)
    protocol    = TBinaryProtocol.TBinaryProtocol(transport)
    client      = Nimbus.Client(protocol)

    transport.open()

    summary = client.getClusterInfo()
    print summary

    transport.close()

except Thrift.TException, tx:
  print "%s" % (tx.message)
{% endhighlight %}

Now we can run our test app:

{% highlight sh %}
python test.py
{% endhighlight %}

Now you can take that data and write it to where you'd like.  Enjoy!
<hr />
</div>
