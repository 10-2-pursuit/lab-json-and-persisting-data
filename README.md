# JSON and Persisting Data

You will build an app that generates a fake data set for a new app with the npm package `faker-js@7`.

## Getting Started

1. Fork and clone this repository.
1. Navigate to the cloned repository's directory on your command line.
1. Turn this project into a Node.js project by running `npm init -y`.
1. Create a `.gitignore` and add the appropriate files and folders
1. Open up the repository in VSCode.
1. Create an `index.js` file.
1. Add `faker-js@7` and `jest@29` to dev dependencies.

## Instructions

To complete this lab, follow the instructions below. Additionally, make sure you are organizing your code and limiting the amount of things your functions do.

You can choose whatever app idea you want and whatever data set makes sense for your app. At a minimum, your data set should have randomly generated fields for at least one of the following:

- Unique id
- String
- Boolean
- Number

For example, if you chose to make a forum for hackers, you could use the following:

- `id`: A unique id
- `hackerName`: faker `adjective` + `chemicalElement` + `animal` ( e.g.Hyper Hydrogen Hyena)
- `messageTitle`: Help with `hacker.adjective` + `hacker.abbreviation` on `git.branch`.
- `messageContent`: `lorem.paragraph`.
- `isResolved`: A boolean for whether or not the issue is resolved.
- `messageResponse` : `hacker.phrase`.
  -date`:` the message was posted.
- `numberOfUpvotes`: the number of upvotes

- Through the command line, a user should be able to choose whether to create one or many randomly generated messages.

- The messages should be read from a JSON file.
- Additional messages should be able to be added to the JSON file.

Then, add Jest and write at least two tests. Since you are generating random data, what can you test, and how can you test it?

You could:

- Confirm all the correct fields exist when creating a new item.
- Make sure the correct datatype is being inserted into each field.
- Confirm that the function to create one item creates only one item.
- Confirm that the function to create many items creates the correct number of items.

You should not:

- Write tests that are dependent on changing the data in the `data.json` file
