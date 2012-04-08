---
layout: default
title: Test

---

Javascript Testing
==================

This is a test of the javascript-based filtering code.
The idea is that there are sections with `data-facets={"some": "json"}` data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.

We store JSON because jQuery automatically converts HTML5 data attributes into `camelCase`, so we'd lose formatting.

Valid sections should have `class="tutorial"` (because we allow nested sections).

We also use the `markdown="1"` attribute to tell kramdown that we want to parse the content within the section as markdown.  You can indent your code or not, the choice is up to you (although I prefer to not indent so my editor's syntax highlighting doesn't break).

For example, a document like this:

{% highlight html %}
<section class="tutorial" markdown="1" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
  ...
</section>

<section class="tutorial" markdown="1" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
  ...
</section>

<section class="tutorial" markdown="1" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
  ...
</section>
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

<section class="tutorial" markdown="1" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
This is the tutorial written for _OS X_ and _Homebrew_.
It has data attributes on the preceeding `hr` tag.
</section>

<section class="tutorial" markdown="1" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
This is the tutorial written for _OS X_ and _Source_.
It has data attributes on a surrounding section tag (written in html).
It uses kramdown's `markdown="1"` attribute to enable markdown processing within an html tag.

Here's some code:

    #!/usr/bin/ruby
    
    puts "Hello, World!"

Yay!
</section>

<section class="tutorial" markdown="1" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
This is the tutorial written for _Ubuntu_ and _Source_.
</section>
