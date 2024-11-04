# Star Wars Collection

A web application for exploring characters, planets, movies, and starships from the Star Wars universe. Built with React, TypeScript, Redux, and SWAPI for data fetching. Users can interact with the data by filtering and viewing details of each entity.

**Live Demo**: [Star Wars Collection on AWS CloudFront](https://d326i8bv4be7v3.cloudfront.net/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Redux Structure](#redux-structure)
- [Testing](#testing)

## Features

- **Search**: Star Wars characters, planets, movies, and starships.
- **Detailed Information**: View detailed information on characters, planets, movies, and starships.
- **State Management**: Uses Redux for managing and caching API data.
- **Responsive Design**: Fully responsive layout for optimal viewing on various devices.
- **SWAPI Integration**: Uses the Star Wars API (SWAPI) to fetch data in real-time.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux (with Redux Toolkit)
- **Styling**: Ant Design
- **API**: Star Wars API ([SWAPI](https://swapi.dev/))
- **Testing**: Jest, React Testing Library
- **Deployment**: AWS CloudFront

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Reenas97/star-wars-collection.git
   cd star-wars-collection

2. **Install Dependencies**
   ```bash
   npm install

3. **Build application**
   ```bash
   npm run build

4. **Preview of the application locally**
   ```bash
   npm run preview

## Usage

- **Search**: Type in the search bar to find specific Star Wars characters, planets, movies, or starships by name.
- **Explore Tabs**: Navigate through the tabs to explore each category.
- **View Details**: Click on a character, planet, movie, or starship to view detailed information, including associated movies, birth planets, and physical characteristics.

## Redux Structure

The application uses Redux for managing data from SWAPI, including: character, planet, movie, and starship actions and reducers for managing data/information.

## Testing

1. **Run Tests**
   ```bash
   npm run test  src/tests/card.test.tsx 
   npm run test  src/tests/banner.test.tsx 