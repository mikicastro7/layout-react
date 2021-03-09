function App() {
  return (
  <div class="p-0 container vh-100 flex-column d-flex">
    <header class="text-white d-flex align-items-center">
      <h1 class="m-0 font-weight-bold">Título</h1>
    </header>
    <main class="row m-0 flex-grow-1">
      <article class="text-justify col-12 col-md-8">
        <h2>Titular de noticia</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sint harum placeat ex corporis quam,
          alias
          quasi modi delectus vero rem in porro, distinctio maiores illum quos aperiam amet esse!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sint harum placeat ex corporis quam,
          alias
          quasi
          modi delectus vero rem in porro, distinctio maiores illum quos aperiam amet esse!</p>
      </article>
      <aside class="col-12 col-md-4">
        <h3>Categorías</h3>
        <ul class="list-unstyled">
          <li>Noticias de deporte</li>
          <li>Noticias de ocio</li>
          <li>Noticias de política</li>
          <li>Noticias de espectáculos</li>
        </ul>
        <h3>Otras cosas</h3>
        <ul class="list-unstyled">
          <li>Nosequé</li>
          <li>Nosecuánto</li>
          <li>Talycual</li>
        </ul>
      </aside>
    </main>
    <footer class="text-center text-white">
      <p class="m-0">Texto de footer</p>
    </footer>
  </div>
  );
}

export default App;
