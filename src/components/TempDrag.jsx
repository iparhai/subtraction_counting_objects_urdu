import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import React, { Component }  from 'react';


import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend'

export const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: {enableMouseEvents: true},
      preview: true,
      transition: TouchTransition,
    },
  ],
}

const TempDrag = () => {
  return (
    <DndProvider options={HTML5toTouch}>
      <h1 style={{color : "black"}}>MY NAME IS </h1>
    </DndProvider>
  )
}
export default TempDrag