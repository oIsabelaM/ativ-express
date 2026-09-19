import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    status: 'API funcionando!'
  });
});

app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    }),
    hora: agora.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })
  });
});

// Porta dinâmica para o Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});