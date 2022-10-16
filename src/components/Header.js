// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React, { useState } from "react";

import ContactForm from "./ContactForm";
import Contact from "./Contact";

// mengambil data JSON dari contact.json
import dataJSON from "../data/contacts.json";

import { Typography, Divider, Grid } from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app

const Header = () => {
  const [contact, setContact] = useState(dataJSON);

  // fungsi untuk menambah contact
  function tambahContact(objectBaru) {
    // menambahkan data array yang baru
    setContact([...contact, objectBaru]);
  }

  return (
    <>
      <Typography variant="h3" sx={{ margin: "0.2em" }}>
        Call a Friend
      </Typography>

      <Divider variant="middle">Your friendly contact app</Divider>

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <ContactForm propsAddContact={tambahContact} />
        </Grid>
        <Grid item xs={6}>
          <Contact data={contact} />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
