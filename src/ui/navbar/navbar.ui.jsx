import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { link: "Home", path: "/" },
  { link: "Find a doctor", path: "/doctor" },
  { link: "Apps", path: "/apps" },
  { link: "Testimonials", path: "/testimonials" },
  { link: "About us", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        className="!flex justify-center items-center">
        <Typography
          component="span"
          className="!h-10 !w-10 !rounded-full !bg-[--color-primary] !text-white !text-xl md:!text-3xl flex items-center justify-center">
          T
        </Typography>
        <Typography
          as="span"
          className="!pl-2 !font-bold !text-lg md:!text-2xl !text-[#233348]">
          Trafalgar
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav" className="!bg-white !shadow-none">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            className="!text-[--color-dark]"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="flex items-center">
            <Box as="div" className="!flex !items-center">
              <Typography
                component="span"
                className="!h-10 !w-10 !rounded-full !bg-[--color-primary] !text-white !text-xl md:!text-3xl flex items-center justify-center">
                T
              </Typography>
              <Typography
                as="span"
                className="!pl-2 !font-bold !text-lg md:!text-2xl !text-[#233348]">
                Trafalgar
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.link}
                className="!text-[--color-nav] !text-sm  md:!text-lg !normal-case"
                component={NavLink}
                to={item.path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "700" : "400",
                  opacity: isActive ? "1" : "0.5",
                })}>
                {item.link}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
