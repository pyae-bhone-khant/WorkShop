<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Recipe;
use App\Models\User;
use Database\Factories\CategoryFactory;
use Database\Factories\RecipeFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // creae 5 categories and each category has 20recipes 
        
        Category::factory(5)
        ->has(Recipe::factory()->count(20) , 'recipes')
        ->create();
    }
}
