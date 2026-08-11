// Auto-generated mapping file
import React from 'react';

import { IncomeTaxAct } from './pages/knowledge-base/IncomeTaxAct';
import { WealthTaxAct } from './pages/knowledge-base/WealthTaxAct';
import { GiftTaxAct } from './pages/knowledge-base/GiftTaxAct';
import { InterestTaxAct } from './pages/knowledge-base/InterestTaxAct';
import { ExpenditureTaxAct } from './pages/knowledge-base/ExpenditureTaxAct';
import { CompaniesAct } from './pages/knowledge-base/CompaniesAct';
import { CompaniesDonationsAct } from './pages/knowledge-base/CompaniesDonationsAct';
import { PartnershipAct } from './pages/knowledge-base/PartnershipAct';
import { MonopoliesAct } from './pages/knowledge-base/MonopoliesAct';
import { InsolvencyBankruptcyCode } from './pages/knowledge-base/InsolvencyBankruptcyCode';
import { LlpAct } from './pages/knowledge-base/LlpAct';
import { CompetitionAct } from './pages/knowledge-base/CompetitionAct';
import { CharteredAccountantsAct } from './pages/knowledge-base/CharteredAccountantsAct';
import { CostWorksAccountantsAct } from './pages/knowledge-base/CostWorksAccountantsAct';
import { IncomeTaxRules } from './pages/knowledge-base/IncomeTaxRules';
import { CompaniesRules } from './pages/knowledge-base/CompaniesRules';
import { IncomeTaxCirculars } from './pages/knowledge-base/IncomeTaxCirculars';
import { CompanyLawCirculars } from './pages/knowledge-base/CompanyLawCirculars';
import { IncomeTaxNotifications } from './pages/knowledge-base/IncomeTaxNotifications';
import { CompanyLawNotifications } from './pages/knowledge-base/CompanyLawNotifications';
import { IncomeTaxReturnsForms } from './pages/knowledge-base/IncomeTaxReturnsForms';
import { IncomeTaxForms } from './pages/knowledge-base/IncomeTaxForms';
import { WealthTaxReturns } from './pages/knowledge-base/WealthTaxReturns';
import { IncomeTaxChallans } from './pages/knowledge-base/IncomeTaxChallans';
import { IncomeTaxOtherForms } from './pages/knowledge-base/IncomeTaxOtherForms';
import { RocForms } from './pages/knowledge-base/RocForms';
import { LlpForms } from './pages/knowledge-base/LlpForms';
import { CompanySecretariesAct } from './pages/knowledge-base/CompanySecretariesAct';
import { KbGeneric } from './pages/knowledge-base/KbGeneric';
import { RatesOfNscInterest } from './pages/knowledge-base/RatesOfNscInterest';

import { RatesOfDepreciationCompanyAct } from './pages/knowledge-base/RatesOfDepreciationCompanyAct';
import { CostInflationIndex } from './pages/knowledge-base/CostInflationIndex';
import { RocFeeStructure } from './pages/knowledge-base/RocFeeStructure';

import { TdsRatesForNri } from './pages/knowledge-base/TdsRatesForNri';

import { RatesOfIncomeTax } from './pages/knowledge-base/RatesOfIncomeTax';

import { GstActs } from './pages/gst/GstActs';
import { GstRules } from './pages/gst/GstRules';
import { GstCirculars } from './pages/gst/GstCirculars';
import { GstNotifications } from './pages/gst/GstNotifications';
import { GstForms } from './pages/knowledge-base/GstForms';
import { GstSacCodes } from './pages/knowledge-base/GstSacCodes';
import { GstHsnCodes } from './pages/knowledge-base/GstHsnCodes';
import { GstOrders } from './pages/gst/GstOrders';
import { GstInstructions } from './pages/gst/GstInstructions';
import { EmiCalculator } from './pages/calculator/EmiCalculator';
import { HomeLoanCalculator } from './pages/calculator/HomeLoanCalculator';
import { AutoLoanCalculator } from './pages/calculator/AutoLoanCalculator';
import { IncomeTaxCalculator } from './pages/calculator/IncomeTaxCalculator';
import { FbtCalculator } from './pages/calculator/FbtCalculator';
import { HraCalculator } from './pages/calculator/HraCalculator';
import { InstallmentsCalculator } from './pages/calculator/InstallmentsCalculator';
import { KisanVikasPatraCalculator } from './pages/calculator/KisanVikasPatraCalculator';
import { NscCalculator } from './pages/calculator/NscCalculator';
import { GstLateFeeCalculator } from './pages/calculator/GstLateFeeCalculator';

