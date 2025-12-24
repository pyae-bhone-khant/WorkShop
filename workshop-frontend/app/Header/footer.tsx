import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
export default function Footer() {
    return (
        <div className="w-full h-auto pb-10 bg-orange-500" >
            <div className="flex  flex-col justify-center items-center text-center ">
                     <h1 className="mt-20 text-2xl text-white font-bold" >Contact Us</h1>
                     <p className="mt-2 text-white text-xl" >Enter your email to receive relevant messaging tips.</p>
                         <div className="flex gap-3 mt-5">
                          <Input  className="w-75 h-10 bg-white rounded-full text-gray-600 text-xl" type="email" placeholder="Email" />
                            <Button className="bg-gray-600  border-white border-2 text-xl hover:bg-orange-700 h-10 rounded-full" >Send</Button>
                         </div>
                         <div className="border w-300 border-white/50 mt-10"></div>
                         <div className="w-300    grid lg:grid-cols-4 grid-cols-1 md:grid-cols-4 text-start justify-center  mt-10 text-white "> 
                            <div className="flex flex-col">
                                <p className="text-3xl font-bold">CookCraft</p>
                                <h1 className="mt-3">Blast with passion for good food</h1>

                            </div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Menu</p>
                                <h1 className="mt-3">Kitchen</h1>
                                <h1>taste</h1>
                                <h1>Recipes</h1>

                            </div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Meet Chefs</p>
                                <h1 className="mt-3">Alice</h1>
                                <h1>Sweet</h1>
                                <h1>Anna</h1>

                            </div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Follow Us</p>
                                <div className="flex  gap-3 mt-3 ">
                                        <Facebook  className= " text-white/80 hover:text-white hover:shadow-white shadow-2xl " size={29} />
                                        <Instagram  className= " text-white/80 hover:text-white hover:shadow-white shadow-2xl " size={29} />
                                        <Twitter  className= " text-white/80 hover:text-white hover:shadow-white shadow-2xl "  size={29} />

                                </div>
                               

                            </div>
                            
                           

                         </div>
                          <div className="w-300 border border-white/50 mt-10 "></div>
                          <div className="mt-4 text-white ">Copyright © cookcraft2025</div>
                     <div>

                     </div>
            </div>
        </div>
    )
}