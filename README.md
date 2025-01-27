# Tame Your Inner Critic

![Screenshot Desktop](/yourinnercritic/public/TameYourInnerCritic1.png)

## About the project

Who said working with your inner critic has to be heavy and serious? This project offers a playful and creative approach to exploring and transforming your inner critic.

Through activities like drawing, naming, animating, and even giving your inner critic a silly voice, this platform helps you build a new relationship with that critical voice. It’s not about silencing it but reimagining it in ways that encourage curiosity, humor, and self-kindness.

Whether you’re an adult, teen, or child, this project invites you to laugh more and transform inner battles into moments of creativity and growth.

## Link to the project

https://degreeproject-of6l.vercel.app/

## Purpose

The aim of this project is to help people engage with their inner critic in a fun and creative way. Traditional tools for managing inner criticism can often feel heavy and serious. This project is designed to be lighthearted and easy to use, offering a unique approach to personal growth.

## Why I Built This

I created this project because of my personal experiences with a harsh inner critic. I’ve struggled with self-doubt and negativity, and I know many others face similar challenges. This platform is my way of providing a helpful resource that feels approachable and enjoyable.

## Features

- **Thought Reflection**: Users can note down the thoughts of their inner critic and evaluate how true they feel.
- **Emotion Mapping**: Explore what emotion these thoughts generate and search for an image that represents the feeling (using Pixabay's API).
- **Critic Naming**: Assign a name to the inner critic and save it.
- **Critic Visualization**: Draw the inner critic and animate it using [Meta's Animated Drawings](https://sketch.metademolab.com/) (integrated via an iframe).
- **Voice Manipulation**: Record and modify the inner critic's voice with fun effects like "chipmunk" or "mountain troll."
- **Thought Animation**: Apply animations to the recorded thoughts, such as spinning them away or making them disappear.

## Tech Stack

- **React**
- **TypeScript**
- **Tone.js**
- **Sass**
- **Pixabay API**
- **Meta’s Animated Drawings** (via iframe)

## Installation

To set up the project locally:

1. Clone this repository:
   ```bash
   git clone <https://github.com/helenaskagerlid/degreeproject>
   ```
2. Navigate to the project directory:
   ```bash
   cd yourinnercritic
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Data Handling

- **User Input**: Thoughts and the inner critic’s name are stored temporarily in local storage. Users can clear this data by clicking "Delete" or leaving the page.
- **Images**: Images representing emotions are fetched using Pixabay's API.

## Accessibility (a11y)

Accessibility is a core focus of the project:

- **Forms**: Accessible labels and instructions are used to guide users.
- **Colors and Fonts**: Chosen to ensure readability and inclusivity.
- **Alt Text**: All images include descriptive alt text.

## Testing

- **Unit Testing**: Tests written with Vitest and React Testing Library.
- **User Testing**: Conducted with three users to gather feedback and improve the flow and usability of the application.

## Deployment

The project is deployed on [Vercel](https://vercel.com/). You can access the live version of the project [here](#).

## Screenshots

Homepage:
![Screenshot Desktop](/yourinnercritic/public/TameYourInnerCritic1.png)

Step 1:
![Screenshot Step One](/yourinnercritic/public/Step1.png)

Step 2:
![Screenshot Step Two](/yourinnercritic/public/Step2.png)

Step 3:
![Screenshot Step Three](/yourinnercritic/public/Step3.png)

Step 4:
![Screenshot Step Four](/yourinnercritic/public/Step4.png)

Step 5:
![Screenshot Step Five](/yourinnercritic/public/Step5.png)

Step 6:
![Screenshot Step Six](/yourinnercritic/public/Step6.png)

Step 7:
![Screenshot Step Seven](/yourinnercritic/public/Step7.png)

Step 8:
![Screenshot Step Eight](/yourinnercritic/public/Step8.png)

Step 9:
![Screenshot Step Nine](/yourinnercritic/public/Step9.png)

Step 10:
![Screenshot Step 10](/yourinnercritic/public/Step10.png)

## Future Development

- **Improved Animation Integration**: Replace the iframe with direct integration of Meta’s open-source animation code.
- **Custom Animations**: Develop original animations for the inner critic.
- **Positive Voice Feature**: Add a "sister" feature to strengthen the user’s positive, supportive voice.

## Acknowledgments

Thank you to everyone who supported this project, especially the users who provided valuable feedback
