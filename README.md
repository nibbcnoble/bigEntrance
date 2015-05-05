# bigEntrance

This is a set of effects for HTML pages that run when an element becomes visible on screen.

Currently there are 3 effects: fade, vStretch, and hStretch.  All three are illustrated in the index.html example.

First, include the bigEntrance.js file after the latest version of jQuery in the header of your HTML page. The only thing that is required then is that you assign an element a unique id and then assign it with a bigEntrance class and the type of effect for example:

<pre>&lt;div id="box" class="bigEntrance vStretch"&gt; &lt;/div&gt;  </pre>

The vStretch will stretch out the div to its proper size once it is on screen.  In this case, since it is a stretch effect, the area that the div would normally take up is kept consistent to avoid elements on the page jumping around as a result of the effect. 
