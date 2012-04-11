---
layout: default
title: Test
---
{::options parse_block_html="true" /}

Javascript Testing
==================

This is a test of the javascript-based filtering code.
The idea is that there are sections with `data-facets={"some": "json"}` data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.

We store JSON because jQuery automatically converts HTML5 data attributes into `camelCase`, so we'd lose formatting.

Valid sections should have `class="tutorial"` (because we allow nested sections).

For example, a document like this:

{% highlight html %}
<section class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
  ...
</section>

<section class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
  ...
</section>

<section class="tutorial" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
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

If you clicked on the "Source (1)" `li` then you should see this:

    Operating System (1)
      Ubuntu (1)

    Package Management (3)
      Source (Selected)
      Homebrew (1)
      Macports (1)

That is, "Source" goes to the top of the list and the other lists are filtered.

<section class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
<hr />
This is the tutorial written for _OS X_ and _Homebrew_.
It has data attributes on the preceeding `hr` tag.
</section>

<section class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
<hr />
This is the tutorial written for _OS X_ and _Source_.
It has data attributes on a surrounding section tag (written in html).
It uses kramdown's `markdown="1"` attribute to enable markdown processing within an html tag.

Here's some code:

    #!/usr/bin/ruby
    
    puts "Hello, World!"

Yay!
</section>

<section class="tutorial" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
<hr />
This is the tutorial written for _Ubuntu_ and _Source_.
</section>
