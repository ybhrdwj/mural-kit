I want to build an npm package called "mural-kit" It is a modal which works in the following way:
1. Opens on right click
2. Has 3 menu items
   1. Copy logo as SVG: this copies the logo as SVG
   2. Copy brandmark as SVG: similarly this copies the brand mark as svg
   3. Download BrandKit this points to a file that gets downloaded.
3. This is usually connected to a company's logo in the header, we want to make it easy for anyone to plug this into their logo to make it easy for their users to download this file
4. Icons on the menu items:
   1. I have used lucide's code-xml, hexagon and download in this example. 
   2. I want to use these icons but not with installing the package, but by pasting the SVGs 
   3. I also want the SVGs to be easily replacable
5. Note: The Icon of the menu and the SVG getting copied have custom logic:
   1. copy logo as svg: has the code-xml icon but the value getting copied is a different svg
   2. copy brandmark: has the same value and icon of what is getting copied
   3. download brandkit has a download icon and opens a link.
6. You create a test page that will help me  preview the right click menu and test everything. 
7. I also want to use 'sonner' to use a toast notification when the SVG is copied. 
7. Later we will create a readme with the setup instructions and deploy this to npm

Tailwind details:
1. Icon and Text spacing is 12px
2. Font is 16px and gray 400 color for text and 500 for icon
3. Spacing around the icon+text is 12px top/botton and left/right

Help me code this in a nextJS project in a format that I can later distribute via npm and all values can be easily swappable. Give me step by step code and only move to next step after I confirm. Write full code never filler.

Let's begin
