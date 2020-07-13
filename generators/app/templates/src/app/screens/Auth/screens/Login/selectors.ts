import { State } from '@interfaces/reduxInterfaces';

const Selectors = {
  hasError: (state: State) => !!state.auth.currentUserError
};

export default Selectors;
