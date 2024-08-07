import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from '../../routes/hooks';
import { RouterLink } from '../../routes/components';

import { useResponsive } from '../../hooks/use-responsive';

import avatarImage from '../../../public/assets/images/avatars/lufy2.jpg';

import CookiesAxios from '../../sections/CookiesAxios.js';
import Logo from '../../components/logo';
import Scrollbar from '../../components/scrollbar';
import axios from 'axios';
import { NAV } from './config-layout';
import navConfig from './config-navigation';
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import ComponentLoading from '../dashboard/ComponentLoading/CompnentLoading.tsx';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [dataProfileGiangvien, setdataProfileGiangvien] = useState(null);
  const auth = Cookies.get('accessToken');
  const upLg = useResponsive('up', 'lg');
  console.log('check Open Nav =>', openNav)
  useEffect(() => {
    if (openNav) {
      // onCloseNav();
    }
  }, [pathname, openNav, onCloseNav]);

  useEffect(() => {
    if (auth) {
      const decoded = jwtDecode(auth);
      const fetchData = async () => {
        try {
          const response = await CookiesAxios.get(
            `${process.env.REACT_APP_URL_SERVER}/api/v1/admin/giangvien/only/xemprofile/${decoded.taikhoan}`,
            { withCredentials: true }
          );

          if (response.data.EC === 1) {
            setdataProfileGiangvien(response.data.DT);
            setLoading(false);
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu bộ môn:", error);
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [auth]);

  if (loading) {
    return <ComponentLoading />;
  }

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={avatarImage} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">
          {dataProfileGiangvien.TENGV}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {dataProfileGiangvien.TENCHUCVU}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />

      {renderAccount}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={"/admin" + item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};
