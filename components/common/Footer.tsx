
const Footer = () => {
    return (
      <footer className="p-6 border-t">
        <div className="container mx-auto text-center text-gray-400">
          <p className="font-roboto">© {new Date().getFullYear()} GeoName. All rights reserved.</p>
          <p className="font-roboto mt-2">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-white ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;