import logo from "../assets/logo.png";
import {navItems} from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neural-700/80">
       <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
           <div className="flex items-center flex-shrink-0">
            
            <img className="h-10 w-20 mr-2 rounded-md" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Birdi -svce</span>
            
            {/* <div className="hidden lg:flex justify-center space-x-12 items-center">

            <ul className="hidden lg:flex ml-12 space-x-12">
                {navItems.map((items, index) => (
                    <li key={index}>
                        <a href={items.href}>{items.label}</a>
                    </li>
                ))}

            </ul>
                <a href="#" className="py-2 px-3 border rounded-md ">
                    sign-in

                </a>

                <a href="#" className="bg-gradient-to-r  from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                  create an account
                </a>

                </div> */}


        </div>

            
            
        </div>
        
            
       </div>
       

    </nav>



  )
}

export default Navbar