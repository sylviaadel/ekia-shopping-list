## React JS EKIAShoppingList

An application used to reate a todo list with all the furniture you want to buy, built with React, JavaScript and SASS.

## Project Screen Shot

Welcome Page:
![image](https://user-images.githubusercontent.com/39488415/202709165-cc4674c0-9caf-4183-a710-0fe547ff9d4a.png)

Add Item Modal:
![image](https://user-images.githubusercontent.com/39488415/202709569-54155eb7-2fb4-4b89-a9f0-75fc262cf688.png)

Shopping List Page:
![image](https://user-images.githubusercontent.com/39488415/202709930-452d4da2-bce5-422f-9462-143435b153f2.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

## Starter Project Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I made the following enhancements:

1. Added some React components to help us get started: Header, WelcomePage
2. Added scss to project
3. Changed App.css to be App.scss
4. Added new favIcon(logo.png) to the path `/public/images`.
5. Add needed images to the path `/src/images/images`
6. Add needed fonts to `/src/fonts` and inserting them in App.scss
7. Add DOM elemnts to Welcome and styles
8. Add AddIemModal component to the path `/src/components` and linking the button in Welcome Component with.
9. Add ShoppingListWrapper Component to wrap the header and the list contents to the path `/src/components`
10. Add routing to pages and redirect AddIemModal to ShoppingListWrapper
12. Add PageNotFound container to the path `/src/components` and linking it to App.js to be redirected to if if the user opens a wrong link
13. Adding ShoppingList component to the path `/src/components` and pass it to ShoppingListWrapper
14. Adding styles to both components as scss files in the same loaction of components