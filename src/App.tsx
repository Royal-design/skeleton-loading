import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { HomePage } from "./page/homepage/HomePage";
import { UserPage } from "./page/userPage/UserPage";

import { UseContextHook } from "./hook/UseContextHook";

function App() {
  const { isLoading, users, error } = UseContextHook();

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage users={users} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/users/:id"
            element={
              <UserPage users={users} isLoading={isLoading} error={error} />
            }
          />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
