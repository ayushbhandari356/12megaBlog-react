import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  // making state for loading as fetching data from the database consume time
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
          if(userData){
            dispatch(login({userData}))
          }
          else{
            dispatch(logout({userData}))
          }
      
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(()=>setLoading(false))
  },[])
  
  return !loading?(
    <div className="min-h-screen flex flex-box bg-gray-400 content-between ">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
        <h1>ayush bhandari</h1>
      </div>
    </div>
  ):null
}

export default App
