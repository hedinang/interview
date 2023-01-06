import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import { Landing } from './page/Landing';


function App() {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App;
