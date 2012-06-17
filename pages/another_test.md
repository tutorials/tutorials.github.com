---
layout: default
title: Test
ignore: true
---

Hello, World!
=============

This is a test of _markdown_ **support**

This is some code to jekyll's pygments support:

{% highlight ruby %}
def function(*args)
  puts "Hello, #{@world}!"
end
{% endhighlight %}

This is some code to GFM's pygments support:

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

Here's a test of GFM:

* SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* \#Num: #1
* User/#Num: mojombo#1
* User/Project#Num: mojombo/god#1

How many words are in this page?  {{ page.content | number_of_words }}!
