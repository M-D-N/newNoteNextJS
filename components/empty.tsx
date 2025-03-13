import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
    message: string;
    buttonTxt: string;
    onButtonClick: () => void;
}

export default function EmptyComponent ({message, buttonTxt, onButtonClick} : EmptyStateProps){
    return (
        <div className="flex justify-center items-center h-full">
            <div className="text-center p-8">
                <p className="text-muted-foreground mb-4">{message}</p>
                <Button onClick={onButtonClick} className="border-0 cursor-pointer outline-0">
                    <Plus />
                    {buttonTxt}
                </Button>
            </div>
        </div>
    );
};
