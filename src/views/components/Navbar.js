import React from 'react';
import {useState} from 'react'




function NavBar() {
   

    return (
        <div className="bg-[darkred] border-b">
          <img></img> 
          <ul className="flex justify-end my-[1rem] text-[beige] mx-[1rem]">
          <a href='#'><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Hello</li></a>
          <a href="#"><li className="p-[0.5rem] mx-[0.5rem] hover:bg-[red] hover:scale-105 transition-all">Gamer</li></a>
          </ul>
        </div>
    );
}

export default NavBar;
