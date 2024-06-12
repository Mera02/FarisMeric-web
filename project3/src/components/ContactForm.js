import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  // Funkcija koja se poziva prilikom promjene vrijednosti u input polju
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funkcija za provjeru validnosti forme prije slanja
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.phone = /^\d{9}$/.test(formData.phone)
      ? ""
      : "Phone number must be 9 digits";
    tempErrors.message = formData.message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Funkcija koja se poziva pri slanju forme
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Spremanje podataka koje korisnik unese
      setSubmittedData([...submittedData, formData]);
      // Resetovanje forme nakon slanja
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };
  
// INPUT POLJA

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5">Contact Us</Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={Boolean(errors.phone)}
        helperText={errors.phone}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={Boolean(errors.message)}
        helperText={errors.message}
        margin="normal"
        multiline
        rows={4}
      />

      {/* Dugme za slanje forme */}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
      {/* Prikaz podataka koje je korisnik poslao */}
      <Typography variant="h6" sx={{ mt: 3 }}>Submitted Data:</Typography>
      {submittedData.map((data, index) => (
        <Box key={index} sx={{ mt: 1 }}>
          <Typography variant="body1">
            Name: {data.name}, Email: {data.email}, Phone: {data.phone}, Message: {data.message}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ContactForm;
