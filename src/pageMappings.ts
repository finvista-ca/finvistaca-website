// Auto-generated mapping file
import React from 'react';

import { IncomeTaxAct } from './pages/knowledge-base/IncomeTaxAct';
import { WealthTaxAct } from './pages/knowledge-base/WealthTaxAct';
import { GiftTaxAct } from './pages/knowledge-base/GiftTaxAct';
import { InterestTaxAct } from './pages/knowledge-base/InterestTaxAct';
import { ExpenditureTaxAct } from './pages/knowledge-base/ExpenditureTaxAct';
import { CompaniesAct } from './pages/knowledge-base/CompaniesAct';
import { PartnershipAct } from './pages/knowledge-base/PartnershipAct';
import { MonopoliesAct } from './pages/knowledge-base/MonopoliesAct';
import { InsolvencyBankruptcyCode } from './pages/knowledge-base/InsolvencyBankruptcyCode';
import { IncomeTaxRules } from './pages/knowledge-base/IncomeTaxRules';
import { CompanyLawRules } from './pages/knowledge-base/CompanyLawRules';
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
import { KbGeneric } from './pages/knowledge-base/KbGeneric';
import { GstActs } from './pages/gst/GstActs';
import { GstRules } from './pages/gst/GstRules';
import { GstCirculars } from './pages/gst/GstCirculars';
import { GstNotifications } from './pages/gst/GstNotifications';
import { GstForms } from './pages/gst/GstForms';
import { GstSacCodes } from './pages/gst/GstSacCodes';
import { GstHsnCodes } from './pages/gst/GstHsnCodes';
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
    'company-law-rules': CompanyLawRules,
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
    'rates-of-income-tax': KbGeneric,
    'tds-rates-for-nri': KbGeneric,
    'rates-of-tds': KbGeneric,
    'rates-of-nsc-interest': KbGeneric,
    'rates-of-depreciation-income-tax': KbGeneric,
    'rates-of-depreciation-company-act': KbGeneric,
    'cost-inflation-index': KbGeneric,
    'roc-fee-structure': KbGeneric,
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
    'companies-donation-fund-act': KbGeneric,
    'llp-act': KbGeneric,
    'societies-registration-act': KbGeneric,
    'competition-act': KbGeneric,
    'chartered-accountants-act': KbGeneric,
    'company-secretaries-act': KbGeneric,
    'cost-works-accountants-act': KbGeneric,
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
  }
};
