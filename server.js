import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
