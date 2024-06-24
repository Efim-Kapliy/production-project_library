import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('notFoundPage');
  return <div className={classNames(cls.notFoundPage, {}, [className])}>{t('not-found-page')}</div>;
};
