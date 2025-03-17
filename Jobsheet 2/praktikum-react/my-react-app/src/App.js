import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import TodoList from './ToDoList';

// komponen header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// komponen main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

// komponen footer
function Footer() {
  return(
    <p>&copy; 2025 Aplikasi React Saya</p>
  );
}

function Example() {
  const [name, SetName] = useState('');
  const [age, SetAge] = useState(0);
  const [email, SetEmail] = useState('');

  const handleNameChange = (e) => {
    SetName(e.target.value);
  };

  const handleAgeChange = (e) => {
    SetAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };

  return (
    <div>
        <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}></input>
        <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange}></input>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}></input>
        <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
    </div>
  );
}

// komponen app yang menggunakan header main footer
function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Greeting name="Rendy"/>
      <Counter/>
      <Example/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
