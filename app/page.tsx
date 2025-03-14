'use client';

import Header from "@/components/header";
import NoteEditor from "@/components/note-editor";
import NotesView from "@/components/note-vew";
import SideBar from "@/components/notes-side-bar";
import { Note } from "@/lib/type";
import { log } from "console";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {

  const [notes, setNotes] = useState<Note[]>([]);
  const [delNotes, setDelNotes] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // console.log(delNotes);
  // console.log(notes);
  

  // Left content function (click button create note)
  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dignissimos.",
      createdAt: Date.now(),
    } 
    setNotes([newNote, ...notes]);
    setDelNotes(newNote);
    setIsEditing(true);
  }

  const selectNote = (el: Note) => {
    setDelNotes(el);
    setIsEditing(false);
  }

  // Right content render function
  const renderNoteContent = () => {

    if(delNotes && isEditing){
      return <NoteEditor note={delNotes} />
    }

    if(delNotes){
      return <NotesView note={delNotes} />
    } 
    return null;
  }
  return (
    <div className="flex  flex-col min-h-screen">
      <Header onNewNote = {createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <SideBar notes={notes} onSelectNote={selectNote} />
        </div>
        <div className="md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
  );
}
