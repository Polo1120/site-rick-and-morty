import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar"; // sigue usando tu componente
import { HeaderProps } from "../utils/type";

const Header: React.FC<HeaderProps> = ({ query, onSearch, loading }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "Inicio", href: "#home" },
    { text: "Acerca de", href: "#about" },
    { text: "Servicios", href: "#services" },
    { text: "Contacto", href: "#contact" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#333" }}>
        <Toolbar>
          {/* Menu icon para móvil */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box component="a" href="/" sx={{ mr: 2 }}>
            <img src="/logo.png" width={120} alt="Logo" />
          </Box>

          {/* Links - visible en escritorio */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                href={item.href}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* SearchBar personalizado */}
          <Box sx={{ mx: 2 }}>
            <SearchBar onSearch={onSearch} query={query} loading={loading} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para móvil */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
