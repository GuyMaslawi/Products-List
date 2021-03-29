import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export function useSmallScreen() {
   const theme = useTheme();
   return useMediaQuery(theme.breakpoints.down('xs'));
}