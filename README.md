# React Admin with Remix and Supabase

This repository contains an example [Remix](https://remix.run/) project, embedding a [React Admin](https://marmelab.com/react-admin/) app, hooked to a [Supabase](https://supabase.com/) database.

This project was created as a result of [a tutorial article posted on the marmelab blog](https://marmelab.com/fr/blog/2022/06/22/add-react-admin-to-your-remix-app-using-supabase.html). We strongly advise you to check it out if you haven't already, as it gives explanations and documents some gotchas about this integration.

## Setup

### Install dependencies

Install the project dependencies using your favorite package manager (`yarn` or `npm`).

### Configure the Supabase instance

You need to configure your Supabase instance URL and service role key in a `.env` file at the root of the repository.

```sh
# In `.env`
SUPABASE_URL="https://MY_INSTANCE.supabase.co"
SUPABASE_SERVICE_ROLE="MY_SERVICE_ROLE_KEY"
```

If you don't have a Supabase instance already, you can create one for free directly on the [Supabase website](https://app.supabase.com/).

## Run the app

Run the app with the following command (using `yarn` or `npm`):

```sh
npm start
```

The Remix app is available at: [http://localhost:3000/](http://localhost:3000/).

The React Admin app is available at: [http://localhost:3000/admin](http://localhost:3000/admin).


