// routes/uiRoutes.js
const express = require("express");
const router = express.Router();

router.get("/styles", (req, res) => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#000000",
      paddingHorizontal: 10,
    },
    header: {
      alignItems: "center",
    },
    image: {
      height: 203,
      width: 173,
      resizeMode: "contain",
    },
    signin: {
      fontWeight: "bold",
      fontSize: 32,
      marginBottom: 10,
    },
    descriptiontxt: {
      fontSize: 18,
      color: "#000000",
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#D9D9D9",
      marginHorizontal: 20,
      marginBottom: 20,
    },
    inputtxt: {
      fontSize: 18,
      color: "#000000",
      marginHorizontal: 20,
      marginBottom: 8,
    },
    forgot: {
      color: "#FF9F43",
      fontSize: 16,
      marginHorizontal: 20,
      marginBottom: 30,
    },
    signinbtn: {
      backgroundColor: "#ffffff",
      marginHorizontal: 20,
    },
    signinbtntxt: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 24,
      padding: 8,
      textAlign: "center",
    },
  };

  res.json(styles);
});

module.exports = router;
