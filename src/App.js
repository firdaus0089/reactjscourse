import './App.css';
import Cars from './Cars';
import Headers from './Headers';
import Buttons from './Buttons';
import FormSubmit from './FormSubmit';
import Products from './Products';
import Product from './Product';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigationbar from './Navigationbar';
import { Routes, Route } from "react-router-dom"
import Errors from './Errors';
import ContactNumber from './ContactNumber';
import { UserContext } from './TimeInfoContext';
import React from 'react'
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import Movies from './Movies';
import EditRegistration from './EditRegistration';

function App() {

  const [date, setDate] = React.useState(new Date());
  const [userInfo, setUserInfo] = React.useState('');
  const userData = JSON.parse(sessionStorage.getItem("userName"));


  React.useEffect(() => {
    if (!userData) {
      const timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      }
    } else {
      setUserInfo(userData.name)
    }

  })

  function tick() {
    setDate(new Date());
  }

  const data = [
    { name: "John", age: 30, gender: "Male" },
    { name: "Mary", age: 20, gender: "Female" },
    { name: "Crystal", age: 19, gender: "Female" },
  ]

  const prodData = [
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "Cyxus",
      desc: "Non-Slip Fitness Leisure Running Sneakers",
      price: "$29"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747",
      name: "Vitike",
      desc: "Latest Men Sneakers -Black",
      price: "$100"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437",
      name: "Aomei",
      desc: "Men's Trend Casual Sports Shoe",
      price: "$40"
    },

  ]

  return (
    <div>
      <UserContext.Provider value={userInfo ? "Welcome " + userInfo : "The Time Now Is: " + date.toLocaleTimeString()}>
        <Navigationbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/product' element={<Product prod={prodData} />} />
          <Route path='/about/:yourname' element={<About />} />
          <Route path='/contact' element={<Contact customer={data} />} />
          <Route path='/mycontact/contactnumber' element={<ContactNumber />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/editregistration' element={<EditRegistration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/error' element={<Errors />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
