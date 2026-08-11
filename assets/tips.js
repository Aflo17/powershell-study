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
    "explain": "A single decorator that upgrades a basic script to an advanced one, unlocking parameter attributes (Mandatory, ValidateSet, and more) and PowerShell's common parameters like -Verbose and -ErrorAction."
  },
  {
    "term": "Mandatory parameters",
    "explain": "[Parameter(Mandatory=$True)] forces PowerShell to prompt for a value at run time if the caller didn't supply one, instead of silently falling back to a default or leaving the variable empty."
  },
  {
    "term": "[ValidateSet()]",
    "explain": "Restricts a parameter to a specific, fixed list of acceptable values. Any other input is rejected immediately with a clear error, before the script body runs, instead of failing mysteriously later on."
  },
  {
    "term": "Testing a parameter change",
    "explain": "After adding Mandatory or ValidateSet attributes, running the script with no arguments (or an invalid one) is the fastest way to confirm the new behavior actually took effect."
  },
  {
    "term": "-match vs -like",
    "explain": "-like uses simple wildcards (* and ?), fine for loose patterns. -match uses full regular expressions, capable of describing precise shapes like 'exactly this many digits, separated by literal periods,' something wildcards can't express."
  },
  {
    "term": "$matches",
    "explain": "An automatic variable PowerShell populates whenever the -match operator succeeds. $matches[0] holds the entire matched text; if the pattern has capture groups in parentheses, $matches[1], $matches[2], and so on hold each group individually."
  },
  {
    "term": "Measure-Object for counting",
    "explain": "The standard way to count how many objects came out of a pipeline, appended at the very end after any filtering or extraction is already done."
  },
  {
    "term": "Get-Help works on scripts too",
    "explain": "Any script with comment-based help (the <# ... #> block covered back in an earlier lesson) responds to Get-Help exactly like a built-in cmdlet does, synopsis, parameters, and examples included."
  },
  {
    "term": "Reading a param block directly",
    "explain": "The definitive source of truth for what a script actually requires, independent of whatever its comment-based help claims. Worth checking directly, especially for a script you didn't write yourself."
  },
  {
    "term": "Read before you run",
    "explain": "For any script you didn't write yourself, checking Get-Help and the actual param block first, before running it, is the same habit that makes discovering an unfamiliar cmdlet safe rather than a guessing game."
  },
  {
    "term": "foreach vs ForEach-Object",
    "explain": "foreach (...) is a scripting-language keyword for looping over a known collection directly. ForEach-Object is a pipeline cmdlet expecting piped input. Both loop per-item, but they fit different situations."
  },
  {
    "term": "while loops",
    "explain": "Repeats a block of code for as long as a condition remains true, with no predetermined number of iterations. The right tool whenever 'keep trying until something becomes true' matters more than 'do this exactly N times.'"
  },
  {
    "term": "Confirming after a loop exits",
    "explain": "A while loop's exit already implies its condition became true, but re-checking directly afterward is cheap and removes any doubt, especially useful right after an automated retry."
  },
  {
    "term": "Terminating vs non-terminating errors",
    "explain": "Some errors stop a script cold by default (terminating), others just print a red message and keep going (non-terminating). Which kind you're dealing with affects whether Try/Catch can even catch it, covered in the next step."
  },
  {
    "term": "-ErrorAction Stop",
    "explain": "Forces a specific command's errors to be treated as terminating exceptions, catchable by Try/Catch, even if that cmdlet's default behavior is a non-terminating warning that would otherwise slip right past a catch block."
  },
  {
    "term": "Catch, then continue",
    "explain": "A properly caught exception doesn't just log a nicer message, it lets script execution continue past the point of failure, exactly the behavior this final step confirms directly."
  },
  {
    "term": "Set-PSBreakpoint",
    "explain": "Pauses a running script at a specific line, variable change, or command, without editing the script's actual code. The real debugging counterpart to manually sprinkling print statements through a file."
  },
  {
    "term": "Inspecting variables at a breakpoint",
    "explain": "Once paused at a breakpoint, typing any variable's name shows its exact current value at that moment, real evidence instead of guessing based on the script's eventual final output."
  },
  {
    "term": "Debug prompt commands",
    "explain": "Once paused at a breakpoint, single letters like c (continue), s (step into the next line), and q (stop debugging) control what happens next, alongside being able to inspect any variable directly by name."
  },
  {
    "term": "-split",
    "explain": "Breaks a single string into an array of pieces, wherever a specified separator character or pattern appears. The opposite operation of -join, covered later in this lesson."
  },
  {
    "term": "-in and -contains",
    "explain": "-in checks whether a value exists within a collection (value -in collection). -contains checks the reverse direction (collection -contains value). Both answer membership questions in one line, no loop required."
  },
  {
    "term": "-join",
    "explain": "Combines every element of an array into a single string, separated by whatever character you specify. The direct reverse of -split, which breaks a string apart into an array."
  },
  {
    "term": "Reusing earlier patterns",
    "explain": "Advanced scripting isn't about constantly learning new syntax, it's about combining a small set of well-understood patterns, like this one from chapter 20, into something new."
  },
  {
    "term": "Parameters feeding into loops",
    "explain": "Once a value comes in through a parameter, chapter 20's contribution, it can be used anywhere in the script's logic, including inside a loop's condition, chapter 23's contribution, without hardcoding anything."
  },
  {
    "term": "Synthesis over new syntax",
    "explain": "The actual skill this phase built isn't memorizing more commands, it's recognizing which already-known pattern, a parameter, a loop, an error handler, fits a given piece of a problem, and combining them."
  },
  {
    "term": "PSEdition",
    "explain": "Distinguishes 'Desktop' (Windows PowerShell 5.1, Windows-only) from 'Core' (PowerShell 7+, cross-platform). A script relying on features specific to one edition can fail outright on the other."
  },
  {
    "term": "Checking for elevation",
    "explain": "Whether a session is 'Run as Administrator' affects what it's allowed to do, like setting a machine-wide execution policy. Checking this directly, rather than assuming, avoids a command failing partway through a script for a permissions reason that could've been caught upfront."
  },
  {
    "term": "Matching scope to actual permissions",
    "explain": "Checking whether a session is elevated first, then picking -Scope CurrentUser or the machine-wide default accordingly, avoids a command failing partway through for a permissions reason that was entirely predictable upfront."
  },
  {
    "term": "Verb-Noun naming",
    "explain": "Every PowerShell cmdlet follows Verb-Noun, using one of a fixed, approved list of verbs (checked with Get-Verb) and a singular noun. Following this convention for your own tools makes them discoverable and predictable the same way built-in cmdlets are."
  },
  {
    "term": "Tools should output objects, not formatted text",
    "explain": "A reusable tool, meant to be piped into other commands, should always hand back real objects (via Select-Object or similar), leaving formatting decisions, Format-Table, Format-List, to whoever eventually displays the result, not baked in ahead of time."
  },
  {
    "term": "WWPD: What would PowerShell do?",
    "explain": "The core question this chapter asks before writing anything: would a built-in cmdlet name it this way, output this way, behave this way? Matching that standard is what makes a homemade tool feel native instead of bolted on."
  },
  {
    "term": "Trace-Command",
    "explain": "Exposes PowerShell's internal systems, including parameter binding, as a command actually runs. The real way to prove how something works, rather than just observing that it does."
  },
  {
    "term": "-InputObject",
    "explain": "A common parameter pattern on cmdlets designed to accept pipeline input directly, typed to match whatever object type is expected, ServiceController for Stop-Service, Process for Stop-Process, and so on."
  },
  {
    "term": "ByValue binding is type-specific",
    "explain": "A piped object only binds automatically to a parameter like -InputObject if its actual .NET type matches what that parameter expects. A ServiceController binds to Stop-Service's -InputObject; a Process object does not, confirmed directly by the failure this step produced."
  },
  {
    "term": "switch",
    "explain": "Tests one value against several possible matches in a single, clean block, instead of repeating the same comparison across a long if/elseif chain. Best suited to exact-value matching; more complex conditions still need if/elseif."
  },
  {
    "term": "break",
    "explain": "Immediately exits the loop it's inside, skipping any remaining iterations entirely. The right tool once a loop has found what it was actually looking for and doesn't need to keep going."
  },
  {
    "term": "break's scope",
    "explain": "break exits only the loop it's directly inside, script execution resumes immediately after that loop's closing brace, not at the very end of the script. Worth confirming directly if you're not certain."
  },
  {
    "term": "Tools",
    "explain": "Generic, parameterized, reusable in any environment, no specific assumptions baked in. A tool should work as well against a company's servers as it would against anyone else's, exactly like a built-in cmdlet does."
  },
  {
    "term": "Controllers",
    "explain": "Specific, often hardcoded, scripts that orchestrate one particular situation, this company's five servers, this team's email address. Controllers are expected to call generic tools rather than duplicate their logic."
  },
  {
    "term": "Verifying the tools/controllers split",
    "explain": "A genuinely reusable tool should work identically regardless of which controller calls it, or none at all. Testing it against something outside the controller's specific, hardcoded scope is the real confirmation the separation actually holds."
  },
  {
    "term": "Get-AuthenticodeSignature",
    "explain": "Checks whether a script (or any file) carries a valid digital signature, and identifies who signed it, if anyone. The concrete way to check trustworthiness, rather than assuming based on where a file came from."
  },
  {
    "term": "Review before you run, especially unsigned scripts",
    "explain": "An unsigned script from an unfamiliar source deserves a manual read before ever being run, exactly what this step's discovery of a destructive System32 deletion was there to catch."
  },
  {
    "term": "Execution policy is a safety net, not a security boundary",
    "explain": "RemoteSigned and similar policies catch accidental execution of unsigned scripts downloaded from the internet, a meaningful safety net, but not a substitute for actually reviewing what a script does, especially since policies can be bypassed or a file's 'downloaded from the internet' marker can be stripped."
  },
  {
    "term": "$PSVersionTable",
    "explain": "A built-in variable, not a cmdlet, that's always there from the moment a session starts. Anything beginning with $ in PowerShell is a variable, holding a value you can inspect any time."
  },
  {
    "term": "Discoverability over memorization",
    "explain": "You are not expected to memorize every cmdlet or variable. PowerShell is built so you can always ask it what it knows, that habit is the entire point of this lesson."
  },
  {
    "term": "Get-Command",
    "explain": "The cmdlet for finding cmdlets. Search by verb, noun, or a wildcard pattern like *process* when you don't know the exact name yet."
  },
  {
    "term": "-Verb and -Noun parameters",
    "explain": "Most discovery cmdlets let you narrow by structure, not just free text. Thinking in Verb-Noun terms makes searching far faster than guessing full names."
  },
  {
    "term": "Get-Help",
    "explain": "The cmdlet for learning how something you've already found actually works. -Examples for quick real-world usage, -Full for every parameter and detail, -Online to open the web docs in a browser."
  },
  {
    "term": "Get-Command vs Get-Help",
    "explain": "Two different jobs: Get-Command answers 'what is this called', Get-Help answers 'how do I use it'. Mixing the two up is one of the most common habits to unlearn early on."
  },
  {
    "term": "-Name parameter",
    "explain": "Most Get- cmdlets accept a -Name, or a similar identity-style parameter, to narrow results down to one specific thing instead of everything."
  },
  {
    "term": "Verb matters, a lot",
    "explain": "Get- cmdlets are read-only and safe to run. Other verbs like Stop-, Remove-, or Set- change something on the system. Always read the verb before running a command you're unsure about, especially early on."
  },
  {
    "term": "Aliases are nicknames, not cmdlets",
    "explain": "gsv, ls, dir, gps, and similar short names are not commands themselves, they're pointers to real cmdlets. Get-Alias is how you see what a nickname actually resolves to."
  },
  {
    "term": "Why avoid aliases in anything you'll reread",
    "explain": "Aliases save keystrokes typing live, but they hurt readability in anything saved for later, scripts, tickets, documentation. Full cmdlet names read like sentences, aliases don't."
  },
  {
    "term": "Positional vs named parameters",
    "explain": "wuauserv on its own relies on PowerShell guessing which parameter you mean based on position. -Name wuauserv says it explicitly. Both work, only one is unambiguous to a reader."
  },
  {
    "term": "Execution policy is a safety rail, not a permissions system",
    "explain": "It's designed to stop you from accidentally double-clicking a malicious script, not to stop a determined attacker. Still worth checking and setting deliberately rather than blowing it wide open."
  },
  {
    "term": "Scope layering",
    "explain": "PowerShell checks execution policy at multiple scopes, MachinePolicy and UserPolicy (set by Group Policy) always win over anything set locally. -List is how you see which one is actually in control before trying to change it."
  },
  {
    "term": "Providers",
    "explain": "A provider is what lets PowerShell expose something that isn't really a filesystem, the registry, environment variables, certificates, as if it were one. Same verbs, same navigation, completely different kind of data underneath."
  },
  {
    "term": "Wildcards",
    "explain": "* matches any number of characters. *.log matches any filename ending in .log, regardless of what comes before it. This works the same way across most PowerShell providers, not just the filesystem."
  },
  {
    "term": "One provider model, many data sources",
    "explain": "This is the entire chapter in one example: the same Get-ChildItem, the same -Path parameter, works identically against a filesystem folder and a registry key, because both are exposed through PowerShell's provider system."
  },
  {
    "term": "-LiteralPath vs -Path",
    "explain": "-Path is wildcard-aware, useful for patterns like *.log. -LiteralPath takes exactly what you typed, no interpretation. Reach for -LiteralPath whenever a real file or folder name happens to contain characters like [ ] * or ?."
  },
  {
    "term": "The pipeline connects commands",
    "explain": "Everything in this lesson builds on one idea: a command's output can become the next command's input with a single | character, no temporary files, no copy-pasting."
  },
  {
    "term": "Export-Csv vs Out-File",
    "explain": "Export-Csv understands the underlying object and its properties, producing real columns. Out-File just captures the text that would have been displayed. Structured data in, structured file out, is the rule for Export-Csv, Export-Json, and Export-Xml alike."
  },
  {
    "term": "Piping into commands that change things",
    "explain": "Get- cmdlets are read-only. Piping their output into a Stop-, Remove-, or Set- cmdlet means you found the exact thing first, then acted on it, instead of guessing a name and hoping it matches."
  },
  {
    "term": "-WhatIf",
    "explain": "Most cmdlets that change the system support -WhatIf, which prints what would happen without doing it. Cheap insurance on any command you're not 100% sure about yet, especially newly built pipelines."
  },
  {
    "term": "Find- vs Get- for modules",
    "explain": "Find-Module searches the remote gallery, the internet. Get-Module looks at what's local, already on this machine. Confusing the two is one of the most common early mistakes extending PowerShell."
  },
  {
    "term": "-Scope CurrentUser vs AllUsers",
    "explain": "CurrentUser installs into your own profile, no admin rights needed, only you can use it. AllUsers installs machine-wide but needs elevated permissions. Default without either specified is usually AllUsers, so specifying CurrentUser explicitly is often the safer, simpler choice."
  },
  {
    "term": "-ListAvailable",
    "explain": "Without it, Get-Module only shows modules already imported into the current session. With it, Get-Module also shows anything installed on disk but not yet loaded, exactly what you need right after a fresh install."
  },
  {
    "term": "Installed vs imported",
    "explain": "Installed means the module's files exist on disk. Imported means its commands are actually loaded and usable in your current session. Many modules auto-import the first time you use one of their commands, but knowing the explicit step matters when that auto-load doesn't happen or you want it upfront."
  },
  {
    "term": "Get-Member",
    "explain": "The single most useful discovery cmdlet for output you don't recognize. Pipe anything into it and see exactly what properties and methods are available, instead of guessing."
  },
  {
    "term": "Properties vs methods",
    "explain": "A property holds a value, like CPU or Name. A method is an action the object can perform, like Kill(). Get-Member's MemberType column tells you which is which."
  },
  {
    "term": "Sort before you narrow",
    "explain": "Sorting works on the full object and its real properties. Do it before Select-Object trims things down, not after, same principle as formatting always going last."
  },
  {
    "term": "Select-Object vs Format-Table",
    "explain": "Select-Object actually reshapes the object, keeping only the properties you name. Format-Table just changes the display. They can look identical printed to the screen, and behave completely differently if you pipe the result anywhere else."
  },
  {
    "term": "Trust but verify objects",
    "explain": "Two very different things, a real trimmed object and formatted display text, can look identical printed to a screen. Get-Member is how you tell them apart with certainty instead of guessing from appearances."
  },
  {
    "term": "-Identity",
    "explain": "A parameter name reused across almost every AD cmdlet. It always means the same thing: give me the one exact thing you're pointing at, not a search."
  },
  {
    "term": "Everything is an object",
    "explain": "This cmdlet does not return lines of text, it returns full objects with named properties attached, like Name and GroupCategory. That is exactly why the next step can filter on GroupCategory with no text parsing at all."
  },
  {
    "term": "| the pipe",
    "explain": "Sends whatever comes out of the command on the left into the command on the right, one object at a time. This is the backbone of PowerShell, small commands chained together instead of one giant command trying to do everything."
  },
  {
    "term": "{ } script block",
    "explain": "Curly braces wrap a small piece of code that runs once per object passing through. Where-Object, ForEach-Object, and If all use this same pattern, so once it clicks here it clicks everywhere."
  },
  {
    "term": "$_ automatic variable",
    "explain": "Inside a script block, $_ always means the current object being processed right now. First pass through the pipeline it is the first group, second pass it is the second group, and so on."
  },
  {
    "term": "-eq and friends",
    "explain": "PowerShell comparison operators start with a dash: -eq, -ne, -gt, -lt, -like. Not == or !=. This is one of the most common trip-ups coming from other languages."
  },
  {
    "term": "-Expand / -ExpandProperty",
    "explain": "Many parameter names have a short form PowerShell will accept as long as it is unambiguous. -Expand works here for -ExpandProperty. Full names read better in scripts you will reread later, short forms are fine typed live."
  },
  {
    "term": "Quoting a path",
    "explain": "Paths with spaces or backslashes need quotes. Single quotes mean take this literally, double quotes would let PowerShell expand variables inside the string."
  },
  {
    "term": "Why the plain command was not enough",
    "explain": "Get-Acl by itself does return the right permissions, but it bundles everything into one Access property as one long value. Piping into Select-Object -Expand Access is what turns that into one readable row per rule, which is what actually lets you confirm Finance-ShareAccess has Modify."
  },
  {
    "term": "Reading the path off the request",
    "explain": "Not every value comes from a chip in real work. The folder path here came straight from the manager's message, the same way a ticket or a Slack message would hand it to you. Part of getting proficient is learning to scan the request for the literal values a command needs, not just the cmdlet names."
  },
  {
    "term": "Design first: usage examples",
    "explain": "Writing example calls exactly as you'd want to type them, before any code exists, is the primary design deliverable this chapter recommends. It reveals the real parameter list before you're deep in implementation details."
  },
  {
    "term": "Multiple usage examples surface different requirements",
    "explain": "A single usage example only reveals so much. Writing several genuinely different ones, one machine, many machines, with extra options, surfaces different parameter requirements before any of them get implemented."
  },
  {
    "term": "Design deliverable: usage examples first",
    "explain": "This chapter's core recommendation: write out how you'd want to call the finished tool, in several genuinely different scenarios, before writing any of its actual implementation. The examples themselves become the parameter design."
  },
  {
    "term": "Start with a command, not a function",
    "explain": "Get the actual underlying logic working as a plain, standalone command first. Debugging a broken one-liner directly is faster and clearer than debugging the same mistake once it's buried inside function syntax."
  },
  {
    "term": "Testing against more than one target",
    "explain": "A command that works against exactly one machine might be coincidentally correct rather than genuinely correct. Testing against a second, different target before trusting it catches that difference."
  },
  {
    "term": "Wrap proven logic, don't build blind",
    "explain": "Once a command is proven correct on its own, wrapping it in a function is a much smaller, more contained step, you're only introducing the function structure itself, not simultaneously debugging the underlying logic too."
  },
  {
    "term": "Module folder and filename must match",
    "explain": "For PowerShell to automatically discover a module by name, its containing folder and its .psm1 filename need to match exactly. This is what separates a reusable, easily loadable module from one that only works via a manually-typed full path."
  },
  {
    "term": "$env:PSModulePath",
    "explain": "The environment variable listing every folder PowerShell automatically searches when a module is referenced by name alone. Placing a properly named module folder in any of these locations makes it discoverable without a full path."
  },
  {
    "term": "Import-Module by name",
    "explain": "Once a module is correctly named and placed in a location listed in $env:PSModulePath, it can be loaded with just Import-Module <name>, no path required, exactly what makes it usable by anyone on the team, not just in the console session it was written in."
  },
  {
    "term": "Common parameters",
    "explain": "A set of 11+ parameters, including -Verbose, -Debug, and -ErrorAction, that every advanced function automatically supports once [CmdletBinding()] is added, no extra code required to enable them individually."
  },
  {
    "term": "Write-Verbose",
    "explain": "Produces output only visible when a caller explicitly adds -Verbose (or sets $VerbosePreference). The correct way to offer optional, detailed status information without being noisy for everyone by default."
  },
  {
    "term": "ValueFromPipeline",
    "explain": "Marks a specific parameter as able to receive its value directly from piped-in input, the same underlying mechanic behind Get-Service | Stop-Service, now available to add to your own functions."
  },
  {
    "term": "Raw output isn't always good output",
    "explain": "A command's raw return value can be real, genuine data and still be a poor choice for a tool's actual output, if it's cluttered with far more than a caller actually needs. Deciding what belongs in the final shape is part of good tool design."
  },
  {
    "term": "[PSCustomObject]",
    "explain": "Builds a genuine, real custom object with exactly the properties and names you define, giving full control over a tool's output shape, rather than being constrained to whatever a source command's raw properties happened to be called."
  },
  {
    "term": "PSCustomObject is still real",
    "explain": "A [PSCustomObject] you build yourself is exactly as real and reusable as one returned by a built-in cmdlet, sortable, filterable, exportable, confirmed here with the exact same Get-Member habit that verified built-in objects back in chapter 8."
  },
  {
    "term": "Write-Warning",
    "explain": "A distinct output stream for genuine problems, visible by default (usually in yellow), but separately controllable with -WarningAction and capturable with -WarningVariable, unlike plain Write-Host text."
  },
  {
    "term": "Matching stream to message severity",
    "explain": "Write-Warning, Write-Verbose, and Write-Information each carry a different implicit severity and default visibility. Using the wrong one, like Write-Warning for routine detail, trains callers to tune out real warnings when they matter most."
  },
  {
    "term": "PowerShell's output streams",
    "explain": "PowerShell has several distinct output streams (Success, Error, Warning, Verbose, Debug, Information, and more), each with its own default visibility and its own controlling parameters. Matching a message to the right stream, instead of routing everything through Write-Host, is what makes a tool's output genuinely usable and filterable."
  },
  {
    "term": "Comment-based help format",
    "explain": "A specific <# ... #> block using recognized keywords like .SYNOPSIS and .DESCRIPTION, placed immediately above (or inside) a function. This exact format is what Get-Help actually looks for, an ordinary code comment is invisible to it."
  },
  {
    "term": ".PARAMETER blocks",
    "explain": "One required per actual parameter, its name must match the real parameter name exactly for Get-Help to associate the description correctly. A parameter with no matching .PARAMETER block simply shows no description in help output."
  },
  {
    "term": "Comment-based help is what makes Get-Help work on your own tools",
    "explain": "A complete <# ... #> block, with .SYNOPSIS, .DESCRIPTION, .PARAMETER, and .EXAMPLE, placed right above a function, makes Get-Help work on it exactly the way it works on any built-in cmdlet, no separate documentation system required."
  },
  {
    "term": "Try/Catch placement inside a loop",
    "explain": "To let a loop continue past a single item's failure, the Try/Catch needs to wrap just that risky operation, inside the loop, not the entire loop or function. Placement determines exactly how much gets skipped when something fails."
  },
  {
    "term": "Write-Error inside a tool",
    "explain": "Produces a genuine, distinct PowerShell error object, separately catchable and filterable by anyone calling your function, unlike a plain string that would blend indistinguishably into normal output."
  },
  {
    "term": "Testing that a loop actually continues",
    "explain": "Placing a deliberately failing item in the middle of a test list, rather than at the end, is what actually proves a loop continues past a failure, rather than just happening to finish because nothing came after it."
  },
  {
    "term": "Module manifest (.psd1)",
    "explain": "A structured metadata file, separate from the actual module code (.psm1), holding version, author, description, and other details. Generated with New-ModuleManifest rather than written by hand, to guarantee the exact format PowerShell's module system expects."
  },
  {
    "term": "Manifest metadata fields",
    "explain": "ModuleVersion, Author, and Description are among the fields a manifest can carry, surfaced directly when someone runs Get-Module -ListAvailable, turning an anonymous .psm1 file into a properly identified, documented module."
  },
  {
    "term": "Test-ModuleManifest",
    "explain": "Validates a manifest file's structure and required fields, and confirms references like RootModule actually point at real, existing files, catching problems before anyone else tries to rely on this module."
  },
  {
    "term": "Separating general capability from specific action",
    "explain": "The actual brain change this chapter is about: instinctively asking 'what's the reusable, general piece here?' before writing anything, rather than building one script that does everything a specific request happened to ask for."
  },
  {
    "term": "General tools get called, not duplicated",
    "explain": "Once a general, reusable piece exists, like Find-InactiveADUser, a specific action should call it, not reimplement its logic. This is the same tools-versus-controllers relationship from an earlier lesson, now applied instinctively rather than as a formal rule."
  },
  {
    "term": "Proof of genuine separation",
    "explain": "A general tool is only proven genuinely general once it's demonstrated working for a purpose different from the one that originally motivated building it, exactly what this step's report-only use case confirms."
  },
  {
    "term": "Avoiding aliases in scripts",
    "explain": "Aliases like gps, ?, and sort are fine for fast interactive typing, but a script meant to be read and maintained by someone else should spell out full cmdlet names, removing the need for the reader to already know PowerShell's alias shorthand."
  },
  {
    "term": "Meaningful variable names",
    "explain": "A variable's name should describe what it holds, well enough that a reader understands every later reference without needing to trace back to the original assignment. Costs nothing extra to write, saves real time for whoever reads it later."
  },
  {
    "term": "Avoiding Write-Host and Read-Host in reusable functions",
    "explain": "A function meant to be called by other scripts, scheduled tasks, or anything unattended shouldn't depend on Read-Host (which blocks waiting for input that may never come) or Write-Host (which can't be captured or piped). Parameters and real pipeline output are what make a function genuinely reusable."
  },
  {
    "term": "git init",
    "explain": "Creates a new, empty Git repository in the current folder, represented by a hidden .git subfolder holding all future history and configuration. The required first step before any file can be tracked or committed."
  },
  {
    "term": "git add and git commit",
    "explain": "A two-step process: git add stages which changes should be included, git commit actually records them permanently as a snapshot with a descriptive message. Together, this is how a real, inspectable history gets built one recorded change at a time."
  },
  {
    "term": "git diff",
    "explain": "Shows the exact line-by-line difference between current working files and the last commit, the concrete payoff of maintaining commit history: precise, automatic answers to 'what actually changed', not guesswork."
  },
  {
    "term": "Describe / It / Should",
    "explain": "Pester's core test structure: Describe groups related tests, It names one specific test, Should makes the actual assertion comparing real output against an expected value. Together they turn manual, by-hand verification into a repeatable, automated check."
  },
  {
    "term": "One It block per distinct check",
    "explain": "Each individually meaningful thing worth verifying deserves its own It block, so a failure is reported clearly against exactly the right, specific test name, not folded confusingly into an unrelated one."
  },
  {
    "term": "Invoke-Pester",
    "explain": "Runs an entire Pester test file, executing every Describe/It block and reporting a clear pass/fail summary. This is what turns written test code into an actual, repeatable verification, run any time the underlying function changes."
  },
  {
    "term": "The Cert: provider",
    "explain": "PowerShell exposes the certificate store through a provider, accessed with the same path-like syntax as the filesystem, Cert:\\CurrentUser\\My. -CodeSigningCert filters specifically to certificates valid for signing scripts."
  },
  {
    "term": "Set-AuthenticodeSignature",
    "explain": "Applies a real digital signature to a script or module file using a specific certificate. Distinct from Get-AuthenticodeSignature, which only checks an existing signature's current status without applying anything new."
  },
  {
    "term": "Independently verifying a signature",
    "explain": "Checking a signature's status with Get-AuthenticodeSignature after signing, separately from whatever the signing operation itself reported, is the genuine confirmation that a signature is actually valid, not merely present."
  },
  {
    "term": "Confirming readiness before publishing",
    "explain": "Publishing a module makes it available for others to discover and install, worth confirming its manifest is genuinely valid and complete first, rather than discovering a problem only once the publish attempt itself fails."
  },
  {
    "term": "Publish-Module",
    "explain": "Pushes a module to a real, registered repository, making it discoverable through Find-Module and installable through Install-Module, genuinely different from simply copying files somewhere reachable."
  },
  {
    "term": "Find-Module confirms genuine discoverability",
    "explain": "The real proof that publishing worked isn't the publish command's own success message, it's confirming independently, with Find-Module, that anyone else could actually discover this module on their own, exactly like any other real, published module."
  },
  {
    "term": "Syntax bugs",
    "explain": "Prevent a script from running at all. PowerShell catches these before execution even begins, and actually attempting to run the script is usually the fastest way to see the exact error and line number."
  },
  {
    "term": "Results bugs",
    "explain": "A script that runs without any error, but produces subtly incorrect output. Diagnosed by comparing against the actual, raw underlying source data, not just re-running the same suspect function again."
  },
  {
    "term": "Logic bugs",
    "explain": "The trickiest category: a script runs cleanly, produces no errors, and even looks plausible, but doesn't actually do what was intended. Caught by comparing real output against a concrete, known expectation, not by how clean or error-free it looks."
  },
  {
    "term": ".PSObject.TypeNames",
    "explain": "The actual list PowerShell's formatting system consults to decide how an object should display. Inserting a custom name here gives an object a genuine, distinct type identity, the prerequisite for attaching a custom default view."
  },
  {
    "term": "Update-TypeData and DefaultDisplayPropertySet",
    "explain": "Registers a lasting formatting rule for a specific type name, so every future object of that type displays with the specified default columns automatically, no manual Format-Table required from whoever's calling it."
  },
  {
    "term": "Confirming default formatting works",
    "explain": "The real test of a custom default view isn't checking Update-TypeData ran without error, it's calling the actual function plainly, with nothing piped in, and confirming it displays cleanly on its own, exactly like this final step did."
  },
  {
    "term": "Reaching into .NET directly",
    "explain": "PowerShell is built directly on top of .NET, and any .NET class can be accessed with square-bracket syntax, [ClassName]::Method(), even when no PowerShell cmdlet wraps it. Worth checking for before writing custom logic to solve something from scratch."
  },
  {
    "term": "Wrapping .NET in a PowerShell function",
    "explain": "Once a useful .NET class or method is found, wrapping it in a small, parameterized, Verb-Noun named function turns raw .NET syntax into something that looks and behaves exactly like any other PowerShell tool."
  },
  {
    "term": "Confirming genuine randomness",
    "explain": "A single successful call doesn't prove a generator is actually random, only that it produced one plausible-looking result. Calling it several times and confirming genuinely distinct output is the real test."
  },
  {
    "term": "Write-SqlTableData",
    "explain": "Writes piped-in PowerShell objects directly into a SQL Server table, no manual INSERT statements required, turning a real object collection into stored, shared, queryable data."
  },
  {
    "term": "Invoke-Sqlcmd",
    "explain": "Runs a real SQL query against a server and returns the results as genuine PowerShell objects, the natural counterpart to Write-SqlTableData, confirming data saved to a database is actually retrievable afterward, not just written."
  },
  {
    "term": "Testing the full round trip with fresh data",
    "explain": "The strongest confirmation a save-then-query workflow genuinely works is running it end to end against data that's never touched the system before, not just re-checking data already confirmed in an earlier step."
  },
  {
    "term": "Combining, not inventing",
    "explain": "This entire step reuses exactly three previously taught patterns: Verb-Noun naming, CmdletBinding with a pipeline-aware parameter, and comment-based help. Nothing here is new syntax, only recognizing where each piece fits."
  },
  {
    "term": "Resilience is combined, not new",
    "explain": "Every piece needed to make this function survive a bad input gracefully, -ErrorAction Stop, Try/Catch, Write-Error, was taught individually earlier in this phase. Combining them here is what turns a fragile script into a genuinely trustworthy tool."
  },
  {
    "term": "Never the end",
    "explain": "This entire lesson combined pieces from chapters 3, 11, 14, 15, 16, and 24, nothing new, only recognition of which already-known piece fits where. That is the actual skill this whole curriculum was building toward, and it's exactly the skill that keeps working on the next tool, and the one after that."
  },
  {
    "term": "Discoverability, applied",
    "explain": "Chapters 2 and 3 taught Get-Command and Get-Help as abstract tools. This chapter is where that habit gets tested against a real, unscripted task."
  },
  {
    "term": "-File and -Directory switches",
    "explain": "Get-ChildItem can filter to just files or just folders right at the source, cheaper and cleaner than piping everything into Where-Object afterward to separate them."
  },
  {
    "term": "Reusing a pattern across contexts",
    "explain": "Sort-Object -Descending here works identically to sorting processes by CPU in an earlier lesson. Once a pattern like this clicks, it applies everywhere, not just to the one example it was first taught with."
  },
  {
    "term": "-First on Select-Object",
    "explain": "Grabs a specific count of objects off the front of whatever's currently flowing through the pipeline. Combined with a prior sort, it's how you get a top-N list, top 5 largest files, top 10 busiest processes, and so on."
  },
  {
    "term": "Extracting a raw property value",
    "explain": "(Command).Property runs the command, then reaches directly into the result for one property as a plain value. Different from Select-Object, which keeps the result as an object with just that property attached."
  },
  {
    "term": "Pipeline input ByValue",
    "explain": "Some cmdlets accept an entire piped-in object directly, matching it to one of their own parameters automatically, usually the one accepting that object's exact type. That's why Get-Service | Stop-Service works with zero extra typing."
  },
  {
    "term": "Piping many objects at once",
    "explain": "The same ByValue binding from step 2 works whether one object or many flow through the pipe. Stop-Service | ForEach-Object under the hood, receiving each matched service one at a time."
  },
  {
    "term": "Format-Table vs Format-List",
    "explain": "Both come last in a pipeline, same rule. Table suits a handful of short properties side by side. List suits many properties, or long values, better read one per line."
  },
  {
    "term": "Out-File after formatting is correct here",
    "explain": "Unlike the CSV export lesson, this file is meant purely for a human to read later, a report. Capturing the exact display text with Out-File after formatting is the right tool for that specific job."
  },
  {
    "term": "-eq vs -like",
    "explain": "-eq checks for an exact match. -like checks against a wildcard pattern (using * and ?). Use -eq whenever you know the precise value, save -like for genuine pattern matching."
  },
  {
    "term": "Filter left",
    "explain": "Put Where-Object as early in the pipeline as possible. Every cmdlet after it only has to process whatever survived the filter, not the full original set. This matters most with large data sets or pipelines reaching across a network."
  },
  {
    "term": "Combining conditions with -and / -or",
    "explain": "A single Where-Object block can test multiple conditions. -and requires all of them true, -or requires at least one. This is how you narrow from 'broadly interesting' down to 'actually the problem.'"
  },
  {
    "term": "Test-WSMan",
    "explain": "A lightweight readiness check for PowerShell remoting (WinRM), confirming a target machine is reachable and listening before you commit to opening an actual session against it."
  },
  {
    "term": "One-to-one vs one-to-many",
    "explain": "Enter-PSSession connects you interactively to exactly one remote machine, like RDP but text-based. Invoke-Command runs a specific command against one or many machines without an interactive prompt. Pick based on whether you're exploring or executing."
  },
  {
    "term": "PSComputerName",
    "explain": "When Invoke-Command targets multiple machines, results come back tagged with which machine each one came from, in a PSComputerName property, so you can tell the results apart."
  },
  {
    "term": "-Credential (Get-Credential)",
    "explain": "Get-Credential prompts interactively for a username and password and returns a credential object. Passing that straight into a cmdlet's -Credential parameter runs the operation as that account instead of your current login."
  },
  {
    "term": "Start-Job",
    "explain": "Runs a script block as a separate background job instead of directly in your console. Control returns to you immediately, the job keeps running independently, checked on later with Get-Job."
  },
  {
    "term": "Job states",
    "explain": "A background job's State property moves through values like NotStarted, Running, Completed, or Failed. Get-Job is how you check which state a job is currently in."
  },
  {
    "term": "Receive-Job",
    "explain": "Pulls the actual output a background job produced. Separate from Get-Job, which only reports status. A job can be Completed for a while before you ever call Receive-Job to actually collect its results."
  },
  {
    "term": "Remove-Job",
    "explain": "Deletes a job from the session's job list. Worth doing once you've called Receive-Job and no longer need the job hanging around, otherwise completed jobs quietly accumulate over a long session."
  },
  {
    "term": "-Filter vs Where-Object",
    "explain": "-Filter narrows by filename pattern right at the source, cheap and fast. Where-Object filters on any property, like a date, after the objects already exist. Use -Filter for what it can do, Where-Object for what it can't."
  },
  {
    "term": "ForEach-Object and $_",
    "explain": "ForEach-Object runs its script block once for every object flowing through the pipeline, with $_ standing in for whichever one is currently being processed. This is how you do something individually calculated, like a per-file new name, rather than one fixed action for the whole batch."
  },
  {
    "term": "-WhatIf inside a loop",
    "explain": "-WhatIf works the same way inside a ForEach-Object script block as it does standalone, previewing each individual action, in this case each file's rename, before anything actually happens."
  },
  {
    "term": "Preview, then commit",
    "explain": "Run with -WhatIf first, review the output, then remove it and run for real. This habit matters most exactly where this lesson used it, an operation touching several objects individually with ForEach-Object."
  },
  {
    "term": "Variables",
    "explain": "A $-prefixed name that stores a value, any value, a number, text, or a whole collection of objects, for reuse later in the same session, without re-running whatever produced it."
  },
  {
    "term": "Reusing a stored variable",
    "explain": "Once a result is stored in a variable, later commands can read directly from it instead of re-running whatever produced it in the first place. This matters most with slow or remote queries."
  },
  {
    "term": "Variables work like any pipeline source",
    "explain": "A variable holding a collection of objects can be piped into Where-Object, Sort-Object, or anything else, exactly like fresh cmdlet output. That's what makes storing an expensive query once so useful."
  },
  {
    "term": "Variables preserve object type",
    "explain": "Storing a result in a variable doesn't change what kind of data it is. $allServices holds the exact same real ServiceController objects Get-Service returned, confirmed with Get-Member exactly like any other pipeline output."
  },
  {
    "term": "Read-Host",
    "explain": "Prompts interactively and returns whatever the user types as a plain string. The standard way to gather input at run time instead of hardcoding values into a script."
  },
  {
    "term": "Write-Host vs the pipeline",
    "explain": "Write-Host writes straight to the console and never touches the pipeline, useful for status messages, progress notes, or anything meant purely for a human watching the screen, not for downstream commands."
  },
  {
    "term": "Real pipeline output",
    "explain": "Cmdlet results like Get-Service's output are genuine pipeline data, unlike Write-Host's screen-only messages. This is the data that would actually flow into something like Export-Csv or Where-Object further down a pipeline."
  },
  {
    "term": "Write-Host never touches the pipeline",
    "explain": "Confirmed here concretely: Write-Host output never shows up in exported or piped results, because it writes directly to the console and bypasses the pipeline entirely, by design."
  },
  {
    "term": "New-PSSession",
    "explain": "Opens a persistent remote connection and hands back an object representing it, without running any command. That object can then be reused across multiple Invoke-Command calls, avoiding the overhead of reconnecting each time."
  },
  {
    "term": "-Session vs -ComputerName on Invoke-Command",
    "explain": "-ComputerName opens a fresh connection, runs the command, and closes it, every call. -Session reuses an already-open connection from New-PSSession, avoiding that repeated overhead across multiple commands."
  },
  {
    "term": "One session, many commands",
    "explain": "Once a session is open via New-PSSession, it can be passed into -Session on as many separate Invoke-Command calls as needed, running any number of different commands without reopening the connection each time."
  },
  {
    "term": "Remove-PSSession",
    "explain": "Properly closes a session opened with New-PSSession, releasing the connection on both ends. Worth doing once you're finished running commands through it, sessions left open unnecessarily tie up resources on the remote machine."
  },
  {
    "term": "Comments with #",
    "explain": "Anything after a # on a line is ignored when a script runs. Used to explain what a script does, or leave notes for whoever reads it later, including yourself in six months."
  },
  {
    "term": "The .\\ prefix",
    "explain": "Explicitly means 'right here, in the current folder.' Required to run a local script by filename, unlike cmdlets which PowerShell finds automatically without any prefix."
  },
  {
    "term": "Restricted execution policy",
    "explain": "The default on many Windows machines: no scripts run at all, only interactive commands. This is exactly why a saved .ps1 file can fail even though typing the same commands directly at the prompt works fine."
  },
  {
    "term": "RemoteSigned",
    "explain": "A common, safer execution policy: scripts written locally run without restriction, but anything downloaded from the internet needs a trusted digital signature first. A practical middle ground between Restricted and Unrestricted."
  }
];
