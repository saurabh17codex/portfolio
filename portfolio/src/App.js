import { Grid } from '@mui/material';
import WriteUp  from './components/WriteUp/WriteUp';
import  SkillSphere  from './components/SkillSphere/SkillSphere';
import  ProjectSlides  from './components/ProjectSlides/ProjectSlides';
import  NavBar from './components/NavBar/NavBar';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <Grid container>
      <Grid item xs={12} sx={{border: '1px solid red'}}>
        <NavBar/>
      </Grid>
      <Grid item xs={5} sx={{border: '1px solid red'}}>
        <WriteUp/>
      </Grid>
      <Grid item xs={7} sx={{border: '1px solid red'}}>
        <SkillSphere/>
      </Grid>
      <Grid item xs={12} sx={{border: '1px solid red'}}>
        <ProjectSlides/>
      </Grid>
      <Grid item xs={12} sx={{border: '1px solid red'}}>
        <Resume/>
      </Grid>
    </Grid>
  );
}

export default App;
