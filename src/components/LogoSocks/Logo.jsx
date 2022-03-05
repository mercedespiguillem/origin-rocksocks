import logoSocks from "./assets/iconoSocks.png";

function Logo() {
  return (
    <div>
      <img
        src={logoSocks}
        alt="logo"
        className="m-3 align-top d-md-block d-none"
      />
    </div>
  );
}

export default Logo;
