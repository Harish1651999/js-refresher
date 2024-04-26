1. Use defer for scripts that need to be executed after the HTML parsing is complete and in the order they appear.
   <script src="script.js" defer></script>

   ###########

2. Use async for scripts that can be executed independently and don't depend on other scripts or the DOM.
   <script src="script.js" async></script>

   ###########

3. Use type="module" for ECMAScript modules, which allow better code organization and encapsulation, and they are deferred by default.
   <script type="module" src="module.js"></script>
   ###########
