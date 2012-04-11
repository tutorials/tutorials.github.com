---
layout: default
title: Hello, World!
---

Hello, World!
=============

Here are some examples of "Hello, World!" in various programming languages.

<section class="tutorial" markdown="1" data-facets='{"Language": "ActionScript", "Type System": "Static"}'>
ActionScript
------------

{% highlight as %}
trace("Hello, World!");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Ada", "Type System": "Static"}'>
Ada
---

{% highlight ada %}
with TEXT_IO;

procedure HELLO is
begin
 TEXT_IO.PUT_LINE ("Hello, World!");
end HELLO;
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "AppleScript"}'>
AppleScript
-----------

{% highlight applescript %}
return "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Awk"}'>
Awk
---

{% highlight awk %}
BEGIN { print "Hello, World!" }
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Befunge"}'>
Befunge
-------

{% highlight befunge %}
>              v
v  ,,,,,"Hello"<
>48*,          v
v,,,,,,"World!"<
>25*,@
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Boo"}'>
Boo
---

{% highlight boo %}
print "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "BrainFuck"}'>
BrainFuck
---------

{% highlight bf %}
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "C", "Type System": ["Static", "Weak"]}'>
C
-

{% highlight c %}
#include <stdio.h>

int main(void)
{
  printf("Hello, World!");
  return 0;
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "C++", "Type System": ["Static", "Weak"]}'>
C++
---

{% highlight cpp %}
#include <iostream>

int main()
{
  std::cout << "Hello, World!\n";
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "C#"}'>
C#
--

{% highlight csharp %}
using System;

class HelloWorld
{
  static void Main()
  {
    System.Console.WriteLine("Hello, World!");
  }
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Clojure", "VM": "JVM"}'>
Clojure
-------

{% highlight clj %}
(def hello (fn [] "Hello, World!"))
(hello)
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "CoffeeScript"}'>
CoffeeScript
------------

{% highlight coffeescript %}
alert "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "ColdFusion"}'>
ColdFusion
----------

{% highlight cfm %}
<cfoutput>Hello, World!</cfoutput>
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Common Lisp"}'>
Common Lisp
-----------

{% highlight cl %}
(format t "Hello, World!~%")
{% endhighlight %}

or

{% highlight cl %}
(write-line "Hello World!")
{% endhighlight %}

or

{% highlight cl %}
"Hello World!"
{% endhighlight %}

</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Cython"}'>
Cython
------

{% highlight pyx %}
print "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "D", "Type System": "Static"}'>
D
-

{% highlight d %}
import std.stdio;

void main () 
{
  writef("Hello, World!");
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Dart"}'>
Dart
----

{% highlight dart %}
main() 
{
  print('Hello, World!');
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Delphi"}'>
Delphi
------

{% highlight delphi %}
program Hello_World;
uses 
 Windows;

begin
 ShowMessage("Hello, World!");
end.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Dylan"}'>
Dylan
-----

{% highlight dylan %}
module: hello

format-out("Hello, World!\n");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Erlang", "VM": "Erlang"}'>
Erlang
------

{% highlight erlang %}
-module(hello).
-export([hello_world/0]).

hello_world() -> io:fwrite("Hello, World!\n").
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Factor"}'>
Factor
------

{% highlight factor %}
"Hello, World!" print
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Fancy", "VM": "Rubinius"}'>
Fancy
-----

{% highlight fy %}
"Hello, World!" println 
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Fortran"}'>
Fortran
-------

{% highlight fortran %}
PROGRAM HELLO
PRINT *, 'Hello, World!'
END
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "F#"}'>
F#
--

{% highlight fsharp %}
print_endline "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Groovy", "VM": "JVM"}'>
Groovy
------

{% highlight groovy %}
println "Hello, World"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Haskell"}'>
Haskell
-------

{% highlight hs %}
module Main (main) where

main = putStrLn "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Io"}'>
Io
--

{% highlight io %}
write("Hello, World!\n")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Java", "Type System": ["Static", "Strong"], "VM": "JVM"}'>
Java
----

{% highlight java %}
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "JavaScript"}'>
JavaScript
----------

{% highlight js %}
document.write('Hello, World!');
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "JRuby", "Type System": "Dynamic", "VM": "JVM"}'>
JRuby
-----

{% highlight ruby %}
puts "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Logtalk"}'>
Logtalk
-------

{% highlight logtalk %}
?- write('Hello, World!'), nl.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Lua"}'>
Lua
---

{% highlight lua %}
print "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Matlab"}'>
Matlab
------

{% highlight matlab %}
disp('Hello, World!')
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "MiniD"}'>
MiniD
-----

{% highlight minid %}
module test
  writeln("Hello, World!")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Modelica"}'>
Modelica
--------

{% highlight modelica %}
model HelloWorld "A differential equation"
  annotation(...);
  Real x(start=1);
equation
  der(x)=-x;
end HelloWorld;
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Modula-2"}'>
Modula-2
--------

