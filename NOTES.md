# Notes / Documentation
I am grateful for the opportunity to participate in this valuable exercise. My process involved conducting an analysis of the project structure and coding style. 
I closely examined the `articles1.json` and `articles.json` files and compared them to the reference page, ultimately resulting in the mapping and planning of the necessary object fields for rendering.

I then traced the data flow from the entry point of the app and structured my component accordingly, incorporating my own style (e.g. importing { FC } from React). 
Additionally, I created a `helpers.ts` file that contains helper functions, including `extractContributorData`, `extractImageData`, and `dateFormatting`, 
all of which were unit tested in `helpers.test.ts` to ensure thorough coverage of all cases and edge cases.

I also developed the ShareLink component, which was tested for functionality through the use of unit tests. These tests mock event firing and verify performance by utilizing testIds.
To aid in data object shape and simplify debugging, I created an index.ts file that contains TypeScript interfaces.
A crucial aspect of my work involved rendering based on the docType, including Image, ImageProxy, Teaser, and Interactive, as well as constructing the necessary components to support future docTypes.
Adding a new docType is a straightforward process, as the necessary components have already been established in the EmbeddedContentDirectory. Simply follow the established structure, and customize the styling as desired.

Although I completed the assigned tasks and replicated the reference page to the best of my ability, there are a few areas that I would like to improve and investigate given more time. 
These include: 
- investigating why the EmbeddedTeaser isn't rendering links
- addressing the console.warning that appears during testing
- increasing unit tests coverage
- enhancing proper typings
- implementing E2E testing with Selenium or Cypress, 
- verifying accessibility through proper aria tags and tab indexing for screen readers.

It is important to run the tests and evaluate their results. I have taken great care in considering various scenarios when constructing them.
You can run the tests by executing the following command:

```$ yarn run test```

Please note, all tests should pass. Although there may be a console warning, it is one of the issues that I intended to resolve if given more time.




