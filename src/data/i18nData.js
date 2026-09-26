import { useLanguage } from '../context/LanguageContext'
import {
  site,
  navLinks,
  hero,
  features,
  stats,
  rating,
  processSteps,
  contactHighlights,
  successCases,
} from './site'
import {
  siteEn,
  navLinksEn,
  heroEn,
  featuresEn,
  statsEn,
  ratingEn,
  processStepsEn,
  contactHighlightsEn,
  successCasesEn,
} from './site.en'
import { serviceCategories } from './services'
import { serviceCategoriesEn } from './services.en'
import { solutions } from './solutions'
import { solutionsEn } from './solutions.en'
import { industryGroups } from './industries'
import { industryGroupsEn } from './industries.en'
import { demoCves, securityPoints, timeAgoLabel } from './cves'
import { demoCvesEn, securityPointsEn, timeAgoLabelEn } from './cves.en'
import { t } from './translations'

export function useLocalizedData() {
  const { lang, setLang, toggleLang, isEn } = useLanguage()
  const strings = t[lang] || t.es

  return {
    lang,
    setLang,
    toggleLang,
    isEn,
    t: strings,
    site: isEn ? siteEn : site,
    navLinks: isEn ? navLinksEn : navLinks,
    hero: isEn ? heroEn : hero,
    features: isEn ? featuresEn : features,
    stats: isEn ? statsEn : stats,
    rating: isEn ? ratingEn : rating,
    processSteps: isEn ? processStepsEn : processSteps,
    contactHighlights: isEn ? contactHighlightsEn : contactHighlights,
    successCases: isEn ? successCasesEn : successCases,
    serviceCategories: isEn ? serviceCategoriesEn : serviceCategories,
    solutions: isEn ? solutionsEn : solutions,
    industryGroups: isEn ? industryGroupsEn : industryGroups,
    demoCves: isEn ? demoCvesEn : demoCves,
    securityPoints: isEn ? securityPointsEn : securityPoints,
    timeAgoLabel: isEn ? timeAgoLabelEn : timeAgoLabel,
  }
}
