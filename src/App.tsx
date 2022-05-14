import React from "react";
import { Provider } from "react-redux";
import PostsComments from "./components/PostsComments";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsComments />
      </div>
    </Provider>
  );
}

export default App;
