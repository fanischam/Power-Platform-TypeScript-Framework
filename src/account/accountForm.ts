export namespace Pub {
  export class AccountForm {
    public static entityLogicalName = 'account';

    public static fields = {
      name: 'name',
      accountNumber: 'accountnumber',
      telephone1: 'telephone1',
      emailAddress1: 'emailaddress1',
      websiteUrl: 'websiteurl',
      description: 'description',
    };

    public static tabs = {
      tabGeneral: 'tab_general',
      tabDetails: 'tab_details',
    };

    public static sections = {
      generalInformation: 'tab_general_section_general_information',
      contactInformation: 'tab_general_section_contact_information',
      additionalInformation: 'tab_details_section_additional_information',
    };
  }
}
