import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

export default function useGetMenus() {
  return [
    {
      id: 1,
      name: 'Dashboard',
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
      name: 'Products',
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
      name: 'Albums',
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
