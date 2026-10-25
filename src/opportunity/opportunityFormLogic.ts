import { Pub as Opportunity } from './opportunityForm';
import { Pub as Utils } from '../utils/commonUtils';

export namespace Pub {
  export class OpportunityFormLogic {
    public static onFormLoad(executionContext: Xrm.Events.EventContext) {
      try {
        const formContext = executionContext.getFormContext();
        Utils.CommonUtils.bindOnChangeHandler(
          formContext,
          Opportunity.OpportunityForm.fields.name,
          this.onOpportunityNameChange.bind(this, formContext),
        );
        formContext.ui.tabs
          .get(Opportunity.OpportunityForm.tabs.tabGeneral)
          ?.sections.get(Opportunity.OpportunityForm.sections.generalInformation)
          ?.setVisible(true);
      } catch (error) {
        Utils.CommonUtils.showFormNotification(executionContext.getFormContext(), XrmEnum.FormNotificationLevel.Error, `Error in onFormLoad: ${error}`);
      }
    }

    private static onOpportunityNameChange(formContext: Xrm.FormContext) {
      try {
        const opportunityNameAttr = formContext.getAttribute<Xrm.Attributes.StringAttribute>(
          Opportunity.OpportunityForm.fields.name,
        );
        const opportunityNameValue = opportunityNameAttr?.getValue();

        if (opportunityNameValue) {
          const opportunityNameUpper = opportunityNameValue.toUpperCase();
          opportunityNameAttr?.setValue(opportunityNameUpper);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}