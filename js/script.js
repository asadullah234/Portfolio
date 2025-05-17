const sideMenu=document.querySelector('#sideMenu');
const navbar=document.querySelector("nav");
   const navLinks=document.querySelector("nav ul");

 function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';

 }
 function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
    
 
   }
   window.addEventListener('scroll',()=>
   {
      if(scrollY > 50){
      navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm ')
   navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50')
   }
      
      else{
         
      navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm ')
      navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50')
      }
   })

 
   // Initialize theme based on user preference or system preference
document.addEventListener('DOMContentLoaded', function() {
   // Check for saved theme preference or use system preference
   const savedTheme = localStorage.getItem('theme');
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
   
   // Set initial theme
   if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
       document.documentElement.classList.add('dark');
       updateThemeIcon(true);
   } else {
       document.documentElement.classList.remove('dark');
       updateThemeIcon(false);
   }
});

// Toggle theme function
function toggleTheme() {
   const isDark = document.documentElement.classList.toggle('dark');
   
   // Save theme preference to localStorage
   localStorage.setItem('theme', isDark ? 'dark' : 'light');
   
   // Update the icon
   updateThemeIcon(isDark);
}

// Update moon/sun icon based on current theme
function updateThemeIcon(isDark) {
   const themeIcon = document.querySelector('button[onclick="toggleTheme()"] img');
   
   if (themeIcon) {
       if (isDark) {
           themeIcon.src = "images/sun_icon.png"; // Change to sun icon in dark mode
           themeIcon.alt = "Switch to Light Mode";
       } else {
           themeIcon.src = "images/moon_icon.png"; // Change to moon icon in light mode
           themeIcon.alt = "Switch to Dark Mode";
       }
   }
}

// Mobile menu functions
function openMenu() {
   document.getElementById('sideMenu').style.right = '0';
}

function closeMenu() {
   document.getElementById('sideMenu').style.right = '-16rem'; // -64 in rem
}