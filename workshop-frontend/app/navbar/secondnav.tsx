import { Button } from "@/components/ui/button";

export default function Secondnav() {
    return (
        <div>
            <div className="flex justify-center mt-10 gap-3">
                <Button className="bg-orange-600 hover:bg-orange-700">All recipes</Button>
                <Button className="bg-orange-600  hover:bg-orange-700">Chinese</Button>
                <Button className="bg-orange-600  hover:bg-orange-700">Japannese</Button>
                <Button className="bg-orange-600  hover:bg-orange-700">Myanmar</Button>
                <Button className="bg-orange-600  hover:bg-orange-700">Thai</Button>

            </div>
        </div>
    )
}