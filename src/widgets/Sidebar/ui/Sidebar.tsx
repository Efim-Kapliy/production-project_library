import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import IconHome from 'shared/assets/icons/navlink-home.svg';
import IconAbout from 'shared/assets/icons/navlink-about.svg';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation(['sidebar', 'navbar']);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.navItems}>
        <div className={cls.navItem}>
          <AppLink
            className={cls.navLink}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
          >
            <IconHome className={cls.navIcon} />
            <span className={cls.navText}>
              {t('main', { ns: 'navbar' })}
            </span>
          </AppLink>
        </div>
        <div className={cls.navItem}>
          <AppLink
            className={cls.navLink}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            <IconAbout className={cls.navIcon} />
            <span className={cls.navText}>
              {t('about', { ns: 'navbar' })}
            </span>
          </AppLink>
        </div>
      </div>

      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {/* {t('btn-toggle')} */}
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
