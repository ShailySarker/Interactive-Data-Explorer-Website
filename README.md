# Project Name: Interactive Data Explorer Website

# Website Link:
https://interactive-data-explorer-website.vercel.app/

# Overview:
​The Advanced Interactive Data Explorer is a dynamic, single-page web application that enables users to browse, search, and delve into detailed information about various Pokémon species. Building upon foundational features, this enhanced version incorporates advanced functionalities such as pagination, sorting, filtering, favorites management, and a comparison tool, all designed to provide an enriched user experience.

# Technologies & Technical Stack:

** Frontend **

    - React.js (UI components, state management)

    - Tailwind CSS (Styling)

    - Axios (API requests)

    - React Router (Navigation)

    - Custom Hooks (Reusable logic)

    - Context API(State Management)

    - LocalStorage (Data storing)

    - API Source (PokéAPI)

    - Performance Optimization (useMemo, useCallback)

** DevOps & Tools **

    - Vite (Frontend build tool)

    - Postman(API testing)

    - Vercel (Frontend Deploy)
    
    - Git/GitHub (Version control)

# Key Features

** 1. Data Fetching **

    - Fetch the first 150 Pokémon from the PokeAPI

    - Display each Pokémon in a card layout showing:    
        - Name
        - Image (sprite)
        - Type(s)
        - ID number

**  2. List View **

    - Pagination: Navigate through Pokémon listings with options for 10, 20, or 50 items per page.
 
    - Sorting: Sort Pokémon by ID (ascending/descending) or name (A-Z/Z-A).
 
    - Filtering: Filter Pokémon by multiple types simultaneously for refined searches.

** 3. Detailed View **

    - Comprehensive Information: View detailed stats including HP, Attack, Defense, abilities, moves, and evolution chains.

    - Routing: Seamless navigation between list and detail views using React Router.


** 4. UI/UX **

    - Creating a responsive design that works on both desktop, tab and mobile devices

    - Include a simple header with the application name and navigate routes

    - Style the application with Tailwind CSS

** 5. Favorites System **
    
    - Mark Favorites: Users can mark or non mark Pokémon as favorites.

    - Favorites View: Dedicated section to view all favorite Pokémon.

    - Persistence: Favorites are stored in localStorage to maintain state across sessions.

** 6. Advanced Features_1: Comparison Tool**

    - Stat Comparison: Select two Pokémon to compare their stats side by side for informed decisions.

** 7. Advanced Features_2: Random Pokémon Feature**

    - Surprise Element: Fetch and display a random Pokémon, adding an element of surprise and discovery.

** 8. Advanced Features_3: Error Handling **

    - Error Boundaries: Implemented to catch and handle errors gracefully without crashing the entire application.

# Technical Requirements

    - Use functional components with React Hooks

    - Implement proper loading and error states

    - Structure my code with reusable components

    - Handle edge cases (no results, API errors, etc.)

    - Use React Context API for state management

    - Implement performance optimizations (useMemo, useCallback)

    - Create custom hooks for reusable logic

    - Structure my project into logical folders (components, hooks, contexts, etc.)
 
    - Use React Router for navigation

# Run

## Clone this repository
$ git clone https://github.com/ShailySarker/Interactive-Data-Explorer-Website  

## Go into the repository
$ cd Interactive-Data-Explorer-Website

## Install dependencies
$ npm install

## Run the app
$ npm run dev