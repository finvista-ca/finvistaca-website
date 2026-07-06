import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TrustRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TrustRegistration: React.FC<TrustRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Trust Registration",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Trust Deed Drafting", desc: "Comprehensive drafting of the Trust Deed defining settlor, trustees, and objectives.", icon: "FileSignature" },
      { title: "Registration Process", desc: "Representation before the Sub-Registrar for Trust Registration.", icon: "Building" },
      { title: "PAN & TAN Application", desc: "Obtaining tax identities for the Trust.", icon: "CheckCircle" },
      { title: "12A & 80G Registration", desc: "Applying for tax exemptions and donor deductions.", icon: "ShieldCheck" },
      { title: "FCRA Compliance", desc: "Assistance with obtaining FCRA for foreign donations.", icon: "Globe" }
    ],
    benefits: [
      { title: "Ease of Formation", desc: "Relatively simple process compared to a Section 8 Company.", icon: "Zap" },
      { title: "Permanent Control", desc: "The Settlor can appoint permanent trustees, avoiding periodic elections.", icon: "ShieldCheck" },
      { title: "Tax Exemptions", desc: "Income is exempt from tax under Section 11 & 12 of the IT Act (if registered).", icon: "Wallet" },
      { title: "Privacy", desc: "Fewer public disclosure requirements compared to Companies.", icon: "CheckCircle" }
    ],
    timeline: [
      "Drafting of the Trust Deed",
      "Payment of Stamp Duty",
      "Execution of Trust Deed in presence of witnesses",
      "Registration before the Sub-Registrar",
      "Application for PAN, 12A, and 80G"
    ],
    faqs: [
      { q: "What is the minimum number of trustees required?", a: "A minimum of two trustees are required to form a public charitable trust." },
      { q: "Can a Trust be revoked?", a: "A public charitable trust is generally irrevocable. Once property is transferred to the trust, it cannot be taken back." },
      { q: "Is physical presence required for registration?", a: "Yes, the Settlor and two witnesses must be physically present before the Sub-Registrar during the registration process." },
      { q: "What is the role of the Settlor?", a: "The Settlor is the person who creates the trust by placing an asset (property or money) into it for charitable purposes." },
      { q: "Are family members allowed as trustees?", a: "Yes, family members can be trustees in a public trust, but it is advisable to have independent trustees as well for better governance and 12A/80G approvals." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
