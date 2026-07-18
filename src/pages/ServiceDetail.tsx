import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Settings, FileText, ChevronRight } from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import { Proprietorship } from './services/Proprietorship';
import { Partnership } from './services/Partnership';
import { OnePersonCompany } from './services/OnePersonCompany';
import { LLP } from './services/LLP';
import { PrivateLimitedCompany } from './services/PrivateLimitedCompany';
import { PublicLimitedCompany } from './services/PublicLimitedCompany';
import { NidhiCompany } from './services/NidhiCompany';
import { ProducerCompany } from './services/ProducerCompany';
import { Section8Company } from './services/Section8Company';
import { TrustRegistration } from './services/TrustRegistration';
import { SocietyRegistration } from './services/SocietyRegistration';
import { IndianSubsidiary } from './services/IndianSubsidiary';
import { CorporateTaxAdvisory } from './services/CorporateTaxAdvisory';
import { InternationalTaxAdvisory } from './services/InternationalTaxAdvisory';
import { TransferPricingStudy } from './services/TransferPricingStudy';
import { LitigationRepresentation } from './services/LitigationRepresentation';
import { PersonalTaxAdvisory } from './services/PersonalTaxAdvisory';
import { GSTAdvisoryAndComplianceService } from './services/GSTAdvisoryAndComplianceService';
import { GSTLitigationServices } from './services/GSTLitigationServices';
import { GSTRegistration } from './services/GSTRegistration';
import { GSTReturns } from './services/GSTReturns';
import { GSTAnnualReturn } from './services/GSTAnnualReturn';
import { GSTEWayBill } from './services/GSTEWayBill';
import { LUTInGST } from './services/LUTInGST';
import { GSTCancellation } from './services/GSTCancellation';
import { GSTRegistrationForForeigners } from './services/GSTRegistrationForForeigners';
import { AnnualCompliancePrivateLimitedCompany } from './services/AnnualCompliancePrivateLimitedCompany';
import { AnnualComplianceLLP } from './services/AnnualComplianceLLP';
import { NidhiCompanyCompliance } from './services/NidhiCompanyCompliance';
import { Section8CompanyCompliance } from './services/Section8CompanyCompliance';
import { NBFCCompliance } from './services/NBFCCompliance';
import { WindingPrivateLimitedCompany } from './services/WindingPrivateLimitedCompany';
import { ClosureOfLLP } from './services/ClosureOfLLP';
import { RevivalOfStruckOffCompanies } from './services/RevivalOfStruckOffCompanies';
import { OtherEventBasedCompliances } from './services/OtherEventBasedCompliances';

import { StatutoryAudit } from './services/StatutoryAudit';
import { TaxAudit } from './services/TaxAudit';
import { GSTAudit } from './services/GSTAudit';
import { OtherAudits } from './services/OtherAudits';
import { ForensicAudit } from './services/ForensicAudit';
import { SecretarialAudit } from './services/SecretarialAudit';
import { DueDiligence } from './services/DueDiligence';
import { FinancialReportingAdvisory } from './services/FinancialReportingAdvisory';
import { ManagementAudits } from './services/ManagementAudits';
import { CertificationServices } from './services/CertificationServices';
import { AgreedUponProcedures } from './services/AgreedUponProcedures';

import { FSSAIRegistration } from './services/FSSAIRegistration';
import { ImportExportCode } from './services/ImportExportCode';
import { ISOCertification } from './services/ISOCertification';
import { RERARegistration } from './services/RERARegistration';
import { MSMEUdyamRegistration } from './services/MSMEUdyamRegistration';
import { StartupIndiaRegistration } from './services/StartupIndiaRegistration';
import { ShopActRegistration } from './services/ShopActRegistration';
import { ESIPFRegistration } from './services/ESIPFRegistration';
import { NGODarpan } from './services/NGODarpan';
import { TrustSocietyRegistration } from './services/TrustSocietyRegistration';
import { NGORegistration } from './services/NGORegistration';
import { CSRRegistrationNGOs } from './services/CSRRegistrationNGOs';

import { InternationalTaxation } from './services/InternationalTaxation';
import { NRITaxationServices } from './services/NRITaxationServices';
import { SetupBusinessInIndia } from './services/SetupBusinessInIndia';
import { TaxClearanceCertificate } from './services/TaxClearanceCertificate';
import { TaxationExpatriateEmployees } from './services/TaxationExpatriateEmployees';

import { OutsourcingAccountingBookKeeping } from './services/OutsourcingAccountingBookKeeping';
import { PayrollManagement } from './services/PayrollManagement';
import { OnlineAccounting } from './services/OnlineAccounting';
import { ZohoAccounting } from './services/ZohoAccounting';
import { XeroAccounting } from './services/XeroAccounting';
import { QuickBooksAccounting } from './services/QuickBooksAccounting';

