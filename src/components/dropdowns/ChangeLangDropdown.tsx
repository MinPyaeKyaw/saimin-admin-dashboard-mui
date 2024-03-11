import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import {
  Tooltip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGS } from '@configs/langs';
import useUserStore from '@stores/userStore';

export function ChangeLangDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  // * variables for toggling dropdown
  const open = Boolean(anchorEl);
  const id = open ? 'lang-popover' : undefined;

  const { i18n, t } = useTranslation();
  const { changeLang } = useUserStore();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (lang: LangType): void => {
    i18n.changeLanguage(lang);
    changeLang(lang);
    handleClose();
  };

  return (
    <>
      <Tooltip title="Change Language">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <LanguageIcon color="primary" />
        </IconButton>
      </Tooltip>

      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <List>
          {SUPPORTED_LANGS.map((lang) => (
            <ListItemButton
              key={lang.value}
              onClick={() => handleChangeLang(lang.value as LangType)}
            >
              <ListItem disableGutters>
                <Typography>{t(lang.label)}</Typography>
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  );
}
