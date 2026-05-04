import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

const SECRET_KEY = "clave_secreta";

// Usuario de prueba
const usuario = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("1234", 8)
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== usuario.username) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  const passwordValido = bcrypt.compareSync(password, usuario.password);

  if (!passwordValido) {
    return res.status(401).json({ mensaje: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { id: usuario.id, username: usuario.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;