import { HomeLoanAssistance } from './services/HomeLoanAssistance';
import { PersonalLoanAssistance } from './services/PersonalLoanAssistance';
import { BusinessLoanAssistance } from './services/BusinessLoanAssistance';
import { MSMELoanAssistance } from './services/MSMELoanAssistance';
import { StartupFundingAssistance } from './services/StartupFundingAssistance';
import { WorkingCapitalLoans } from './services/WorkingCapitalLoans';
import { TermLoans } from './services/TermLoans';
import { VehicleLoanAssistance } from './services/VehicleLoanAssistance';
import { EducationLoanAssistance } from './services/EducationLoanAssistance';
import { LoanAgainstProperty } from './services/LoanAgainstProperty';
import { GoldLoanAdvisory } from './services/GoldLoanAdvisory';
import { MachineryEquipmentLoan } from './services/MachineryEquipmentLoan';
import { CommercialVehicleLoan } from './services/CommercialVehicleLoan';
import { AgricultureLoanAssistance } from './services/AgricultureLoanAssistance';
import { ProjectFinance } from './services/ProjectFinance';
import { MortgageLoanAssistance } from './services/MortgageLoanAssistance';
import { OverdraftCashCredit } from './services/OverdraftCashCredit';
import { TradeFinanceAssistance } from './services/TradeFinanceAssistance';
import { ExportImportFinance } from './services/ExportImportFinance';
import { BalanceTransferRestructuring } from './services/BalanceTransferRestructuring';
import { GovernmentSubsidyLoans } from './services/GovernmentSubsidyLoans';

