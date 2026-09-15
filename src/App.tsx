import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ExperiencesPage } from "./pages/ExperiencesPage"
import { MenuPage } from "./pages/MenuPage"
import { GalleryPage } from "./pages/GalleryPage"
import { ContactPage } from "./pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App