"use client"
import { ReactNode } from "react";
// import { Utensils } from "react-icons/fa";
import { Utensils } from 'lucide-react';
export default function Taste() {

    interface Item {
        id:number;
  title: string;
  p: string;
  icon?: ReactNode; 
}
    const items : Item[] = [
        {    
            id : 1,
            title : "Breakfast",
            p:"You can choose from a variety of healthy breakfast menus.",
            icon : <  Utensils />
        } , 
        { 
            id : 2,
            title : "Lunch",
            p: "You can easily prepare quick and delicious lunch dishes.",
            icon :<Utensils />
        },
         {
            id : 3,
            title : "Dinner",
            p: "We have prepared a wide variety of dinner dishes.",
            icon : <Utensils />
        },
         {
            id : 4,
            title : "Salad",
            p: "Healthy and delicious salads with fresh vegetables.",
            icon : <Utensils />
        },
         {
            id : 5,
            title : "Dessert",
            p: "Delicious desserts for you to enjoy.",
            icon :<Utensils />
        }, 
         {
            id : 6,
            title : "Dessert",
            p: "Delicious desserts for you to enjoy.",
            icon :<Utensils />
        },
        
    ]
    return (
        <div className="flex flex-col  text-center items-center justify-center ">
            <p className="text-4xl font-bold  mt-25 text-orange-600">Taste of Food</p>
                   
            <div className=" gap-4 px-2 py-2 lg:grid grid-cols-3">
               {items.map(item => (
                <div key={item.id} className="flex w-90 border gap-4  hover:shadow-orange-500 mt-10 hover:border-orange-600  justify-center shadow-2xl rounded-2xl items-center  h-25 text-start" >
                    <div className="text-6xl text-orange-600">
                         {item.icon}
                    </div>
                         <div className="w-75">
                            <div className="text-2xl text-orange-600"> {item.title}</div>
                            <div >{item.p}</div>
                         </div>
                </div>
               ))}
            </div>
        </div>
    )
}