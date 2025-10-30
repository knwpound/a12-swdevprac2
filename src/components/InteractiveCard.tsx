"use client";
import { ReactNode, SyntheticEvent } from "react";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: ReactNode;
  contentName: string;
}) {
  function onCarSelected() {
    alert("Card is Click " + contentName);
  }

  function onCardMouseAction(event: SyntheticEvent){
    if(event.type=="mouseover"){
        event.currentTarget.classList.remove('shadow-lg')
        event.currentTarget.classList.add('shadow-2xl')
        event.currentTarget.classList.remove('bg-white')
        event.currentTarget.classList.add('bg-neutral-200')
    }else{
        event.currentTarget.classList.remove('shadow-2xl')
        event.currentTarget.classList.add('shadow-lg')
        event.currentTarget.classList.remove('bg-neutral-200')
        event.currentTarget.classList.add('bg-white')
    }
  }

  return (
    <div
      className="rounded-lg w-[250px] h-[300px] bg-white shadow-lg" 
      style={{padding:"8px"}}
      onMouseOver={(e)=>onCardMouseAction(e)}
      onMouseOut={(e)=>onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
