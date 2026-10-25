import { Pub as Account } from './accountForm';
import { Pub as Utils } from '../utils/commonUtils';

export namespace Pub {
  export class AccountFormLogic {
    public static onFormLoad(executionContext: Xrm.Events.EventContext) {
      try {
        const formContext = executionContext.getFormContext();
        Utils.CommonUtils.bindOnChangeHandler(
          formContext,
          Account.AccountForm.fields.name,
          this.onAccountNameChange.bind(this, formContext),
        );
        formContext.ui.tabs
          .get(Account.AccountForm.tabs.tabGeneral)
          ?.sections.get(Account.AccountForm.sections.generalInformation)
          ?.setVisible(true);
      } catch (error) {
        Utils.CommonUtils.showFormNotification(executionContext.getFormContext(), XrmEnum.FormNotificationLevel.Error, `Error in onFormLoad: ${error}`);
      }
    }

    private static onAccountNameChange(formContext: Xrm.FormContext) {
      try {
        const accountNameAttr = formContext.getAttribute<Xrm.Attributes.StringAttribute>(
          Account.AccountForm.fields.name,
        );
        const accountNameValue = accountNameAttr?.getValue();

        if (accountNameValue) {
          const accountNameUpper = accountNameValue.toUpperCase();
          accountNameAttr?.setValue(accountNameUpper);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
