const Home = () => {
    return (
        <nav className="navigation">

            <input type="checkbox" class="menu-btn" id="menu-btn" />
            <label for="menu-btn" class="menu-icon">
                <span class="nav-icon"></span>
            </label>

            <a href="index.html" class="logo">
                Filmes Online
            </a>

            <ul class="menu">
                <li><a href="#">Página Inicial</a></li>
                <li><a href="#">Gênero</a></li>

                <li><a href="#">Filmes</a></li>
                <li><a href="#">Fale Conosco</a></li>
            </ul>
            <a href="search-form.jsx"></a>
            <form onsubmit="searchMovie(document.getElementById('searchInput').value)">
                <input type="text" id="searchInput" placeholder="Pesquisar filmes..." />
                <button type="submit">Pesquisar</button>
            </form>
            <div id="search-results"></div>
        </nav>
    )
}
export { Home }