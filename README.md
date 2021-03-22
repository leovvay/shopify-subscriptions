# client SPA webapp boilerplate

## Table of Contents

- [client SPA webapp](#client-spa-webapp)
  - [Requirements](#requirements)
  - [Getting started](#getting-started)
  - [Avaliable commands](#avaliable-commands)
  - [Definition of Done](#definition-of-done)
  - [PR Creator Checklist](#pr-creator-checklist)
  - [Code review Checklist](#code-review-checklist)
- [Conventions](#conventions)
  - [Introduction](#introduction)
  - [Goals](#goals)
  - [Rules](#rules)
    - [General](#general)
    - [JavaScript](#javascript)
    - [React](#react)
    - [Styling](#styling)
    - [Data formats](#data-formats)
  - [Reusable vs. specific components](#reusable-vs-specific-components)
  - [Defining props in TypeScript](#defining-props-in-typescript)
  - [Project structure](#project-structure)
    - [Routing](#routing)
  - [Theme & Design-System](#theme-and-design-system)
    - [Typography](#typography)
    - [Icons](#icons)
    - [When can I read more about font loading strategies?](#when-can-i-read-more-about-font-loading-strategies)
    - [Styling rules](#styling-rules)

This is a webapp created as extendable boilerplate for our clients.

## Requirements

- nvm (or node v15)
- yarn latest
- watchman latest

## Getting started

```bash
yarn
yarn start
```

## Avaliable commands

- `yarn start` to start the development environment.
- `yarn build` to create a production ready build. It will appear in `/build` directory
- `yarn lint:js` to lint with eslint
- `yarn lint:css` to lint styled-components with stylelint
- `yarn test` to test code with jest
- `yarn storybok` to start storybook development environment
- `yarn build-storybook` to create a production ready storybook build. It will appear in `/.storybook-static`.
- `yarn build && yarn analyze` to run Bundle Analysis tool

## Definition of Done

- Tests for unit, integration, acceptance

## PR Creator Checklist

- I wrote unit and/or integration tests
- I made corresponding changes to the documentation (README.md)
- I wrote a description of requested changes
- I performed a self-review of my own code (and followed code review
  checklist)
- I set proper PR labels

## Code review Checklist

- Code is self-documenting and easy to understand
- Tests are present (preferably not only snapshots)
- There is no commented out code
- There is no unnecessary logging or debugging code
- Every function and/or component is responsible for one thing only (Single Responsibility Principle)
- Errors are handled
- Naming of methods, variables, and classes is proper
- Changes are documented in README.md (if necessary)

---

# Conventions

## Introduction

This section is more about taste and opinions rather than about absolute
truths. Most engineering decisions depend on your requirements and trade-offs
you are willing to make, thus, consider this document work in progress. If you
see anything that could be improved, create a new issue and let us discuss it.
That’s being said, what’s in this document has to be strictly followed by all
project contributors for consistency.

## Goals

So why do we want to discuss, set, and follow conventions in the project? What
we’re looking to gain from all this? There are a lot of benefits, but some of
them are:

1.  **Speed of development** – well organized project improves productivity and
    enables new developers (even juniors) to start coding in hours, not days
2.  **Bugs reduction** – good conventions should make it easier to reason about
    the code and enforce best practices – thus reducing number of bugs that enter
    the app.
3.  **Scalability** – with good project structure and strong conventions it
    should be as easy to build and maintain a small app as well as a huge 100+
    screens app.
4.  **Confident refactoring** – dependencies between various elements / files
    should be obvious for developers making it possible to refactor and/or delete
    code with confidence. Each decision we make should to help us achieve the
    above goals.

## Rules

### General

1.  Consistency – the most important rule. Mixed conventions / coding styles make
    developers confused. We better go with worse architectural decision in a
    consistent manner than try to do many different things in an inconsistent
    fashion.
2.  Don't bloat component files - if the file is getting too big and hard to read, try to move some of the code to a different file i.e. create a new component, move a function to utils file etc.
3.  Single Responsibility Principle – let units/functions do one thing, one thing
    only and do it well
4.  KISS – Keep It Stupid Simple. Simple is better.
5.  TDD – write tests first wherever you can.
6.  Question designs – be brave and question UX of the design. Discuss them.
    Treat them as a guideline and don’t try to implement them pixel-perfect.
7.  Handle errors. Murphy’s law states, that is anything can go wrong, it will go
    wrong. Be prepared for the worst and catch errors.
8.  Colocation – keep files that often change together close to each other.
9.  When implementing a component, start with more rigid implementation, but take
    into consideration it’s obvious future use cases in the app based on the
    design. [More here](https://youtu.be/MsTARVOl1H4?t=15m42s).

### TypeScript

#### The application is using TypeScript for better developer experience and type safety.

1.  No default exports.
    [Here is why](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad). There is an exception to that rule (see [routing](#routing))
2.  Don’t use Promise..then..catch. Use async..await and try..catch
3.  Don’t use `index` files.
4.  Name your file the same as the thing you’re exporting from that file
5.  Use absolute imports.
6.  We use [ramda](http://ramdajs.com/) as our toolkit.
7.  Name event handlers in this way: `handle{{EventName}}`. e.g. `handleClick`.
    It's a good practice to not couple handler name with what it does. It's
    because when you extend handler functionality its name suddenly becomes
    inaccurate. For example, let’s say you call handler name `submitAnswers` and
    then later decide to validate user input before submitting. Noticed how you
    handler `submitAnswers` no longer just submits values? It’s name now is
    inaccurate. You should rather create a function `handleClick` that then calls
    `submitAnswers` and/or any other function you'd like to call on that click.

### React

1.  We use component state by default. We treat redux as a tool that solves
    a specific issue. When we encounter an issue that redux solves then,
    and only then, are we allowed to use redux.
2.  Name redux actions as events.
    [Recommended read](https://redux.js.org/style-guide/style-guide#model-actions-as-events-not-setters).
3.  Handle every form with
    [React Hooks Form](https://react-hook-form.com/).
4.  Don’t use HoC, use render prop but probably a Hook is what you need.
5.  When it makes sense, separate logic from the view - that's better for reading the code and testing.
6.  When updating the state after async function, make sure the component is still mounted. Setting state on unmounted component causes a memory leak and an error.
7.  [Decompose Components](https://medium.com/ottofellercom/how-to-structure-large-react-apps-440b0e012d80#ab8c).
8.  Always specify interface for Props and set default prop values when it makes sense.
9.  Every non-presentational component or hook responsible for doing API calls should have loading and error states implemented.
10. For complex state operations consider using [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) instead of `useState`.
11. When creating styled-components you can keep them in the file next to the components that uses them. When doing so, make sure to name the file the same as the main component but with suffix `.styled.tsx`. For example, you have multiple styled-components used in `NavigationBar.tsx`, put all the styled components in `NavigationBar.styled.tsx` and import them from there.
12. When returning multiple items in a component use `<>...</>` syntax instead of `React.Fragment`.
13. When adding a new atom, molecule or organism component you need to provide the `data-analytics-id=component-name` attribute - that's used for simple reading of such components on 3rd parties tools.
14. Create Selectors from Redux using [reselect](https://github.com/reduxjs/reselect)

### Styling

1.  Don’t use `cursor: pointer`.
    [Here is why](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b).
2.  Avoid `outline: none`. If you have to use it, provide alternative `:focus`
    styling. [Read more here](http://www.outlinenone.com/).
3.  Create responsive components - before pushing the code check how implemented view/element looks on different screen widths.
4.  Use `rem` as default unit for sizing.
5.  [Make line-height unitless](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)
6.  Use [styled-system](https://github.com/jxnblk/styled-system)
    when you need to change styles basing on props - it can make your life easier.
7.  Use interfaces for checking props of styled-components - just like regular components.
8.  When using `styled-components` make sure to import it from `styled-components/macro` for better developer experience. By doing so, in dev tools you will see `<button class="Button-asdf123 asdf123" />` instead of just `<button class="asdf123" />` as well as display names of components.

### Responsive web design

1. When we have a different design/layout on a certain screen width we can use [react-responsive](https://github.com/contra/react-responsive) to display a specific component.

For example:

```jsx
import React from 'react';
import { Default } from 'components/Responsive/Default';
import { Mobile } from 'components/Responsive/Mobile';
// some other imports

export const MainPage = () => (
  <div>
    <Title>This is a random page</Title>
    <Form />
    <Button />

    <Mobile>
      {/* this will be displayed only on mobile*/}
      <FooterMobile />
    </Mobile>

    <Default>
      {/* this will be displayed on every screen except mobile*/}
      <Footer />
    </Default>
  </div>
);
```

2. When creating a component exclusive for certain screen width, place it in one of the component folder Atoms/Molecules/Organisms with the suffix of the device you are targeting, for example when creating a Footer for mobile, simply name the file `FooterMobile.tsx`, for tablet `FooterTablet.tsx` etc.
3. In other cases - when we do not have a separate design for a specific page/element:
   - use media queries when creating components, maximum width breakpoints are present in theme file,
   - try to create components in a responsive way - they should react on screen scaling and be displayed correctly

### Data formats

1.  We use [ISO-3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes for **countries** and **nationalities**.
2.  We use [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) for **dates**.

## Reusable vs. specific components

Some components are quite universal and meant to be used in many different
places across the app. For example: a button, an input or a paragraph component.
On the other hand, there are very specific components meant to be used only in
one context, e.g. a TabContent component. Reusable components will usually
reside in `src/components` directory. Those components are very important to
document with storybook as they create our design system. Read about Design
Systems [here](https://www.invisionapp.com/blog/guide-to-design-systems/).

## Defining props in TypeScript

To define props of a component use Interface:

```js
interface Props {
  variant: string;
  id: number;
}

export const Example = ({ variant, id }: Props) => (
  <>
    <h1>This is the ID: {id}</h1>
    <p>This is the variant: {variant}</p>
  </>
);
```

To specify defaultProps use default function parameters:

```js
interface Props {
  variant?: 'light' | 'dark';
  id?: number;
}

export const Example = ({ variant = 'dark', id = 7 }: Props) => (
  <>
    <h1>This is the ID (default value is 7): {id}</h1>
    <p>This is the variant (default value is "dark"): {variant}</p>
  </>
);
```

## Project structure

Project structure is designed around
[fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)

```
app
├── src
│   ├── index.ts  <-- entry file
│   ├── components  <-- design system documented with storybook
│   │   ├── atoms
│   │   │   └── Button
│   │   │       └── Button.tsx <--- in `components/` keep files in their own directory even if that's just one file
│   │   ├── molecules
│   │   │   └── DatePicker
│   │   │       ├── DatePicker.tsx
│   │   │       └── DayInput.tsx  <-- they can have their private components/services
│   │   ├── organisms
│   ├── scenes
│   │   ├── Root
│   │   │   └── Root.tsx <-- root scene that renders app-wide context providers, global styles, and holds all routes
│   │   ├── investments  <-- scenes can be grouped by feature
│   │   │   ├── Catalog.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Details
│   │   │       └── Details.tsx
│   │   │       └── Documents.tsx <-- Details private component
│   │   └── auth
│   │       ├── Register.tsx
│   │       └── Login
│   │           ├── Login.tsx
│   │           ├── Form.tsx
│   │           └── handleSubmit.ts  <-- service
│   ├── store
│   │   ├── store.ts
│   │   └── auth  <-- re-ducks
│   │       ├── actions.ts
│   │       ├── operatins.ts
│   │       ├── selectors.ts
│   │       ├── reducers.ts
│   │       ├── test.ts
│   │       ├── types.ts
│   │       └── utils.ts
│   ├── utils
│   │   ├── routes.ts
│   │   ├── api
│   │   │   ├── verifySubscriptionToken.ts
│   │   │   └── verifySubscriptionToken.test.ts
│   │   └── validation
│   │       ├── required.ts  <-- only one function per file
│   │       └── required.test.ts  <-- implemented with TDD or at least tested
│
```

Because redux state is global, it's not specific to any component. Some rules
apply:

- every component and every service can use `src/utils/**/*.ts`
- `src/scenes/**/*.ts` can use redux actions, selectors, etc.
- `src/components/**/*.ts` can NOT use redux
- `src/components` can be used by any component inside `src/scenes/**/*.tsx`
- `src/scenes/auth/login/*.tsx` can only be used by `src/scenes/auth/Login.tsx`
- `src/molecules/**/*.tsx` can use `src/atoms/**/*.tsx` but not the other way
- `src/organisms/**/*.tsx` can use `src/(atoms|molecules)/**/*.tsx` but not the
  other way
- `src/scenes/**/*.tsx` can use `src/components/legacy/Molecules/DatePicker.tsx` but not
  `src/components/legacy/Molecules/datePicker/DayInput.tsx`


### Routing 

For every scene (located in `src/scenes`) you create:

- `[SceneName].route.tsx`
- `[SceneName].route.strategy.ts`
- `[SceneName].route.strategy.test.ts`

Replacing `SceneName` with the correct name (eg `login.route.tsx`, `login.route.strategy.ts`, `login.route.strategy.test.ts`)

```jsx
import React from 'react';

import { StrategicRouting } from 'scenes/Root/Routing/StrategicRouting';
import { paths } from 'routes/paths';

import { investmentDetailRouteStrategy } from './InvestmentDetails.route.strategy';

const Component = React.lazy(() =>
  import(
    './InvestmentDetailsRoute' /* webpackChunkName: "InvestmentsDetails" */
  ).then(m => ({
    default: m.InvestmentDetailsRoute,
  })),
);

const RouteDefinition = (key: string) => (
  <StrategicRouting
    {...investmentDetailRouteStrategy}
    exact
    path={paths.investment}
    key={key}
    component={Component}
  />
);

// eslint-disable-next-line import/no-default-export
export default RouteDefinition;
```

In the `[SceneName].route.strategy.ts` we set routing rules and the function that will be responsible to evaluate them. Optionally, we can also set the route type we need to use.

1. **Rules** can be used to decide if:

- user is allowed to access the specific route, and where should the user be redirected if not allowed to access it;
- user should be redirected after a state change - for instance, after successful authentication -, based on his role (isManager, isManagedUser, ...);

  <br/>Each rule containes a:

- **condition**: a pure function that accept user and page as optional arguments and return **true** or **false** (**Allow**/**Disallow**) based on the result of the business logic evaluation. It represents the basic strategy and is scope agnostic - meaning: we can use it not-only for routing.
  Its only job is to decide if the user's role/authentication/other state complies with the business logic set in the rule ifself.

- **redirectionPath**: the path where the user should be redirected, for instance, as a consequense of lack of permissions, or gained authentication, state change, etc. It accept a string or a function that has to return a string;
  <br/><br/>

2. **Assessments** are pure functions who's job is to determine how each rule should be avaluated.
   <br/><br/>_Assessment functions and strategies can be mixed in order to realise the correct routing strategy._
   <br/><br/>
3. **Route type** is optional, and it is needed in reference with Okta. It can be of type:

- **secure**: it will use Okta Secure Route component if Okta is **On**;
- **standard**: it will use the Route component provided by react-router-dom. Please note that it will always going to be used if Okta is **Off** .
  <br/><br/>_Why we need the Route types?_ Because Okta Secure Route will always check for authentication, and if the user is not authenticated, it will direct him directly to our okta base url to ask for login. So the rule here is: if you are working on a public page, that can be accessible by anybody, use _standard_ route type. Otherwise use _secure_.

```jsx
import { paths } from 'routes/paths';

import {
  allowAuthenticatedOnly,
  denyRedFlagged,
  denyKYCBlocked,
} from 'scenes/Root/Routing/strategies/accessibility/accessibilityStrategies';
import { accessibilityAssessment } from 'scenes/Root/Routing/assessments/accessibility/accessibilityAssessment';
import { RoutingRule } from 'scenes/Root/Routing/assessments/assessments.types';
import { RouteStrategy } from 'scenes/Root/Routing/StrategicRouting.types';

const routeAccessibilityStrategy: RoutingRule[] = [
  { condition: allowAuthenticatedOnly, redirectionPath: paths.home }, // if user is authenticated -> next rule will be avaluated, otherwise user will be redirected to homepage;
  { condition: denyRedFlagged, redirectionPath: paths.notFound }, // if user is not red flagged -> next rule will be avaluated, otherwise user will be redirected to not found page;
  { condition: denyKYCBlocked, redirectionPath: paths.notFound }, // if user is not KYC Blocked -> user can access route, otherwise user will be redirected to not found page;
];

export const investmentDetailRouteStrategy: RouteStrategy = {
  rules: routeAccessibilityStrategy,
  assessment: accessibilityAssessment, // assessment function
};
```

In the `[SceneName].route.strategy.test.ts` we can easily test our strategy, and doing so, we can also actually have a concrete and easy to read **documentation** on how the specific route behaves:

```jsx
import {
  createMockedUser,
  createMockedUserProfileStatus,
} from 'scenes/Root/Routing/utils/user/user.mocks';
import { createMockedPage } from 'scenes/Root/Routing/utils/page/page.mocks';

import { investmentDetailRouteStrategy } from './InvestmentDetails.route.strategy';

describe('investmentDetailRouteStrategy', () => {
  const { assessment, rules } = investmentDetailRouteStrategy;

  const page = createMockedPage();

  it(`should return no redirection path and allow the user to get to Investmen Detail page, if
      User:
        1. is authenticated;
        2. does NOT have flagging status:
            a. ${FlaggingStatus.RED}
            b. ${FlaggingStatus.RED_CAN_REDO}
        3. is NOT KYCBlocked;
      `, () => {
    const profileStatus: ProfileStatus = createMockedUserProfileStatus({
      flaggingStatus: FlaggingStatus.OK,
      isKYCBlocked: false,
    });

    const authenticatedUserWithoutRedFlags = createMockedUser({
      isAuthenticated: true,
      profileStatus,
    });

    const { redirectionPath } = assessment({
      user: authenticatedUserWithoutRedFlags,
      page,
      rules,
    });

    expect(redirectionPath).toBeNull();
  });

  it(`should return redirection path to: ${paths.home}, if
      User:
        1. is NOT Authenticated`, () => {
    const nonAuthenticatedUser = createMockedUser({ isAuthenticated: false });

    const { redirectionPath } = assessment({
      user: nonAuthenticatedUser,
      page,
      rules,
    });

    expect(redirectionPath).toEqual(paths.home);
  });

  // ....
  // ....
});
```

### Typography

Whenever you need to render some text, use `Atoms/Typograhy/Typography` component.
Avoid creating components that set font styles manually.

```js
// good 👍
<Typography variant="header1">Helloo world</Typography>;

// bad 👎
const Paragraph = styled.p`
  font-family: xxx;
  letter-spacing: xxx;
  font-size: xxx;
`;
```

### Icons

For icons we us `svg` files provided by designers - most of the time they can be imported from invision.

There are 3 types of Icon components:

- ###### Icon – all general icons with 2 sizes, small (16 x 16) and large (24 x 24), the large sets can be resize for flexibility.

- ###### IconPictogram – all graphical svgs, it comes in all sizes.

- ###### IconLogo – company logos.

All types of icons are handled by these 3 components located in Atoms. All of the `svg` files are located in the `icons` folder in the relevant component.

If you want to use icon in certain place of the application, simply import the relevant `Icon` component and select the icon by providing a name prop.

```js
import { Icon } from 'components/Atoms/Icon/Icon';
import { Typography } from 'components/Atoms/Typography/Typography';

export const PotatoButton = () => (
  <Typography>
    Say hello to the Potato!
    <Icon name="potato" />
  </Typography>
);
```

Using this approach you can provide all other needed props to style the icon to your needs:

```js
<Icon
  name="chevron"
  transform="rotate(180deg)"
  width="1.5rem"
  height="1.5rem"
  mr={2}
/>
```

When using <Icon /> component, all icon should have the correct sizes (16 or 24) from our designs. You would not need to provide size props to resize the Icon. Please check with your dedicated designer for exceptions.

Adding a new icon flow:

1.  Download the svg and place it in the `icons` folder inside `Icon` component. (or provided by designers, please check with designers)
2.  Ensure svgs are optimised and fill is set to 'currentColor'. (If icons are not provided by designers)
3.  Import icon to the `index.ts` file in the same folder. (please follow naming conventions in index.ts and design)
4.  You can now use that icon!

### When can I read more about font loading strategies?

To understand our font loading strategy better head over to [FOUT, FOIT, FOFT](https://css-tricks.com/fout-foit-foft/) article. Be sure to check out articles linked in the article.

Also, here is useful [comprehensive guide to font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/) (we use Critical FOFT with Data URI strategy).

### Styling rules

Use `styled-components` when styling a component.
To make that easier we have `styled-system` package which provide additional utility.

Try to use values from theme when possible.

```js
// good 👍
export const Example = styled.div(({ theme }) => `
  border-bottom: ${theme.borders.light};
`);

// not so much 👎
export const Example = styled.div(({ theme }) => `
  border-bottom: 1px solid ${theme.colors.gray[200]}`;
`);
```

# Testing

## Unit testing

For React unit testing we use [@testing-library/react](https://github.com/testing-library/react-testing-library).

### Asserting:

Always prefer using [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) matchers to assert the requirements:

```tsx
// good 👍
expect(queryByTestId(container, 'not-empty')).not.toBeEmpty();
expect(getByText(container, 'Visible Example')).toBeVisible();

// not so much 👎
expect(queryByTestId(container, 'not-empty').innerHTML).toBeFalsy();
expect(getByText(container, 'Visible Example')).not.toBeNull();
```

They provide better error messages and additional debug output.

Also, use `getBy*` methods when asserting something **exists** on the page and `queryBy*` to assert it doesn't.
Although you could get away with just using `queryBy` the former prints a much better error message and HTML for debugging.

### Mocking API calls

Here's the current solution for mocking API calls:

```tsx
// it exports everything from @testing-library/react plus it extends "render" with
// dependencies that would be required in 95% of tests
import { render } from 'test-utils/react-testing-library-extended';
// api/index.ts module mocked by Jest
import { mockedApi } from 'test-utils/mockedApi';

import { InvestorsList } from './InvestorsList';

describe('InvestmentDetails / InvestorsList', () => {
  const resolveApiCalls = () => {
    mockedApi.fetchInvestors.mockResolvedValueOnce({
      data: [{ id: 1, name: 'bank account' }],
    });
  };

  const rejectApiCalls = () => {
    mockedApi.fetchInvestors.mockRejectedValueOnce({});
  };

  it('displays a list of investors', () => {
    // given
    resolveApiCalls();

    // when
    const { getByText } = render(<InvestorsList />);

    // then ...
  });

  it('displays an error message when request fails', () => {
    // given
    rejectApiCalls();

    // when
    const { getByText } = render(<InvestorsList />);

    // then ...
  });
});
```

### Stubing the Redux store

It's very similar to mocking API calls

```tsx
import { render } from 'test-utils/react-testing-library-extended';
// store imported from here won't have redux-persist dependency which is causing some issues
import { configureStore } from 'test-utils/store';
import { Provider } from 'react-redux';

import { NavigationBar } from './NavigationBar';

describe('NavigationBar', () => {
  it('displays welcome message for Account Manager', () => {
    // given
    const store = configureStore({
      user: { firstname: 'Walter White' },
      peristedAuth: { roles: ['ACCOUNT_MANAGER'] },
    });

    // when
    const { getByText } = render(
      <Provider store={store}>
        <NavigationBar />
      </Provider>,
    );

    // then ...
  });
});
```

### Testing the responsiveness

If you have a component that is rendering based on viewport like below:

```tsx
import { Mobile, Default } from 'components/Responsive';

...
// Hello.tsx

<Mobile>
  <Typography>hello from mobile</Typography>
</Mobile>
<Default>
  <Typography>hello from tablet and above</Typography>
</Default>
...

```

you can test it using `react-responsive` context:

```tsx
import { render } from 'test-utils/react-testing-library-extended';
import { Context as ResponsiveContext } from 'react-responsive';
import { breakpoints } from 'theme/theme';

const [mobile, tablet] = breakpoints;

...

  it('displays hello message on mobile', () => {
    const { getByText } = render(
      <ResponsiveContext value={{ deviceWidth: mobile }}>
        <Hello />
      </ResponsiveContext>
    )
  })

  it('displays hello message on tablet and above', () => {
    const { getByText } = render(
      <ResponsiveContext value={{ deviceWidth: tablet }}>
        <Hello />
      </ResponsiveContext>
    )
  })
...
```

### Snapshot testing

Snapshot testing can be useful but only in limited cases.
Snapshot testing React components will make the test fail very often (even when functionality is not broken),
with error messages that are not descriptive of what happened and developers will quickly learn not to pay attention to them leaving us with a bad DX. Try to write a test that is actually testing the business requirements and read more about snapshot testing [here](https://kentcdodds.com/blog/effective-snapshot-testing).

## Manual Testing

Details about tools and configuration used for manual testing on different
environments.

### Partner Testing

In order to see FE partnered version:

- Add entry in /etc/hosts like this for example:  
  `127.0.0.1 somehost.com`
- Then you can access localhost:3000 as somehost.com:3000 and will be able to see

### Storybook and networking

The user interface is manually testable also through the storybook:

```bash
yarn storybook
```

This starts the storybook application where the scenes, molecules, atoms, etc. can be separately loaded.

A problem that one might run into is network requests. From the storybook it is possible to mock the networking tier using the `msw` library. This utilizes Service Workers under the hood which comes with the benefit that **every** kind of network request (including image downloads) can be mocked.

> Due to the use of Service Workers, the storybook itself is served via HTTPS using a self-signed certificate.

Take a look into the `EmailConfirmation` story where there is an example for how the network tier can be mocked. Simply put, go through the following steps in case you would also like to mock the networking tier:

1. Import the storybook-specific mock networking component from your `.stories.tsx` file:

   ```javascript
   import { MockNetwork } from 'utils/storybook/mock-network';
   ```

   This imports the `<MockNetwork>` React wrapper component which renders its children once the network mocks are set up.

1. Using the `handlers` property, specify the mock rules. Use the [`msw` API](https://mswjs.io/docs/api/rest) for this purpose.

   This property is actually an array of handlers.

   For example, the following taken from `EmailConfirmation`...:

   ```javascript
   storiesOf('Scenes/EmailConfirmation', module)
     .addDecorator(reduxStore)
     .add('default', () => (
       <MockNetwork
         handlers={[
           rest.get(/^https:\/\/www.clear-reports.com\/.*/, (req, res, ctx) =>
             res(ctx.status(200)),
           ),
           rest.patch(/.*\/activation\/confirm\/.*/, (req, res, ctx) =>
             res(ctx.status(200)),
           ),
         ]}
       >
         <EmailConfirmationUnwrapped firstname="Tomek" userId="123" />
       </MockNetwork>
     ));
   ```

   ...mocks all GET requests that go to `www.clear-reports.com` and all PATCH requests that go to the confirmation endpoint.

1. When a `<MockNetwork>` component is rendered it resets the mock configuration and installs only and exclusively the specified handlers. You can see them in action when opening the developer tools: mocked responses carry the `x-powered-by: msw` response header.

## Automation testing rules

- Write **UNIT** tests for complex logic inside of the component (for ex. different message based on props)
- Write **INTEGRATION / e2e** tests for forms or the whole complex pages

# Environment variables using rules

Important to note that:

- The environment variables are to be named starting with `REACT_APP_` . Only then the variables are read and available in `process.env` variable.
- Values for development should be provided in ".env.local" like:
  ```
  REACT_APP_ENV=development
  REACT_APP_GOOGLE_PLACES_API_KEY=blalbla
  REACT_APP_CAPTCHA_TEST_MODE=true
  ```
- When introducing new variable, assert that it will exist when running project in config.js

