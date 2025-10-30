import Image from "next/image";
export default function Footer() {
  const footerItems = ["Home", "Email Marketing", "Courses", "FAQ"];

  return (
    <footer className="bg-[#040718] text-white py-16 px-4 md:px-8 font-baloo">
      {/* Heading and CTA Section */}
      <div className="text-center flex flex-col gap-6 mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug">
          Let the learning begin with{" "}
          <span className="text-[#F9D342] font-bold">Quanvaulte</span> today
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
          <button className="rounded-[40px] border-2 border-white shadow-[inset_0_-6px_10px_rgba(255,255,255,0.1)] text-white text-base sm:text-lg font-bold py-3 px-10 sm:px-12 cursor-pointer hover:bg-white/10 transition">
            Login
          </button>
          <button className="bg-white rounded-[40px] text-[#2C43EB] text-base sm:text-lg font-bold py-3 px-10 sm:px-12 cursor-pointer hover:bg-[#f1f1f1] transition">
            Get started
          </button>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 text-left">
        {/* Navigation Column */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">
            Navigation
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            {["Home", "Courses", "FAQ", "Pricing", "Testimonials"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#F9D342] cursor-pointer transition-colors">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Talk to Us Column */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">
            Talk to Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li className="hover:text-[#F9D342] cursor-pointer transition-colors">
              support@ercom.com
            </li>
            <li className="hover:text-[#F9D342] cursor-pointer transition-colors">
              +66 2399 1145
            </li>
            <li className="hover:text-[#F9D342] cursor-pointer transition-colors">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">
            Legal
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            {["General Info", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#F9D342] cursor-pointer transition-colors">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
        {/* Logo Placeholder */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center">
          <Image src="/quanvaulte-logo.svg" alt="" className="w-15 h-15" width={200} height={200} ></Image>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm order-last md:order-none">
          © 2019 Lift Media. All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* Facebook */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F9D342] hover:text-[#F9D342] transition-colors"
            aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F9D342] hover:text-[#F9D342] transition-colors"
            aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F9D342] hover:text-[#F9D342] transition-colors"
            aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
