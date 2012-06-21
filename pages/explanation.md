---
layout: default
title: Test
ignore: true
---

# How tutorials.github.com Works

This site works by using [Github Pages](http://pages.github.com/) to automatically generate and serve content.  Github Pages works by using by using [Jekyll](https://github.com/mojombo/jekyll), a "blog-aware, static site generator in Ruby."  Since it's a completely static site, all interactions are done through javascript on a per-page basis.

## Location and Markup Language

All tutorials are stored in the `/pages` subdirectory of the repo.  Although jekyll supports several different markup languages such as markdown, textile, etc., tutorials.github.com has only been tested using markdown (for now).

## Syntax

Since Github Pages are (unfortunately) not parsed using [Github Flavored Markdown](http://github.github.com/github-flavored-markdown/), we use the [kramdown](https://github.com/gettalong/kramdown)'s extended markdown syntax to enable things like syntax highlighting and allowing markdown parsing _within_ an html tag.

## Structure

Tutorials have, at a minimum, the following structure:

{% highlight html %}
<div markdown="1" class="tutorial" data-facets='{"some": "json"}'>
some _markdown_ content
</div>
{% endhighlight %}

Let's explore each in more detail.

### data-facets

These data attributes that are used to list key-value pairs that javascript uses to "facet" the document with.  We store JSON because jQuery automatically converts HTML5 data attributes into `camelCase`, so we'd lose formatting.

### markdown="1"

The `markdown="1"` attribute to tell kramdown to parse the content of the divs as markdown instead.  Because of this internal parsing, is it recommended to outdent the content inside the div (that is, type your content without leading whitespace), like in the example above.

### class="tutorial"

Tutorial divs should have `class="tutorial"` to separate them from internally-nested divs.  I haven't tested nesting divs, but they should work.

## Faceting

We parse all the tutorials on a page and generate a sidebar so that users can drill-down to the most relevant tutorial.  For example, a document like this:

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

If you clicked on the "Source (1)" `li` then you should see this:

    Operating System (1)
      Ubuntu (1)

    Package Management (3)
      Source

## Installing tutorials.github.com Locally

First you need to [fork the repo](https://github.com/tutorials/tutorials.github.com/fork_select). Then you need to clone your fork and checkout a topic-branch:

{% highlight sh %}
git clone git@github.com:some_user/tutorials.github.com.git
cd tutorials.github.com
git checkout -b my-awesome-tutorial
{% endhighlight %}

Now we need to install some gems using bundler:

{% highlight sh %}
bundle
{% endhighlight %}

Then start the jekyll server:

{% highlight sh %}
jekyll --server --auto
{% endhighlight %}

Now you can browse to [http://localhost:4000](http://localhost:4000) and see the site running locally.

## Creating a New Tutorial

Creating a new tutorial is easy.  All you need to do is create a new file in the `pages` directory, but it's a lot easier if you just start from the `template.md` file:

{% highlight sh %}
cp pages/template.md pages/my-new-tutorial.md
{% endhighlight %}

Then just follow the guide and `pages/hello-world.md` as an example.

Once you're done (and it looks good when running locally), send me a pull request and I'll merge in your new page, regenerate the table of contents and other cleanup, and then push it to github.
