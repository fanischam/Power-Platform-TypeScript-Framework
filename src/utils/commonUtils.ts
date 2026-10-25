export namespace Pub {
  export class CommonUtils {
    public static bindOnChangeHandler<T extends Xrm.Attributes.Attribute>(
      formContext: Xrm.FormContext,
      attributeName: string[] | string,
      handler: (executionContext: Xrm.Events.EventContext) => void,
    ): void {
      (Array.isArray(attributeName) ? attributeName : [attributeName]).forEach((attrName) => {
        const attribute = formContext.getAttribute<T>(attrName);
        if (attribute) {
          attribute.addOnChange(handler);
        }
      });
    }

    public static showFormNotification(formContext: Xrm.FormContext, errorType: XrmEnum.FormNotificationLevel = XrmEnum.FormNotificationLevel.Info, message: string): void {
      if (errorType === 'ERROR') {
        console.error(message);
      }
      formContext.ui.setFormNotification(message, errorType, 'customErrorNotification');
    }
  }
}