import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function useGetMenus() {
  const { t } = useTranslation();
  const theme = useTheme();

  const menus = [
    {
      name: t('dashboard'),
      route: '/',
      icon: (
        <DashboardCustomizeOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
    },
    {
      name: t('products'),
      route: '/products',
      icon: (
        <ProductionQuantityLimitsOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
    },
    {
      name: t('albums'),
      route: '/albums',
      icon: (
        <CollectionsOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
    },
    {
      name: 'Nested',
      route: '/nested',
      icon: (
        <CollectionsOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
      children: [
        {
          name: 'Child One',
          route: '/child-one',
          icon: (
            <CollectionsOutlinedIcon
              sx={{
                marginX: 1,
              }}
            />
          ),
        },
        {
          name: 'Child Two',
          route: '/child-two',
          icon: (
            <CollectionsOutlinedIcon
              sx={{
                marginX: 1,
              }}
            />
          ),
        },
      ],
    },
    {
      name: 'test',
      route: '/test',
      icon: (
        <CollectionsOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
    },
  ];

  const profileMenus = [
    {
      name: 'View Profile',
      route: '/profile',
      icon: (
        <AccountCircleOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            marginRight: 2,
          }}
        />
      ),
    },
    {
      name: 'Billing',
      route: '/billings',
      icon: (
        <CreditCardOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            marginRight: 2,
          }}
        />
      ),
    },
    {
      name: 'History',
      route: '/history',
      icon: (
        <ManageHistoryOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            marginRight: 2,
          }}
        />
      ),
    },
    {
      name: 'Settings',
      route: '/settings',
      icon: (
        <SettingsOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            marginRight: 2,
          }}
        />
      ),
    },
  ];

  return { menus, profileMenus };
}
