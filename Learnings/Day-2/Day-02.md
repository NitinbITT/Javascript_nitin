# Hooks:
* Hooks are functionalities provided to functional components.
* They help to behave easily like class components.
* There are 5 types of hooks,
    * State hooks
    * Context hooks
    * Effect hooks
    * Performance hooks
    * Custom hooks

## State hook:
* Usually class components can maintain state where in fucnitonal component we cannot maintian state.
* It help to maintain state.
Syntax:
```
const [counter,setCounter]=useState(0)
```
const -> to tell it cannot be reassigned
useState() method -> which helps to tell that this is a state and it returns a fucntion and a variable.
[counter,setCounter] -> destructuring variable and method from useState

## Effect hook:
* It is used to manage sideeffect.
