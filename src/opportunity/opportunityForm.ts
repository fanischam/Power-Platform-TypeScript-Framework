export namespace Pub {
  export class OpportunityForm {
    public static entityLogicalName = 'opportunity';

    public static fields = {
      name: 'name',
      customerId: 'customerid',
      estimatedValue: 'estimatedvalue',
      closeProbability: 'closeprobability',
      estimatedCloseDate: 'estimatedclosedate',
      description: 'description',
    };

    public static tabs = {
      tabGeneral: 'tab_general',
      tabDetails: 'tab_details',
    };

    public static sections = {
      generalInformation: 'tab_general_section_general_information',
      contactInformation: 'tab_general_section_contact_information',
    };
  }
}