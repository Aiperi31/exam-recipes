import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';
import Header from './components/header';
import Favorites from './components/Favorites';

function App() {
  const router=createBrowserRouter([
    {
       path:"/",
        element:<RecipeCard/>
       },
        {
          path:"/recipeDetail/:id",
           element:<RecipeDetail/>
          }, 
          {
            path:"/recipeList",
             element:<RecipeList/>
            },
            {
              path:"/favorites",
               element:<Favorites/>
              }
      ])

  return (
    <>
  <Header/>
  <RouterProvider router={router}/>
    </>
  )
    
}

export default App
