import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const TutorContext = createContext()

const TutorContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [tToken, setTToken] = useState(localStorage.getItem('tToken')?localStorage.getItem('tToken'):"")
  const [sessions, setSessions] = useState([])
  const [dashData, setDashData] = useState(false)
  const [profileData, setProfileData] = useState(false)

  const getSessions = async ()=>{
    try {
      const {data} = await axios.get(backendUrl + '/api/tutor/sessions', {headers:{tToken}})
      if(data.success){
        setSessions(data.sessions)
        // console.log(data.sessions)
      }else{

        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  
  const completeSession = async(sessionId)=>{
    try {
      
      const {data} = await axios.post(backendUrl + '/api/tutor/complete-session', {sessionId}, {headers:{tToken}})
      if(data.success){
        toast.success(data.message)
        getSessions()
        getDashData()
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }

  const cancelSession = async(sessionId)=>{
    try {
      
      const {data} = await axios.post(backendUrl + '/api/tutor/cancel-session', {sessionId}, {headers:{tToken}})
      if(data.success){
        toast.success(data.message)
        getSessions()
        getDashData()
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }

  const getDashData = async ()=>{
    try {
      
      const {data} = await axios.get(backendUrl + '/api/tutor/dashboard', {headers:{tToken}})
      if(data.success){
        setDashData(data.dashData)
        // console.log(data.dashData)
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }
  
  const getProfileData = async ()=>{
    try {
      
      const {data} = await axios.get(backendUrl + '/api/tutor/profile', {headers:{tToken}})
      if(data.success){
        setProfileData(data.profileData)
        // console.log(data.profileData)
      }
      
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
    }
  

    const value = {
        tToken, setTToken, backendUrl, sessions, setSessions, getSessions, completeSession, cancelSession, dashData, setDashData, getDashData, profileData, setProfileData, getProfileData
    }

  return (
    <TutorContext.Provider value={value}>{props.children}</TutorContext.Provider>
  )
}

export default TutorContextProvider