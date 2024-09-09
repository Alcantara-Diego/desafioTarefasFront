import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  base: '/desafioTarefasFront/',
  server: {
    port: 5173, // Porta onde o Vite irá rodar
    historyApiFallback: true, // Configuração para tratar as rotas no React Router
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
