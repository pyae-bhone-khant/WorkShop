import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <div className="w-full h-120 bg-orange-600" >
            <div className="flex  flex-col justify-center items-center text-center ">
                     <h1 className="mt-20 text-2xl text-white font-bold" >Contact Us</h1>
                     <p className="mt-2 text-white text-xl" >Enter your email to receive relevant messaging tips.</p>
                         <div className="">

                          <Input  className="w-90 rounded-full" type="email" placeholder="Email" />
                         </div>
                     <div>

                     </div>
            </div>
        </div>
    )
}