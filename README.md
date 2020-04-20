
# Netflix Compact
*Developed by Oles Odynets @10100x2*

## Table of Contents
[What is it?](#user-content-what-is-it)
[How to install?](#user-content-how-to-install)
[How to use?](#user-content-how-to-use)
[How does it work?](#user-content-author)
[Author](#user-content-author)

## What is it
This is a custom script that creates additional functionality in the **Netflix** player. It allows you to resize the player and make it appear on top of all programs so you can do your work and watch cool movies at the same time!

## How to install
It's recommended to use the **Chrome** browser.
1. Download any chrome extension that allows you to apply custom CSS/JS (I prefer [this one](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en))

![enter image description here](http://i.piccy.info/i9/740a0c50d729420ca58ce6344bc2e6b3/1587400974/28345/1373973/Screenshot_from_2020_04_20_18_38_01.png)

2. Navigate to the Netflix website

![enter image description here](http://i.piccy.info/i9/a848c7ba7ea671dca2cbafc2aa5b0531/1587400968/36240/1373973/Screenshot_from_2020_04_20_18_38_55.png)

3. Open the extension page

![enter image description here](http://i.piccy.info/i9/559f827c3bf3cf0653573eac2e1f2fba/1587401089/10612/1373973/Screenshot_from_2020_04_20_18_41_19.png)

4. Copy the custom Javascript and CSS

![enter image description here](http://i.piccy.info/i9/52aa8cae51c334493ed5c8fde4dc554e/1587400963/162871/1373973/Screenshot_from_2020_04_20_18_39_11.png)

5. Save the changes 

![enter image description here](http://i.piccy.info/i9/ae067e3a22ac1376ea22921ae93ef1e1/1587400956/1901/1373973/Screenshot_from_2020_04_20_18_39_20.png)

## How to use
Open any film in the browser and click the `eye` button in the media menu.

![enter image description here](http://i.piccy.info/i9/0abdc7eca5066b8736ff9ed93ed3ed6e/1587401224/32738/1373973/Screenshot_from_2020_04_20_18_43_56.png)

## How does it work?

Actually, it's a simple HTML button that fires an internal `"requestMinimizedView"` implementation. All this script does is that adds a button and a `onclick` handler to this function. You can think of it as a shortcut.

## Author
Oles Odynets @2020 [Github](https://github.com/olchyk98)
