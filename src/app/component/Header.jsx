function Header(){
    return(
        <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              MyLogo
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <div className="relative group">
              <a
                href="http://localhost:3000/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <ul className="absolute left-0 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-10">
                <li>
                  <a
                    href="http://localhost:3000/about/company"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/about/team"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
    );
}
export default Header;