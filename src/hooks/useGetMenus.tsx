import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import { useTranslation } from 'react-i18next';

export default function useGetMenus() {
  const { t } = useTranslation();

  return [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 3,
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
          id: 1,
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
          id: 2,
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
      id: 9,
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
    {
      id: 10,
      name: 'New One',
      route: '/new-one',
      icon: (
        <CollectionsOutlinedIcon
          sx={{
            marginX: 1,
          }}
        />
      ),
    },
  ];
}
