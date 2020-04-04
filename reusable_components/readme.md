This is a special folder, where you can place a components that can exist in multiple context pages, examle the card component that I used on Study3 blogpost but it can still be used on other pages like gallery page.

hopefully you may use a preprocessor like Sass, Less, etc with a parent class name stored in variable so others can just replace that name with whatever they want. 
also all the childs must be nested under the parent, to achieve maximum specifity, so if-found other declartions don't override yours.
