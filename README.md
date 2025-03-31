# DO NOT RUN THIS FILE
This file incorpirates a fork bomb, which is something that you should not run. You most likely know what a fork bomb is but just in case, heres the wikipedia page for a fork bomb.

also i dont want to format the wikipedia page so yea its gonna be basically unreadable :P




WikipediaThe Free Encyclopedia
Search Wikipedia
Search
Donate
Create account
Log in

Contents hide
(Top)
History
Implementation
Prevention
See also
References
External links
Fork bomb

Article
Talk
Read
Edit
View history

Tools
Appearance hide
Text

Small

Standard

Large
Width

Standard

Wide
Color (beta)

Automatic

Light

Dark
From Wikipedia, the free encyclopedia
"Rabbit virus" redirects here. For the disease used in an attempt to exterminate rabbits in Australia, see Myxomatosis.

The concept behind a fork bomb — the processes continually replicate themselves, potentially causing a denial of service
In computing, a fork bomb (also called rabbit virus) is a denial-of-service (DoS) attack wherein a process continually replicates itself to deplete available system resources, slowing down or crashing the system due to resource starvation.

History
Around 1978, an early variant of a fork bomb called wabbit was reported to run on a System/360. It may have descended from a similar attack called RABBITS reported from 1969 on a Burroughs 5500 at the University of Washington.[1]

Implementation

Demonstration of a fork bomb in Ubuntu
Fork bombs operate both by consuming CPU time in the process of forking, and by saturating the operating system's process table.[2][3] A basic implementation of a fork bomb is an infinite loop that repeatedly launches new copies of itself.

In Unix-like operating systems, fork bombs are generally written to use the fork system call.[3] As forked processes are also copies of the first program, once they resume execution from the next address at the frame pointer, they continue forking endlessly within their own copy of the same infinite loop. this has the effect of causing an exponential growth in processes. As modern Unix systems generally use a copy-on-write resource management technique when forking new processes,[4] a fork bomb generally will not saturate such a system's memory.

Microsoft Windows operating systems do not have an equivalent functionality to the Unix fork system call;[5] a fork bomb on such an operating system must therefore create a new process instead of forking from an existing one, such as with batch echo %0^|%0 > $_.cmd & $_. In this batch script, %0|%0 is written to $_.cmd, which is then executed by & $_.[6]

A classic example of a fork bomb is one written in Unix shell :(){ :|:& };:, possibly dating back to 1999,[7] which can be more easily understood as

fork() {
    fork | fork &
}
fork
In it, a function is defined (fork()) as calling itself (fork), then piping (|) its result into itself, all in a background job (&).

The code using a colon : as the function name is not valid in a shell as defined by POSIX, which only permits alphanumeric characters and underscores in function names.[8] However, its usage is allowed in GNU Bash as an extension.[9]

Prevention
As a fork bomb's mode of operation is entirely encapsulated by creating new processes, one way of preventing a fork bomb from severely affecting the entire system is to limit the maximum number of processes that a single user may own. On Linux, this can be achieved by using the ulimit utility; for example, the command ulimit -u 30 would limit the affected user to a maximum of thirty owned processes.[10] On PAM-enabled systems, this limit can also be set in /etc/security/limits.conf,[11] and on *BSD, the system administrator can put limits in /etc/login.conf.[12] Modern Linux systems also allow finer-grained fork bomb prevention through cgroups and process number (PID) controllers.[13]