import { SocietiesRegistrationAct } from './pages/knowledge-base/SocietiesRegistrationAct';

export const pageMappings: Record<string, Record<string, React.FC>> = {
  knowledgeBase: {
    'income-tax-act': IncomeTaxAct,
    'wealth-tax-act': WealthTaxAct,
    'gift-tax-act': GiftTaxAct,
    'interest-tax-act': InterestTaxAct,
    'expenditure-tax-act': ExpenditureTaxAct,
    'companies-act': CompaniesAct,
    'partnership-act': PartnershipAct,
    'monopolies-act': MonopoliesAct,
    'insolvency-bankruptcy-code': InsolvencyBankruptcyCode,
    'income-tax-rules': IncomeTaxRules,
    'company-law-rules': CompaniesRules,
    'income-tax-circulars': IncomeTaxCirculars,
    'company-law-circulars': CompanyLawCirculars,
    'income-tax-notifications': IncomeTaxNotifications,
    'company-law-notifications': CompanyLawNotifications,
    'income-tax-returns-forms': IncomeTaxReturnsForms,
    'income-tax-forms': IncomeTaxForms,
    'wealth-tax-returns': WealthTaxReturns,
    'income-tax-challans': IncomeTaxChallans,
    'income-tax-other-forms': IncomeTaxOtherForms,
    'roc-forms': RocForms,
    'llp-forms': LlpForms,
    'gst-forms': GstForms,
    'rates-of-income-tax': RatesOfIncomeTax,
    'tds-rates-for-nri': TdsRatesForNri,
    'rates-of-tds': KbGeneric,
    'rates-of-nsc-interest': RatesOfNscInterest,
    'rates-of-depreciation-income-tax': KbGeneric,
    'rates-of-depreciation-company-act': RatesOfDepreciationCompanyAct,
    'cost-inflation-index': CostInflationIndex,
    'roc-fee-structure': RocFeeStructure,
    'micr-codes': KbGeneric,
    'ifsc-codes': KbGeneric,
    'itat-online': KbGeneric,
    'pan': KbGeneric,
    'tan': KbGeneric,
    'e-payment-online': KbGeneric,
    'income-tax-link': KbGeneric,
    'cbic': KbGeneric,
    'pf-esi': KbGeneric,
    'excise-service-tax': KbGeneric,
    'mca': KbGeneric,
    'ca-cs': KbGeneric,
    'supreme-court': KbGeneric,
    'more-link': KbGeneric,
    'companies-donation-fund-act': CompaniesDonationsAct,
    'llp-act': LlpAct,
    'societies-registration-act': SocietiesRegistrationAct,
    'competition-act': CompetitionAct,
    'chartered-accountants-act': CharteredAccountantsAct,
    'company-secretaries-act': CompanySecretariesAct,
    'cost-works-accountants-act': CostWorksAccountantsAct,
    'gst-hsn-codes': GstHsnCodes,
    'gst-sac-codes': GstSacCodes,
  },
  gst: {
    'gst-acts': GstActs,
    'gst-rules': GstRules,
    'gst-circulars': GstCirculars,
    'gst-notifications': GstNotifications,
    'gst-forms': GstForms,
    'gst-sac-codes': GstSacCodes,
    'gst-hsn-codes': GstHsnCodes,
    'gst-orders': GstOrders,
    'gst-instructions': GstInstructions,
  },
  calculator: {
    'emi': EmiCalculator,
    'home-loan': HomeLoanCalculator,
    'auto-loan': AutoLoanCalculator,
    'income-tax': IncomeTaxCalculator,
    'fbt': FbtCalculator,
    'hra': HraCalculator,
    'installments': InstallmentsCalculator,
    'kisan-vikas-patra': KisanVikasPatraCalculator,
    'nsc': NscCalculator,
    'gst-late-fee': GstLateFeeCalculator,
  }
};
