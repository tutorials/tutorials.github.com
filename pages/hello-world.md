---
layout: default
title: Hello, World!
---

Hello, World!
=============

Here are some examples of "Hello, World!" in various programming languages.

<div markdown="1" class="tutorial" data-author="Whitespace" data-facets='{"Language": "ActionScript", "Type System": "Static"}'>
ActionScript
------------

{% highlight as %}
trace("Hello, World!");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Ada", "Type System": "Static"}'>
Ada
---

{% highlight ada %}
with TEXT_IO;

procedure HELLO is
begin
 TEXT_IO.PUT_LINE ("Hello, World!");
end HELLO;
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "AppleScript"}'>
AppleScript
-----------

{% highlight applescript %}
return "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Awk"}'>
Awk
---

{% highlight awk %}
BEGIN { print "Hello, World!" }
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Befunge"}'>
Befunge
-------

{% highlight befunge %}
>              v
v  ,,,,,"Hello"<
>48*,          v
v,,,,,,"World!"<
>25*,@
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Boo"}'>
Boo
---

{% highlight boo %}
print "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "BrainFuck"}'>
BrainFuck
---------

{% highlight bf %}
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "C", "Type System": ["Static", "Weak"]}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "C++", "Type System": ["Static", "Weak"]}'>
C++
---

{% highlight cpp %}
#include <iostream>

int main()
{
  std::cout << "Hello, World!\n";
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "C#", "Type System": ["Static", "Dynamic"]}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Clojure", "Type System": ["Dynamic", "Semi-Strong"], "VM": "JVM"}'>
Clojure
-------

{% highlight clj %}
(def hello (fn [] "Hello, World!"))
(hello)
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "CoffeeScript"}'>
CoffeeScript
------------

{% highlight coffeescript %}
alert "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "ColdFusion"}'>
ColdFusion
----------

{% highlight cfm %}
<cfoutput>Hello, World!</cfoutput>
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Common Lisp", "Type System": "Dynamic"}'>
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

</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Cython", "Type System": ["Dynamic", "Semi-Strong"]}'>
Cython
------

{% highlight pyx %}
print "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "D", "Type System": "Static"}'>
D
-

{% highlight d %}
import std.stdio;

void main () 
{
  writef("Hello, World!");
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Dart"}'>
Dart
----

{% highlight dart %}
main() 
{
  print('Hello, World!');
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Delphi"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Dylan"}'>
Dylan
-----

{% highlight dylan %}
module: hello

format-out("Hello, World!\n");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Erlang", "VM": "Erlang"}'>
Erlang
------

{% highlight erlang %}
-module(hello).
-export([hello_world/0]).

hello_world() -> io:fwrite("Hello, World!\n").
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Factor"}'>
Factor
------

{% highlight factor %}
"Hello, World!" print
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Fancy", "VM": "Rubinius"}'>
Fancy
-----

{% highlight fy %}
"Hello, World!" println 
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "F#", "Type System": "Static"}'>
F#
--

{% highlight fsharp %}
print_endline "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Fortran", "Type System": "Static"}'>
Fortran
-------

{% highlight fortran %}
PROGRAM HELLO
PRINT *, 'Hello, World!'
END
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Groovy", "Type System": "Dynamic", "VM": "JVM"}'>
Groovy
------

{% highlight groovy %}
println "Hello, World"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Haskell", "Type System": "Static"}'>
Haskell
-------

{% highlight hs %}
module Main (main) where

main = putStrLn "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Io"}'>
Io
--

{% highlight io %}
write("Hello, World!\n")
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Java", "Type System": ["Static", "Strong"], "VM": "JVM"}'>
Java
----

{% highlight java %}
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "JavaScript", "Type System": "Dynamic"}'>
JavaScript
----------

{% highlight js %}
document.write('Hello, World!');
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Logtalk"}'>
Logtalk
-------

{% highlight logtalk %}
?- write('Hello, World!'), nl.
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Lua", "Type System": "Dynamic"}'>
Lua
---

