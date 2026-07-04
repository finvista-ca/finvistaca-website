import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  {
    "href": "https://www.instagram.com/irk_associates?igsh=MXJhbXl3cDBheXNtdw==",
    "text": ""
  },
  {
    "href": "https://x.com/ramakishoreitla",
    "text": ""
  },
  {
    "href": "Proprietorship.aspx.html",
    "text": "Proprietorship"
  },
  {
    "href": "Partnership.aspx.html",
    "text": "Partnership"
  },
  {
    "href": "OnePersonCompany.aspx.html",
    "text": "One Person Company"
  },
  {
    "href": "LimitedLiabilityPartnership.aspx.html",
    "text": "Limited Liability Partnership"
  },
  {
    "href": "PrivateLimitedCompany.aspx.html",
    "text": "Private Limited Company"
  },
  {
    "href": "PublicLimitedCompany.aspx.html",
    "text": "Public Limited Company"
  },
  {
    "href": "NidhiCompany.aspx.html",
    "text": "Nidhi Company"
  },
  {
    "href": "ProducerCompany.aspx.html",
    "text": "Producer Company"
  },
  {
    "href": "Section8Company.aspx.html",
    "text": "Section 8 Company"
  },
  {
    "href": "TrustRegistration.aspx.html",
    "text": "Trust Registration"
  },
  {
    "href": "SocietyRegistration.aspx.html",
    "text": "Society Registration"
  },
  {
    "href": "INDIANSUBSIDIARY.aspx.html",
    "text": "INDIAN SUBSIDIARY"
  },
  {
    "href": "Corporatetaxadvisorycompliance.aspx.html",
    "text": "Corporate tax advisory/compliance"
  },
  {
    "href": "Internationaltaxadvisorycompliance.aspx.html",
    "text": "International tax advisory/compliance"
  },
  {
    "href": "Transferpricingstudydocumentation.aspx.html",
    "text": "Transfer pricing study/documentation"
  },
  {
    "href": "Litigationrepresentationassistance.aspx.html",
    "text": "Litigation/representation assistance"
  },
  {
    "href": "Personaltaxadvisory.aspx.html",
    "text": "Personal tax advisory"
  },
  {
    "href": "GSTADVISORYANDCOMPLIANCESERVICE.aspx.html",
    "text": "GST ADVISORY AND COMPLIANCE SERVICE"
  },
  {
    "href": "GSTLIGITATIONSERVICES.aspx.html",
    "text": "GST LIGITATION SERVICES"
  },
  {
    "href": "GSTREGISTRATION.aspx.html",
    "text": "GST REGISTRATION"
  },
  {
    "href": "GSTRETURNS.aspx.html",
    "text": "GST RETURNS"
  },
  {
    "href": "GSTANNUALRETURN.aspx.html",
    "text": "GST ANNUAL RETURN"
  },
  {
    "href": "GSTEWAYBILL.aspx.html",
    "text": "GST EWAY BILL"
  },
  {
    "href": "LUTINGST.aspx.html",
    "text": "LUT IN GST"
  },
  {
    "href": "GSTCANCELLATION.aspx.html",
    "text": "GST CANCELLATION"
  },
  {
    "href": "GSTREGISTRATIONFORFOREIGNERS.aspx.html",
    "text": "GST REGISTRATION FOR FOREIGNERS"
  },
  {
    "href": "AnnualComplianceforPrivateLimitedCompany.aspx.html",
    "text": "Annual Compliance for Private Limited Company"
  },
  {
    "href": "AnnualComplianceofLLP.aspx.html",
    "text": "Annual Compliance of LLP"
  },
  {
    "href": "NidhiCompanyCompliance.aspx.html",
    "text": "Nidhi Company Compliance"
  },
  {
    "href": "Section8CompanyCompliance.aspx.html",
    "text": "Section 8 Company Compliance"
  },
  {
    "href": "NBFCCompliance.aspx.html",
    "text": "NBFC Compliance"
  },
  {
    "href": "WindingPrivateLimitedCompany.aspx.html",
    "text": "Winding Private Limited Company"
  },
  {
    "href": "ClosureofLLP.aspx.html",
    "text": "Closure of LLP"
  },
  {
    "href": "RevivalofStruckOffCompanies.aspx.html",
    "text": "Revival of Struck Off Companies"
  },
  {
    "href": "OTHEREVENTBASEDCOMPLIANCES.aspx.html",
    "text": "OTHER EVENT BASED COMPLIANCES"
  },
  {
    "href": "StatutoryAudit.aspx.html",
    "text": "Statutory Audit"
  },
  {
    "href": "TaxAudit.aspx.html",
    "text": "Tax Audit"
  },
  {
    "href": "GSTAudit.aspx.html",
    "text": "GST Audit"
  },
  {
    "href": "OTHERAUDITS.aspx.html",
    "text": "OTHER AUDITS"
  },
  {
    "href": "ForensicAudit.aspx.html",
    "text": "Forensic Audit"
  },
  {
    "href": "SecretarialAudit.aspx.html",
    "text": "Secretarial Audit"
  },
  {
    "href": "DueDiligence.aspx.html",
    "text": "Due Diligence"
  },
  {
    "href": "Financialreportingandaccountingadvisoryservices.aspx.html",
    "text": "Financial reporting and accounting advisory services"
  },
  {
    "href": "ManagementAudits.aspx.html",
    "text": "Management Audits"
  },
  {
    "href": "CertificationServices.aspx.html",
    "text": "Certification Services"
  },
  {
    "href": "Agreeduponprocedures.aspx.html",
    "text": "Agreed upon procedures"
  },
  {
    "href": "GstHSNCodeWithRate.aspx.html",
    "text": "HSN Code With Rate"
  },
  {
    "href": "GstSACCode.aspx.html",
    "text": "SAC Code"
  },
  {
    "href": "https://itatonline.org/",
    "text": "ITATonline.org"
  },
  {
    "href": "Newsfeed.aspx.html",
    "text": "NewsFeed"
  },
  {
    "href": "AboutUs.aspx.html",
    "text": "About Us"
  },
  {
    "href": "https://sachet.rbi.org.in/",
    "text": "RBI Policy"
  },
  {
    "href": "DataCollectionPolicy.aspx.html",
    "text": "Data Collection Policy"
  },
  {
    "href": "AuditandAssurancesServices.aspx.html",
    "text": "Audit and Assurances Services"
  },
  {
    "href": "StatutoryComplianceServices.aspx.html",
    "text": "Statutory Compliance Services"
  },
  {
    "href": "StartUpServices.aspx.html",
    "text": "Start Up Services"
  },
  {
    "href": "FinancialConsultancyandSupportServices.aspx.html",
    "text": "Financial Consultancy and Support Services"
  }
];

export const PartnershipAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Partnership Act"
      description="View and search through Partnership Act documents."
      data={pageData}
      type="links"
    />
  );
};
