interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Brand Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Brand Owner', 'Project Developer', 'Marketing Manager', 'App Administrator'],
  tenantName: 'Marka',
  applicationName: 'MarketingAgency',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
