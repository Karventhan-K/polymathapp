// components/RecipeDashboard.js

import { useState } from 'react';

export default function RecipeDashboard() {
    const [recipes, setRecipes] = useState([
        { id: 1, name: 'Spaghetti Bolognese', ingredients: 'Pasta, Ground Beef, Tomato Sauce', instructions: 'Boil pasta, cook beef, mix with sauce.' },
        { id: 2, name: 'Chicken Stir Fry', ingredients: 'Chicken, Vegetables, Soy Sauce', instructions: 'Stir fry chicken and vegetables, add soy sauce.' },
    ]);

    const [mealPlan, setMealPlan] = useState({
        monday: null,
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: null,
    });

    const addRecipe = (recipeName, ingredients, instructions) => {
        const newRecipe = { id: recipes.length + 1, name: recipeName, ingredients, instructions };
        setRecipes([...recipes, newRecipe]);
    };

    const planMeal = (day, recipeId) => {
        const recipe = recipes.find(r => r.id === recipeId);
        setMealPlan({ ...mealPlan, [day]: recipe });
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Family Recipe Collection & Meal Planning</h1>
                <button
                    onClick={() => addRecipe('New Recipe', 'Ingredients', 'Instructions')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Add Recipe
                </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold mb-4">Recipe Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-bold">{recipe.name}</h3>
                            <p className="text-sm">Ingredients: {recipe.ingredients}</p>
                            <p className="text-sm">Instructions: {recipe.instructions}</p>
                            <button
                                onClick={() => planMeal('monday', recipe.id)}
                                className="bg-green-500 text-white mt-2 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                            >
                                Plan for Monday
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Meal Plan for the Week</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.keys(mealPlan).map((day) => (
                        <div key={day} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold">{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                            <p>{mealPlan[day] ? mealPlan[day].name : 'No meal planned'}</p>
                            <button
                                onClick={() => planMeal(day, 1)}  // Sample recipe ID for demo
                                className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Add Meal
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