See also
Zip bomb
Billion laughs attack
Deadlock (computer science)
Logic bomb
Time bomb (software)
References
 Raymond, Eric S. (October 1, 2004). "wabbit". The Jargon Lexicon. Archived from the original on May 15, 2012. Retrieved October 15, 2013.
 Ye, Nong (2008). Secure Computer and Network Systems: Modeling, Analysis and Design. John Wiley & Sons. p. 16. ISBN 978-0470023242.
 Jielin, Dong (2007). Network Dictionary. p. 200. ISBN 978-1602670006.
 Dhamdhere, Dhananjay M. (2006). Operating Systems: A Concept-based Approach. McGraw-Hill Higher Education. p. 285. ISBN 0-07-061194-7.
 Hammond, Mark (2000). Python Programming On Win32: Help for Windows Programmers. "O'Reilly Media, Inc.". p. 35. ISBN 1565926218.
 Enderman (June 26, 2024). @echo.%0^|%0›$^_^.c^md&$_›nul. Retrieved June 30, 2024 – via YouTube.
 Michal Zalewski (August 19, 1999). "[RHSA-1999:028-01] Buffer overflow in libtermcap tgetent()". Newsgroup: muc.lists.bugtraq. Retrieved December 10, 2022. bash$ :(){ :|:&};:}
 "The Open Group Base Specifications Issue 7, 2018 edition IEEE Std 1003.1™-2017 Section 3.235". The Open Group/IEEE. Name: In the shell command language, a word consisting solely of underscores, digits, and alphabetics from the portable character set. The first character of a name is not a digit.
 "The GNU Bash Reference Manual, Section 3.3". Retrieved December 11, 2022. When the shell is in POSIX mode (see Bash POSIX Mode), fname must be a valid shell name and may not be the same as one of the special builtins (see Special Builtins). In default mode, a function name can be any unquoted shell word that does not contain '$'.
 Cooper, Mendel (2005). Advanced Bash Scripting Guide. pp. 305–306. ISBN 1430319305.
 Soyinka, Wale (2012). Linux Administration: A Beginners Guide. McGraw Hill Professional. pp. 364–365. ISBN 978-0071767590.
 Lucas, Michael W. (2007). Absolute FreeBSD: The Complete Guide to FreeBSD. No Starch Press. pp. 198–199. ISBN 978-1593271510.
 "Process Number Controller in Documentation/ as appeared in Linux kernel 5.3". October 8, 2019. Archived from the original on October 8, 2019. Retrieved October 8, 2019.
External links
Fork bomb examples on GitHub
vte
Information security
Related security categories	
Computer securityAutomotive securityCybercrime Cybersex traffickingComputer fraudCybergeddonCyberterrorismCyberwarfareElectronic warfareInformation warfareInternet securityMobile securityNetwork securityCopy protectionDigital rights management
vectorial version
Threats	
AdwareAdvanced persistent threatArbitrary code executionBackdoorsBombs ForkLogicTimeZipHardware backdoorsCode injectionCrimewareCross-site scriptingCross-site leaksDOM clobberingHistory sniffingCryptojackingBotnetsData breachDrive-by downloadBrowser Helper ObjectsVirusesData scrapingDenial-of-service attackEavesdroppingEmail fraudEmail spoofingExploitsFraudulent dialersHacktivismInfostealerInsecure direct object referenceKeystroke loggersMalwarePayloadPhishing VoicePolymorphic enginePrivilege escalationRansomwareRootkitsScarewareShellcodeSpammingSocial engineeringSpywareSoftware bugsTrojan horsesHardware TrojansRemote access trojansVulnerabilityWeb shellsWiperWormsSQL injectionRogue security softwareZombie
Defenses	
Application security Secure codingSecure by defaultSecure by design Misuse caseComputer access control Authentication Multi-factor authenticationAuthorizationComputer security software Antivirus softwareSecurity-focused operating systemData-centric securitySoftware obfuscationData maskingEncryptionFirewallIntrusion detection system Host-based intrusion detection system (HIDS)Anomaly detectionInformation security management Information risk managementSecurity information and event management (SIEM)Runtime application self-protectionSite isolation
Categories: Denial-of-service attacksProcess (computing)
This page was last edited on 21 March 2025, at 15:33 (UTC).
Text is available under the Creative Commons Attribution-ShareAlike 4.0 License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
Privacy policyAbout WikipediaDisclaimersContact WikipediaCode of ConductDevelopersStatisticsCookie statementMobile view
Wikimedia Foundation
Powered by MediaWiki

Fork bomb

19 languages
Add topic
