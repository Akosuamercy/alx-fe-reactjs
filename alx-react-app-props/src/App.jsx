import WelcomeMessage from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app/src/components/WelcomeMessage'
import Header from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app/src/components/Header';
import MainContent from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app/src/components/MainContent';
import Footer from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app/src/components/Footer';
import UserProfile from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app/src/components/UserProfile';
import UserContext from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app-props/src/components/UserContext';
import ProfilePage from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app-props/src/components/ProfilePage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p> This is my website</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Akos" age="30" bio="Loves reading" />
      <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />;
      </UserContext.Provider>
    </>

  )
}

export default App
