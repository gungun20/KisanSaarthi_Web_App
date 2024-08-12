

function NavBar() {

    return (
      <nav className="bg-cyan-800 h-20  ">
        <img
          className="h-14 mx-8 relative top-2.5"
          src="https://media.umangapp.in/app/ico/service/KisanSarathiLogo.png"
          alt=""
        />
        <p className="text-white absolute ml-20 left-5 top-5 font-serif">
          Kisan Sarathi
        </p>
        <p className="text-white absolute ml-20 left-5 top-11 text-xs">
          Mobile Based Agro Advisory Services
        </p>
      </nav>
    );
}

export default NavBar;