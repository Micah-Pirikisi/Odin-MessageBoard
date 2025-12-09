const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Saw 'em in the sky, I did! Green fellows with wide black eyes!",
    user: "Hubert-Who-Knows",
    added: new Date(),
  },
  {
    text: "One o' yous stole me goat! Week's worth o' my famous porridge to whoever finds 'em!",
    user: "Old Lady Margaret",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    title: "Village Noticeboard",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { user, text } = req.body;

  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });

  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", {
    title: "Message Details",
    message: message,
  });
});

module.exports = router;
