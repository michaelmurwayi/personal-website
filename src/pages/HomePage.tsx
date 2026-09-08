import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
    ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TypewriterEffect } from '@/common/components/TypewriterEffect';
import { StarsVideo } from '@/common/components/StarsVideo';
import { coreStack, education, experiences, projects, skills } from './homeData';


// Landing page. Each top-level <section> is anchored so the navigation can
// scroll to it as same-page (single-page) navigation.
export const HomePage = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero / Header — the transparent nav overlays this section. */}
      <Box
        id="hero"
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0d',
          color: '#ffffff',
        }}
      >
        <StarsVideo />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            alignItems={{ xs: 'center', md: 'center' }}
            justifyContent={{ md: 'space-between' }}
          >
            {
              /* Left side — main content, left-justified. */
            }
            <Box sx={{ flex: { md: '1 1 0%' } }}>
              <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ fontWeight: 500, letterSpacing: '0.02em', color: '#9ca3af' }}
                >
                  Software Developer · Nairobi, Kenya
                </Typography>

                <Box>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontFamily: 'Impact, Impact, sans-serif',
                      fontWeight: 800,
                      lineHeight: 1.05,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                    }}
                  >
                    Michael
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontFamily: 'Impact, Impact, sans-serif',
                      fontWeight: 800,
                      lineHeight: 1.05,
                      color: '#22c55e',
                      textTransform: 'uppercase',
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                    }}
                  >
                    Murwayi
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontSize: '0.85rem',
                    maxWidth: { xs: '100%', sm: 480 },
                    lineHeight: 1.5,
                    color: '#9ca3af',
                  }}
                >
                  Full-Stack Engineer with 7+ years building scalable enterprise applications, REST
                  APIs, ERP systems, and cloud-native platforms.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap' }}>
                  <Button
                    href="#projects"
                    variant="outlined"
                    sx={{
                      textTransform: 'none',
                      borderRadius: 0,
                      px: 3,
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                    }}
                  >
                    View work
                  </Button>
                  <Button
                    href="/media/cv.pdf"
                    download
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      borderRadius: 0,
                      px: 3,
                      backgroundColor: '#22c55e',
                      color: '#0a0a0d',
                      fontWeight: 700,
                      '&:hover': { backgroundColor: '#1a9e53' },
                    }}
                  >
                    Download CV
                  </Button>
                </Stack>
              </Stack>
            </Box>

                        <Box
              sx={{
                position: 'absolute',
                bottom: { xs: -80, md: -30 },
                top: { xs: 'auto', md: '50%' },
                left: { xs: 'auto', md: 'auto' },
                right: { xs: '5%', md: '15%' },
                transform: { xs: 'none', md: 'translateY(-50%)' },
                textAlign: { xs: 'center', md: 'left' },
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  color: '#9ca3af',
                }}
              >
                CORE STACK
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Impact, Impact, sans-serif',
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  fontWeight: 800,
                  color: '#22c55e',
                  lineHeight: 1.1,
                }}
              >
                <TypewriterEffect words={coreStack} onActiveIndexChange={setActiveSkill} />
              </Typography>

              {/* Slideshow dot indicator */}
              <Stack direction="row" useFlexGap spacing={0.8} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 1 }}>
                {coreStack.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: activeSkill === index ? '#22c55e' : 'rgba(255, 255, 255, 0.3)',
                      transition: 'background-color 200ms ease-in-out',
                    }}
                  />
                ))}
                            </Stack>
            </Box>
          </Stack>
        </Container>

        <Box
          sx={{
            position: 'absolute',
            bottom: 2,
            left: '50%',
            animation: 'arrow-bounce 2s ease-in-out infinite',
            color: 'rgba(255, 255, 255, 0.5)',
            zIndex: 2,
          }}
          aria-hidden="true"
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </Box>
      </Box>

      {/* About */}
      <Box
        component="section"
        id="about"
        py={{ xs: 6, md: 8 }}
        sx={{ position: 'relative', backgroundColor: '#0a0a0d', color: '#ffffff' }}
      >
        <StarsVideo />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ mb: 4 }}>
            <Box height="2px" width="100%" bgcolor="#9ca3af" />
          </Box>
          <Box
            display="grid"
            sx={{ gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' }, gap: { xs: 5, md: 6 } }}
          >
            {/* Left column — headline metric and key numbers. */}
            <Stack spacing={3}>
              <Typography
                variant="body1"
                component="h2"
                sx={{
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#d1d5db',
                  mb: 2,
                }}
              >
                About
              </Typography>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontFamily: 'Impact, Impact, sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  color: '#ffffff',
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                }}
              >
                SENIOR SOFTWARE ENGINEER
              </Typography>

              <Stack spacing={4}>
                <Stack spacing={3}>
                  <Box display="grid" gridTemplateColumns={{ xs: '1fr 1fr' }} gap={4} columnGap={4}>
                    <Box>
                      <Box height="2px" bgcolor="rgba(255, 255, 255, 0.25)" mb={2} />
                      <Typography
                        sx={{
                          fontFamily: 'Impact, Impact, sans-serif',
                          fontSize: { xs: '2rem', md: '3rem' },
                          lineHeight: 1,
                          fontWeight: 800,
                          color: '#ffffff',
                        }}
                      >
                        5+
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                        Years experience
                      </Typography>
                    </Box>
                    <Box>
                      <Box height="2px" bgcolor="rgba(255, 255, 255, 0.25)" mb={2} />
                      <Typography
                        sx={{
                          fontFamily: 'Impact, Impact, sans-serif',
                          fontSize: { xs: '2rem', md: '3rem' },
                          lineHeight: 1,
                          fontWeight: 800,
                          color: '#ffffff',
                        }}
                      >
                        3
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                        Production systems
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="grid" gridTemplateColumns={{ xs: '1fr 1fr' }} gap={4} columnGap={4}>
                    <Box>
                      <Box height="2px" bgcolor="rgba(255, 255, 255, 0.25)" mb={2} />
                      <Typography
                        sx={{
                          fontFamily: 'Impact, Impact, sans-serif',
                          fontSize: { xs: '2rem', md: '3rem' },
                          lineHeight: 1,
                          fontWeight: 800,
                          color: '#ffffff',
                        }}
                      >
                        4
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                        Companies served
                      </Typography>
                    </Box>
                    <Box>
                      <Box height="2px" bgcolor="rgba(255, 255, 255, 0.25)" mb={2} />
                      <Typography
                        sx={{
                          fontFamily: 'Impact, Impact, sans-serif',
                          fontSize: { xs: '2rem', md: '3rem' },
                          lineHeight: 1,
                          fontWeight: 800,
                          color: '#ffffff',
                        }}
                      >
                        20+
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                        Projects completed
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Stack>

                        {/* Right column — bio, then contact details. */}
            <Stack spacing={3} className="animate-slide-in-right">
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Full-Stack Software Engineer with 7+ years of experience designing and building
                  scalable enterprise applications, REST APIs, ERP systems, and cloud-native platforms.
                </Typography>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Specialized in Python (FastAPI, Django), React, PostgreSQL, Docker, and cloud
                  deployment. Experienced in transaction processing systems, GIS applications, data
                  pipelines, AI-powered solutions, and automation platforms.
                </Typography>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Passionate about building secure, maintainable, production-grade software. Based in
                  Nairobi, Kenya.
                </Typography>
              </Stack>

              <Box height="1px" bgcolor="rgba(255, 255, 255, 0.2)" />

              <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#9ca3af' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                    mikemurwayi7@gmail.com
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#9ca3af' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                    +254 746 256 084
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#9ca3af' }}>
                    GitHub
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                    github.com/michaelmurwayi
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Experience */}
      <Box component="section" id="experience" py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 1 }}>
                        <Box height="2px" width="100%" bgcolor="#9ca3af" className="animate-fade-in" />
          </Box>
          <Typography
            variant="body1"
            component="h2"
            className="animate-fade-in-up"
            sx={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#6b7280', mb: 4 }}
          >
            Work Experience
          </Typography>

                    <Stack spacing={5}>
            {experiences.map((exp, index) => (
              <Box
                key={exp.company}
                className={`animate-fade-in-up delay-${index + 1}`}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' },
                  gap: { xs: 3, md: 5 },
                  pb: 5,
                  borderBottom: '1px solid #e5e7eb',
                  '&:last-of-type': { borderBottom: 'none', pb: 0 },
                }}
              >
                {/* Left column — dates, company, position, technologies. */}
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#6b7280' }}>
                    {exp.period}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontFamily: 'Impact, Impact, sans-serif', fontWeight: 900, color: '#000000', mt: 1, letterSpacing: '0.01em', textShadow: '0 0 0 #000000, 0 1px 0 #000000' }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#9ca3af', mt: 0.5 }}>
                    {exp.role}
                  </Typography>
                  <Stack direction="row" useFlexGap flexWrap="wrap" sx={{ gap: 1, mt: 1.5 }}>
                    {exp.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderRadius: 0,
                          borderColor: '#9ca3af',
                          color: '#374151',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Right column — description of roles as a bulleted list. */}
                <Box>
                  <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                    Responsibilities
                  </Typography>
                  <List disablePadding>
                    {exp.bullets.map((bullet) => (
                      <ListItem key={bullet} disableGutters disablePadding sx={{ alignItems: 'flex-start', py: 0.35 }}>
                        <ListItemIcon sx={{ minWidth: 24, color: '#22c55e', mt: 0.25 }}>
                          <Typography component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.4 }}>
                            •
                          </Typography>
                        </ListItemIcon>
                        <ListItemText
                          primary={bullet}
                          primaryTypographyProps={{ variant: 'body2', color: '#4b5563' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Projects */}
      <Box component="section" id="projects" py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box height="2px" width="100%" bgcolor="#9ca3af" />
          <Box sx={{ mb: 4, mt: 1 }}>
            <Typography
              variant="body1"
              component="h2"
              sx={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#374151' }}
            >
              Projects
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(320px, 1fr))' },
              gap: 4,
            }}
          >
                        {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`project-card animate-scale-in delay-${index + 1}`}
                sx={{
                  borderRadius: 0,
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: 'none',
                  border: '1px solid #e5e7eb',
                  transition:
                    'background-color 220ms ease-in-out, color 220ms ease-in-out, border-color 220ms ease-in-out',
                  '&:hover': {
                    backgroundColor: '#0a0a0d',
                    color: '#ffffff',
                    borderColor: '#0a0a0d',
                  },
                  '&:hover .project-title': {
                    color: '#ffffff',
                  },
                }}
              >
                                                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="project-title"
                    sx={{ fontWeight: 800, color: '#000000' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ mt: 0.5, color: '#9ca3af' }}>
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ mt: 1.5, color: '#6b7280' }}>
                    {project.about}
                  </Typography>

                  <Stack direction="row" useFlexGap flexWrap="wrap" sx={{ gap: 1, mt: 1.5 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderRadius: 0,
                          borderColor: '#9ca3af',
                          color: '#374151',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    variant="button"
                    component="a"
                    href={project.url}
                    sx={{
                      mt: 'auto',
                      pt: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      fontWeight: 700,
                      color: '#22c55e',
                      textTransform: 'none',
                      textDecoration: 'none',
                      '&:hover': { color: '#ffffff' },
                    }}
                  >
                    View Project
                    <Typography component="span" sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
                      ↗
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

            {/* Skills */}
      <Box
        component="section"
        id="skills"
        py={{ xs: 6, md: 8 }}
        sx={{ backgroundColor: '#0a0a0d' }}
      >
        <Container maxWidth="lg">
                    <Box height="2px" width="100%" bgcolor="#9ca3af" className="animate-fade-in" />
          <Box sx={{ mb: 4, mt: 1 }}>
            <Typography
              variant="body1"
              component="h2"
              className="animate-fade-in-up"
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d1d5db',
              }}
            >
              Skills
            </Typography>
          </Box>

                                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, gap: 4 }}>
            {skills.map((category, index) => (
              <Box key={category.name}>
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#22c55e',
                    mb: 1.5,
                  }}
                >
                  {category.name}
                </Typography>
                <Stack direction="column" spacing={1}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: 0,
                        borderColor: '#9ca3af',
                        color: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        alignSelf: 'flex-start',
                        '&:hover': {
                          borderColor: '#22c55e',
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          color: '#22c55e',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Education */}
      <Box component="section" id="education" py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#0a0a0d' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, mt: 1 }}>
            <Box height="2px" width="100%" bgcolor="#9ca3af" />
            <Typography
              variant="body1"
              component="h2"
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d1d5db',
                mt: 1,
              }}
            >
              Education
            </Typography>
          </Box>

          <Box
            display="grid"
            sx={{
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
            }}
          >
            {education.map((edu) => (
              <Box key={edu.institution}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Impact, Impact, sans-serif',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontSize: { xs: '1rem', md: '1.3rem' },
                  }}
                >
                  {edu.institution}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#22c55e',
                    fontWeight: 600,
                    mt: 0.5,
                  }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#9ca3af',
                    fontStyle: 'italic',
                    mt: 0.5,
                  }}
                >
                  {edu.period}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact */}
            <Box component="section" id="contact" py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, mt: 1 }}>
            <Box height="2px" width="100%" bgcolor="#9ca3af" />
            <Typography
              variant="body1"
              component="h2"
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#374151',
                mt: 1,
              }}
            >
              Contact
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'start',
            }}
          >
                        {/* Left column — stacked BUILD COOL STUFF + lets build together */}
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 200 }}>
              <Box>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontFamily: 'Impact, Impact, sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    color: '#0a0a0d',
                    textTransform: 'uppercase',
                    fontSize: { xs: '2.5rem', md: '65px' },
                  }}
                >
                  Build
                </Typography>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontFamily: 'Impact, Impact, sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    color: '#22c55e',
                    textTransform: 'uppercase',
                    fontSize: { xs: '2.5rem', md: '65px' },
                  }}
                >
                  Cool
                </Typography>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontFamily: 'Impact, Impact, sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    color: '#0a0a0d',
                    textTransform: 'uppercase',
                    fontSize: { xs: '2.5rem', md: '65px' },
                  }}
                >
                  Stuff
                </Typography>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Impact, Impact, sans-serif',
                    fontWeight: 700,
                    color: '#0a0a0d',
                    mb: 1,
                  }}
                >
                  Let's build together
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280', mb: 2 }}>
                  Open to full-time roles, freelance projects, and collaborations.
                  Response time is typically 24–48 hours.
                </Typography>
                <Button
                  variant="outlined"
                  color="success"
                  href="/media/cv.pdf"
                  download
                  sx={{
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 0,
                    borderColor: '#22c55e',
                    color: '#22c55e',
                    '&:hover': {
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      borderColor: '#22c55e',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Box>

                        {/* Right column — contact info */}
            <Box>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6b7280', wordBreak: 'break-word' }}>
                    mikemurwayi7@gmail.com
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6b7280' }}>
                    +254 746 256 084
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
                    GitHub
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6b7280', wordBreak: 'break-word' }}>
                    github.com/michaelmurwayi
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
