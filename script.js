const mensagens = [
  "Você é mais forte do que imagina (❤´艸｀❤)",
  "Nunca se esqueça: sua vida importa (❤ ω ❤)",
  "Você não está sozinho, estamos juntos (´▽`ʃ♡ƪ)",
  "Acredite: dias melhores virão (✿◡‿◡)#SetembroAmarelo | VÍDEO MOTIVACIONAL DISNEY - NÃO ...",
  "Sempre existe esperança 💖"
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
