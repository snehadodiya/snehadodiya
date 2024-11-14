import React, { useState } from 'react';
import { Box, Grid, Typography, Container, List, ListItem, ListItemText, Link  } from '@mui/material';
import JobCard from '../../components/FavouriteJobComponents/JobCard.jsx';
import PaginationComponent from '../../components/BrowseCandidateComponents/Pagination';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


const jobData = [
  {
    jobTitle: 'Software Engineer',
    jobTiming: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    deadline: '3 days remaining',
  },
  {
    jobTitle: 'Software Engineer',
    jobTiming: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    deadline: '3 days remaining',
  },
  
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'Product Manager',
    jobTiming: 'Full-time',
    location: 'Chicago, IL',
    salary: '$110,000 - $130,000',
    deadline: '1 day remaining',
  },
 
  {
    jobTitle: 'Software Engineer',
    jobTiming: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    deadline: '3 days remaining',
  },
  {
    jobTitle: 'Data Scientist',
    jobTiming: 'Part-time',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    deadline: 'Deadline expired',
  },
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'Product Manager',
    jobTiming: 'Full-time',
    location: 'Chicago, IL',
    salary: '$110,000 - $130,000',
    deadline: '1 day remaining',
  },
 
  {
    jobTitle: 'Software Engineer',
    jobTiming: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    deadline: '3 days remaining',
  },
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'Software Engineer',
    jobTiming: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    deadline: '3 days remaining',
  },
  
  {
    jobTitle: 'UI/UX Designer',
    jobTiming: 'Full-time',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $90,000',
    deadline: '5 days remaining',
  },
  {
    jobTitle: 'Product Manager',
    jobTiming: 'Full-time',
    location: 'Chicago, IL',
    salary: '$110,000 - $130,000',
    deadline: '1 day remaining',
  },
  {
    jobTitle: 'Web Developer',
    jobTiming: 'Full-time',
    location: 'Seattle, WA',
    salary: '$95,000 - $105,000',
    deadline: 'Deadline expired',
  },
  // Add other job entries here...
];

const FavouriteJobPage = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [sortedJobs] = useState(jobData);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(sortedJobs.length / perPage);
  const jobsToShow = sortedJobs.slice((page - 1) * perPage, page * perPage);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#ffffff', overflow: 'hidden' }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: '20%',
          bgcolor: '#ffffff',
          color: '#333',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderRight: `1px solid #f5f5f5`,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 ,color: "#9199A3",padding: '8px 16px'}}>
          Candidate Dashboard
        </Typography>
        <List sx={{ width: '100%' }}>
  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: '100%',
      color: '#767F8C',
      paddingY: '12px',
      paddingLeft: '16px', // Add padding on the left
      '&:hover': {
        color: '#0A65CC',
        backgroundColor: '#E7F0FA',
        borderLeft: '2px solid #0A65CC', // Add left border on hover
      },
    }}
  >
    <DashboardIcon sx={{ marginRight: '8px' }} />
    Overview
  </Link>

  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: '100%',
      color: '#767F8C',
      paddingY: '12px',
      paddingLeft: '16px', // Add padding on the left
      '&:hover': {
        color: '#0A65CC',
        backgroundColor: '#E7F0FA',
        borderLeft: '2px solid #0A65CC',
      },
    }}
  >
    <WorkIcon sx={{ marginRight: '8px' }} />
    Applied Jobs
  </Link>

  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: '100%',
      color: '#767F8C',
      paddingY: '12px',
      paddingLeft: '16px', // Add padding on the left
      '&:hover': {
        color: '#0A65CC',
        backgroundColor: '#E7F0FA',
        borderLeft: '2px solid #0A65CC',
      },
    }}
  >
    <FavoriteIcon sx={{ marginRight: '8px' }} />
    Favourite Jobs
  </Link>

  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: '100%',
      color: '#767F8C',
      paddingY: '12px',
      paddingLeft: '16px', // Add padding on the left
      '&:hover': {
        color: '#0A65CC',
        backgroundColor: '#E7F0FA',
        borderLeft: '2px solid #0A65CC',
      },
    }}
  >
    <NotificationsIcon sx={{ marginRight: '8px' }} />
    Job Alerts
  </Link>

  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: '100%',
      color: '#767F8C',
      paddingY: '12px',
      paddingLeft: '16px', // Add padding on the left
      '&:hover': {
        color: '#0A65CC',
        backgroundColor: '#E7F0FA',
        borderLeft: '2px solid #0A65CC',
      },
    }}
  >
    <SettingsIcon sx={{ marginRight: '8px' }} />
    Settings
  </Link>
</List>

      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ flex: 1, padding: '2rem', bgcolor: '#ffffff' }}>
        <Typography variant="h4" sx={{ mb: 4 ,display:'flex'}}>
          Favourite Jobs <Typography variant="h6" color='#767F8C' sx={{mt:1}} >({ jobData.length})</Typography>
         
        </Typography>

        {/* Jobs List */}
        <Grid container spacing={2}>
          {jobsToShow.map((job, index) => (
            <Grid item xs={12} key={index}>
              <JobCard {...job} />
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <PaginationComponent count={totalPages} page={page} onChange={handlePageChange} />
        </Box>
      </Container>
    </Box>
  );
};

export default FavouriteJobPage;




