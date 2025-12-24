import { Button } from "@/components/ui/button";

export default function Doublesingup() {
    return (
        <section
  className="min-h-[40vh] bg-fixed mb-25 mt-20 bg-center bg-cover "
  style={{ backgroundImage: "url('/img/food2.jpg')" }}
>   
  <div className="flex flex-col w-full h-[40vh] justify-center items-center text-center">
    <p className="text-white text-4xl font-bold">Learn new recipes, share your <br />
         own creations, join CookCraft
</p>
    <Button className="mt-5 bg-orange-600 w-30 h-12 hover:bg-orange-700 text-xl rounded-full">Sing Up</Button>
  </div>
</section>
           
    )
}