import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// mengambil data JSON dari contact.json
import dataJSON from "./data/contacts.json";

import { Box, Grid } from "@mui/material";

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
          <Box
            sx={{
              backgroundColor: "#90caf9",
              margin: "80px 50px",
              padding: "20px",
            }}
          >
            {contact.map((list, id) => {
              return <Contact data={list} key={id} />;
            })}
          </Box>
          {/* <Contact data={contact} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
