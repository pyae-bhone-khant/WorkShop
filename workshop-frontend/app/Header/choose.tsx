import { Zap } from 'lucide-react';
import { Sparkle } from 'lucide-react';
import { ShieldPlus } from 'lucide-react';

export default function Choose() {
    return (
        <div className='mt-40 flex justify-center items-center flex-col'> 
             <div className='text-4xl  mb-10 mt-15 font-bold text-orange-600'>Why Choose Us</div>
             <div className='flex gap-6 mt-4'>

            <div className=' flex flex-col items-center text-center p-2 shadow-2xl border-2 hover:shadow-orange-600 hover:border-orange-600 rounded-2xl bg-white w-80 h-60'> 
                <div className='mt-4 text-orange-600'>
                 <Zap size={29} />
                </div>
                <p className='text-xl text-orange-600 font-bold mt-4'>Passion for Taste</p>
                <p className='mt-5 text-xl'>We are dedicated to creating dishes with incredible flavor profiles, making every meal a journey for your taste buds.</p>
            </div> 
             <div className=' flex  text-white flex-col items-center text-center p-2  bg-orange-600 shadow-2xl   hover:shadow-orange-400 rounded-2xl  w-80 h-60' >
                <div className='mt-4'>
                 <Sparkle  size={29} />
                </div>
                <h1 className='text-xl font-bold mt-4'>Super Quality</h1>
                <p className='text-xl mt-5'>We prioritize the highest quality ingredients ensuring freshness, authenticity, and superior taste in all our prepared foods.</p>
            </div>
             <div className='flex flex-col items-center text-center p-2 shadow-2xl border-2 hover:shadow-orange-600 hover:border-orange-600 rounded-2xl bg-white w-80 h-60' >        
             <div className='mt-4 text-orange-600'>

               <ShieldPlus  size={29} />
             </div>
                <h1 className='text-xl text-orange-600 font-bold mt-4'>Healthy and Wholesome</h1>
                <p className='text-xl mt-5'>Delicious food {"that's"} also good for you, prepared with care and nutritional balance in mind.</p>
            </div>
             </div>
        </div>
    )
}