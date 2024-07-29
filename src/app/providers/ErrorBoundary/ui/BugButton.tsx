import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoudary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('errorBoundary');

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {t('bug-button')}
    </Button>
  );
};
