---
layout: default
title: Test
---

Javascript Testing
==================

Testing kramdown's options syntax: {::nomarkdown}**I'm weak, not strong!**{:/}!

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
      Source

<div markdown="1" class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Homebrew"}'>
This is a `div` that's using `markdown="1"` to tell kramdown to render the inner content as markdown.

This is the tutorial written for _OS X_ and _Homebrew_.
</div>

{::options parse_block_html="true" /}

<div class="tutorial" data-facets='{"Operating System": "OS X", "Package Management": "Macports"}'>
This is a `div` that's using `{::options parse_block_html="true" /}` to tell kramdown to render the inner content as markdown.

This is the tutorial written for _OS X_ and _Source_.

Here's some code:

    #!/usr/bin/ruby
    
    puts "Hello, World!"

Yay!
</div>

<section class="tutorial" data-facets='{"Operating System": "Ubuntu", "Package Management": "Source"}'>
This is a `section` that's using `{::options parse_block_html="true" /}` to tell kramdown to render the inner content as markdown.  It doubles as a test for kramdown's recognition of html5 elements.

This is the tutorial written for _Ubuntu_ and _Source_.
</section>