import './ServiceDetail.css';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceBySlug(id) : undefined;
  
  const relatedServices = getRelatedServices(service?.related);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    // If we land on an invalid service slug, just redirect to /services
    return <Navigate to="/services" replace />;
  }

  // Render specific service pages if they exist
  if (service.slug === 'proprietorship') {
    return <Proprietorship service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'partnership') {
    return <Partnership service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'one-person-company') {
    return <OnePersonCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'limited-liability-partnership') {
    return <LLP service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'private-limited-company') {
    return <PrivateLimitedCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'public-limited-company') {
    return <PublicLimitedCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'nidhi-company') {
    return <NidhiCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'producer-company') {
    return <ProducerCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'section-8-company') {
    return <Section8Company service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'trust-registration') {
    return <TrustRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'society-registration') {
    return <SocietyRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'indian-subsidiary') {
    return <IndianSubsidiary service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'corporate-tax-advisory-compliance') {
    return <CorporateTaxAdvisory service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'international-tax-advisory-compliance') {
    return <InternationalTaxAdvisory service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'transfer-pricing-study-documentation') {
    return <TransferPricingStudy service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'litigation-representation-assistance') {
    return <LitigationRepresentation service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'personal-tax-advisory') {
    return <PersonalTaxAdvisory service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-advisory-and-compliance-service') {
    return <GSTAdvisoryAndComplianceService service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-litigation-services') {
    return <GSTLitigationServices service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-registration') {
    return <GSTRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-returns') {
    return <GSTReturns service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-annual-return') {
    return <GSTAnnualReturn service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-eway-bill') {
    return <GSTEWayBill service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'lut-in-gst') {
    return <LUTInGST service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-cancellation') {
    return <GSTCancellation service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-registration-for-foreigners') {
    return <GSTRegistrationForForeigners service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'annual-compliance-for-private-limited-company') {
    return <AnnualCompliancePrivateLimitedCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'annual-compliance-of-llp') {
    return <AnnualComplianceLLP service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'nidhi-company-compliance') {
    return <NidhiCompanyCompliance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'section-8-company-compliance') {
    return <Section8CompanyCompliance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'nbfc-compliance') {
    return <NBFCCompliance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'winding-private-limited-company') {
    return <WindingPrivateLimitedCompany service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'closure-of-llp') {
    return <ClosureOfLLP service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'revival-of-struck-off-companies') {
    return <RevivalOfStruckOffCompanies service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'other-event-based-compliances') {
    return <OtherEventBasedCompliances service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'statutory-audit') {
    return <StatutoryAudit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'tax-audit') {
    return <TaxAudit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gst-audit') {
    return <GSTAudit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'other-audits') {
    return <OtherAudits service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'forensic-audit') {
    return <ForensicAudit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'secretarial-audit') {
    return <SecretarialAudit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'due-diligence') {
    return <DueDiligence service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'financial-reporting-and-accounting-advisory-services') {
    return <FinancialReportingAdvisory service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'management-audits') {
    return <ManagementAudits service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'certification-services') {
    return <CertificationServices service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'agreed-upon-procedures') {
    return <AgreedUponProcedures service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'fssai') {
    return <FSSAIRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'import-export-code') {
    return <ImportExportCode service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'iso-certification') {
    return <ISOCertification service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'rera-registration') {
    return <RERARegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'msme-udyam-registration') {
    return <MSMEUdyamRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'startup-india-registration') {
    return <StartupIndiaRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'shop-act-registration') {
    return <ShopActRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'esi-pf-registration') {
    return <ESIPFRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'ngo-darpan') {
    return <NGODarpan service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'trust-society-registration') {
    return <TrustSocietyRegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'ngo-registration') {
    return <NGORegistration service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'csr-registration-ngos') {
    return <CSRRegistrationNGOs service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'international-taxation') {
    return <InternationalTaxation service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'nri-taxation-services') {
    return <NRITaxationServices service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'setup-business-in-india') {
    return <SetupBusinessInIndia service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'tax-clearance-certificate') {
    return <TaxClearanceCertificate service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'taxation-expatriate-employees') {
    return <TaxationExpatriateEmployees service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'outsourcing-accounting-book-keeping') {
    return <OutsourcingAccountingBookKeeping service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'payroll-management') {
    return <PayrollManagement service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'online-accounting') {
    return <OnlineAccounting service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'zoho') {
    return <ZohoAccounting service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'xero') {
    return <XeroAccounting service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'quick-books') {
    return <QuickBooksAccounting service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'home-loan-assistance') {
    return <HomeLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'personal-loan-assistance') {
    return <PersonalLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'business-loan-assistance') {
    return <BusinessLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'msme-loan-assistance') {
    return <MSMELoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'startup-funding-assistance') {
    return <StartupFundingAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'working-capital-loans') {
    return <WorkingCapitalLoans service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'term-loans') {
    return <TermLoans service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'vehicle-loan-assistance') {
    return <VehicleLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'education-loan-assistance') {
    return <EducationLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'loan-against-property') {
    return <LoanAgainstProperty service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'gold-loan-advisory') {
    return <GoldLoanAdvisory service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'machinery-equipment-loans') {
    return <MachineryEquipmentLoan service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'commercial-vehicle-loan') {
    return <CommercialVehicleLoan service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'agriculture-loans') {
    return <AgricultureLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'project-finance') {
    return <ProjectFinance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'mortgage-loan-assistance') {
    return <MortgageLoanAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'overdraft-cash-credit-facilities') {
    return <OverdraftCashCredit service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'trade-finance-assistance') {
    return <TradeFinanceAssistance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'export-import-finance') {
    return <ExportImportFinance service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'balance-transfer-loan-restructuring') {
    return <BalanceTransferRestructuring service={service} relatedServices={relatedServices} />;
  }

  if (service.slug === 'government-subsidy-linked-loans') {
    return <GovernmentSubsidyLoans service={service} relatedServices={relatedServices} />;
  }

  const isLoanService = service.slug.includes('loan') || service.slug.includes('finance') || service.slug.includes('funding') || service.slug.includes('overdraft');

  return (
    <div className="service-detail-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name }
        ]}
        title={service.name}
        description="Detailed content for this service is currently being prepared and will be available soon."
        ctaButtons={[
          { label: 'Contact Us For Details', path: '/contact', primary: true }
        ]}
      />

      <div className="service-content-wrapper">
        <div className="container">
          <div className="service-placeholder-card glass-card">
            {isLoanService && (
              <div className="loan-advisory-disclaimer" style={{ background: 'rgba(200, 164, 93, 0.1)', borderLeft: '4px solid #C8A45D', padding: '1.5rem', marginBottom: '2rem', borderRadius: '0 8px 8px 0', textAlign: 'left' }}>
                <h3 style={{ color: '#C8A45D', marginBottom: '0.75rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={18} /> Advisory Service Notice
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9, color: '#e2e8f0' }}>
                  Please note that Finvista is a financial advisory firm, not a lending institution. We assist clients in obtaining loans through authorized banks and financial institutions by providing documentation support, eligibility assessment, financial advisory, compliance assistance, and end-to-end guidance. We do not directly provide or disburse loans.
                </p>
              </div>
            )}
            <div className="placeholder-icon">
              <Settings size={48} />
            </div>
            <h2>Content Under Development</h2>
            <p className="placeholder-text">
              Detailed content for this service is currently being prepared and will be available soon. 
              Our team of experts is compiling comprehensive guidelines and procedures to assist you better.
            </p>
            
            <div className="placeholder-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us For Details <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {relatedServices.length > 0 && (
            <div className="related-services-section">
              <div className="related-header">
                <h3>Related Services</h3>
                <div className="related-line"></div>
              </div>
              <div className="related-grid">
                {relatedServices.map(item => (
                  <Link to={`/services/${item.slug}`} key={item.slug} className="related-card glass-card">
                    <div className="related-icon">
                      <FileText size={20} />
                    </div>
                    <div className="related-content">
                      <h4>{item.name}</h4>
                      <span className="explore-link">Explore <ChevronRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
