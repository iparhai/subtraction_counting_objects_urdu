import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

<DragDropContainer targetKey="foo" >
    <div>Drag Me!</div>
</DragDropContainer>

<DropTarget targetKey="foo" >
    <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
</DropTarget>