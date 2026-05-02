import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-ec-primary">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: May 02, 2026
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to the Student Portal. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at support@university.edu or by post to:
          </p>
          <address className="not-italic mt-2">
            University Name<br />
            123 Education Lane<br />
            Knowledge City, 45678
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
