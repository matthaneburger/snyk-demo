# TypeScript e-commerce store

## What is this project about?

- This is an e-commerce app that allows shoppers to view, sort, and filter products according to different criteria. After products are added to the shopping cart, payment is processed with Stripe API.
- This serves as a TypeScript, Sanity CMS, GraphQL, and Stripe API learning project. I took the skeleton of [this Udemy course project](https://react-course-comfy-sloth-store.netlify.app/). The differences between the original one and my version are:
  - replaced the JavaScript code with TypeScript.
  - Instead of using dummy data and API provided by the Udemy course, I use some real product data from a friend's Instagram store. Sanity CMS is used to host the data, GraphQL is used to query the data.

## What technologies were used?

- react.js (create-react-app)
- TypeScript

### Styling:

- styled-components
- CSS

### Routing:

- react-router

### Payment processing:

- Stripe API

### CMS:

- Sanity
- GraphQL
- axios

### Hosting and server side functions

- Netlify

## Links to source code and live site:

- [Live site hosted on Netlify](https://cute-buddy.netlify.app/)
- [Source code on Github](https://github.com/-1codingguy/typescript-e-commerce)
- [GraphQL playground for CMS data hosted on Sanity](https://bqk6gkzk.api.sanity.io/v1/graphql/production/default)

## How to navigate this project? Click on the link for related source code:

1. A simple [Sanity CMS schema](https://github.com/1codingguy/typescript-e-commerce/blob/main/cutebuddy/schemas/product.js) is used: add, amend or delete product can be done on the CMS instead of in the source code.

2. Click on each `ServicesCard` button will do two things:

- route to `ProductsPage`;
- filter the products according to which button gets clicked on.
  - To achieve this, it has to go through three steps:

1. clear the previous filters
2. set `isClickFromServices` state variable to tru
3. update filters according to the button that gets clicked on

[Click here](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/components/Services/ServicesCards.tsx#L21) for the relevant code.

- Why is there a `isClickFromServices` variable?
  - `ProductsPage` should display products of relevant service if routed from `Services` component.
  - But each time `ProductsPage` is mounted, `filters` are cleared since the page should display all products.
  - That means there are two cases for `ProductsPage`:
    - when the component mounts `filters` are cleared.
    - when the component mounts, and it is routed from `Services` component, `filters` should contain a value.
  - Therefore, an if statement is used to check if the page is routed from `Services`, [click here for the relevant code](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/pages/ProductsPage.tsx#L10).

3. Shoppers can choose to view the products in `ListView` or `GridView`. [Click here for relevant code](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/components/ProductList.tsx#L24).

4. Shoppers are able to filter products by different criteria, such as keyword, price, etc.

- [Click here for code structure](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/components/Filters/Filters.tsx#L22);
- [Click here for filters updating function](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/reducers/filter_reducer.ts#L61).

5. Products can be sorted by price or name, in ascending or descending order [Click here for sorting function](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/reducers/filter_reducer.ts#L41).

6. Payment is processed by Stripe API, [click here for relevant code](https://github.com/1codingguy/typescript-e-commerce/blob/main/src/components/CheckoutForm.tsx).

7. Please note that the newsletter subscription part on `HomePage` does not do anything.

## Why did I build the project this way?

### About filtering:

Lots of thoughts were given about filter functions related to 'age' and 'height' because of the nature of the baby product. I am listing some reasons why `age` and `height` filters are set up in this way:

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
# Clone this repository
$ git clone https://github.com/1codingguy/typescript-e-commerce.git

# Go into the repository
$ cd typescript-e-commerce

# Remove current origin repository
$ git remote remove origin

```

Then you can install the dependencies using NPM:

```
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Happy coding!
