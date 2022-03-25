< [Readme](./Readme.md)

# (0) Mindset First!

## (0.a) QA and Developers works together, with the same goals

In order to go forward, we need to act that there is no dedicated processes for "QA Team" and "Dev Team"...
Event though it is better if there is no "QA Team" and "Dev Team", neither "Product Team"...
In the mind of every employee it should be only one team, going forward together from the ground up (feature specification), to the final delivery.

## (0.b) Everybody is Feature Owner and responsible for things being well done

Each and every actor on the Feature Lifecycle has an important role to play, and he is also dependant on anybody's work.
That's why we are all owners and responsible for the totality of the Feature's Lifecycle.
> No process could be overtaking a good mindset!

## Every information is accessible to everyone

It is better if we can share a screen to everyone representing the progress of the Sprint/Iteration.
It is often represented as a Board with columns representing "product" actions, "dev actions" and "qa actions" like for example:

| Specification | 3 Amigos | Brainstorming | BS Validation | DEV | Review | AT Validation | Merge | NR Validation | Shippable | Shipped |
|---------------|----------|---------------|---------------|-----|--------|---------------|-------|---------------|-----------|---------|
| FEA001        | BUG002   |               | BUG001        |     | ENH001 |               |       | FEA002        |           |         |

It is important to tag by priority and take actions when some latency appears.
So everyone could see and anticipate his own work and communicate/help his teammates.

# (1) Define the acceptance criteria as soon as possible, with everybody (3 Amigos)

Once the Feature is announced by the Product Team to the Tech Team, we shall immediately discuss together and define what will be the acceptance criteria for the Feature to be well done.

If we want the Feature not to be perfect, well since we all agree it's ok!

The acceptance criteria should be considered as part of the specifications, where every stakeholder give his opinion on what is important.

The guidelines for acceptance criteria are:

- what should be done ?
- what should not be broken ?

For this, a good exercise it to imagine the Feature as developed and released and taken into consideration what will be the impacts on the user interfaces and interactions.

# (2) Technical specs and brainstorming

Once what should be done is defined, and the acceptance criteria are known by anyone, the Developers Team could start brainstorming a solution.
This is the place for diagrams and schemas, and beautiful paintings, yes you know!

# (3) Product validation of the solution

To verify that the developers are going through the right direction, a Tech Lead exposes the solution that is born from the technical specifications to the Product Team.
If the solution meets the acceptance criteria, the design (if frontend feature), and the Product Team is happy then let's move on and let the developers magic happen.

[... developers magic is skipped for the purpose of our mental health 😂😂😂 ]

# (4 if possible) TDD is better

If the developers could adopt the TDD it is much, much better, if not the end of this strategy will still avoid the risks of poor development or regression.

# (4 or 5) BDD for success

In a wonderful world which never is our world, if we have enough time, we could automate BDD acceptance tests before to release the new code on a test environment.

# Code review

Once a developer has finished and is happy with his work on the feature, he MUST ask reviews from other developers.

# (5 or 6) Acceptance validation

Once the development and review process is finished, we deploy the whole infrastructure, with the Feature branch on a test environment in order to validate that the Feature is answering the product and technical specifications.

# Merge/rebase and focus

Once the Feature branch is validated, it must be merged with or rebased onto production branch, then redeployed on test environment (pre-production environment is preferable for non regression validation, but if we do not have it is ok).

Also, I think it is important at this step to have only one Feature in the process!
All steps above could be done in parallel for multiple features, but the Non Regression validation and Ship steps should be done feature by feature to avoid mix of code, merge/rebase mismatch and arrival of new regressions.

# (6 or 7) Non Regression validation

Here we verify:

- quickly that the feature is here (it could happen due to developers magic, that the feature disappears on a bad rebase or stuff like that)
- that the whole infrastructure is not broken by the new feature and its potential impacts with something like a smoke test to cover critical use cases of the application

# Ship to space

If everything is ok until here, then we could send the Feature to the production environment, ideally right now because upcoming features could break things and the state of the infrastructure will change with new code.

# ⚠️⚠️⚠️ Often treated as aside processes, should not

## ⚠️ Bug specification and lifecycle

A Bug should be considered and handled the exact same way as a Feature, It must be really well defined, specified and follow all the process above.

## ⚠️ Emergencies

It is common that we have emergencies to handle quickly, it is important to put a maximum of efforts and resources on it to quickly deliver a solution or a fix, BUT it is also important to follow the same process as for everything.

The more resources we'll allow on a Feature, the quicker the process will be.

# Technical stack and tools

It is not the tools that matters but the process.
Anyway tools and technical choices could be critical or give some advantages and disadvantages.

As a QA I found that starting with the exact same technical stack as developers has way more advantages as another.

For October, I'll suggest the following:

- For white-box TDD in backend projects (REST APIs and stuff like that) use Javascript tools like Jest/Supertest or Mocha/Chai
- For white-box TDD in frontend web projects I don't know much about Ember.js but i guess we could write unit and integration tests with React Testing Library (used with Jest or Mocha) and functional tests with Cypress.
- For white-box TDD in react native project I'll suggest unit and integration tests with React Testing Library (used with Jest or Mocha) and functional tests with Detox

I'll also suggest creating a dedicated repository for end to end blackbox tests that could be Dockerized and that could run on a CI when a release or pre-release is done.

For an end-to-end testing framework I'll suggest webdriver.io as it could do web and mobile together, and we could add in it the axios lib to make api requests and verify their responses. Webdriver.io could be replaced by a combination of Selenium JS Bindings and Appium JS.