import React from "react";
import "./App.css";
import Home from "./Component/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ErrorPage from "./Component/Pages/ErrorPage"; // Import ErrorPage component
import PostDetail from "./Component/Pages/PostDetail";
import CreatePost from "./Component/Pages/CreatePost";
import Authors from "./Component/Pages/Authors";
import CategoryPost from "./Component/Pages/CategoryPost";
import EditPost from "./Component/Pages/EditPost";
import Logout from "./Component/Pages/Logout";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import UserProfile from "./Component/Pages/UserProfile";
import PostAuthor from "./Component/PostAuthor";
import Authorpost from "./Component/Pages/Authorpost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="Create" element={<CreatePost />} />
          <Route path="Authors" element={<Authors />} />
          <Route path="posts/categories/:category" element={<CategoryPost />} />
          <Route path="Post/:id/edit" element={<EditPost />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Profile" element={<UserProfile />} />
          <Route path="PostAuthor" element={<PostAuthor />} />
          <Route path="Authorpost" element={<Authorpost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