{% highlight modula2 %}
MODULE Hello;

FROM InOut IMPORT WriteLn, WriteString;

BEGIN
  WriteString ("Hello, World!");
  WriteLn
END Hello.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Modula-2 R10"}'>
Modula-2 R10
------------

{% highlight modula2 %}
MODULE Hello;

IMPORT PervasiveIO;

BEGIN
  WRITE("Hello, World!\n");
END Hello.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "MuPad"}'>
MuPad
-----

{% highlight mupad %}
t := plot::Text2d("Hello, World", [1, 1], TextFont = [24]):
plot(t)
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Nemerle"}'>
Nemerle
-------

{% highlight nemerle %}
System.Console.WriteLine("Hello, World!");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Nimrod"}'>
Nimrod
------

{% highlight nimrod %}
echo("Hello, World!")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Objective-C"}'>
Objective-C
-----------

{% highlight objc %}
#import <Cocoa/Cocoa.h>

int main(int argc, char *argv[])
{
  NSLog(@"Hello, World!\n");
  return 0;
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Objective-J"}'>
Objective-J
-----------

{% highlight objj %}
document.write("Hello, World!");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Octave"}'>
Octave
------

{% highlight octave %}
printf("Hello, World!\n");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "OCaml"}'>
OCaml
-----

{% highlight ocaml %}
print_string "Hello, World!\n"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Perl", "Type System": "Dynamic"}'>
Perl
----

{% highlight perl %}
print "Hello, World!\n";
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "PHP"}'>
PHP
---

{% highlight php %}
print("Hello, World!");
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "PovRay"}'>
PovRay
------

{% highlight pov %}
#include "colors.inc"

camera {
  location <3, 1, -10>
  look_at <3,0,0>
}

light_source { <500,500,-1000> White }

text {
  ttf "timrom.ttf" "Hello, World!" 1, 0
  pigment { White }
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "PostScript"}'>
PostScript
----------

{% highlight postscript %}
(Hello, World!\n) print quit
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "PowerShell"}'>
PowerShell
----------

{% highlight powershell %}
Write-Host 'Hello, World!`n'
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Prolog"}'>
Prolog
------

{% highlight prolog %}
write('Hello, World!').
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Python", "Type System": "Dynamic"}'>
Python
------

{% highlight python %}
print "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "R"}'>
R
-

{% highlight r %}
cat("Hello, World!\n")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Rebol"}'>
Rebol
-----

{% highlight rebol %}
print "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Redcode"}'>
Redcode
-------

{% highlight redcode %}
write   sts.a  hello,     0
        sts.b  }write,    0
        djn    write,     #7
 
hello   dat    72,        101 ; He
        dat    108,       108 ; ll
        dat    111,       44  ; o,
        dat    32,        87  ;  W
        dat    111,       114 ; or
        dat    108,       100 ; ld
        dat    33,        10  ; !\n
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Reia", "VM": "Erlang"}'>
Reia
----

    "Hello, World!".puts()
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Ruby", "Type System": "Dynamic"}'>
Ruby
----

{% highlight ruby %}
puts "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "S-Plus"}'>
S-Plus
------

{% highlight s %}
cat("Hello, World!\n")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Scala", "VM": "JVM"}'>
Scala
-----

{% highlight scala %}
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, World!")
  }
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Scheme"}'>
Scheme
------

{% highlight scheme %}
(display "Hello, World!")
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Scilab"}'>
Scilab
------

{% highlight scilab %}
  mprintf('Hello, World!\n');
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Smalltalk"}'>
Smalltalk
---------

{% highlight smalltalk %}
Transcript show: 'Hello, World!'.
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "SNOBOL"}'>
SNOBOL
------

{% highlight snobol %}
ID: HelloWorld
Code:
  write.HelloWorld
End
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Tcl", "Type System": "Weak"}'>
Tcl
---

{% highlight tcl %}
puts "Hello, World!"
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Vala"}'>
Vala
----

{% highlight vala %}
void main ()
{
  print ("Hello, World!\n");
}
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Verilog"}'>
Verilog
-------

{% highlight v %}
module main();
  initial begin
    #0 $display("Hello, World!");
    #1 $finish;
  end
endmodule
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "VHDL"}'>
VHDL
----

{% highlight vhdl %}
use std.textio.all;

entity Hello is
end Hello;

architecture Hello_Arch of Hello is
begin
  p : process
  variable l:line;
  begin
    write(l, String'("Hello, World!"));
    writeline(output, l);
    wait;
  end process;
end Hello_Arch;
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "Visual Basic.NET"}'>
Visual Basic.NET
----------------

{% highlight vbnet %}
Module HelloWorldApp
  Sub Main()
     System.Console.WriteLine("Hello, World!")
  End Sub
End Module
{% endhighlight %}
</section>

<section class="tutorial" markdown="1" data-facets='{"Language": "XQuery"}'>
XQuery
------

{% highlight xquery %}
let $i := "Hello, World!"
return $i
{% endhighlight %}
</section>
