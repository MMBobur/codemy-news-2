import React, { useState, useEffect, useRef, useContext } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Switch, BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: '50%',
  width: '15%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const baseURL = 'http://localhost:3000/api/category';
import axios from 'axios';


const Navbar = () => {
  const [name, setName] = useState()
  const [color, setColor] = useState()
  const [id, setid] = useState()
  const [Post, setPost] = useState([]);
  const [refresh, setrefresh] = useState(false)

  console.log( "id:", id, "name:", name, "color:" ,color );

  useEffect((token) => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);

    });
  }, [refresh]);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>

      <AppBar position="static"
        style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 0px white',
          borderBottom: '1px solid rgb(222,222,222)'
        }}>
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ width: '100%', color: 'black' }}
            sx={{ display: { sm: 'block' } }}
          >
            <div style={{ display: 'flex', height: '100%', alignItems: 'center', }}>
              <span style={{ marginRight: 40 }}>  WEB<span style={{ fontWeight: 'bold' }}>MAG</span></span>
              {Post.map((item, index) => {
                return (
                  <NavLink key={index} to='/categoryprops'
                    style={{ textDecoration: 'none', color: "black" }}
                  >
                    <div
                      onClick={() => {
                        setid(item.id)
                        setName(item.name)
                        setColor(item.color)
                      }}
                      className='navbarhover'
                      style={{
                        display: 'inline-block',
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderBottom: `3px solid ${item.color}`,
                        marginTop: 3,
                        fontSize: 15,
                        fontWeight: 'bolder',
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                      }}>{item.name}</div>
                  </NavLink>
                )
              })}
            </div>
          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: 'black' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
