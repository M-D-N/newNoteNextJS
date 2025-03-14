import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EmptyComponent from "./empty";
import { Button } from "./ui/button";
import { Minus, Trash } from "lucide-react";
import { formatDate } from "@/lib/storeg";
import { Note } from "@/lib/type";

interface sidebarProps {
    notes: Note[];
    onSelectNote:(el: Note) => void;
}

export default function SideBar({notes, onSelectNote} : sidebarProps) {;
    return (
        <Card>
            <CardHeader>
                <CardTitle>My NextJS Note</CardTitle>
            </CardHeader>
            <CardContent>
                {notes.length === 0 ? (
                    <EmptyComponent onButtonClick={()=>{return null}} message="Note is Empty bro" buttonTxt="Create new list" />
                ) : (
                    <div>
                        {notes.map((el) => {
                            return (
                                <div onClick={() => onSelectNote(el)} 
                                     key={el.id} 
                                     className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors">
                                    
                                    <div className="flex justify-between items-center">
                                        <h2 className="note__title font-medium">
                                            {el.title.substring(0, 30)}
                                            {el.title.length > 30 ? "..." : ""} 
                                        </h2>
                                        <Button className="cursor-pointer"><Trash />Delete</Button>
                                    </div>
                                    <div className="flex justify-between items-center mt-1.5">
                                        <h2 className="note__title text-sm text-muted-foreground">
                                            {el.content.substring(0, 40)}
                                            {el.content.length > 40 ? "..." : ""} 
                                        </h2>
                                        <p className="note__time text-gray-500 w-30"> {formatDate(el.createdAt)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}