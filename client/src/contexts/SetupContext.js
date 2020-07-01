import React from "react";

//  This should be a complete record of everything to/from the database. I do not think I need anything else.  We should read to this state rightaway and use it to read/write to the data database.
const SetupContext = React.createContext({
    isLoaded: false,
    initialized: false,
    loggedIn: false
});

console.log('in SetupContext ', SetupContext._currentValue)

export default SetupContext;
