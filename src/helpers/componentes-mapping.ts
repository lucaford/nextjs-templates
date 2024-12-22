import {
  DiscoverWithBulletPoints,
  DiscoverWithCheckPoints,
  Footer,
  FooterMinimalist,
  LeadMailList,
  SimplePricing,
  SimplePricingWithBackground,
  SimpleWithBackground,
  SimpleWithoutBackground,
  TitleWithImages,
} from "@/sections";

const componentMap: Record<string, React.FC<any>> = {
  Footer,
  FooterMinimalist,
  DiscoverWithBulletPoints,
  DiscoverWithCheckPoints,
  SimpleWithBackground,
  SimpleWithoutBackground,
  LeadMailList,
  SimplePricing,
  SimplePricingWithBackground,
  TitleWithImages,
};

export default componentMap;
