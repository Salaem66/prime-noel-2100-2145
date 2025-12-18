import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Félicitations !</h1>
      <p className="text-2xl mb-8">
        Vous recevrez votre prime de Noël de 2100 euros sur votre compte AXA le 25 décembre.
      </p>
      <div className="bg-white text-gray-800 px-8 py-4 rounded-lg shadow-lg">
        <p className="text-2xl font-bold">Joyeux Noël !</p>
      </div>
    </div>
  );
}

export default App;