import { Note } from "@/lib/type"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/storeg";

interface NoteViewProps {
    note: Note;
}
export default function NotesView({note} : NoteViewProps) {
  return (
    <Card>
        <CardHeader>
            <div className="flex content-between items-center w-full">
                <CardTitle className="w-full">{note.title}</CardTitle>
                <p className="note__time text-gray-500 w-30">{formatDate(note.createdAt)}</p>
            </div>
        </CardHeader>
        <CardContent>
            {note.content}
        </CardContent>
    </Card>
  )
}
