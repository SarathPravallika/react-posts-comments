import React, { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PostsComments from "./components/PostsComments";
import store from "./redux/store";
import { storeUserName, getUserName } from "./utilities";
import Navbar from "./components/Navbar";

function App() {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    storeUserName(prompt("Please enter your name") || "");
    forceUpdate();
  }, [forceUpdate]);

  const userName = getUserName();
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        {userName && (
          <Box key={userName} sx={{ flexGrow: 1 }}>
            <Navbar name={userName} />
            <PostsComments />
          </Box>
        )}
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
