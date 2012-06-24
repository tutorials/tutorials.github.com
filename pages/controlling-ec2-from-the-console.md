---
layout: default
title: Controlling EC2 from the Console
---

# Controlling EC2 from the Console

[Amazon Web Services'](http://aws.amazon.com/) [Elastic Compute Cloud](http://aws.amazon.com/ec2/) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

You can control your EC2 instances through the [AWS Management Console](https://console.aws.amazon.com/ec2/), but clicking around can be a chore. This tutorial will help you setup your machine so you can spawn new instances, query existing instances, and do general maintainence without leaving the comfort of a terminal.

<div
markdown="1"
class="tutorial"
data-author-github="Whitespace"
data-license="http://creativecommons.org/licenses/by/3.0/"
data-facets='{"Operating System": "OS X", "Package Management": "Homebrew", "Shell": "bash"}'>

## Assumptions
We assume you've [signed up for EC2](https://aws-portal.amazon.com/gp/aws/developer/registration).  We also assume your machine has a public key setup (commonly `~/.ssh/id_rsa` and `~/id_rsa.pub`).

## Download Credential Files
First, you need to download some credential files to your machine. Go to the [AWS Security Credentials](https://portal.aws.amazon.com/gp/aws/securityCredentials) page, click "X.509 Certificates", create a new certificate if you need to, download the files when prompted, and then put them into your `~/.ec2` directory:

{% highlight sh %}
mkdir ~/.ec2
cp ~/Downloads/{cert,pk}-*.pem ~/.ec2
{% endhighlight %}

## Install the EC2 Command Line Tools
Now let's install the two packages we need:

{% highlight sh %}
brew install ec2-{api,ami}-tools
{% endhighlight %}

Copy the following to your `~/.bash_profile`:

{% highlight sh %}
export JAVA_HOME="$(/usr/libexec/java_home)"
export EC2_PRIVATE_KEY="$(/bin/ls "$HOME"/.ec2/pk-*.pem | /usr/bin/head -1)"
export EC2_CERT="$(/bin/ls "$HOME"/.ec2/cert-*.pem | /usr/bin/head -1)"
export EC2_HOME="/usr/local/Library/LinkedKegs/ec2-api-tools/jars"
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY"=..."
{% endhighlight %}

Where `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are available from the "Access Keys" tab on the [https://portal.aws.amazon.com/gp/aws/securityCredentials](Amazon Security Credentials page).

Don't forget to reload your `.bash_profile`:

{% highlight sh %}
source ~/.bash_profile
{% endhighlight %}

## Uploading your Access Keys
Some people use the public/private keys that Amazon gives them, but I find it easier to use the same public key on my laptop that I already use for things like Github and servers at work.  To upload, you can use [this helpful script from Eric Hammond](http://alestic.com/2010/10/ec2-ssh-keys) (slightly modified):

{% highlight sh %}
keypair=macbook # Choose something that makes sense, like your computer name
publickeyfile=$HOME/.ssh/id_rsa.pub # Point this to the public key you want to use
regions=$(ec2-describe-regions | cut -f2)

for region in $regions; do
  echo $region
  ec2-import-keypair --region $region --public-key-file $publickeyfile $keypair
done
{% endhighlight %}

If you get an error like this, you have to wait a little while until Amazon processes your account:

    Client.OptInRequired: You are not subscribed to this service. Please go to http://aws.amazon.com to subscribe.

## Test it All Works
Once we've done all that, we can test it by doing:

{% highlight sh %}
ec2-describe-instances
{% endhighlight %}

If you don't see an error, you're all set!

## Further Reading
Since there are almost 300 commands available to you now, your best bet is to take a look at the [EC2 Command Line Reference](http://docs.amazonwebservices.com/AWSEC2/latest/CommandLineReference/Welcome.html).  One command that you'll want to memorize is [ec2-run-instances](http://docs.amazonwebservices.com/AWSEC2/latest/CommandLineReference/ApiReference-cmd-RunInstances.html), which will spawn a new ec2 instance when you give it an amazon machine image (AMI) id.

## References
These links were helpful in getting my machine setup and writing this tutorial:

* [Starting Amazon EC2 with Mac OS X](http://www.robertsosinski.com/2008/01/26/starting-amazon-ec2-with-mac-os-x/)
* [Uploading Personal ssh Keys to Amazon EC2](http://alestic.com/2010/10/ec2-ssh-keys)
</div>
