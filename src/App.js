function App() {
  return (
  <div className="vh-100 container d-flex flex-column">
    <header className="row">
      <h1>Título</h1>
    </header>
    <main className="row flex-grow-1">
      <article className="col-md-4">
        <h2>Titular de noticia</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sint harum placeat ex corporis quam,
          alias
          quasi modi delectus vero rem in porro, distinctio maiores illum quos aperiam amet esse!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sint harum placeat ex corporis quam,
          alias
          quasi
          modi delectus vero rem in porro, distinctio maiores illum quos aperiam amet esse!</p>
      </article>
      <aside className="col-md-8">
        <h3>Categorías</h3>
        <ul className="Texto">
          <li>Noticias de deporte</li>
          <li>Noticias de ocio</li>
          <li>Noticias de política</li>
          <li>Noticias de espectáculos</li>
        </ul>
        <h3>Otras cosas</h3>
        <ul className="Texto">
          <li>Nosequé</li>
          <li>Nosecuánto</li>
          <li>Talycual</li>
        </ul>
      </aside>
    </main>
    <footer className="row">
      <p className="mx-auto">Texto de footer</p>
    </footer>
  </div>
  );
}

export default App;