{% highlight lua %}
print "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Matlab", "Type System": "Dynamic"}'>
Matlab
------

{% highlight matlab %}
disp('Hello, World!')
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "MiniD"}'>
MiniD
-----

{% highlight minid %}
module test
  writeln("Hello, World!")
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Modelica"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Modula-2"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Modula-2 R10"}'>
Modula-2 R10
------------

{% highlight modula2 %}
MODULE Hello;

IMPORT PervasiveIO;

BEGIN
  WRITE("Hello, World!\n");
END Hello.
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "MuPad"}'>
MuPad
-----

{% highlight mupad %}
t := plot::Text2d("Hello, World", [1, 1], TextFont = [24]):
plot(t)
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Nemerle"}'>
Nemerle
-------

{% highlight nemerle %}
System.Console.WriteLine("Hello, World!");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Nimrod"}'>
Nimrod
------

{% highlight nimrod %}
echo("Hello, World!")
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Objective-C", "Type System": "Static"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Objective-J"}'>
Objective-J
-----------

{% highlight objj %}
document.write("Hello, World!");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Octave", "Type System": "Dynamic"}'>
Octave
------

{% highlight octave %}
printf("Hello, World!\n");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "OCaml", "Type System": "Static"}'>
OCaml
-----

{% highlight ocaml %}
print_string "Hello, World!\n"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Perl", "Type System": ["Semi-Static", "Dynamic"]}'>
Perl
----

{% highlight perl %}
print "Hello, World!\n";
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "PHP", "Type System": "Dynamic"}'>
PHP
---

{% highlight php %}
print("Hello, World!");
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "PovRay"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "PostScript"}'>
PostScript
----------

{% highlight postscript %}
(Hello, World!\n) print quit
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "PowerShell"}'>
PowerShell
----------

{% highlight powershell %}
Write-Host 'Hello, World!`n'
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Prolog", "Type System": "Dynamic"}'>
Prolog
------

{% highlight prolog %}
write('Hello, World!').
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Python", "Type System": "Dynamic"}'>
Python
------

{% highlight python %}
print "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": ["R", "S", "S-Plus"]}'>
R and S and S-Plus
------------------

{% highlight r %}
cat("Hello, World!\n")
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Rebol"}'>
Rebol
-----

{% highlight rebol %}
print "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Redcode"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Reia", "Type System": "Dynamic", "VM": "Erlang"}'>
Reia
----

    "Hello, World!".puts()
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": ["Ruby", "JRuby"], "Type System": "Dynamic", "VM": "JVM"}'>
Ruby and JRuby
--------------

{% highlight ruby %}
puts "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Scala", "Type System": "Static", "VM": "JVM"}'>
Scala
-----

{% highlight scala %}
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, World!")
  }
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Scheme"}'>
Scheme
------

{% highlight scheme %}
(display "Hello, World!")
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Scilab"}'>
Scilab
------

{% highlight scilab %}
  mprintf('Hello, World!\n');
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Smalltalk", "Type System": "Dynamic"}'>
Smalltalk
---------

{% highlight smalltalk %}
Transcript show: 'Hello, World!'.
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "SNOBOL"}'>
SNOBOL
------

{% highlight snobol %}
ID: HelloWorld
Code:
  write.HelloWorld
End
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Tcl", "Type System": ["Dynamic", "Weak"]}'>
Tcl
---

{% highlight tcl %}
puts "Hello, World!"
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Vala"}'>
Vala
----

{% highlight vala %}
void main ()
{
  print ("Hello, World!\n");
}
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Verilog"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "VHDL"}'>
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
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "Visual Basic.NET"}'>
Visual Basic.NET
----------------

{% highlight vbnet %}
Module HelloWorldApp
  Sub Main()
     System.Console.WriteLine("Hello, World!")
  End Sub
End Module
{% endhighlight %}
</div>

<div markdown="1" class="tutorial" data-facets='{"Language": "XQuery"}'>
XQuery
------

{% highlight xquery %}
let $i := "Hello, World!"
return $i
{% endhighlight %}
</div>
