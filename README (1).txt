GNAT Community                                                                  
--------------                                                                  
                                                                                
This contains the GNAT Community edition.                                       
                                                                                
The packages for the native platforms contain:                                  
                                                                                
  - the GNAT compiler toolchain                                                 
  - the SPARK Ada verification and prover toolset                               
  - the Libadalang library                                                      
  - the GNAT Studio IDE                                                         
                                                                                
The packages for the embedded platforms (ARM and RISC-V) only contain the       
GNAT compiler toolchain for that target, so we recommend installing the         
native package as well.                                                         
                                                                                
Installing                                                                      
----------                                                                      
                                                                                
On Windows:                                                                     
                                                                                
  Simply run the .exe and follow the instructions.                              
                                                                                
On Linux:                                                                       
                                                                                
  You will need to make the package executable before running it. In a command  
  prompt, execute                                                               
                                                                                
     chmod +x path_to_the_package-bin                                           
                                                                                
  then execute the package.                                                     
                                                                                
Automated installation                                                          
----------------------                                                          
                                                                                
To automate the installation, use the scripts provided here:                    
                                                                                
  https://github.com/AdaCore/gnat_community_install_script                      
                                                                                
Using                                                                           
-----                                                                           
                                                                                                                                            1,14          
To start using the tools in command-line mode, you will need to add             
                                                                                
   <install_prefix>/bin                                                         
                                                                                
to your PATH environment variable. Alternatively, you can simply launch         
                                                                                
   <install_prefix>/bin/gnatstudio                                              
                                                                                
and GNAT Studio will automatically add itself to the PATH - it will also        
find the cross compiler, if you have installed everything in the default        
locations. Note that GNAT Studio will add this at the *end* of the PATH,        
meaning that it will find first any other GNAT installations that you           
have in your PATH.                                                              
                                                                                
Platform-specific notes                                                         
-----------------------                                                         
                                                                                
== OpenSUSE: use the system ld ==                                               
                                                                                
On OpenSUSE, the ld shipped with GNAT Community is not compatible               
with the system libraries: use the system-provided ld instead, by               
removing the file                                                               
                                                                                
   libexec/gcc/x86_64-pc-linux-gnu/8.3.1/ld                                     
                                                                                
from your installation.                                                         
                                                                                
== Fedora ==                                                                    
                                                                                
If developer packages are not yet installed, you might need to                  
install extra packages, by executing the following in a terminal:               
                                                                                
  sudo dnf install make                                                         
  sudo dnf install ncurses-compat-libs                                          
                                                                                
== Flashing to boards on Linux ==   

To flash boards (such as the BBC micro:bit board) using the pyocd integration   
in GNAT Studio under Linux, you might need privileges to access the USB ports,  
without which the flash program will say "No connected boards".                 
                                                                                
To do this on Ubuntu, you can do it by creating (as administrator) the file     
/etc/udev/rules.d/mbed.rules and add the line:                                  
                                                                                
   SUBSYSTEM=="usb",MODE:="666"                                                 
                                                                                
then restarting the service by doing                                            
                                                                                
   sudo udevadm control --reload                                                
   sudo udevadm trigger 