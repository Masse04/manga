const Navbar = () => {
    return(
        <div>
            <nav class = "navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="universanime.co">Anime-Site</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="universanime.co">Home</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Filter movie by title" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">SIGN IN</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar ;