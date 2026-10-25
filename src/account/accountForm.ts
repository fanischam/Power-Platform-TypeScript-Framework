export namespace Pub {
  export namespace AccountForm {
    export class AccountForm {
      public onFormLoad(executionContext: Xrm.Events.EventContext) {
        try {
          const formContext = executionContext.getFormContext();

          const accountNameAttr = formContext.getAttribute('name');
          accountNameAttr?.addOnChange(this.onAccountNameChange.bind(this));
        } catch (error) {
          console.error(error);
        }
      }

      private onAccountNameChange(executionContext: Xrm.Events.EventContext) {
        try {
          const formContext = executionContext.getFormContext();
          const accountNameAttr =
            formContext.getAttribute<Xrm.Attributes.StringAttribute>('name');
          const accountName = accountNameAttr?.getValue();

          if (accountName) {
            const accountNameUpper = accountName.toUpperCase();
            accountNameAttr?.setValue(accountNameUpper);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
