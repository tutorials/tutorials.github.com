---
layout: default
title: Test
ignore: true
---

Javascript Testing
==================

This is a test of the javascript-based filtering code.
The idea is that there are divs with `data-facets={"some": "json"}` data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.

We store JSON because jQuery automatically converts HTML5 data attributes into `camelCase`, so we'd lose formatting.

We also use the `markdown="1"` attribute to tell [kramdown](https://github.com/gettalong/kramdown) (our markdown parser) to parse the content of the divs as markdown.

Valid divs should have `class="tutorial"` (because we allow nested divs).

For example, a document like this:

{% highlight html %}
<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
  ...
</div>

<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
  ...
</div>

<div markdown="1" class="tutorial" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
  ...
</div>
{% endhighlight %}

should show the following sidebar:

    Operating System (2)
      OS X (2)
      Ubuntu (1)

    Package Management (3)
      Homebrew (1)
      Macports (1)
      Source (1)

This allows users to filter the document by those attributes which are relevant to them.

If you clicked on the "Source (1)" `li` then you should see this:

    Operating System (1)
      Ubuntu (1)

    Package Management (3)
      Source

<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
This is the tutorial written for _OS X_ and _Homebrew_.
</div>

<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
This is the tutorial written for _OS X_ and _Source_.

Here's some ruby code:

{% highlight ruby %}
#!/usr/bin/ruby
    
puts "Hello, World!"
{% endhighlight %}

Yay!
</div>

<div markdown="1" class="tutorial" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
This is the tutorial written for _Ubuntu_ and _Source_.
</div>
