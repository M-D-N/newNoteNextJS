"use client"
import { Note } from "@/lib/type";
import { useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface NoteEditorProps {

    note: Note

}

export default function NoteEditor({note}: NoteEditorProps) {
    
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    return (
        <Card>
            <CardHeader>
                <Input  value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder="Note Title"
                        className="text-xl font-bold border-none px-0 focus-visible:ring-accent" />
                {/* <CardTitle></CardTitle> */}
            </CardHeader>
        </Card>
    )
}
