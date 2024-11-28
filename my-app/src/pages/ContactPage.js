import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-gray-100 text-gray-800 text-base md:text-lg">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Contact Me
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            Reach out to me for any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Get in Touch
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Email
              </h3>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-600 hover:underline"
                >
                  ojfnicole@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Phone
              </h3>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:underline"
                >
                  +6 (012) 4709208
                </a>
              </p>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                Please note that I only respond to text messages. <br></br>
                It is best to reach out through WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
