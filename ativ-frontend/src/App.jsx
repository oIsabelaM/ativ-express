import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')

  useEffect(() => {
    fetch('https://ativ-express.onrender.com/data-hora')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setData(dados.data)
        setHora(dados.hora)
      })
  }, [])

  return (
    <main className="app">
      <div className="decoracao decoracao-1">♡</div>
      <div className="decoracao decoracao-2">✦</div>
      <div className="decoracao decoracao-3">♡</div>

      <section className="card">
        <div className="orelhas">
          <span>🐾</span>
          <span>🐾</span>
        </div>

        <div className="gato">🐱</div>

        <h1>Olá, gatinho!</h1>

        <p className="subtitulo">
          Bem-vindo ao meu cantinho de data e hora ♡
        </p>

        <div className="informacoes">
          <div className="info">
            <span className="icone">📅</span>

            <div>
              <span className="titulo">Data</span>
              <strong>{data}</strong>
            </div>
          </div>

          <div className="info">
            <span className="icone">🕐</span>

            <div>
              <span className="titulo">Hora</span>
              <strong>{hora}</strong>
            </div>
          </div>
        </div>

        <div className="patinhas">
          🐾　♡　🐾
        </div>

        <p className="rodape">
          Feito com carinho e muito amor pelos gatinhos ♡
        </p>
      </section>
    </main>
  )
}

export default App