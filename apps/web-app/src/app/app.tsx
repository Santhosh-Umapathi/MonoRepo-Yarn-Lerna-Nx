import NxWelcome from './nx-welcome';

import { TCheck } from '@monorepo/models';

export function App() {
  const chec: TCheck = 'asf';
  return (
    <>
      <NxWelcome title="web-app" />
      <div />
    </>
  );
}

export default App;
