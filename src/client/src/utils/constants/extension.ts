const EXTENSION_COMMANDS = {
  AZURE_LOGIN: "login",
  AZURE_LOGOUT: "logout",
  GENERATE: "generate",
  GET_OUTPUT_PATH: "get-output-path",
  GET_PROJECT_NAME: "get-project-name",
  GET_USER_STATUS: "get-user-status",
  VALIDATE_COSMOS_NAME: "validate-cosmos-name",
  VALIDATE_APPSERVICE_NAME: "validate-appservice-name",
  PROJECT_PATH_VALIDATION: "project-path-validation",
  GET_RESOURCE_GROUPS: "get-resource-groups",
  GET_LOCATIONS: "get-locations",
  GET_VALID_APP_SERVICE_NAME: "get-valid-app-service-name",
  GET_VALID_COSMOS_NAME: "get-valid-cosmos-name",
  TRACK_PAGE_SWITCH: "track-page-switch",
  TRACK_CREATE_NEW_PROJECT: "track-create-new-project",
  TRACK_PRESS_QUICKSTART: "track-press-quickstart",
  TRACK_OPEN_APP_SERVICE_MODAL_FROM_SERVICES_LIST: "track-open-app-service-modal-from-services-list",
  TRACK_OPEN_COSMOSDB_SERVICE_MODAL_FROM_SERVICES_LIST: "track-open-cosmosdb-service-modal-from-services-list",
  TRACK_OPEN_AZURE_SERVICE_ADVANCED_MODE: "track-open-azure-service-advanced-mode",
  GEN_STATUS: "update-status",
  OPEN_PROJECT_IN_VSCODE: "open-project-vscode",
  GET_TEMPLATE_INFO: "get-template-info",
  CLOSE_WIZARD: "close-wizard",
  GET_VERSIONS: "get-versions",
  GET_DEPENDENCY_INFO: "check-dependency",
  GET_FRAMEWORKS: "get-frameworks",
  GET_ALL_LICENSES: "get-all-licenses",
  GET_LATEST_VERSION:"get-latest-version",
  GET_PAGES: "get-pages",
  GET_FEATURES: "get-features",
  GET_VALIDATIONS: "get-validations",
  LOG: "log",
  OPEN_LOG: "open-log"
};

const EXTENSION_MODULES = {
  AZURE: "Azure",
  GENERATE: "GenerateExperience",
  TELEMETRY: "Telemetry",
  VALIDATOR: "Validator",
  VSCODEUI: "VSCodeUI",
  DEPENDENCYCHECKER: "DependencyChecker",
  CORETS: "CoreTSModule",
  DEFAULTS: "Defaults",
  LOGGER: "Logger",
};

export {
  EXTENSION_COMMANDS,
  EXTENSION_MODULES
};
