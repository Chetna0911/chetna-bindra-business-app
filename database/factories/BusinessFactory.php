<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->text(120),
            'address' => $this->faker->text(1000),
            'email' => $this->faker->email,
            'website' => $this->faker->url,
            'contact_person_name' => $this->faker->name,
            'phone_number' => $this->faker->phoneNumber,
        ];
    }
}
