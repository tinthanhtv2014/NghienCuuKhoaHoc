import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, icon, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={2} // Khoảng cách giữa các hàng
      direction="column" // Thiết lập bố trí theo cột
      sx={{
        width: 200, // Chiều rộng cố định cho thẻ
        height: 200, // Chiều cao cố định cho thẻ
        px: 3,
        py: 5,
        borderRadius: 2,
        alignItems: 'center', // Căn giữa các phần tử theo chiều ngang
        textAlign: 'center', // Căn giữa văn bản
        filter: 'drop-shadow(0.20em 0.20em 0.2em)', // Đổ bóng đậm hơn cho thẻ
        ...sx,
      }}
      {...other}
    >
      {icon && (
        <Box
          sx={{
            width: 64,
            height: 64,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          {React.cloneElement(icon, { style: { width: '100%', height: '100%' } })}
        </Box>
      )}

      <Typography variant="h5" sx={{ color: '#21409A', fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string.isRequired,
};

