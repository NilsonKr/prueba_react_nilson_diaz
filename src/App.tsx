import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './views/ItemListContainer'
import ItemDetailContainer from './views/ItemDetailContainer'
import Checkout from './views/Checkout'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
