interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Business Owner',
    'Outlet Manager',
    'Sales Associate',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Place an order',
    'View personal order history',
    'Update personal information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage outlet information',
    'Manage product information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/8b001ce5-c1f9-4f2f-8932-6fdad4289e70',
};
