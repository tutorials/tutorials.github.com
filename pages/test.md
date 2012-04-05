---
layout: default
title: Test

---

Javascript Testing
==================

This is a test of the javascript-based filtering code.  The idea is that there are divs with `data-foo=bar` data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.

For example, a div like this:

{% highlight html %}
<div data-operating-system="OS X" data-package-management="Homebrew">
  ...
</div>

<div data-operating-system="OS X" data-package-management="Source">
  ...
</div>

<div data-operating-system="Ubuntu" data-package-management="Source">
  ...
</div>
{% endhighlight %}

should show the following sidebar:

```
Operating System
  OS X (2)
  Ubuntu (1)

Package Management
  Homebrew (1)
  Source (2)
```

This allows users to filter the document by those attributes which are relavent to them.

Note the following empty liquid call used to force syntax highlighting: {{ }}
