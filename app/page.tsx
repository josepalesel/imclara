'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Consulta enviada:', { nome, email, mensagem });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center mb-2">Olá, eu sou a Clara! 🧑🏻‍⚕️</h1>
      <p className="text-lg text-center mb-4 text-gray-700">
        Sou sua assistente de saúde digital da Plamedic. Me pergunte qualquer coisa sobre sintomas, exames, agendamentos ou saúde geral.
      </p>
      <Image
        src="/clara-avatar.png"
        alt="Clara - Assistente Virtual"
        width={400}
        height={500}
        className="rounded-xl shadow-lg mb-6"
      />

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <textarea
          placeholder="Sintomas, dúvidas ou mensagens..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition"
        >
          Consultar
        </button>
      </form>
    </div>
  );
}
