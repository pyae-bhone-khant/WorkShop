import {
    Card
} from "@/components/ui/card";
import Image from "next/image";

export default function Popular() {
    interface recipe {
        id: number;
        img: string;
        title: string;
        name: string;
    }
    const recipes: recipe[] = [

        {
            id: 1,
            img: "img/sticky-rice.jpg",
            title: "Steamed Sticky Rice",
            name: "By Paste de Italia"
        },
        {
            id: 2,
            img: "img/thai-chicken.jpg",
            title: "Spicy Thai Basil Chicken",
            name: "By Chef Somchai"
        },
        {
            id: 3,
            img: "img/beef-burger.jpg",
            title: "Classic Beef Burger",
            name: "By Burger Master"
        },
        {
            id: 4,
            img: "img/spring-rolls.jpg",
            title: "Vegetable Spring Rolls",
            name: "By Green Eats"
        },
        {
            id: 5,
            img: "img/lova-cake.jpg",
            title: "Chocolate Lava Cake",
            name: "By Sweet Tooth"
        },
        {
            id: 6,
            img: "img/miso-ramen.jpg",
            title: "Miso Ramen",
            name: "By Ramen King"
        },
    ]
    return (
        <div className=" bg-white mt-20 flex flex-col justify-center items-center text-center">
            <p className="text-4xl font-bold text-orange-600">Popular Recipes</p>

            <div className=" grid  grid-cols-1 gap-6 md:grid-cols-3  mt-10">

                {recipes.map((recipe) => (
                     <div key={recipe.id} className="w-90 h-65 hover:shadow-orange-600 hover:border-orange-600 border flex flex-col text-start p-2  shadow-2xl rounded-2xl">

                    <div>
                        <img className="h-40 w-85" src={recipe.img} />
                      <p className="mt-4 text-xl font-bold pl-2 ">{recipe.title}</p>
                      <h1 className=" text-xl  text-orange-600 font-bold pl-2">{recipe.name}</h1>
                    </div>
                     </div>
                ))}
            </div>
        </div>
    )

}