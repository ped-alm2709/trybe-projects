import React, { useState} from "react";
import Context from "./Context";

function Provider({ children }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const state = {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
};

return (
    <Context.Provider value={state}>
        {children}
    </Context.Provider>
);
}

export default Provider;
