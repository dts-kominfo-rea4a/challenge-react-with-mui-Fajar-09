// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

import {
  Box,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#90caf9",
          margin: "80px 50px",
          padding: "20px",
        }}
      >
        {/* {data.map((data, id) => {
          return (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={data.photo}
                  sx={{ width: 56, height: 56, marginRight: "10px" }}
                />
              </ListItemAvatar>
              <div>
                <ListItemText primary={data.name} sx={{ margin: "0" }} />
                <ListItemText secondary={data.phone} sx={{ margin: "0" }} />
                <ListItemText secondary={data.email} sx={{ margin: "0" }} />
              </div>
            </ListItem>
          );
        })} */}
      </Box>
    </>
  );
};

export default Contact;
