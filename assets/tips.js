// Auto-generated: curated gotcha tips + every unique "concept" glossary entry across all 52 lessons.
// Shown one at a time in the Helpful Hints modal on the home page.
var PS_TIPS = [
  {
    "term": "The cmdlet you're asking about always comes second",
    "explain": "Get-Help Where-Object, not Where-Object Get-Help. Whatever cmdlet you're running (Get-Help, Get-Command, Get-Member) always comes first, and the thing you're asking about goes after it, as an argument. If you're ever unsure of the order, ask yourself: which one is the action, and which one is the target? The action always leads."
  },
  {
    "term": "Case doesn't matter",
    "explain": "get-service, Get-Service, and GET-SERVICE all run identically. PowerShell doesn't care about capitalization for cmdlet names, parameters, or most values. The mixed-case style you see everywhere (Get-Service, not get-service) is just a readability convention, not a requirement."
  },
  {
    "term": "Tab completion works on almost everything",
    "explain": "Start typing a cmdlet name and hit Tab to cycle through matches. It also works on parameter names after a dash (-Com then Tab), and often on values too, like file paths or service names. Way faster than typing the whole thing, and it prevents typos in long cmdlet names."
  },
  {
    "term": "$Error[0] shows your last mistake in detail",
    "explain": "After something fails, $Error[0] holds the most recent error as a full object, often with more detail than what printed to the screen. $Error[0] | Format-List * -Force shows genuinely everything PowerShell knows about what just went wrong."
  },
  {
    "term": "Ctrl+C cancels a stuck command",
    "explain": "If something is hanging, a remote query taking forever, an accidental infinite loop, Ctrl+C stops it and hands control back to your prompt. It doesn't undo anything that already happened, it just interrupts what's currently running."
  },
  {
    "term": "Aliases are for you, not for scripts",
    "explain": "gci, ls, dir, and Get-ChildItem all do the same thing. Aliases are great for fast interactive typing. But the moment you're writing something you'll save, share, or read again in six months, spell it out, Get-ChildItem, not gci. Future you, or a teammate, will thank you."
  },
  {
    "term": "-WhatIf previews without doing anything",
    "explain": "Most cmdlets that change or remove something support -WhatIf. Add it to preview exactly what would happen, no changes, no removals, no side effects, before you commit to running the real thing. Cheap insurance on anything destructive."
  },
  {
    "term": "A red error doesn't always mean the script stopped",
    "explain": "Some errors are 'non-terminating', they print in red and PowerShell just keeps going to the next line. Others are 'terminating' and actually halt execution. If you're not sure which kind you're looking at, that's exactly what -ErrorAction Stop and Try/Catch are for, forcing an error to be genuinely catchable."
  },
  {
    "term": "The pipe symbol never sends plain text",
    "explain": "| always passes real, structured objects from one command to the next, with all their properties intact, never just the text you see printed on screen. That's the whole reason Sort-Object, Where-Object, and Select-Object can reach into specific properties on anything piped into them."
  },
  {
    "term": "$_ only exists inside a script block",
    "explain": "$_ (or $PSItem) refers to 'whatever object is currently flowing through the pipe,' but it only means something inside a { } script block attached to something like Where-Object or ForEach-Object. Outside of one, it's just an empty, meaningless variable."
  },
  {
    "term": "Stuck on what a cmdlet actually returns? Pipe it into Get-Member",
    "explain": "Whenever you're not sure what properties or methods something has, don't guess, pipe it into Get-Member. It lists every real property and method on whatever just ran, the fastest way to stop guessing and start knowing."
  },
  {
    "term": "Format last, always",
    "explain": "Sort-Object, Where-Object, Select-Object, all of that goes first. Format-Table and Format-List go dead last, right before something prints to the screen, never in the middle of a pipeline you're still building on. Formatting cmdlets lock in the display and can't be sorted or filtered further afterward."
  },
  {
    "term": "A single dash is not the same as a double dash",
    "explain": "PowerShell parameters use one dash, -ComputerName, not two, --ComputerName (that's a Linux/bash convention). Typing a double dash by habit is one of the most common copy-paste mistakes coming from another shell."
  },
  {
    "term": "[CmdletBinding()]",
    "explain": "A single decorator that upgrades a basic script to an advanced one, unlocking parameter attributes (Mandatory, ValidateSet, and more) and PowerShell's common parameters like -Verbose and -ErrorAction.",
    "source": "advanced-01-parameterized-scripts",
    "chapter": 20,
    "book": 1
  },
  {
    "term": "Mandatory parameters",
    "explain": "[Parameter(Mandatory=$True)] forces PowerShell to prompt for a value at run time if the caller didn't supply one, instead of silently falling back to a default or leaving the variable empty.",
    "source": "advanced-01-parameterized-scripts",
    "chapter": 20,
    "book": 1
  },
  {
    "term": "[ValidateSet()]",
    "explain": "Restricts a parameter to a specific, fixed list of acceptable values. Any other input is rejected immediately with a clear error, before the script body runs, instead of failing mysteriously later on.",
    "source": "advanced-01-parameterized-scripts",
    "chapter": 20,
    "book": 1
  },
  {
    "term": "Testing a parameter change",
    "explain": "After adding Mandatory or ValidateSet attributes, running the script with no arguments (or an invalid one) is the fastest way to confirm the new behavior actually took effect.",
    "source": "advanced-01-parameterized-scripts",
    "chapter": 20,
    "book": 1
  },
  {
    "term": "-match vs -like",
    "explain": "-like uses simple wildcards (* and ?), fine for loose patterns. -match uses full regular expressions, capable of describing precise shapes like 'exactly this many digits, separated by literal periods,' something wildcards can't express.",
    "source": "advanced-02-regex",
    "chapter": 21,
    "book": 1
  },
  {
    "term": "$matches",
    "explain": "An automatic variable PowerShell populates whenever the -match operator succeeds. $matches[0] holds the entire matched text; if the pattern has capture groups in parentheses, $matches[1], $matches[2], and so on hold each group individually.",
    "source": "advanced-02-regex",
    "chapter": 21,
    "book": 1
  },
  {
    "term": "Measure-Object for counting",
    "explain": "The standard way to count how many objects came out of a pipeline, appended at the very end after any filtering or extraction is already done.",
    "source": "advanced-02-regex",
    "chapter": 21,
    "book": 1
  },
  {
    "term": "Get-Help works on scripts too",
    "explain": "Any script with comment-based help (the <# ... #> block covered back in an earlier lesson) responds to Get-Help exactly like a built-in cmdlet does, synopsis, parameters, and examples included.",
    "source": "advanced-03-using-others-scripts",
    "chapter": 22,
    "book": 1
  },
  {
    "term": "Reading a param block directly",
    "explain": "The definitive source of truth for what a script actually requires, independent of whatever its comment-based help claims. Worth checking directly, especially for a script you didn't write yourself.",
    "source": "advanced-03-using-others-scripts",
    "chapter": 22,
    "book": 1
  },
  {
    "term": "Read before you run",
    "explain": "For any script you didn't write yourself, checking Get-Help and the actual param block first, before running it, is the same habit that makes discovering an unfamiliar cmdlet safe rather than a guessing game.",
    "source": "advanced-03-using-others-scripts",
    "chapter": 22,
    "book": 1
  },
  {
    "term": "foreach vs ForEach-Object",
    "explain": "foreach (...) is a scripting-language keyword for looping over a known collection directly. ForEach-Object is a pipeline cmdlet expecting piped input. Both loop per-item, but they fit different situations.",
    "source": "advanced-04-logic-loops",
    "chapter": 23,
    "book": 1
  },
  {
    "term": "while loops",
    "explain": "Repeats a block of code for as long as a condition remains true, with no predetermined number of iterations. The right tool whenever 'keep trying until something becomes true' matters more than 'do this exactly N times.'",
    "source": "advanced-04-logic-loops",
    "chapter": 23,
    "book": 1
  },
  {
    "term": "Confirming after a loop exits",
    "explain": "A while loop's exit already implies its condition became true, but re-checking directly afterward is cheap and removes any doubt, especially useful right after an automated retry.",
    "source": "advanced-04-logic-loops",
    "chapter": 23,
    "book": 1
  },
  {
    "term": "Terminating vs non-terminating errors",
    "explain": "Some errors stop a script cold by default (terminating), others just print a red message and keep going (non-terminating). Which kind you're dealing with affects whether Try/Catch can even catch it, covered in the next step.",
    "source": "advanced-05-error-handling",
    "chapter": 24,
    "book": 1
  },
  {
    "term": "-ErrorAction Stop",
    "explain": "Forces a specific command's errors to be treated as terminating exceptions, catchable by Try/Catch, even if that cmdlet's default behavior is a non-terminating warning that would otherwise slip right past a catch block.",
    "source": "advanced-05-error-handling",
    "chapter": 24,
    "book": 1
  },
  {
    "term": "Catch, then continue",
    "explain": "A properly caught exception doesn't just log a nicer message, it lets script execution continue past the point of failure, exactly the behavior this final step confirms directly.",
    "source": "advanced-05-error-handling",
    "chapter": 24,
    "book": 1
  },
  {
    "term": "Set-PSBreakpoint",
    "explain": "Pauses a running script at a specific line, variable change, or command, without editing the script's actual code. The real debugging counterpart to manually sprinkling print statements through a file.",
    "source": "advanced-06-debugging",
    "chapter": 25,
    "book": 1
  },
  {
    "term": "Inspecting variables at a breakpoint",
    "explain": "Once paused at a breakpoint, typing any variable's name shows its exact current value at that moment, real evidence instead of guessing based on the script's eventual final output.",
    "source": "advanced-06-debugging",
    "chapter": 25,
    "book": 1
  },
  {
    "term": "Debug prompt commands",
    "explain": "Once paused at a breakpoint, single letters like c (continue), s (step into the next line), and q (stop debugging) control what happens next, alongside being able to inspect any variable directly by name.",
    "source": "advanced-06-debugging",
    "chapter": 25,
    "book": 1
  },
  {
    "term": "-split",
    "explain": "Breaks a single string into an array of pieces, wherever a specified separator character or pattern appears. The opposite operation of -join, covered later in this lesson.",
    "source": "advanced-07-tips-tricks",
    "chapter": 26,
    "book": 1
  },
  {
    "term": "-in and -contains",
    "explain": "-in checks whether a value exists within a collection (value -in collection). -contains checks the reverse direction (collection -contains value). Both answer membership questions in one line, no loop required.",
    "source": "advanced-07-tips-tricks",
    "chapter": 26,
    "book": 1
  },
  {
    "term": "-join",
    "explain": "Combines every element of an array into a single string, separated by whatever character you specify. The direct reverse of -split, which breaks a string apart into an array.",
    "source": "advanced-07-tips-tricks",
    "chapter": 26,
    "book": 1
  },
  {
    "term": "Reusing earlier patterns",
    "explain": "Advanced scripting isn't about constantly learning new syntax, it's about combining a small set of well-understood patterns, like this one from chapter 20, into something new.",
    "source": "advanced-08-synthesis",
    "chapter": 27,
    "book": 1
  },
  {
    "term": "Parameters feeding into loops",
    "explain": "Once a value comes in through a parameter, chapter 20's contribution, it can be used anywhere in the script's logic, including inside a loop's condition, chapter 23's contribution, without hardcoding anything.",
    "source": "advanced-08-synthesis",
    "chapter": 27,
    "book": 1
  },
  {
    "term": "Synthesis over new syntax",
    "explain": "The actual skill this phase built isn't memorizing more commands, it's recognizing which already-known pattern, a parameter, a loop, an error handler, fits a given piece of a problem, and combining them.",
    "source": "advanced-08-synthesis",
    "chapter": 27,
    "book": 1
  },
  {
    "term": "PSEdition",
    "explain": "Distinguishes 'Desktop' (Windows PowerShell 5.1, Windows-only) from 'Core' (PowerShell 7+, cross-platform). A script relying on features specific to one edition can fail outright on the other.",
    "source": "advanced-09-scripting-environment",
    "chapter": 2,
    "book": 2
  },
  {
    "term": "Checking for elevation",
    "explain": "Whether a session is 'Run as Administrator' affects what it's allowed to do, like setting a machine-wide execution policy. Checking this directly, rather than assuming, avoids a command failing partway through a script for a permissions reason that could've been caught upfront.",
    "source": "advanced-09-scripting-environment",
    "chapter": 2,
    "book": 2
  },
  {
    "term": "Matching scope to actual permissions",
    "explain": "Checking whether a session is elevated first, then picking -Scope CurrentUser or the machine-wide default accordingly, avoids a command failing partway through for a permissions reason that was entirely predictable upfront.",
    "source": "advanced-09-scripting-environment",
    "chapter": 2,
    "book": 2
  },
  {
    "term": "Verb-Noun naming",
    "explain": "Every PowerShell cmdlet follows Verb-Noun, using one of a fixed, approved list of verbs (checked with Get-Verb) and a singular noun. Following this convention for your own tools makes them discoverable and predictable the same way built-in cmdlets are.",
    "source": "advanced-10-wwpd",
    "chapter": 3,
    "book": 2
  },
  {
    "term": "Tools should output objects, not formatted text",
    "explain": "A reusable tool, meant to be piped into other commands, should always hand back real objects (via Select-Object or similar), leaving formatting decisions, Format-Table, Format-List, to whoever eventually displays the result, not baked in ahead of time.",
    "source": "advanced-10-wwpd",
    "chapter": 3,
    "book": 2
  },
  {
    "term": "WWPD: What would PowerShell do?",
    "explain": "The core question this chapter asks before writing anything: would a built-in cmdlet name it this way, output this way, behave this way? Matching that standard is what makes a homemade tool feel native instead of bolted on.",
    "source": "advanced-10-wwpd",
    "chapter": 3,
    "book": 2
  },
  {
    "term": "Trace-Command",
    "explain": "Exposes PowerShell's internal systems, including parameter binding, as a command actually runs. The real way to prove how something works, rather than just observing that it does.",
    "source": "advanced-11-parameter-binding-review",
    "chapter": 4,
    "book": 2
  },
  {
    "term": "-InputObject",
    "explain": "A common parameter pattern on cmdlets designed to accept pipeline input directly, typed to match whatever object type is expected, ServiceController for Stop-Service, Process for Stop-Process, and so on.",
    "source": "advanced-11-parameter-binding-review",
    "chapter": 4,
    "book": 2
  },
  {
    "term": "ByValue binding is type-specific",
    "explain": "A piped object only binds automatically to a parameter like -InputObject if its actual .NET type matches what that parameter expects. A ServiceController binds to Stop-Service's -InputObject; a Process object does not, confirmed directly by the failure this step produced.",
    "source": "advanced-11-parameter-binding-review",
    "chapter": 4,
    "book": 2
  },
  {
    "term": "switch",
    "explain": "Tests one value against several possible matches in a single, clean block, instead of repeating the same comparison across a long if/elseif chain. Best suited to exact-value matching; more complex conditions still need if/elseif.",
    "source": "advanced-12-scripting-crash-course",
    "chapter": 5,
    "book": 2
  },
  {
    "term": "break",
    "explain": "Immediately exits the loop it's inside, skipping any remaining iterations entirely. The right tool once a loop has found what it was actually looking for and doesn't need to keep going.",
    "source": "advanced-12-scripting-crash-course",
    "chapter": 5,
    "book": 2
  },
  {
    "term": "break's scope",
    "explain": "break exits only the loop it's directly inside, script execution resumes immediately after that loop's closing brace, not at the very end of the script. Worth confirming directly if you're not certain.",
    "source": "advanced-12-scripting-crash-course",
    "chapter": 5,
    "book": 2
  },
  {
    "term": "Tools",
    "explain": "Generic, parameterized, reusable in any environment, no specific assumptions baked in. A tool should work as well against a company's servers as it would against anyone else's, exactly like a built-in cmdlet does.",
    "source": "advanced-13-tools-vs-controllers",
    "chapter": 6,
    "book": 2
  },
  {
    "term": "Controllers",
    "explain": "Specific, often hardcoded, scripts that orchestrate one particular situation, this company's five servers, this team's email address. Controllers are expected to call generic tools rather than duplicate their logic.",
    "source": "advanced-13-tools-vs-controllers",
    "chapter": 6,
    "book": 2
  },
  {
    "term": "Verifying the tools/controllers split",
    "explain": "A genuinely reusable tool should work identically regardless of which controller calls it, or none at all. Testing it against something outside the controller's specific, hardcoded scope is the real confirmation the separation actually holds.",
    "source": "advanced-13-tools-vs-controllers",
    "chapter": 6,
    "book": 2
  },
  {
    "term": "Get-AuthenticodeSignature",
    "explain": "Checks whether a script (or any file) carries a valid digital signature, and identifies who signed it, if anyone. The concrete way to check trustworthiness, rather than assuming based on where a file came from.",
    "source": "advanced-14-scripts-and-security",
    "chapter": 7,
    "book": 2
  },
  {
    "term": "Review before you run, especially unsigned scripts",
    "explain": "An unsigned script from an unfamiliar source deserves a manual read before ever being run, exactly what this step's discovery of a destructive System32 deletion was there to catch.",
    "source": "advanced-14-scripts-and-security",
    "chapter": 7,
    "book": 2
  },
  {
    "term": "Execution policy is a safety net, not a security boundary",
    "explain": "RemoteSigned and similar policies catch accidental execution of unsigned scripts downloaded from the internet, a meaningful safety net, but not a substitute for actually reviewing what a script does, especially since policies can be bypassed or a file's 'downloaded from the internet' marker can be stripped.",
    "source": "advanced-14-scripts-and-security",
    "chapter": 7,
    "book": 2
  },
  {
    "term": "$PSVersionTable",
    "explain": "A built-in variable, not a cmdlet, that's always there from the moment a session starts. Anything beginning with $ in PowerShell is a variable, holding a value you can inspect any time.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Discoverability over memorization",
    "explain": "You are not expected to memorize every cmdlet or variable. PowerShell is built so you can always ask it what it knows, that habit is the entire point of this lesson.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Get-Command",
    "explain": "The cmdlet for finding cmdlets. Search by verb, noun, or a wildcard pattern like *process* when you don't know the exact name yet.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "-Verb and -Noun parameters",
    "explain": "Most discovery cmdlets let you narrow by structure, not just free text. Thinking in Verb-Noun terms makes searching far faster than guessing full names.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Get-Help",
    "explain": "The cmdlet for learning how something you've already found actually works. -Examples for quick real-world usage, -Full for every parameter and detail, -Online to open the web docs in a browser.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Get-Command vs Get-Help",
    "explain": "Two different jobs: Get-Command answers 'what is this called', Get-Help answers 'how do I use it'. Mixing the two up is one of the most common habits to unlearn early on.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "-Name parameter",
    "explain": "Most Get- cmdlets accept a -Name, or a similar identity-style parameter, to narrow results down to one specific thing instead of everything.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Verb matters, a lot",
    "explain": "Get- cmdlets are read-only and safe to run. Other verbs like Stop-, Remove-, or Set- change something on the system. Always read the verb before running a command you're unsure about, especially early on.",
    "source": "beginner-01-meet-powershell",
    "chapter": 2,
    "book": 1
  },
  {
    "term": "Aliases are nicknames, not cmdlets",
    "explain": "gsv, ls, dir, gps, and similar short names are not commands themselves, they're pointers to real cmdlets. Get-Alias is how you see what a nickname actually resolves to.",
    "source": "beginner-02-running-commands",
    "chapter": 4,
    "book": 1
  },
  {
    "term": "Why avoid aliases in anything you'll reread",
    "explain": "Aliases save keystrokes typing live, but they hurt readability in anything saved for later, scripts, tickets, documentation. Full cmdlet names read like sentences, aliases don't.",
    "source": "beginner-02-running-commands",
    "chapter": 4,
    "book": 1
  },
  {
    "term": "Positional vs named parameters",
    "explain": "wuauserv on its own relies on PowerShell guessing which parameter you mean based on position. -Name wuauserv says it explicitly. Both work, only one is unambiguous to a reader.",
    "source": "beginner-02-running-commands",
    "chapter": 4,
    "book": 1
  },
  {
    "term": "Execution policy is a safety rail, not a permissions system",
    "explain": "It's designed to stop you from accidentally double-clicking a malicious script, not to stop a determined attacker. Still worth checking and setting deliberately rather than blowing it wide open.",
    "source": "beginner-02-running-commands",
    "chapter": 4,
    "book": 1
  },
  {
    "term": "Scope layering",
    "explain": "PowerShell checks execution policy at multiple scopes, MachinePolicy and UserPolicy (set by Group Policy) always win over anything set locally. -List is how you see which one is actually in control before trying to change it.",
    "source": "beginner-02-running-commands",
    "chapter": 4,
    "book": 1
  },
  {
    "term": "Providers",
    "explain": "A provider is what lets PowerShell expose something that isn't really a filesystem, the registry, environment variables, certificates, as if it were one. Same verbs, same navigation, completely different kind of data underneath.",
    "source": "beginner-03-providers",
    "chapter": 5,
    "book": 1
  },
  {
    "term": "Wildcards",
    "explain": "* matches any number of characters. *.log matches any filename ending in .log, regardless of what comes before it. This works the same way across most PowerShell providers, not just the filesystem.",
    "source": "beginner-03-providers",
    "chapter": 5,
    "book": 1
  },
  {
    "term": "One provider model, many data sources",
    "explain": "This is the entire chapter in one example: the same Get-ChildItem, the same -Path parameter, works identically against a filesystem folder and a registry key, because both are exposed through PowerShell's provider system.",
    "source": "beginner-03-providers",
    "chapter": 5,
    "book": 1
  },
  {
    "term": "-LiteralPath vs -Path",
    "explain": "-Path is wildcard-aware, useful for patterns like *.log. -LiteralPath takes exactly what you typed, no interpretation. Reach for -LiteralPath whenever a real file or folder name happens to contain characters like [ ] * or ?.",
    "source": "beginner-03-providers",
    "chapter": 5,
    "book": 1
  },
  {
    "term": "The pipeline connects commands",
    "explain": "Everything in this lesson builds on one idea: a command's output can become the next command's input with a single | character, no temporary files, no copy-pasting.",
    "source": "beginner-04-pipeline",
    "chapter": 6,
    "book": 1
  },
  {
    "term": "Export-Csv vs Out-File",
    "explain": "Export-Csv understands the underlying object and its properties, producing real columns. Out-File just captures the text that would have been displayed. Structured data in, structured file out, is the rule for Export-Csv, Export-Json, and Export-Xml alike.",
    "source": "beginner-04-pipeline",
    "chapter": 6,
    "book": 1
  },
  {
    "term": "Piping into commands that change things",
    "explain": "Get- cmdlets are read-only. Piping their output into a Stop-, Remove-, or Set- cmdlet means you found the exact thing first, then acted on it, instead of guessing a name and hoping it matches.",
    "source": "beginner-04-pipeline",
    "chapter": 6,
    "book": 1
  },
  {
    "term": "-WhatIf",
    "explain": "Most cmdlets that change the system support -WhatIf, which prints what would happen without doing it. Cheap insurance on any command you're not 100% sure about yet, especially newly built pipelines.",
    "source": "beginner-04-pipeline",
    "chapter": 6,
    "book": 1
  },
  {
    "term": "Find- vs Get- for modules",
    "explain": "Find-Module searches the remote gallery, the internet. Get-Module looks at what's local, already on this machine. Confusing the two is one of the most common early mistakes extending PowerShell.",
    "source": "beginner-05-adding-commands",
    "chapter": 7,
    "book": 1
  },
  {
    "term": "-Scope CurrentUser vs AllUsers",
    "explain": "CurrentUser installs into your own profile, no admin rights needed, only you can use it. AllUsers installs machine-wide but needs elevated permissions. Default without either specified is usually AllUsers, so specifying CurrentUser explicitly is often the safer, simpler choice.",
    "source": "beginner-05-adding-commands",
    "chapter": 7,
    "book": 1
  },
  {
    "term": "-ListAvailable",
    "explain": "Without it, Get-Module only shows modules already imported into the current session. With it, Get-Module also shows anything installed on disk but not yet loaded, exactly what you need right after a fresh install.",
    "source": "beginner-05-adding-commands",
    "chapter": 7,
    "book": 1
  },
  {
    "term": "Installed vs imported",
    "explain": "Installed means the module's files exist on disk. Imported means its commands are actually loaded and usable in your current session. Many modules auto-import the first time you use one of their commands, but knowing the explicit step matters when that auto-load doesn't happen or you want it upfront.",
    "source": "beginner-05-adding-commands",
    "chapter": 7,
    "book": 1
  },
  {
    "term": "Get-Member",
    "explain": "The single most useful discovery cmdlet for output you don't recognize. Pipe anything into it and see exactly what properties and methods are available, instead of guessing.",
    "source": "beginner-06-objects",
    "chapter": 8,
    "book": 1
  },
  {
    "term": "Properties vs methods",
    "explain": "A property holds a value, like CPU or Name. A method is an action the object can perform, like Kill(). Get-Member's MemberType column tells you which is which.",
    "source": "beginner-06-objects",
    "chapter": 8,
    "book": 1
  },
  {
    "term": "Sort before you narrow",
    "explain": "Sorting works on the full object and its real properties. Do it before Select-Object trims things down, not after, same principle as formatting always going last.",
    "source": "beginner-06-objects",
    "chapter": 8,
    "book": 1
  },
  {
    "term": "Select-Object vs Format-Table",
    "explain": "Select-Object actually reshapes the object, keeping only the properties you name. Format-Table just changes the display. They can look identical printed to the screen, and behave completely differently if you pipe the result anywhere else.",
    "source": "beginner-06-objects",
    "chapter": 8,
    "book": 1
  },
  {
    "term": "Trust but verify objects",
    "explain": "Two very different things, a real trimmed object and formatted display text, can look identical printed to a screen. Get-Member is how you tell them apart with certainty instead of guessing from appearances.",
    "source": "beginner-06-objects",
    "chapter": 8,
    "book": 1
  },
  {
    "term": "-Identity",
    "explain": "A parameter name reused across almost every AD cmdlet. It always means the same thing: give me the one exact thing you're pointing at, not a search.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "Everything is an object",
    "explain": "This cmdlet does not return lines of text, it returns full objects with named properties attached, like Name and GroupCategory. That is exactly why the next step can filter on GroupCategory with no text parsing at all.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "| the pipe",
    "explain": "Sends whatever comes out of the command on the left into the command on the right, one object at a time. This is the backbone of PowerShell, small commands chained together instead of one giant command trying to do everything.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "{ } script block",
    "explain": "Curly braces wrap a small piece of code that runs once per object passing through. Where-Object, ForEach-Object, and If all use this same pattern, so once it clicks here it clicks everywhere.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "$_ automatic variable",
    "explain": "Inside a script block, $_ always means the current object being processed right now. First pass through the pipeline it is the first group, second pass it is the second group, and so on.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "-eq and friends",
    "explain": "PowerShell comparison operators start with a dash: -eq, -ne, -gt, -lt, -like. Not == or !=. This is one of the most common trip-ups coming from other languages.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "-Expand / -ExpandProperty",
    "explain": "Many parameter names have a short form PowerShell will accept as long as it is unambiguous. -Expand works here for -ExpandProperty. Full names read better in scripts you will reread later, short forms are fine typed live.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "Quoting a path",
    "explain": "Paths with spaces or backslashes need quotes. Single quotes mean take this literally, double quotes would let PowerShell expand variables inside the string.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "Why the plain command was not enough",
    "explain": "Get-Acl by itself does return the right permissions, but it bundles everything into one Access property as one long value. Piping into Select-Object -Expand Access is what turns that into one readable row per rule, which is what actually lets you confirm Finance-ShareAccess has Modify.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "Reading the path off the request",
    "explain": "Not every value comes from a chip in real work. The folder path here came straight from the manager's message, the same way a ticket or a Slack message would hand it to you. Part of getting proficient is learning to scan the request for the literal values a command needs, not just the cmdlet names.",
    "source": "capstone-groups-permissions"
  },
  {
    "term": "Design first: usage examples",
    "explain": "Writing example calls exactly as you'd want to type them, before any code exists, is the primary design deliverable this chapter recommends. It reveals the real parameter list before you're deep in implementation details.",
    "source": "expert-01-always-design-first",
    "chapter": 8,
    "book": 2
  },
  {
    "term": "Multiple usage examples surface different requirements",
    "explain": "A single usage example only reveals so much. Writing several genuinely different ones, one machine, many machines, with extra options, surfaces different parameter requirements before any of them get implemented.",
    "source": "expert-01-always-design-first",
    "chapter": 8,
    "book": 2
  },
  {
    "term": "Design deliverable: usage examples first",
    "explain": "This chapter's core recommendation: write out how you'd want to call the finished tool, in several genuinely different scenarios, before writing any of its actual implementation. The examples themselves become the parameter design.",
    "source": "expert-01-always-design-first",
    "chapter": 8,
    "book": 2
  },
  {
    "term": "Start with a command, not a function",
    "explain": "Get the actual underlying logic working as a plain, standalone command first. Debugging a broken one-liner directly is faster and clearer than debugging the same mistake once it's buried inside function syntax.",
    "source": "expert-02-avoiding-bugs",
    "chapter": 9,
    "book": 2
  },
  {
    "term": "Testing against more than one target",
    "explain": "A command that works against exactly one machine might be coincidentally correct rather than genuinely correct. Testing against a second, different target before trusting it catches that difference.",
    "source": "expert-02-avoiding-bugs",
    "chapter": 9,
    "book": 2
  },
  {
    "term": "Wrap proven logic, don't build blind",
    "explain": "Once a command is proven correct on its own, wrapping it in a function is a much smaller, more contained step, you're only introducing the function structure itself, not simultaneously debugging the underlying logic too.",
    "source": "expert-02-avoiding-bugs",
    "chapter": 9,
    "book": 2
  },
  {
    "term": "Module folder and filename must match",
    "explain": "For PowerShell to automatically discover a module by name, its containing folder and its .psm1 filename need to match exactly. This is what separates a reusable, easily loadable module from one that only works via a manually-typed full path.",
    "source": "expert-03-basic-function-module",
    "chapter": 10,
    "book": 2
  },
  {
    "term": "$env:PSModulePath",
    "explain": "The environment variable listing every folder PowerShell automatically searches when a module is referenced by name alone. Placing a properly named module folder in any of these locations makes it discoverable without a full path.",
    "source": "expert-03-basic-function-module",
    "chapter": 10,
    "book": 2
  },
  {
    "term": "Import-Module by name",
    "explain": "Once a module is correctly named and placed in a location listed in $env:PSModulePath, it can be loaded with just Import-Module <name>, no path required, exactly what makes it usable by anyone on the team, not just in the console session it was written in.",
    "source": "expert-03-basic-function-module",
    "chapter": 10,
    "book": 2
  },
  {
    "term": "Common parameters",
    "explain": "A set of 11+ parameters, including -Verbose, -Debug, and -ErrorAction, that every advanced function automatically supports once [CmdletBinding()] is added, no extra code required to enable them individually.",
    "source": "expert-04-advanced-functions",
    "chapter": 11,
    "book": 2
  },
  {
    "term": "Write-Verbose",
    "explain": "Produces output only visible when a caller explicitly adds -Verbose (or sets $VerbosePreference). The correct way to offer optional, detailed status information without being noisy for everyone by default.",
    "source": "expert-04-advanced-functions",
    "chapter": 11,
    "book": 2
  },
  {
    "term": "ValueFromPipeline",
    "explain": "Marks a specific parameter as able to receive its value directly from piped-in input, the same underlying mechanic behind Get-Service | Stop-Service, now available to add to your own functions.",
    "source": "expert-04-advanced-functions",
    "chapter": 11,
    "book": 2
  },
  {
    "term": "Raw output isn't always good output",
    "explain": "A command's raw return value can be real, genuine data and still be a poor choice for a tool's actual output, if it's cluttered with far more than a caller actually needs. Deciding what belongs in the final shape is part of good tool design.",
    "source": "expert-05-objects-output",
    "chapter": 12,
    "book": 2
  },
  {
    "term": "[PSCustomObject]",
    "explain": "Builds a genuine, real custom object with exactly the properties and names you define, giving full control over a tool's output shape, rather than being constrained to whatever a source command's raw properties happened to be called.",
    "source": "expert-05-objects-output",
    "chapter": 12,
    "book": 2
  },
  {
    "term": "PSCustomObject is still real",
    "explain": "A [PSCustomObject] you build yourself is exactly as real and reusable as one returned by a built-in cmdlet, sortable, filterable, exportable, confirmed here with the exact same Get-Member habit that verified built-in objects back in chapter 8.",
    "source": "expert-05-objects-output",
    "chapter": 12,
    "book": 2
  },
  {
    "term": "Write-Warning",
    "explain": "A distinct output stream for genuine problems, visible by default (usually in yellow), but separately controllable with -WarningAction and capturable with -WarningVariable, unlike plain Write-Host text.",
    "source": "expert-06-streams",
    "chapter": 13,
    "book": 2
  },
  {
    "term": "Matching stream to message severity",
    "explain": "Write-Warning, Write-Verbose, and Write-Information each carry a different implicit severity and default visibility. Using the wrong one, like Write-Warning for routine detail, trains callers to tune out real warnings when they matter most.",
    "source": "expert-06-streams",
    "chapter": 13,
    "book": 2
  },
  {
    "term": "PowerShell's output streams",
    "explain": "PowerShell has several distinct output streams (Success, Error, Warning, Verbose, Debug, Information, and more), each with its own default visibility and its own controlling parameters. Matching a message to the right stream, instead of routing everything through Write-Host, is what makes a tool's output genuinely usable and filterable.",
    "source": "expert-06-streams",
    "chapter": 13,
    "book": 2
  },
  {
    "term": "Comment-based help format",
    "explain": "A specific <# ... #> block using recognized keywords like .SYNOPSIS and .DESCRIPTION, placed immediately above (or inside) a function. This exact format is what Get-Help actually looks for, an ordinary code comment is invisible to it.",
    "source": "expert-07-comment-help",
    "chapter": 14,
    "book": 2
  },
  {
    "term": ".PARAMETER blocks",
    "explain": "One required per actual parameter, its name must match the real parameter name exactly for Get-Help to associate the description correctly. A parameter with no matching .PARAMETER block simply shows no description in help output.",
    "source": "expert-07-comment-help",
    "chapter": 14,
    "book": 2
  },
  {
    "term": "Comment-based help is what makes Get-Help work on your own tools",
    "explain": "A complete <# ... #> block, with .SYNOPSIS, .DESCRIPTION, .PARAMETER, and .EXAMPLE, placed right above a function, makes Get-Help work on it exactly the way it works on any built-in cmdlet, no separate documentation system required.",
    "source": "expert-07-comment-help",
    "chapter": 14,
    "book": 2
  },
  {
    "term": "Try/Catch placement inside a loop",
    "explain": "To let a loop continue past a single item's failure, the Try/Catch needs to wrap just that risky operation, inside the loop, not the entire loop or function. Placement determines exactly how much gets skipped when something fails.",
    "source": "expert-08-errors-tools",
    "chapter": 15,
    "book": 2
  },
  {
    "term": "Write-Error inside a tool",
    "explain": "Produces a genuine, distinct PowerShell error object, separately catchable and filterable by anyone calling your function, unlike a plain string that would blend indistinguishably into normal output.",
    "source": "expert-08-errors-tools",
    "chapter": 15,
    "book": 2
  },
  {
    "term": "Testing that a loop actually continues",
    "explain": "Placing a deliberately failing item in the middle of a test list, rather than at the end, is what actually proves a loop continues past a failure, rather than just happening to finish because nothing came after it.",
    "source": "expert-08-errors-tools",
    "chapter": 15,
    "book": 2
  },
  {
    "term": "Module manifest (.psd1)",
    "explain": "A structured metadata file, separate from the actual module code (.psm1), holding version, author, description, and other details. Generated with New-ModuleManifest rather than written by hand, to guarantee the exact format PowerShell's module system expects.",
    "source": "expert-09-manifest",
    "chapter": 16,
    "book": 2
  },
  {
    "term": "Manifest metadata fields",
    "explain": "ModuleVersion, Author, and Description are among the fields a manifest can carry, surfaced directly when someone runs Get-Module -ListAvailable, turning an anonymous .psm1 file into a properly identified, documented module.",
    "source": "expert-09-manifest",
    "chapter": 16,
    "book": 2
  },
  {
    "term": "Test-ModuleManifest",
    "explain": "Validates a manifest file's structure and required fields, and confirms references like RootModule actually point at real, existing files, catching problems before anyone else tries to rely on this module.",
    "source": "expert-09-manifest",
    "chapter": 16,
    "book": 2
  },
  {
    "term": "Separating general capability from specific action",
    "explain": "The actual brain change this chapter is about: instinctively asking 'what's the reusable, general piece here?' before writing anything, rather than building one script that does everything a specific request happened to ask for.",
    "source": "expert-10-changing-your-brain",
    "chapter": 17,
    "book": 2
  },
  {
    "term": "General tools get called, not duplicated",
    "explain": "Once a general, reusable piece exists, like Find-InactiveADUser, a specific action should call it, not reimplement its logic. This is the same tools-versus-controllers relationship from an earlier lesson, now applied instinctively rather than as a formal rule.",
    "source": "expert-10-changing-your-brain",
    "chapter": 17,
    "book": 2
  },
  {
    "term": "Proof of genuine separation",
    "explain": "A general tool is only proven genuinely general once it's demonstrated working for a purpose different from the one that originally motivated building it, exactly what this step's report-only use case confirms.",
    "source": "expert-10-changing-your-brain",
    "chapter": 17,
    "book": 2
  },
  {
    "term": "Avoiding aliases in scripts",
    "explain": "Aliases like gps, ?, and sort are fine for fast interactive typing, but a script meant to be read and maintained by someone else should spell out full cmdlet names, removing the need for the reader to already know PowerShell's alias shorthand.",
    "source": "expert-11-professional-grade",
    "chapter": 18,
    "book": 2
  },
  {
    "term": "Meaningful variable names",
    "explain": "A variable's name should describe what it holds, well enough that a reader understands every later reference without needing to trace back to the original assignment. Costs nothing extra to write, saves real time for whoever reads it later.",
    "source": "expert-11-professional-grade",
    "chapter": 18,
    "book": 2
  },
  {
    "term": "Avoiding Write-Host and Read-Host in reusable functions",
    "explain": "A function meant to be called by other scripts, scheduled tasks, or anything unattended shouldn't depend on Read-Host (which blocks waiting for input that may never come) or Write-Host (which can't be captured or piped). Parameters and real pipeline output are what make a function genuinely reusable.",
    "source": "expert-11-professional-grade",
    "chapter": 18,
    "book": 2
  },
  {
    "term": "git init",
    "explain": "Creates a new, empty Git repository in the current folder, represented by a hidden .git subfolder holding all future history and configuration. The required first step before any file can be tracked or committed.",
    "source": "expert-12-git",
    "chapter": 19,
    "book": 2
  },
  {
    "term": "git add and git commit",
    "explain": "A two-step process: git add stages which changes should be included, git commit actually records them permanently as a snapshot with a descriptive message. Together, this is how a real, inspectable history gets built one recorded change at a time.",
    "source": "expert-12-git",
    "chapter": 19,
    "book": 2
  },
  {
    "term": "git diff",
    "explain": "Shows the exact line-by-line difference between current working files and the last commit, the concrete payoff of maintaining commit history: precise, automatic answers to 'what actually changed', not guesswork.",
    "source": "expert-12-git",
    "chapter": 19,
    "book": 2
  },
  {
    "term": "Describe / It / Should",
    "explain": "Pester's core test structure: Describe groups related tests, It names one specific test, Should makes the actual assertion comparing real output against an expected value. Together they turn manual, by-hand verification into a repeatable, automated check.",
    "source": "expert-13-pester",
    "chapter": 20,
    "book": 2
  },
  {
    "term": "One It block per distinct check",
    "explain": "Each individually meaningful thing worth verifying deserves its own It block, so a failure is reported clearly against exactly the right, specific test name, not folded confusingly into an unrelated one.",
    "source": "expert-13-pester",
    "chapter": 20,
    "book": 2
  },
  {
    "term": "Invoke-Pester",
    "explain": "Runs an entire Pester test file, executing every Describe/It block and reporting a clear pass/fail summary. This is what turns written test code into an actual, repeatable verification, run any time the underlying function changes.",
    "source": "expert-13-pester",
    "chapter": 20,
    "book": 2
  },
  {
    "term": "The Cert: provider",
    "explain": "PowerShell exposes the certificate store through a provider, accessed with the same path-like syntax as the filesystem, Cert:\\CurrentUser\\My. -CodeSigningCert filters specifically to certificates valid for signing scripts.",
    "source": "expert-14-signing",
    "chapter": 21,
    "book": 2
  },
  {
    "term": "Set-AuthenticodeSignature",
    "explain": "Applies a real digital signature to a script or module file using a specific certificate. Distinct from Get-AuthenticodeSignature, which only checks an existing signature's current status without applying anything new.",
    "source": "expert-14-signing",
    "chapter": 21,
    "book": 2
  },
  {
    "term": "Independently verifying a signature",
    "explain": "Checking a signature's status with Get-AuthenticodeSignature after signing, separately from whatever the signing operation itself reported, is the genuine confirmation that a signature is actually valid, not merely present.",
    "source": "expert-14-signing",
    "chapter": 21,
    "book": 2
  },
  {
    "term": "Confirming readiness before publishing",
    "explain": "Publishing a module makes it available for others to discover and install, worth confirming its manifest is genuinely valid and complete first, rather than discovering a problem only once the publish attempt itself fails.",
    "source": "expert-15-publishing",
    "chapter": 22,
    "book": 2
  },
  {
    "term": "Publish-Module",
    "explain": "Pushes a module to a real, registered repository, making it discoverable through Find-Module and installable through Install-Module, genuinely different from simply copying files somewhere reachable.",
    "source": "expert-15-publishing",
    "chapter": 22,
    "book": 2
  },
  {
    "term": "Find-Module confirms genuine discoverability",
    "explain": "The real proof that publishing worked isn't the publish command's own success message, it's confirming independently, with Find-Module, that anyone else could actually discover this module on their own, exactly like any other real, published module.",
    "source": "expert-15-publishing",
    "chapter": 22,
    "book": 2
  },
  {
    "term": "Syntax bugs",
    "explain": "Prevent a script from running at all. PowerShell catches these before execution even begins, and actually attempting to run the script is usually the fastest way to see the exact error and line number.",
    "source": "expert-16-squashing-bugs",
    "chapter": 23,
    "book": 2
  },
  {
    "term": "Results bugs",
    "explain": "A script that runs without any error, but produces subtly incorrect output. Diagnosed by comparing against the actual, raw underlying source data, not just re-running the same suspect function again.",
    "source": "expert-16-squashing-bugs",
    "chapter": 23,
    "book": 2
  },
  {
    "term": "Logic bugs",
    "explain": "The trickiest category: a script runs cleanly, produces no errors, and even looks plausible, but doesn't actually do what was intended. Caught by comparing real output against a concrete, known expectation, not by how clean or error-free it looks.",
    "source": "expert-16-squashing-bugs",
    "chapter": 23,
    "book": 2
  },
  {
    "term": ".PSObject.TypeNames",
    "explain": "The actual list PowerShell's formatting system consults to decide how an object should display. Inserting a custom name here gives an object a genuine, distinct type identity, the prerequisite for attaching a custom default view.",
    "source": "expert-17-output-presentation",
    "chapter": 24,
    "book": 2
  },
  {
    "term": "Update-TypeData and DefaultDisplayPropertySet",
    "explain": "Registers a lasting formatting rule for a specific type name, so every future object of that type displays with the specified default columns automatically, no manual Format-Table required from whoever's calling it.",
    "source": "expert-17-output-presentation",
    "chapter": 24,
    "book": 2
  },
  {
    "term": "Confirming default formatting works",
    "explain": "The real test of a custom default view isn't checking Update-TypeData ran without error, it's calling the actual function plainly, with nothing piped in, and confirming it displays cleanly on its own, exactly like this final step did.",
    "source": "expert-17-output-presentation",
    "chapter": 24,
    "book": 2
  },
  {
    "term": "Reaching into .NET directly",
    "explain": "PowerShell is built directly on top of .NET, and any .NET class can be accessed with square-bracket syntax, [ClassName]::Method(), even when no PowerShell cmdlet wraps it. Worth checking for before writing custom logic to solve something from scratch.",
    "source": "expert-18-dotnet",
    "chapter": 25,
    "book": 2
  },
  {
    "term": "Wrapping .NET in a PowerShell function",
    "explain": "Once a useful .NET class or method is found, wrapping it in a small, parameterized, Verb-Noun named function turns raw .NET syntax into something that looks and behaves exactly like any other PowerShell tool.",
    "source": "expert-18-dotnet",
    "chapter": 25,
    "book": 2
  },
  {
    "term": "Confirming genuine randomness",
    "explain": "A single successful call doesn't prove a generator is actually random, only that it produced one plausible-looking result. Calling it several times and confirming genuinely distinct output is the real test.",
    "source": "expert-18-dotnet",
    "chapter": 25,
    "book": 2
  },
  {
    "term": "Write-SqlTableData",
    "explain": "Writes piped-in PowerShell objects directly into a SQL Server table, no manual INSERT statements required, turning a real object collection into stored, shared, queryable data.",
    "source": "expert-19-sql-storage",
    "chapter": 26,
    "book": 2
  },
  {
    "term": "Invoke-Sqlcmd",
    "explain": "Runs a real SQL query against a server and returns the results as genuine PowerShell objects, the natural counterpart to Write-SqlTableData, confirming data saved to a database is actually retrievable afterward, not just written.",
    "source": "expert-19-sql-storage",
    "chapter": 26,
    "book": 2
  },
  {
    "term": "Testing the full round trip with fresh data",
    "explain": "The strongest confirmation a save-then-query workflow genuinely works is running it end to end against data that's never touched the system before, not just re-checking data already confirmed in an earlier step.",
    "source": "expert-19-sql-storage",
    "chapter": 26,
    "book": 2
  },
  {
    "term": "Combining, not inventing",
    "explain": "This entire step reuses exactly three previously taught patterns: Verb-Noun naming, CmdletBinding with a pipeline-aware parameter, and comment-based help. Nothing here is new syntax, only recognizing where each piece fits.",
    "source": "expert-20-never-the-end",
    "chapter": 27,
    "book": 2
  },
  {
    "term": "Resilience is combined, not new",
    "explain": "Every piece needed to make this function survive a bad input gracefully, -ErrorAction Stop, Try/Catch, Write-Error, was taught individually earlier in this phase. Combining them here is what turns a fragile script into a genuinely trustworthy tool.",
    "source": "expert-20-never-the-end",
    "chapter": 27,
    "book": 2
  },
  {
    "term": "Never the end",
    "explain": "This entire lesson combined pieces from chapters 3, 11, 14, 15, 16, and 24, nothing new, only recognition of which already-known piece fits where. That is the actual skill this whole curriculum was building toward, and it's exactly the skill that keeps working on the next tool, and the one after that.",
    "source": "expert-20-never-the-end",
    "chapter": 27,
    "book": 2
  },
  {
    "term": "Discoverability, applied",
    "explain": "Chapters 2 and 3 taught Get-Command and Get-Help as abstract tools. This chapter is where that habit gets tested against a real, unscripted task.",
    "source": "intermediate-01-practical-interlude",
    "chapter": 9,
    "book": 1
  },
  {
    "term": "-File and -Directory switches",
    "explain": "Get-ChildItem can filter to just files or just folders right at the source, cheaper and cleaner than piping everything into Where-Object afterward to separate them.",
    "source": "intermediate-01-practical-interlude",
    "chapter": 9,
    "book": 1
  },
  {
    "term": "Reusing a pattern across contexts",
    "explain": "Sort-Object -Descending here works identically to sorting processes by CPU in an earlier lesson. Once a pattern like this clicks, it applies everywhere, not just to the one example it was first taught with.",
    "source": "intermediate-01-practical-interlude",
    "chapter": 9,
    "book": 1
  },
  {
    "term": "-First on Select-Object",
    "explain": "Grabs a specific count of objects off the front of whatever's currently flowing through the pipeline. Combined with a prior sort, it's how you get a top-N list, top 5 largest files, top 10 busiest processes, and so on.",
    "source": "intermediate-01-practical-interlude",
    "chapter": 9,
    "book": 1
  },
  {
    "term": "Extracting a raw property value",
    "explain": "(Command).Property runs the command, then reaches directly into the result for one property as a plain value. Different from Select-Object, which keeps the result as an object with just that property attached.",
    "source": "intermediate-02-pipeline-deeper",
    "chapter": 10,
    "book": 1
  },
  {
    "term": "Pipeline input ByValue",
    "explain": "Some cmdlets accept an entire piped-in object directly, matching it to one of their own parameters automatically, usually the one accepting that object's exact type. That's why Get-Service | Stop-Service works with zero extra typing.",
    "source": "intermediate-02-pipeline-deeper",
    "chapter": 10,
    "book": 1
  },
  {
    "term": "Piping many objects at once",
    "explain": "The same ByValue binding from step 2 works whether one object or many flow through the pipe. Stop-Service | ForEach-Object under the hood, receiving each matched service one at a time.",
    "source": "intermediate-02-pipeline-deeper",
    "chapter": 10,
    "book": 1
  },
  {
    "term": "Format-Table vs Format-List",
    "explain": "Both come last in a pipeline, same rule. Table suits a handful of short properties side by side. List suits many properties, or long values, better read one per line.",
    "source": "intermediate-03-formatting",
    "chapter": 11,
    "book": 1
  },
  {
    "term": "Out-File after formatting is correct here",
    "explain": "Unlike the CSV export lesson, this file is meant purely for a human to read later, a report. Capturing the exact display text with Out-File after formatting is the right tool for that specific job.",
    "source": "intermediate-03-formatting",
    "chapter": 11,
    "book": 1
  },
  {
    "term": "-eq vs -like",
    "explain": "-eq checks for an exact match. -like checks against a wildcard pattern (using * and ?). Use -eq whenever you know the precise value, save -like for genuine pattern matching.",
    "source": "intermediate-04-filtering",
    "chapter": 12,
    "book": 1
  },
  {
    "term": "Filter left",
    "explain": "Put Where-Object as early in the pipeline as possible. Every cmdlet after it only has to process whatever survived the filter, not the full original set. This matters most with large data sets or pipelines reaching across a network.",
    "source": "intermediate-04-filtering",
    "chapter": 12,
    "book": 1
  },
  {
    "term": "Combining conditions with -and / -or",
    "explain": "A single Where-Object block can test multiple conditions. -and requires all of them true, -or requires at least one. This is how you narrow from 'broadly interesting' down to 'actually the problem.'",
    "source": "intermediate-04-filtering",
    "chapter": 12,
    "book": 1
  },
  {
    "term": "Test-WSMan",
    "explain": "A lightweight readiness check for PowerShell remoting (WinRM), confirming a target machine is reachable and listening before you commit to opening an actual session against it.",
    "source": "intermediate-05-remote-control",
    "chapter": 13,
    "book": 1
  },
  {
    "term": "One-to-one vs one-to-many",
    "explain": "Enter-PSSession connects you interactively to exactly one remote machine, like RDP but text-based. Invoke-Command runs a specific command against one or many machines without an interactive prompt. Pick based on whether you're exploring or executing.",
    "source": "intermediate-05-remote-control",
    "chapter": 13,
    "book": 1
  },
  {
    "term": "PSComputerName",
    "explain": "When Invoke-Command targets multiple machines, results come back tagged with which machine each one came from, in a PSComputerName property, so you can tell the results apart.",
    "source": "intermediate-05-remote-control",
    "chapter": 13,
    "book": 1
  },
  {
    "term": "-Credential (Get-Credential)",
    "explain": "Get-Credential prompts interactively for a username and password and returns a credential object. Passing that straight into a cmdlet's -Credential parameter runs the operation as that account instead of your current login.",
    "source": "intermediate-05-remote-control",
    "chapter": 13,
    "book": 1
  },
  {
    "term": "Start-Job",
    "explain": "Runs a script block as a separate background job instead of directly in your console. Control returns to you immediately, the job keeps running independently, checked on later with Get-Job.",
    "source": "intermediate-06-jobs",
    "chapter": 14,
    "book": 1
  },
  {
    "term": "Job states",
    "explain": "A background job's State property moves through values like NotStarted, Running, Completed, or Failed. Get-Job is how you check which state a job is currently in.",
    "source": "intermediate-06-jobs",
    "chapter": 14,
    "book": 1
  },
  {
    "term": "Receive-Job",
    "explain": "Pulls the actual output a background job produced. Separate from Get-Job, which only reports status. A job can be Completed for a while before you ever call Receive-Job to actually collect its results.",
    "source": "intermediate-06-jobs",
    "chapter": 14,
    "book": 1
  },
  {
    "term": "Remove-Job",
    "explain": "Deletes a job from the session's job list. Worth doing once you've called Receive-Job and no longer need the job hanging around, otherwise completed jobs quietly accumulate over a long session.",
    "source": "intermediate-06-jobs",
    "chapter": 14,
    "book": 1
  },
  {
    "term": "-Filter vs Where-Object",
    "explain": "-Filter narrows by filename pattern right at the source, cheap and fast. Where-Object filters on any property, like a date, after the objects already exist. Use -Filter for what it can do, Where-Object for what it can't.",
    "source": "intermediate-07-many-objects",
    "chapter": 15,
    "book": 1
  },
  {
    "term": "ForEach-Object and $_",
    "explain": "ForEach-Object runs its script block once for every object flowing through the pipeline, with $_ standing in for whichever one is currently being processed. This is how you do something individually calculated, like a per-file new name, rather than one fixed action for the whole batch.",
    "source": "intermediate-07-many-objects",
    "chapter": 15,
    "book": 1
  },
  {
    "term": "-WhatIf inside a loop",
    "explain": "-WhatIf works the same way inside a ForEach-Object script block as it does standalone, previewing each individual action, in this case each file's rename, before anything actually happens.",
    "source": "intermediate-07-many-objects",
    "chapter": 15,
    "book": 1
  },
  {
    "term": "Preview, then commit",
    "explain": "Run with -WhatIf first, review the output, then remove it and run for real. This habit matters most exactly where this lesson used it, an operation touching several objects individually with ForEach-Object.",
    "source": "intermediate-07-many-objects",
    "chapter": 15,
    "book": 1
  },
  {
    "term": "Variables",
    "explain": "A $-prefixed name that stores a value, any value, a number, text, or a whole collection of objects, for reuse later in the same session, without re-running whatever produced it.",
    "source": "intermediate-08-variables",
    "chapter": 16,
    "book": 1
  },
  {
    "term": "Reusing a stored variable",
    "explain": "Once a result is stored in a variable, later commands can read directly from it instead of re-running whatever produced it in the first place. This matters most with slow or remote queries.",
    "source": "intermediate-08-variables",
    "chapter": 16,
    "book": 1
  },
  {
    "term": "Variables work like any pipeline source",
    "explain": "A variable holding a collection of objects can be piped into Where-Object, Sort-Object, or anything else, exactly like fresh cmdlet output. That's what makes storing an expensive query once so useful.",
    "source": "intermediate-08-variables",
    "chapter": 16,
    "book": 1
  },
  {
    "term": "Variables preserve object type",
    "explain": "Storing a result in a variable doesn't change what kind of data it is. $allServices holds the exact same real ServiceController objects Get-Service returned, confirmed with Get-Member exactly like any other pipeline output.",
    "source": "intermediate-08-variables",
    "chapter": 16,
    "book": 1
  },
  {
    "term": "Read-Host",
    "explain": "Prompts interactively and returns whatever the user types as a plain string. The standard way to gather input at run time instead of hardcoding values into a script.",
    "source": "intermediate-09-input-output",
    "chapter": 17,
    "book": 1
  },
  {
    "term": "Write-Host vs the pipeline",
    "explain": "Write-Host writes straight to the console and never touches the pipeline, useful for status messages, progress notes, or anything meant purely for a human watching the screen, not for downstream commands.",
    "source": "intermediate-09-input-output",
    "chapter": 17,
    "book": 1
  },
  {
    "term": "Real pipeline output",
    "explain": "Cmdlet results like Get-Service's output are genuine pipeline data, unlike Write-Host's screen-only messages. This is the data that would actually flow into something like Export-Csv or Where-Object further down a pipeline.",
    "source": "intermediate-09-input-output",
    "chapter": 17,
    "book": 1
  },
  {
    "term": "Write-Host never touches the pipeline",
    "explain": "Confirmed here concretely: Write-Host output never shows up in exported or piped results, because it writes directly to the console and bypasses the pipeline entirely, by design.",
    "source": "intermediate-09-input-output",
    "chapter": 17,
    "book": 1
  },
  {
    "term": "New-PSSession",
    "explain": "Opens a persistent remote connection and hands back an object representing it, without running any command. That object can then be reused across multiple Invoke-Command calls, avoiding the overhead of reconnecting each time.",
    "source": "intermediate-10-sessions",
    "chapter": 18,
    "book": 1
  },
  {
    "term": "-Session vs -ComputerName on Invoke-Command",
    "explain": "-ComputerName opens a fresh connection, runs the command, and closes it, every call. -Session reuses an already-open connection from New-PSSession, avoiding that repeated overhead across multiple commands.",
    "source": "intermediate-10-sessions",
    "chapter": 18,
    "book": 1
  },
  {
    "term": "One session, many commands",
    "explain": "Once a session is open via New-PSSession, it can be passed into -Session on as many separate Invoke-Command calls as needed, running any number of different commands without reopening the connection each time.",
    "source": "intermediate-10-sessions",
    "chapter": 18,
    "book": 1
  },
  {
    "term": "Remove-PSSession",
    "explain": "Properly closes a session opened with New-PSSession, releasing the connection on both ends. Worth doing once you're finished running commands through it, sessions left open unnecessarily tie up resources on the remote machine.",
    "source": "intermediate-10-sessions",
    "chapter": 18,
    "book": 1
  },
  {
    "term": "Comments with #",
    "explain": "Anything after a # on a line is ignored when a script runs. Used to explain what a script does, or leave notes for whoever reads it later, including yourself in six months.",
    "source": "intermediate-11-scripting",
    "chapter": 19,
    "book": 1
  },
  {
    "term": "The .\\ prefix",
    "explain": "Explicitly means 'right here, in the current folder.' Required to run a local script by filename, unlike cmdlets which PowerShell finds automatically without any prefix.",
    "source": "intermediate-11-scripting",
    "chapter": 19,
    "book": 1
  },
  {
    "term": "Restricted execution policy",
    "explain": "The default on many Windows machines: no scripts run at all, only interactive commands. This is exactly why a saved .ps1 file can fail even though typing the same commands directly at the prompt works fine.",
    "source": "intermediate-11-scripting",
    "chapter": 19,
    "book": 1
  },
  {
    "term": "RemoteSigned",
    "explain": "A common, safer execution policy: scripts written locally run without restriction, but anything downloaded from the internet needs a trusted digital signature first. A practical middle ground between Restricted and Unrestricted.",
    "source": "intermediate-11-scripting",
    "chapter": 19,
    "book": 1
  }
];
