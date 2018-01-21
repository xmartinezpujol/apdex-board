# New Relic Apdex Board - Code challenge

### Install
Node/NPM required to install dependencies.

Clone rep
``` shell
git clone https://github.com/xmartinezpujol/apdex-board.git
```

Install dependencies
``` shell
npm install
```

Run Dev Server at http://localhost:5000
``` shell
npm start
```

Build Production Bundle
``` shell
npm run build
```

### Testing

Uses Jest for Unit Testing and Snapshots.

Run tests
``` shell
npm test
```

### Comments

-Press +/- keys to test adding and removing an application. I didn't see an interactive component to test this case in the documentation (button, form, etc), so for testing purposes I created an event listener for those keys at the app level. For production this feature should be linked to a container component that adds/removes apps, not the global App component.

-User Email should be another component if possible, with data that comes from the API. I left it as just text in the template as a placeholder, but in a normal site that wouldn’t be the case probably for reusability.

### About the architecture

The theory used in this solution is based on Atomic Design and Component Driven Development. I divided the different layouts and functionalities in reusable components and created a parent one as a base Component to interact with the DOM. In WebComponents this is usually done using the Shadow DOM and the registration of new HTMLElements, but I had to think of a similar solution for state and updates in renders. Maybe it's not an elegant solution, but I think that it's pragmatic for the challenge presented.

### Tech Stack
Vanilla JS, Webpack3 + DevServer, Babel, ESLint, Jest, Polyfill.io.
