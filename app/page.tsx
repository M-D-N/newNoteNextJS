'use client';

import Header from "@/components/header";
import SideBar from "@/components/notes-side-bar";
import { Note } from "@/lib/type";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {

  const [notes, setNotes] = useState<Note[]>([]);

  console.log(notes);
  

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dignissimos.",
      createdAt: Date.now(),
    } 
    setNotes([newNote, ...notes]);
  }
  return (
    <div className="flex  flex-col min-h-screen">
      <Header onNewNote = {createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <SideBar notes={notes} />
        </div>
        <div className="bg-red-400 md:col-span-2">Right</div>
      </main>
    </div>
  );
}
