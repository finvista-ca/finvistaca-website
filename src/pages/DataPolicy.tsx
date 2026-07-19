import { ShieldCheck } from 'lucide-react';
import { InternalPageHero } from '../components/layout/InternalPageHero';

export const DataPolicy: React.FC = () => {
  return (
    <div className="resource-layout" style={{ paddingTop: '90px' }}>
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Data Policy' }
        ]}
        title="Data Collection Policy"
        description="How FinvistaCA collects, uses and protects your information."
      />

      <section className="resource-main">
        <div className="container" style={{ maxWidth: '860px', lineHeight: 1.8 }}>
          <p>
            FinvistaCA ("we", "us", "our") is committed to protecting the privacy of every
            individual and business that interacts with us. This policy explains what
            information we collect through this website and how we use it.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Information We Collect</h3>
          <p>
            When you submit an enquiry, request a call back, or apply for a career
            opportunity, we may collect your name, email address, phone number, the
            service you are interested in, and any message or documents you choose to
            share with us. We do not collect this information unless you voluntarily
            provide it.
          </p>

          <h3 style={{ marginTop: '2rem' }}>How We Use Your Information</h3>
          <p>
            Information you provide is used solely to respond to your enquiry, deliver the
            professional services you request, and communicate with you about your
            engagement. We do not sell, rent, or trade your personal information to third
            parties.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Confidentiality</h3>
          <p>
            As a professional Chartered Accountancy practice, we treat all client
            information as strictly confidential and handle it in accordance with the
            applicable professional and statutory obligations.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Data Security</h3>
          <p>
            We apply reasonable administrative and technical safeguards to protect the
            information in our custody against unauthorised access, alteration, or
            disclosure.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Contact Us</h3>
          <p>
            For any questions about this policy or the information we hold about you,
            please contact us at{' '}
            <a href="mailto:finvistacaca@gmail.com">finvistacaca@gmail.com</a> or call
            +91 9908285223.
          </p>
        </div>
      </section>
    </div>
  );
};
