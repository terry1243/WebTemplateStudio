import { WIZARD_SELECTION_TYPEKEYS } from "../../../actions/wizardSelectionActions/typeKeys";

export interface IProjectPathValidationAction {
  type: WIZARD_SELECTION_TYPEKEYS.SET_PROJECT_PATH_VALIDATION;
  payload: any; //FIXME: Type is declared in future PR in validation reducer, replace when merged
}