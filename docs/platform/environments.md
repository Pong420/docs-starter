---
sidebar_position: 3
---

# Environments

Novu runs all your requests in the context of an environment. By default, we will create 2 environments when your account was just created: Development, and production.

## Development environment

Used for testing purposes and validating notification changes prior to committing them to the production environment.

## Production

It will be your live/production environment, you cannot make changes to this environment templates directly. You will first have to make the changes in Development mode and then promote it to Production.

## Data associated with environment

Novu will separate most of the data associated to your account based on the current accessed environment. This will include:

- Subscribers
- Notification Templates
- Messages
- Logs
- Connected integrations
- Notification feeds

Each environment will be accessed using a separate credential set:

- **Application Identifier** - Is a public identifier used in client-side environments to identify your application.
- **API Secret Key** - A secret key used when communicating with the Novu API from your backend services.

We suggest configuring these key sets based on your active environments, the same as you would use to manage different service credentials and serve them based on the current environment in which your code is deployed.

## Promoting pending changes to Production

After making a change to a notification template or other environment specific assets, this change will be added under the "Changes" screen in the admin panel.
A change will be generated by making a diff between the edited environment and the target Production environment. All pending changes will be listed in the Changes screen. A change can either be applied manually or by pressing the "Promote all changes" button.

Before pushing a change to production, make sure that the code associated with this change was pushed to production. This is specifically important when adding new variables to a notification template.