import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary  text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">Connect with us</h2>
          <p className="mt-2">FUTES, Iyin, Ekiti State, Nigeria</p>
          <p className="mt-1">+234 123 456 7890</p>
          <p className="mt-1">
            <a
              href="mailto:info@futes.edu.ng"
              className="text-blue-500 hover:underline"
            >
              info@futes.edu.ng
            </a>
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Study Section */}
          <div>
            <h3 className="text-lg font-semibold">Study</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Why Study At FUTES?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Undergraduate Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Postgraduate Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  International Students
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Internship
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Scholarship
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Student Handbook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Campus Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FUTES Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Admission
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Research Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Library Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Innovation Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  International Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Faculty & Staff Directory
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers @ FUTES
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} FUTES, Iyin, Ekiti State. All
            rights reserved.
          </p>
          <p>
            Built with ❤️ in Iyin, Ekiti State. Follow us on{' '}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
