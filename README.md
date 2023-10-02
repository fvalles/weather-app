# Weather App

## General information

This repository holds a **weather app**. 🌤️

It was developed with **React Native**, **React Query**, **Typescript** and **Styled Components**! 🚀

You can run the app executing `npm run android` or `npm run ios`

## Coding details

- **Reusable components** were created. They are located in `src/components`.
- **Typographic reusable components** are located in `src/components/typography`.
- **A color palette and spacers values** were created inside of `src/theme` and shared through a `<ThemeProvider />` to all Styled Components.
- **WebP image support** was added to reduce app weight, as WebP images are lighter compared to PNG, JPG, JPEG and GIF formats.
- To handle **vertical spaces**, a reusable `<Spacer />` component was created.
- `<Snackbar />` component was used to inform when there is no connection to internet, and when the connection is re-established.
- `MMKV Storage` was used to implement the offline-first feature. The last API fetched data is always saved to the storage and if the internet connection is lost, the app reads the weather data from the async storage.
- **Unit tests** were created under a `__tests__` folder across the entire app.
- A **custom weather app icon** was created for both android and ios S.O.
- The library **Gifted Charts** was used to draw temperature values inside of `CityWeather` screen
- Dates were formatted with the library **date-fns**
- A custom **Splash screen** was created for both android and ios S.O.
- **API requests** are handled by **react query** which offers among other things: cache capabilities and error, isLoading and isRefetching states. Cache is being used so that the query returned value is cached by react query.
- An **Empty state screen** was created to show when there is an API request error.
- A **custom default image** was used for the **city images** when the internet connection is lost and untill the image is fetched from the internet.
- A **Loading** component was created with a **lottie animation**. It is rendered when the app is waiting for the API data.
- **Custom hooks** were created for both screens to handle logic, separate concerns and improve code legibility.

## Screenshots

### App with internet connection (online)

![online](https://github.com/fvalles/weather-app/assets/50526650/39227d77-7a6b-4bd7-9314-bac5c90160a0)

### App without internet connection (offline)

![offline](https://github.com/fvalles/weather-app/assets/50526650/c7f36321-6511-46dd-854f-314aa6e51ff1)
