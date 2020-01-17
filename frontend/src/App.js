import React from 'react';

import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14303184?s=460&v=4" alt="Lucas Lourenço"></img>
                <div className="user-info">
                  <strong>Lucas Lourenço</strong>
                  <span>ReactJs, React Native, Node.js</span>
                </div>
            </header>
            
            <p>CTO na @LucasSeat, apaixanador por música sertaneja</p>
            <a href="https://github.com/lucas000">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14303184?s=460&v=4" alt="Lucas Lourenço"></img>
                <div className="user-info">
                  <strong>Lucas Lourenço</strong>
                  <span>ReactJs, React Native, Node.js</span>
                </div>
            </header>
            
            <p>CTO na @LucasSeat, apaixanador por música sertaneja</p>
            <a href="https://github.com/lucas000">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14303184?s=460&v=4" alt="Lucas Lourenço"></img>
                <div className="user-info">
                  <strong>Lucas Lourenço</strong>
                  <span>ReactJs, React Native, Node.js</span>
                </div>
            </header>
            
            <p>CTO na @LucasSeat, apaixanador por música sertaneja</p>
            <a href="https://github.com/lucas000">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14303184?s=460&v=4" alt="Lucas Lourenço"></img>
                <div className="user-info">
                  <strong>Lucas Lourenço</strong>
                  <span>ReactJs, React Native, Node.js</span>
                </div>
            </header>
            
            <p>CTO na @LucasSeat, apaixanador por música sertaneja</p>
            <a href="https://github.com/lucas000">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
