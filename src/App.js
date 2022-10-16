import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// mengambil data JSON dari contact.json
import dataJSON from "./data/contacts.json";

import { Grid } from "@mui/material";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contact, setContact] = useState(dataJSON);

  // fungsi untuk menambah contact
  function tambahContact(objectBaru) {
    // menambahkan data array yang baru
    setContact([...contact, objectBaru]);
  }
  return (
    <div className="App">
      <Header />

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <ContactForm propsAddContact={tambahContact} />
        </Grid>
        <Grid item xs={6}>
          <Contact data={contact} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
