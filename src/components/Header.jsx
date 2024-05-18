import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState , useEffect} from "react";
import { getAuth , signInWithPopup , GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
    });

  const handleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        setUser(result.user);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        
        
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user); // Log the user info to the console
      })
      .catch((error) => {
        console.error(error); // Log any errors to the console
      }); 
  };  


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={110} height={40} alt="AnimeLens" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {user ? (
  <div className="avatar">
  <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
    <img src={user.photoURL} alt={user.displayName} />
  </div>
</div>
) : (
<>
  <a
    href="#"
    className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
    onClick={handleSignUp}
  >
    New account
  </a>
  <Button className="hidden lg:flex" href="#" onClick={handleSignUp}>
    Sign in 
  </Button>
  </>
)}
      </div>
    </div>
  );
};

export default Header;
