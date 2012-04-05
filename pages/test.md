---
layout: default
title: Test

---

Javascript Testing
==================

This is a test of the javascript-based filtering code.
The idea is that there are sections with `data-foo=bar` data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.

We use `markdown="1"` to tell kramdown that we want to parse the content within the section as markdown.  You can indent your code or not, the choice is up to you (although I prefer to not indent so my editor's syntax highlighting doesn't break).

For example, a document like this:

{% highlight html %}
<section markdown="1" data-operating-system="OS X" data-package-management="Homebrew">
  ...
</section>

<section markdown="1" data-operating-system="OS X" data-package-management="Source">
  ...
</section>

<section markdown="1" data-operating-system="Ubuntu" data-package-management="Source">
  ...
</section>
{% endhighlight %}

should show the following sidebar:

    Operating System
      OS X (2)
      Ubuntu (1)

    Package Management
      Homebrew (1)
      Source (2)

This allows users to filter the document by those attributes which are relevant to them.

Note the following empty liquid call used to force syntax highlighting: {{ }}

<section markdown="1" data-operating-system="OS X" data-package-management="Source">
This is the tutorial written for _OS X_ and _Homebrew_.
It has data attributes on the preceeding `hr` tag.
</section>

<section markdown="1" data-operating-system="OS X" data-package-management="Source">
This is the tutorial written for _OS X_ and _Source_.
It has data attributes on a surrounding section tag (written in html).
It uses kramdown's `markdown="1"` attribute to enable markdown processing within an html tag.

Here's some code:

    #!/usr/bin/ruby
    
    puts "Hello, World!"

Yay!
</section>

<section markdown="1" data-operating-system="Ubuntu" data-package-management="Source">
This is the tutorial written for _Ubuntu_ and _Source_.
</section>
