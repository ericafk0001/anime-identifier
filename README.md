# Anime Identifier Website

This website allows users to upload an image of an anime scene, and it will identify the anime and provide episode details, as well as additional information from AniList.

## Features

- Upload an image of an anime scene.
- Identifies the anime using the [Trace Moe API](https://api.trace.moe/).
- Fetches detailed anime information from the [AniList API](https://docs.anilist.co/).
- Displays the anime title, episode number, similarity percentage, and a preview image.

## Technologies Used

- JavaScript
- [Trace Moe API](https://api.trace.moe/)
- [AniList API](https://docs.anilist.co/)

## How It Works

The application utilizes two external APIs, Trace Moe and AniList, to identify and fetch detailed information about an anime based on a user-uploaded image. Below is an overview of the steps involved:

### 1. **Image Upload**

- The user selects an image file (representing a scene from an anime) via a file input field. This image is handled as a `Blob` object.
- Upon selection, the image name is displayed to the user to confirm the chosen file.

### 2. **Trace Moe API Request**

- Once the user submits the form, the selected image is sent to the [Trace Moe API](https://api.trace.moe/search) via a `POST` request. The image is packaged into a `FormData` object.
- Trace Moe performs image recognition by comparing the uploaded image to a vast database of anime scenes. It returns a JSON response containing:
  - The identified anime's unique ID on AniList.
  - The episode number where the scene appears.
  - The similarity score, which measures how closely the uploaded image matches the database scene.
  - A preview image URL of the scene.

### 3. **AniList API Request**

- Using the anime ID provided by Trace Moe, a second API request is made to [AniList's GraphQL API](https://graphql.anilist.co) to fetch detailed metadata about the anime.
- This request retrieves information such as:
  - The anime's title in multiple languages (English, Romaji, or Native).
  - The anime’s ID and additional metadata.
- The response helps ensure that the most accurate title is displayed, with fallback logic to use English, Romaji, or Native titles based on availability.

### 4. **Displaying the Results**

- After receiving responses from both APIs, the application dynamically updates the UI to display the results:
  - **Anime Title**: The title is shown based on the AniList data, using English if available, followed by Romaji and Native if necessary.
  - **Episode**: The specific episode number where the scene appears.
  - **Similarity**: The similarity score from the Trace Moe API, shown as a percentage.
  - **Preview Image**: A preview image of the scene from the anime, displayed for visual reference.
- The results are presented in a clean, user-friendly interface, allowing users to easily identify the anime and episode from their uploaded image.

### 5. **Error Handling**

- If no image is selected or an error occurs during the API requests, an error message is displayed to the user. This ensures a smooth user experience even when issues arise, prompting the user to upload a valid image file.

This process seamlessly integrates both image recognition and detailed anime metadata retrieval, providing a powerful tool for anime identification based on visual cues.

## Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ericafk0001/anime-identifier
   ```
2. Navigate to the project directory:
   ```bash
   cd anime-identifier
   ```
3. Run the `index.html` file

## Demo

[website demo](https://ericafk0001.github.io/anime-identifier/) |
[video demo](https://youtu.be/8hRi7gEnDJs)
