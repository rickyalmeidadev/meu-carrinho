import React, { useContext } from 'react'

import Link from 'next/link'
import { UserContext } from '../contexts/UserContext';
import { handleLogout } from '../services/helpers';

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';


// TODO: TRAZER AS LOJAS DA API

let stores = [{
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnHs-oEIScULf8g6ehnRgT64UY269hG4lnb7a0xuNPDqfEy4sz&usqp=CAU',
  name: 'loja 1',
  url: 'url loja 1'
},
{
  src: 'https://pegaki.com.br/wp-content/uploads/2019/05/Loja.png',
  name: 'loja 2',
  url: 'url loja 2'
}]

export default function minhaslojas() {
  const { user } = useContext(UserContext);

  console.log(user)



  return (
    <ProtectedRoute>
      <div>
        <h1>Lojas do Usuário</h1>
        <Link href="createStore"><a>Criar Nova Loja</a></Link>
        {user && user.stores.map((store, idx) => {
          return (
            <Link key={idx} href="/store/[name]" as={`/store/${store.name}`}>
              <a>
                <div>
                  <h1>{store.name}</h1>
                  <img src={store.imageUrl} alt={store.name}></img>
                </div>
              </a>
            </Link>
          )
        })}
        <div onClick={() => handleLogout()}>Logout</div>
      </div>
    </ProtectedRoute>
  )
}