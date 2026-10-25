namespace Pub {
    export class CommonUtils {
        public static bindOnChangeHandler<T extends Xrm.Attributes.Attribute>(formContext: Xrm.FormContext, attributeName: string[] | string, handler: (executionContext: Xrm.Events.EventContext) => void): void {
            
            (Array.isArray(attributeName) ? attributeName : [attributeName]).forEach(attrName => {
                const attribute = formContext.getAttribute<T>(attrName);
                if (attribute) {
                    attribute.addOnChange(handler);
                }
            });
        }
    }
}