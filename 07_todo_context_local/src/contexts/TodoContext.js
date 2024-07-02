import { createContext, useContext } from "react";

export let TodoContext = createContext({});

export let useTodo = () => {
    return useContext(TodoContext)
}