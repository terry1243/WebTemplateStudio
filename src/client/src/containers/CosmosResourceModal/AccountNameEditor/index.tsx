import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import styles from "./styles.module.css";
import classNames from "classnames";
import messages from "./messages";
import { getProjectName } from "../../../selectors/wizardSelectionSelector/wizardSelectionSelector";
import { ReactComponent as Spinner } from "../../../assets/spinner.svg";
import { ReactComponent as GreenCheck } from "../../../assets/checkgreen.svg";
import { ValidateCosmosAccountName, GetValidCosmosAccountName } from "../../../utils/extensionService/extensionService";
import { useSelector } from "react-redux";
import { AppState } from "../../../reducers";
import { getVSCodeApiSelector } from "../../../selectors/vscodeApiSelector";

interface IProps {
  subscription: string;
  accountName: string;
  onAccountNameChange(newAccountName: string): void;
  onIsAvailableAccountNameChange(isAvailable: boolean): void;
}

type Props = IProps & InjectedIntlProps;

const AccountNameEditor = ({
  intl,
  subscription,
  accountName,
  onAccountNameChange,
  onIsAvailableAccountNameChange,
}: Props) => {
  const { formatMessage } = intl;
  const vscode = useSelector((state: AppState) => getVSCodeApiSelector(state));
  const projectName = useSelector((state: AppState) => getProjectName(state));
  const [invalidAccountNameMessage, setInvalidAccountNameMessage] = React.useState("");
  const [isValidatingName, setIsValidatingName] = React.useState(false);

  React.useEffect(() => {
    if (isValidSubscription() && accountName === "") {
      GetValidCosmosAccountName(projectName, vscode).then(event => onAccountNameChange(event.data.payload.validName));
    }
  }, [subscription]);

  React.useEffect(() => {
    onIsAvailableAccountNameChange(false);
    if (accountName !== "") {
      setIsValidatingName(true);
      setTimeout(() => {
        ValidateCosmosAccountName(subscription, accountName, vscode).then(event => {
          setInvalidAccountNameMessage(event.data.payload.errorMessage);
          onIsAvailableAccountNameChange(event.data.payload.isValid);
          setIsValidatingName(false);
        });
      }, 700);
    }
  }, [accountName]);

  const isValidSubscription = (): boolean => {
    return subscription !== "" && subscription !== "Select...";
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerDisabled]: !isValidSubscription(),
      })}
    >
      <div className={styles.title}>{formatMessage(messages.title)}</div>
      <div className={styles.subtitle}>{formatMessage(messages.subtitle)}</div>
      <div className={styles.inputContainer}>
        <input
          aria-label={formatMessage(messages.ariaInputLabel)}
          placeholder={formatMessage(messages.inputPlaceholderMessage)}
          className={styles.input}
          value={accountName}
          onChange={e => onAccountNameChange(e.currentTarget.value)}
          disabled={!isValidSubscription()}
        />
        {accountName !== "" && invalidAccountNameMessage === "" && !isValidatingName && (
          <GreenCheck className={styles.validationIcon} />
        )}
        {isValidatingName && <Spinner className={styles.spinner} />}
      </div>
      {accountName !== "" && !isValidatingName && invalidAccountNameMessage && (
        <div className={styles.errorMessage}>{invalidAccountNameMessage}</div>
      )}
    </div>
  );
};

export default injectIntl(AccountNameEditor);
