// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";

import { Box, TextField, Button } from "@mui/material";

const ContactForm = ({ propsAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  function fnOnChangeHandler(event) {
    // cara 1
    setNewContact({ ...newContact, [event.target.name]: event.target.value });

    // cara 2
    // const { name, value } = event.target;
    // setNewContact((prev) => {
    //   return { ...prev, [name]: value };
    // });

    // cara 3
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // setNewContact((prev) => {
    //   return { ...prev, [name]: value };
    // });
  }

  function fnOnSubmitHandler(event) {
    // supaya tidak refresh
    event.preventDefault();

    // membuat variabel baru yang berupa object da diisi dengan newContact
    const { name, phone, email, photo } = newContact;

    propsAddContact({ name, phone, email, photo });

    // kosongin isi dari inputan
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f8bbd0",
          margin: "80px 50px",
          padding: "20px",
        }}
      >
        <form onSubmit={fnOnSubmitHandler}>
          <TextField
            fullWidth
            sx={{ margin: "10px 0" }}
            id="filled-basic"
            label="Name"
            color="success"
            variant="filled"
            name="name"
            onChange={fnOnChangeHandler}
            focused
          />
          <TextField
            fullWidth
            sx={{ margin: "10px 0" }}
            id="filled-basic"
            label="Phone"
            color="success"
            variant="filled"
            name="phone"
            onChange={fnOnChangeHandler}
            focused
          />
          <TextField
            fullWidth
            sx={{ margin: "10px 0" }}
            id="filled-basic"
            label="Email"
            color="success"
            variant="filled"
            name="email"
            onChange={fnOnChangeHandler}
            focused
          />
          <TextField
            fullWidth
            sx={{ margin: "10px 0" }}
            id="filled-basic"
            label="Photo URL"
            color="success"
            variant="filled"
            name="photo"
            onChange={fnOnChangeHandler}
            focused
          />
          <Button type="submit" variant="contained" color="success">
            ADD NEW
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
