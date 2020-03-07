/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from '@unform/web';

import Input from './components/Input';
import { getDevs, storeDev } from './store/ducks/devs';
import GlobalStyled from './styles/global';

export default function App() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const devs = useSelector((state) => state.devs);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        formRef.current.setFieldValue('latitude', position.coords.latitude);
        formRef.current.setFieldValue('longitude', position.coords.longitude);
      },
      err => {
        console.log(err);
      },
    );
  }, []);

  useEffect(() => {
    dispatch(getDevs());
  }, [dispatch]);

  async function handleSubmit(data, { reset }) {
    dispatch(storeDev(data, reset));
  }

  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-block">
              <Input
                name="github_username"
                label="Usuário do GitHub"
                type="text"
              />
            </div>

            <div className="input-block">
              <Input name="techs" label="Tecnologias" type="text" />
            </div>

            <div className="input-group">
              <div className="input-block">
                <Input name="latitude" label="Latitude" />
              </div>

              <div className="input-block">
                <Input name="longitude" label="Latitude" />
              </div>
            </div>

            <button type="submit">Salvar</button>
          </Form>
        </aside>

        <main>
          <ul>
            {devs.map(dev => (
              <li key={dev.name}>
                <header>
                  <img
                    src={dev.avatar_url}
                    alt={dev.name}
                  />

                  <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                  </div>
                </header>

                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">
                  Acessar Perfil
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>

      <GlobalStyled />
    </>
  );
}
