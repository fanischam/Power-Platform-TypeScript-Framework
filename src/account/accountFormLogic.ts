namespace Pub {
export class AccountFormLogic {
    public onFormLoad(executionContext: Xrm.Events.EventContext) {
        try {
            const formContext = executionContext.getFormContext();
            CommonUtils.bindOnChangeHandler(formContext, AccountForm.fields.name, this.onAccountNameChange.bind(this, formContext));
            formContext.ui.tabs.get(AccountForm.tabs.tabGeneral)?.sections.get(AccountForm.sections.generalInformation)?.setVisible(true);
        } catch (error) {
            console.error(error);
        }
    }
    
    private onAccountNameChange(formContext: Xrm.FormContext) {
        try {
            const accountNameAttr = formContext.getAttribute<Xrm.Attributes.StringAttribute>(AccountForm.fields.name);
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
