import React from 'react'
import Header from './components/Header'
import List from './components/List'
import AddBlog from './components/AddBlog'
import {Routes,Route} from 'react-router-dom'
import Notfound from './components/Notfound'
import Detail from './components/Detail'

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}>Home</Route>
          <Route path="/:blogid" element={<Detail></Detail>}>AddBlog</Route>
          <Route path="/addblog" element={<AddBlog></AddBlog>}>AddBlog</Route>
          <Route path="*" element={<Notfound></Notfound>}>AddBlog</Route>
        </Routes>
    </div>
  )
}

export default App
