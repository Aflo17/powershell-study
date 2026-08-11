// Auto-generated exam question pools, assembled from the standalone (non-chained) steps
// across every lesson in each phase. Each exam page randomly draws from these at run time.

var PS_EXAM_POOL_BEGINNER = [
  {
    "title": "Step 1 of 4 - check the version",
    "task": "Before touching anything, check what PowerShell version this machine is running.",
    "prefill": "",
    "chips": [
      {
        "text": "$PSVersionTable",
        "hint": "A built-in variable, not a cmdlet, that always holds PowerShell's own version details."
      },
      {
        "text": "Get-Host",
        "hint": "Returns info about the current host application. Version is in there, but mixed with console and UI details that have nothing to do with the engine version."
      }
    ],
    "check": function(c){ return /\$psversiontable/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-host/i.test(c) && !/psversiontable/i.test(c); },
        "output": "Name             : ConsoleHost\nVersion          : 7.4.2\nInstanceId       : 3f1e2a90-71e2-4a6a-9c7b-1a2b3c4d5e6f\nUI               : System.Management.Automation.Internal.Host.InternalHostUserInterface\nCurrentCulture   : en-US\nDebuggerEnabled  : True\nIsRunspacePushed : False",
        "note": "That ran, and Version is technically in there, but it's buried in a pile of console and host properties that have nothing to do with the PowerShell engine itself. $PSVersionTable is the direct, standard place to check."
      }
    ],
    "hint": "This one isn't a cmdlet at all, it's a built-in variable. Everything starting with $ in PowerShell is a variable you can just look at.",
    "tokens": [
      {
        "text": "$PSVersionTable",
        "cat": "value",
        "note": "A built-in automatic variable. PowerShell fills it in for you the moment the session starts, no command needed to create it."
      }
    ],
    "output": "Name                           Value\n----                           -----\nPSVersion                      7.4.2\nPSEdition                      Core\nOS                              Microsoft Windows 10.0.22631\nPlatform                        Win32NT",
    "order": "This is always worth checking first, especially on a machine or server you don't manage day to day. Different PowerShell versions support different syntax, so knowing what you're working with shapes everything else you try after this.",
    "notice": [
      {
        "field": "PSVersion",
        "note": "The actual version number. Most syntax and feature differences between PowerShell versions hinge on this."
      },
      {
        "field": "PSEdition",
        "note": "Core vs Desktop. Matters for cross-platform scripts, since Desktop edition is Windows-only."
      }
    ],
    "distractor": {
      "name": "Get-Host",
      "why": "Get-Host returns information about the current host application, the console or terminal you're running PowerShell inside of. Version happens to be one of its properties, but it's mixed in with a dozen unrelated UI and culture settings.",
      "better": "Better fit for: checking things about the console itself, like its current culture setting or whether the debugger is enabled, not the PowerShell engine version."
    },
    "concepts": [
      {
        "term": "$PSVersionTable",
        "explain": "A built-in variable, not a cmdlet, that's always there from the moment a session starts. Anything beginning with $ in PowerShell is a variable, holding a value you can inspect any time."
      },
      {
        "term": "Discoverability over memorization",
        "explain": "You are not expected to memorize every cmdlet or variable. PowerShell is built so you can always ask it what it knows, that habit is the entire point of this lesson."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - find the right cmdlet",
    "task": "Now find the exact cmdlet name for listing running processes, without guessing at it.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Command",
        "hint": "The discovery cmdlet. Finds cmdlets by name pattern, verb, or noun, even ones you've never seen before."
      },
      {
        "text": "-Verb Get",
        "hint": "Narrows results to cmdlets whose verb is Get, meaning read-only, nothing gets changed."
      },
      {
        "text": "-Noun Process",
        "hint": "Narrows results to cmdlets whose noun is Process."
      },
      {
        "text": "Get-Help",
        "hint": "Looks up usage for a cmdlet you already know the name of. Not a search tool for names you don't have yet."
      }
    ],
    "check": function(c){ return /get-command/i.test(c) && (/-verb/i.test(c) || /-noun/i.test(c)) && /process/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-help/i.test(c) && /process/i.test(c); },
        "output": "Get-Help : No help topics were found that match 'Process'. Try Get-Help -Online, or Update-Help to download the latest help files.",
        "note": "That ran, but Get-Help needs a real, exact cmdlet or topic name to look up, and 'Process' on its own isn't one. Get-Command is the discovery tool for finding a name you don't have yet, Get-Help is for once you already know it."
      }
    ],
    "hint": "You're searching for a name you don't have yet, so this needs Get-Command, not Get-Help. Narrow it with -Verb Get and -Noun Process.",
    "tokens": [
      {
        "text": "Get-Command",
        "cat": "cmdlet",
        "note": "Searches every cmdlet, function, and alias PowerShell knows about, by name, verb, or noun."
      },
      {
        "text": "-Verb",
        "cat": "param",
        "note": "Filters to commands using this action word."
      },
      {
        "text": "Get",
        "cat": "value",
        "note": "Restricts the search to read-only, non-destructive commands."
      },
      {
        "text": "-Noun",
        "cat": "param",
        "note": "Filters to commands acting on this kind of object."
      },
      {
        "text": "Process",
        "cat": "value",
        "note": "What you're trying to find a Get- command for."
      }
    ],
    "output": "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nCmdlet          Get-Process                                        7.0.0.0    Microsoft.PowerShell.Management",
    "order": "Once you know your environment from step 1, the next habit is finding the right tool without guessing at spelling. Get-Command comes before Get-Help because you cannot look up help for a cmdlet name you don't have yet.",
    "notice": [
      {
        "field": "CommandType",
        "note": "Confirms this is a real Cmdlet PowerShell recognizes, not a typo or something you'd need to write yourself."
      },
      {
        "field": "Get-Process",
        "note": "The exact, correctly-spelled name you'll reuse in the next two steps."
      }
    ],
    "distractor": {
      "name": "Get-Help Process",
      "why": "Get-Help needs an exact cmdlet or topic name that already exists. 'Process' by itself isn't a real topic, so the search comes back empty. Get-Help answers 'how do I use this', not 'what is this called'.",
      "better": "Better fit for: once you already have a cmdlet name in hand and want its parameters or examples, exactly what step 3 of this lesson is for."
    },
    "concepts": [
      {
        "term": "Get-Command",
        "explain": "The cmdlet for finding cmdlets. Search by verb, noun, or a wildcard pattern like *process* when you don't know the exact name yet."
      },
      {
        "term": "-Verb and -Noun parameters",
        "explain": "Most discovery cmdlets let you narrow by structure, not just free text. Thinking in Verb-Noun terms makes searching far faster than guessing full names."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - read the help before running it",
    "task": "You were told to be careful. Pull up help for Get-Process before actually running it.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Help",
        "hint": "Looks up detailed usage, parameters, and examples for a cmdlet you already know the name of."
      },
      {
        "text": "Get-Process",
        "hint": "The cmdlet you're looking up help for, confirmed spelled correctly from step 2."
      },
      {
        "text": "-Examples",
        "hint": "Shows just the real-world usage examples, the fastest way to see a command in action."
      },
      {
        "text": "Get-Command",
        "hint": "Confirms a cmdlet exists and shows its signature, but doesn't explain how to actually use it."
      }
    ],
    "check": function(c){ return /get-help/i.test(c) && /get-process/i.test(c) && (/-examples/i.test(c) || /-full/i.test(c)); },
    "misses": [
      {
        "test": function(c){ return /get-command/i.test(c) && /get-process/i.test(c) && !/get-help/i.test(c); },
        "output": "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nCmdlet          Get-Process                                        7.0.0.0    Microsoft.PowerShell.Management",
        "note": "That ran, but it's the same signature-only result from step 2. It confirms the cmdlet exists, it doesn't explain how to use it safely. Get-Help -Examples is what actually shows usage."
      }
    ],
    "hint": "You already found the name in step 2. Now look it up with Get-Help Get-Process, and add -Examples to see real usage instead of a wall of parameters.",
    "tokens": [
      {
        "text": "Get-Help",
        "cat": "cmdlet",
        "note": "Looks up documentation for a specific, already-known cmdlet name."
      },
      {
        "text": "Get-Process",
        "cat": "value",
        "note": "The cmdlet you're asking about, exactly as confirmed in step 2's output."
      },
      {
        "text": "-Examples",
        "cat": "param",
        "note": "Trims the output down to just the worked examples, skipping the full parameter reference."
      }
    ],
    "output": "NAME\n    Get-Process\n\nSYNOPSIS\n    Gets the processes that are running on the local computer.\n\n    -------------------------- EXAMPLE 1 --------------------------\n\n    PS > Get-Process\n\n    Gets all of the processes on the local computer.",
    "order": "Now that you've found the cmdlet in step 2, check how it actually works before running it, especially on a system you were told to be careful with. This is the habit that prevents step 4 from being a blind guess.",
    "notice": [
      {
        "field": "SYNOPSIS",
        "note": "A one-line summary of what the cmdlet does, worth reading before anything else."
      },
      {
        "field": "EXAMPLE 1",
        "note": "The fastest way to see a command in action without reading the full parameter reference."
      }
    ],
    "distractor": {
      "name": "Get-Command Get-Process",
      "why": "Get-Command already told you this cmdlet exists back in step 2. Running it again just repeats the signature, it never explains what the cmdlet actually does or how to call it with real examples.",
      "better": "Better fit for: confirming a cmdlet exists at all, or checking which module it comes from, a quick existence check, not a how-to."
    },
    "concepts": [
      {
        "term": "Get-Help",
        "explain": "The cmdlet for learning how something you've already found actually works. -Examples for quick real-world usage, -Full for every parameter and detail, -Online to open the web docs in a browser."
      },
      {
        "term": "Get-Command vs Get-Help",
        "explain": "Two different jobs: Get-Command answers 'what is this called', Get-Help answers 'how do I use it'. Mixing the two up is one of the most common habits to unlearn early on."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - run it, carefully",
    "task": "Now actually run it, but only for one specific process: explorer.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process",
        "hint": "Lists running processes. Read-only, safe to run."
      },
      {
        "text": "-Name",
        "hint": "Narrows results down to one specific process by name instead of listing everything."
      },
      {
        "text": "explorer",
        "hint": "The process name you're checking for."
      },
      {
        "text": "Stop-Process",
        "hint": "Terminates a process. Same noun as Get-Process, completely different, destructive verb."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /-name/i.test(c) && /explorer/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /stop-process/i.test(c) && /explorer/i.test(c); },
        "output": "Confirm\nAre you sure you want to perform this action?\nPerforming the operation \"Stop-Process\" on target \"explorer (4521)\".\n[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is \"Y\"):",
        "note": "That's not a typo you want to make on a live system. Stop-Process actually ends the process, it does not list it. Get- reads, Stop- kills, same noun, completely different outcome. Always check the verb before hitting enter, especially on a machine you were told to be careful with."
      }
    ],
    "hint": "Same noun as the cmdlet you looked up in step 3, but double check the verb. You want to list it, not end it. Add -Name explorer to narrow it down.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "The exact, correctly-spelled cmdlet confirmed back in step 2 and explained in step 3."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Narrows the result to one specific process instead of every process on the machine."
      },
      {
        "text": "explorer",
        "cat": "value",
        "note": "The process name being checked, no .exe extension needed."
      }
    ],
    "output": "NPM(K)    PM(M)      WS(M)     CPU(s)      Id  SI ProcessName\n------    -----      -----     ------      --  -- -----------\n    45     62.10      88.45       3.22    4521   1 explorer",
    "order": "Only now, after confirming the version in step 1, finding the right cmdlet in step 2, and checking how it works in step 3, do you actually run it. That order is the entire discoverability habit this lesson is teaching: check before you run, not after.",
    "notice": [
      {
        "field": "explorer",
        "note": "Only one row came back, confirming -Name actually narrowed the results instead of listing every process on the machine."
      },
      {
        "field": "Id",
        "note": "The process ID, useful later if you ever do need to target this exact running instance of something."
      }
    ],
    "distractor": {
      "name": "Stop-Process -Name explorer",
      "why": "Stop-Process terminates a process instead of listing it. On a real machine this would actually end Explorer. Same noun as what you want, a completely different and destructive verb.",
      "better": "Better fit for: when you deliberately do need to end a hung or unwanted process, on purpose, never as a way to check whether something is running."
    },
    "concepts": [
      {
        "term": "-Name parameter",
        "explain": "Most Get- cmdlets accept a -Name, or a similar identity-style parameter, to narrow results down to one specific thing instead of everything."
      },
      {
        "term": "Verb matters, a lot",
        "explain": "Get- cmdlets are read-only and safe to run. Other verbs like Stop-, Remove-, or Set- change something on the system. Always read the verb before running a command you're unsure about, especially early on."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - resolve the alias",
    "task": "Find out exactly which cmdlet the alias gsv actually maps to.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Alias",
        "hint": "Looks up what a short alias name actually points to."
      },
      {
        "text": "gsv",
        "hint": "The alias in question, short for something, that's what you're finding out."
      },
      {
        "text": "Get-Help",
        "hint": "Looks up documentation for a cmdlet you already know the exact name of."
      }
    ],
    "check": function(c){ return /get-alias/i.test(c) && /gsv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-help/i.test(c) && /gsv/i.test(c); },
        "output": "Get-Help : No help topics were found that match 'gsv'. Try Get-Help -Online, or Update-Help to download the latest help files.",
        "note": "That ran, but gsv itself has no help topic, it is not a real cmdlet, just a nickname for one. Get-Alias is what resolves a nickname to its real cmdlet name."
      }
    ],
    "hint": "Aliases are their own thing in PowerShell, separate from cmdlets. Use Get-Alias with the alias name to see what it points to.",
    "tokens": [
      {
        "text": "Get-Alias",
        "cat": "cmdlet",
        "note": "Looks up an alias and shows the real cmdlet name it's a shortcut for."
      },
      {
        "text": "gsv",
        "cat": "value",
        "note": "The alias being resolved."
      }
    ],
    "output": "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nAlias           gsv -> Get-Service",
    "order": "This has to come first because you cannot rewrite a shortcut into its full form until you know what the shortcut actually stands for.",
    "notice": [
      {
        "field": "gsv -> Get-Service",
        "note": "The arrow is the whole answer: gsv is just a nickname for Get-Service, nothing more."
      }
    ],
    "distractor": {
      "name": "Get-Help gsv",
      "why": "Get-Help looks up documentation for an actual command name. gsv isn't a command in its own right, it's an alias, a nickname, so there's no help topic for it directly.",
      "better": "Better fit for: once you already have the real cmdlet name, Get-Service in this case, and want to know its parameters."
    },
    "concepts": [
      {
        "term": "Aliases are nicknames, not cmdlets",
        "explain": "gsv, ls, dir, gps, and similar short names are not commands themselves, they're pointers to real cmdlets. Get-Alias is how you see what a nickname actually resolves to."
      },
      {
        "term": "Why avoid aliases in anything you'll reread",
        "explain": "Aliases save keystrokes typing live, but they hurt readability in anything saved for later, scripts, tickets, documentation. Full cmdlet names read like sentences, aliases don't."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - rewrite it with full names",
    "task": "Rewrite gsv wuauserv using the full cmdlet name and a full parameter name instead of shortcuts.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "The full cmdlet name gsv is a nickname for."
      },
      {
        "text": "-Name",
        "hint": "The full parameter name, instead of leaving it positional or truncated."
      },
      {
        "text": "wuauserv",
        "hint": "The service you're checking, the Windows Update service."
      },
      {
        "text": "gsv",
        "hint": "The alias itself. Fine to type live, not what you want in anything you'll reread."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /-name/i.test(c) && /wuauserv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /^gsv /i.test(c.trim()) || /\bgsv\b/i.test(c) && !/get-service/i.test(c); },
        "output": "Status   Name               DisplayName\n------   ----               -----------\nRunning  wuauserv           Windows Update",
        "note": "That works, and returns the right answer, but it's still the alias and a positional argument. It runs fine live, it just won't read clearly to anyone, including future you, looking at it later."
      }
    ],
    "hint": "You already know gsv means Get-Service from step 1. Spell it out fully, and add -Name in front of wuauserv instead of leaving it positional.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "The full name resolved in step 1."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Spelling out the parameter name instead of relying on positional binding."
      },
      {
        "text": "wuauserv",
        "cat": "value",
        "note": "The actual Windows service name for Windows Update."
      }
    ],
    "output": "Status   Name               DisplayName\n------   ----               -----------\nRunning  wuauserv           Windows Update",
    "order": "This comes right after resolving the alias, since you can't rewrite gsv into Get-Service until you know that's what it actually is.",
    "notice": [
      {
        "field": "Status",
        "note": "Running, so the service is currently active on this machine."
      }
    ],
    "distractor": {
      "name": "gsv wuauserv",
      "why": "This technically works, PowerShell resolves the alias and binds wuauserv positionally. But it's exactly the shortcut-heavy style the request asked you to move away from.",
      "better": "Better fit for: typing quickly at your own interactive prompt when nobody else will ever read it back."
    },
    "concepts": [
      {
        "term": "Positional vs named parameters",
        "explain": "wuauserv on its own relies on PowerShell guessing which parameter you mean based on position. -Name wuauserv says it explicitly. Both work, only one is unambiguous to a reader."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - check why the script won't run",
    "task": "Before blaming the script itself, check this machine's execution policy.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ExecutionPolicy",
        "hint": "Shows the current script execution policy for this session."
      },
      {
        "text": "Set-ExecutionPolicy",
        "hint": "Changes the policy. A bigger, riskier move than just checking first."
      },
      {
        "text": "Unrestricted",
        "hint": "The loosest possible policy. Rarely the right first move on someone else's machine."
      }
    ],
    "check": function(c){ return /get-executionpolicy/i.test(c) && !/set-executionpolicy/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /set-executionpolicy/i.test(c) && /unrestricted/i.test(c); },
        "output": "Execution Policy Change\nThe execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose\nyou to the security risks described in the about_Execution_Policies help topic. Do you want to change the execution\npolicy?\n[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is \"N\"):",
        "note": "That's changing a security setting before you've even confirmed what it currently is, and Unrestricted is the loosest setting there is. Check first with Get-ExecutionPolicy, diagnose, then make the smallest change that actually fixes it."
      }
    ],
    "hint": "Check before you change. Get-ExecutionPolicy shows the current setting without touching anything.",
    "tokens": [
      {
        "text": "Get-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Reads the current script execution policy without changing anything."
      }
    ],
    "output": "Restricted",
    "order": "This comes before any fix, because Restricted, the default on many Windows machines, blocks all scripts, and you can't pick the right fix without first confirming that's actually the problem.",
    "notice": [
      {
        "field": "Restricted",
        "note": "The default policy on many systems: no scripts of any kind are allowed to run, only interactive commands."
      }
    ],
    "distractor": {
      "name": "Set-ExecutionPolicy Unrestricted",
      "why": "This jumps straight to the loosest possible setting before confirming what's actually blocking the script, and on a shared or work machine that's a bigger security change than the problem calls for.",
      "better": "Better fit for: never, really, as a first move. If you do need to change policy, RemoteSigned is usually the smallest change that unblocks local scripts."
    },
    "concepts": [
      {
        "term": "Execution policy is a safety rail, not a permissions system",
        "explain": "It's designed to stop you from accidentally double-clicking a malicious script, not to stop a determined attacker. Still worth checking and setting deliberately rather than blowing it wide open."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - see the full picture",
    "task": "Check the policy across every scope, not just the effective one, before deciding what to change.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ExecutionPolicy",
        "hint": "The same cmdlet from step 3."
      },
      {
        "text": "-List",
        "hint": "Shows every scope, machine policy, user policy, process, current user, local machine, instead of just the one that wins."
      }
    ],
    "check": function(c){ return /get-executionpolicy/i.test(c) && /-list/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-executionpolicy/i.test(c) && !/-list/i.test(c); },
        "output": "Restricted",
        "note": "That's the same single answer from step 3. It tells you the effective policy, not which scope is actually setting it, a Group Policy at the machine level would look identical to a plain local default from here."
      }
    ],
    "hint": "Add -List to Get-ExecutionPolicy to see every scope at once instead of just the effective result.",
    "tokens": [
      {
        "text": "Get-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Same cmdlet as step 3."
      },
      {
        "text": "-List",
        "cat": "param",
        "note": "Expands the single effective answer into every scope PowerShell checks, in priority order."
      }
    ],
    "output": "        Scope ExecutionPolicy\n        ----- ---------------\nMachinePolicy       Undefined\n   UserPolicy       Undefined\n      Process       Undefined\n  CurrentUser       Undefined\n LocalMachine       Restricted",
    "order": "This is the last step because it's the deeper check you only need once you know something is actually restricted. It tells you where that restriction is coming from, useful before deciding whether Set-ExecutionPolicy at the CurrentUser scope will even be enough, or whether it's set higher up by policy.",
    "notice": [
      {
        "field": "MachinePolicy, UserPolicy: Undefined",
        "note": "Nothing is being forced by Group Policy here, so a CurrentUser-scoped change would actually take effect."
      },
      {
        "field": "LocalMachine: Restricted",
        "note": "This is where the Restricted default from step 3 is actually coming from."
      }
    ],
    "distractor": {
      "name": "Get-ExecutionPolicy (no -List)",
      "why": "Without -List you only see the one effective policy, not which scope set it. If MachinePolicy were Restricted instead, a CurrentUser-scoped fix would silently do nothing, and this view is the only way to tell the difference ahead of time.",
      "better": "Better fit for: a quick single check when you already know policy isn't managed by Group Policy on this machine."
    },
    "concepts": [
      {
        "term": "Scope layering",
        "explain": "PowerShell checks execution policy at multiple scopes, MachinePolicy and UserPolicy (set by Group Policy) always win over anything set locally. -List is how you see which one is actually in control before trying to change it."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - see what drives PowerShell can browse",
    "task": "Before navigating anywhere, see what PowerShell drives are actually available on this machine.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-PSDrive",
        "hint": "Lists every drive PowerShell can navigate, filesystem drives, the registry, and more, all the same way."
      },
      {
        "text": "Get-ChildItem",
        "hint": "Lists what's inside a location you're already in, not the list of locations themselves."
      }
    ],
    "check": function(c){ return /get-psdrive/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && !/get-psdrive/i.test(c) && !/\-path/i.test(c) && !/hklm/i.test(c); },
        "output": "    Directory: C:\\Users\\jsmith\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd----           1/3/2026   9:14 AM                Desktop\nd----           1/3/2026   9:14 AM                Documents\nd----           1/3/2026   9:14 AM                Downloads",
        "note": "That ran, but it just lists what's inside wherever you currently are, your home folder here. It doesn't answer the actual question, which drives, filesystem, registry, or otherwise, does PowerShell even know about."
      }
    ],
    "hint": "You want the list of locations themselves, not what's inside one of them. Get-PSDrive shows every drive PowerShell can browse.",
    "tokens": [
      {
        "text": "Get-PSDrive",
        "cat": "cmdlet",
        "note": "Lists every drive PowerShell knows how to browse, filesystem drives like C:, plus non-filesystem ones like HKLM: for the registry."
      }
    ],
    "output": "Name           Used (GB)     Free (GB) Provider      Root\n----           ---------     --------- --------      ----\nC                  210.4          89.6 FileSystem    C:\\\nHKCU                                    Registry      HKEY_CURRENT_USER\nHKLM                                    Registry      HKEY_LOCAL_MACHINE\nEnv                                     Environment",
    "order": "This comes first because it shows you what's even available to navigate before you go looking for a specific file or registry key. Notice HKLM and HKCU sitting right alongside C, that's the whole idea of a provider.",
    "notice": [
      {
        "field": "C, Provider: FileSystem",
        "note": "The familiar C: drive, backed by the FileSystem provider."
      },
      {
        "field": "HKLM, Provider: Registry",
        "note": "The registry, exposed as a drive too, browsable with the exact same commands as a folder."
      }
    ],
    "distractor": {
      "name": "Get-ChildItem (no path)",
      "why": "Get-ChildItem lists contents of wherever you currently are, it answers 'what's in this one location', not 'what locations exist'. You'd need to already know a drive existed to point it there.",
      "better": "Better fit for: once you already know where you're going and want to see what's inside."
    },
    "concepts": [
      {
        "term": "Providers",
        "explain": "A provider is what lets PowerShell expose something that isn't really a filesystem, the registry, environment variables, certificates, as if it were one. Same verbs, same navigation, completely different kind of data underneath."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - find the log files",
    "task": "Now find .log files in C:\\Temp using a wildcard.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem",
        "hint": "Lists items at a given path, works the same across every provider."
      },
      {
        "text": "-Path",
        "hint": "The location to look in."
      },
      {
        "text": "C:\\Temp",
        "hint": "The folder being checked."
      },
      {
        "text": "-Filter *.log",
        "hint": "A wildcard pattern, narrows results to files ending in .log."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /temp/i.test(c) && /\.log/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && /\.log/i.test(c) && !/temp/i.test(c) && !/-path/i.test(c); },
        "output": "Get-ChildItem : Cannot find path 'C:\\Users\\jsmith\\*.log' because it does not exist.",
        "note": "That ran from wherever your current location happens to be, not C:\\Temp, so it's searching the wrong folder entirely. Point -Path at C:\\Temp explicitly instead of relying on wherever you happen to be sitting."
      }
    ],
    "hint": "Get-ChildItem with -Path pointing at C:\\Temp, and -Filter *.log to narrow it to log files by wildcard.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "The same cmdlet from step 1, now pointed at a specific folder instead of listing drives."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Tells it exactly where to look, instead of wherever your current location happens to be."
      },
      {
        "text": "C:\\Temp",
        "cat": "value",
        "note": "The folder being checked for leftover logs."
      },
      {
        "text": "-Filter",
        "cat": "param",
        "note": "Applies a wildcard pattern, handled efficiently by the filesystem provider itself."
      },
      {
        "text": "*.log",
        "cat": "value",
        "note": "Matches any filename ending in .log."
      }
    ],
    "output": "    Directory: C:\\Temp\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\n-a---           11/2/2025   3:41 AM          88213 setup.log\n-a---           10/18/2025   7:02 AM         204112 install-old.log",
    "order": "Once you know C: is a real, browsable drive from step 1, this is the ordinary filesystem lookup you'd expect, same cmdlet, just pointed somewhere specific with a wildcard.",
    "notice": [
      {
        "field": "setup.log, install-old.log",
        "note": "Both matched the *.log wildcard. Their LastWriteTime is what you'd check next against a 30-day cutoff."
      }
    ],
    "distractor": {
      "name": "Get-ChildItem *.log (no -Path)",
      "why": "Without -Path, this searches whatever folder you currently happen to be in, not C:\\Temp specifically. It might return nothing, or worse, return log files from the wrong location entirely.",
      "better": "Better fit for: when you're already sitting inside the folder you want to search, via cd or Set-Location first."
    },
    "concepts": [
      {
        "term": "Wildcards",
        "explain": "* matches any number of characters. *.log matches any filename ending in .log, regardless of what comes before it. This works the same way across most PowerShell providers, not just the filesystem."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - check the registry the same way",
    "task": "Now check whether HKLM:\\SOFTWARE\\Contoso\\CleanupTool exists, using the exact same approach as the filesystem.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem",
        "hint": "The same cmdlet, once again. Providers mean you don't need a different tool for the registry."
      },
      {
        "text": "-Path",
        "hint": "Same parameter as step 2, just pointed at a registry path instead of a filesystem one."
      },
      {
        "text": "HKLM:\\SOFTWARE\\Contoso\\CleanupTool",
        "hint": "A registry key path, uses the same colon-and-backslash pattern as a drive."
      },
      {
        "text": "regedit.exe",
        "hint": "The old GUI registry editor. Not PowerShell, and not scriptable."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /hklm/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /regedit/i.test(c); },
        "output": "(opens a separate graphical window, nothing returned to the PowerShell console)",
        "note": "That launches an entirely different program outside PowerShell. It works for a human clicking around, but it can't be scripted, checked in a script's exit code, or run unattended on a remote server."
      }
    ],
    "hint": "Same cmdlet as step 2, same -Path parameter, just point it at HKLM:\\SOFTWARE\\Contoso\\CleanupTool instead of a filesystem folder.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "The exact same cmdlet used for the filesystem in step 2, now working against the registry provider instead."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Same parameter, same meaning, different kind of path underneath."
      },
      {
        "text": "HKLM:\\SOFTWARE\\Contoso\\CleanupTool",
        "cat": "value",
        "note": "A registry key, addressed the same way a folder path would be."
      }
    ],
    "output": "    Hive: HKEY_LOCAL_MACHINE\\SOFTWARE\\Contoso\\CleanupTool\n\nName                           Property\n----                           --------\nSettings                       {Version, LastRun}",
    "order": "This comes after confirming HKLM is a real, browsable drive back in step 1. Once you know that, checking a registry key is just Get-ChildItem pointed somewhere else, no new cmdlet to learn.",
    "notice": [
      {
        "field": "Hive: HKEY_LOCAL_MACHINE\\SOFTWARE\\Contoso\\CleanupTool",
        "note": "Confirms the key exists at all, if it didn't, this would return an error instead of a result."
      }
    ],
    "distractor": {
      "name": "regedit.exe",
      "why": "It works, but it's a separate GUI tool entirely outside PowerShell. It can't be part of a script, can't run against a remote server, and produces nothing you can check programmatically.",
      "better": "Better fit for: a one-off manual look by a human sitting at that exact machine's desktop."
    },
    "concepts": [
      {
        "term": "One provider model, many data sources",
        "explain": "This is the entire chapter in one example: the same Get-ChildItem, the same -Path parameter, works identically against a filesystem folder and a registry key, because both are exposed through PowerShell's provider system."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - handle a tricky literal path",
    "task": "One of the folders is literally named C:\\Temp\\[Logs]. Check it without PowerShell misreading the brackets as a wildcard.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem",
        "hint": "Same cmdlet, one more time."
      },
      {
        "text": "-LiteralPath",
        "hint": "Takes the path exactly as typed, no wildcard characters interpreted."
      },
      {
        "text": "-Path",
        "hint": "The parameter used in steps 2 and 3. Treats brackets as wildcard pattern characters, not literal folder-name characters."
      },
      {
        "text": "C:\\Temp\\[Logs]",
        "hint": "A real folder name that happens to contain square brackets."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /-literalpath/i.test(c) && /logs/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && /-path/i.test(c) && /\[logs\]/i.test(c) && !/-literalpath/i.test(c); },
        "output": "Get-ChildItem : Cannot find path 'C:\\Temp\\Logs' because it does not exist.",
        "note": "That ran, but -Path treats square brackets as wildcard pattern syntax, not literal characters, so it went looking for a folder named just Logs without the brackets and found nothing. -LiteralPath is what takes the name exactly as written."
      }
    ],
    "hint": "Square brackets mean something special to -Path, they're wildcard syntax. Use -LiteralPath instead to take the folder name exactly as written.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "The same cmdlet from every step in this lesson."
      },
      {
        "text": "-LiteralPath",
        "cat": "param",
        "note": "Takes the path exactly as given, with no wildcard character interpretation at all."
      },
      {
        "text": "C:\\Temp\\[Logs]",
        "cat": "value",
        "note": "The real folder name, brackets and all."
      }
    ],
    "output": "    Directory: C:\\Temp\\[Logs]\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\n-a---           1/2/2026   6:15 AM           4021 rotation.log",
    "order": "This is last because it's the edge case: everything before this assumed simple, wildcard-free paths. A folder name with brackets in it is exactly where -Path quietly breaks and -LiteralPath is the fix, worth knowing once the basics are solid.",
    "notice": [
      {
        "field": "C:\\Temp\\[Logs]",
        "note": "Notice the directory listed in the output header matches exactly what you typed, brackets included, because -LiteralPath didn't try to interpret them."
      }
    ],
    "distractor": {
      "name": "-Path with brackets",
      "why": "-Path treats [ and ] as wildcard pattern characters, meaning 'any one character in this set'. A folder literally named [Logs] gets misread as a pattern instead of a name, and the lookup fails.",
      "better": "Better fit for: any ordinary path with no special wildcard characters in the actual name, which is most of the time."
    },
    "concepts": [
      {
        "term": "-LiteralPath vs -Path",
        "explain": "-Path is wildcard-aware, useful for patterns like *.log. -LiteralPath takes exactly what you typed, no interpretation. Reach for -LiteralPath whenever a real file or folder name happens to contain characters like [ ] * or ?."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - list every service",
    "task": "Start simple: get every service on this machine.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "Lists every service PowerShell can see on this machine."
      },
      {
        "text": "Get-Process",
        "hint": "Lists running processes, not services. Different thing entirely."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && !/get-process/i.test(c); },
    "misses": [],
    "hint": "Just Get-Service on its own, no filtering needed yet, that comes later.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Returns every service known to this machine, as full objects, not text."
      }
    ],
    "output": "Status   Name               DisplayName\n------   ----               -----------\nRunning  Spooler            Print Spooler\nStopped  wuauserv           Windows Update\nRunning  WinDefend          Microsoft Defender Antivirus",
    "order": "This is the starting point, the raw data everything else in this lesson pipes forward from.",
    "notice": [
      {
        "field": "Status, Name, DisplayName",
        "note": "These are the actual object properties you'll be exporting and piping in the next steps, not just display columns."
      }
    ],
    "distractor": {
      "name": "Get-Process",
      "why": "Get-Process lists running processes, individual programs currently executing. Services are a different concept entirely, background components that can be running or stopped independent of any visible process.",
      "better": "Better fit for: checking what programs are actively running right now, like you did back in the very first lesson."
    },
    "concepts": [
      {
        "term": "The pipeline connects commands",
        "explain": "Everything in this lesson builds on one idea: a command's output can become the next command's input with a single | character, no temporary files, no copy-pasting."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - export it as real CSV",
    "task": "Now pipe that list into a proper CSV export, not just a text dump.",
    "prefill": "",
    "chips": [
      {
        "text": "Export-Csv",
        "hint": "Writes objects out as structured, comma-separated data, opens cleanly in Excel with real columns."
      },
      {
        "text": "-Path services.csv",
        "hint": "Where to save the file."
      },
      {
        "text": "-NoTypeInformation",
        "hint": "Skips an extra header line .NET normally adds, keeps the CSV clean for Excel."
      },
      {
        "text": "Out-File",
        "hint": "Writes plain text output, the same text you'd see in the console, not structured columns."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /export-csv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /out-file/i.test(c) && !/export-csv/i.test(c); },
        "output": "(services.csv written, but opening it in Excel shows one column of plain text, formatted exactly like the console output, not separate fields)",
        "note": "That ran, and it did create a file, but Out-File just writes the same text you'd see printed to the screen. Excel sees one big column instead of separate Status, Name, and DisplayName fields. Export-Csv is what actually produces real comma-separated columns."
      }
    ],
    "hint": "Pipe Get-Service into Export-Csv, with -Path pointing at a filename and -NoTypeInformation to keep the header clean.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Same command from step 1, now feeding into the next one via the pipe."
      },
      {
        "text": "Export-Csv",
        "cat": "cmdlet",
        "note": "Converts objects into a real, structured CSV file with actual columns."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where the file gets saved."
      },
      {
        "text": "services.csv",
        "cat": "value",
        "note": "The output filename."
      },
      {
        "text": "-NoTypeInformation",
        "cat": "param",
        "note": "Skips a #TYPE header line PowerShell adds by default, which Excel doesn't need and sometimes mishandles."
      }
    ],
    "output": "(services.csv written: 41 rows, columns Status, Name, DisplayName, ready to open cleanly in Excel)",
    "order": "This comes right after step 1 because Export-Csv needs objects with real properties to turn into columns, exactly what Get-Service already produces.",
    "notice": [
      {
        "field": "Status, Name, DisplayName",
        "note": "These become actual spreadsheet columns, because Export-Csv understands object properties, not just printed text."
      }
    ],
    "distractor": {
      "name": "Out-File",
      "why": "Out-File captures whatever text would have printed to the console, formatted for reading, not for reopening as structured data. Reopen it in Excel and you get one messy column instead of real fields.",
      "better": "Better fit for: saving a quick human-readable log of what a command printed, not data you plan to reopen and work with."
    },
    "concepts": [
      {
        "term": "Export-Csv vs Out-File",
        "explain": "Export-Csv understands the underlying object and its properties, producing real columns. Out-File just captures the text that would have been displayed. Structured data in, structured file out, is the rule for Export-Csv, Export-Json, and Export-Xml alike."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - pipe straight into stopping it",
    "task": "There's a runaway notepad process. Find it and pipe it straight into stopping it, in one line instead of two.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process",
        "hint": "Finds the process object first."
      },
      {
        "text": "-Name notepad",
        "hint": "Narrows to just the notepad process."
      },
      {
        "text": "Stop-Process",
        "hint": "Ends a process. Accepts piped-in process objects directly."
      },
      {
        "text": "Stop-Process -Name notepad",
        "hint": "Works without piping, but skips confirming what you're about to stop first."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /notepad/i.test(c) && /\|/.test(c) && /stop-process/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /^stop-process/i.test(c.trim()) && !/\|/.test(c); },
        "output": "(no process object shown first, notepad simply terminates immediately if a match exists)",
        "note": "That works, but it skips ever seeing what you're about to stop, no id, no confirmation, nothing piped in to double check. Piping Get-Process into Stop-Process means you can review the exact object first, or add -WhatIf, before anything actually happens."
      }
    ],
    "hint": "Get-Process -Name notepad piped straight into Stop-Process, one line instead of finding it, then separately stopping it.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Finds the exact process object first."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Narrows the search to processes named notepad."
      },
      {
        "text": "notepad",
        "cat": "value",
        "note": "The process you're targeting."
      },
      {
        "text": "|",
        "cat": "pipe",
        "note": "Sends the found process object straight into the next command, no retyping the name."
      },
      {
        "text": "Stop-Process",
        "cat": "cmdlet",
        "note": "Accepts a process object piped in directly, and ends it."
      }
    ],
    "output": "(process 'notepad', Id 6104, terminated)",
    "order": "This comes after you're comfortable exporting data, because piping into a command that changes the system, rather than just reading it, deserves more care. Notice step 4 adds a safety check before you'd actually do this live.",
    "notice": [
      {
        "field": "terminated",
        "note": "Confirms the exact process, by the object piped in, was the one stopped, not a guess based on retyping the name twice."
      }
    ],
    "distractor": {
      "name": "Stop-Process -Name notepad (no pipe)",
      "why": "This works fine when you're sure, but it skips the step where you actually look at what Get-Process found, its Id, how many matched, before ending anything.",
      "better": "Better fit for: a process you're already completely certain about and don't need to double check."
    },
    "concepts": [
      {
        "term": "Piping into commands that change things",
        "explain": "Get- cmdlets are read-only. Piping their output into a Stop-, Remove-, or Set- cmdlet means you found the exact thing first, then acted on it, instead of guessing a name and hoping it matches."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - check first before it actually runs",
    "task": "Before actually stopping it live, add a safety check to see what would happen without doing it yet.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process",
        "hint": "Same lookup as step 3."
      },
      {
        "text": "-Name notepad",
        "hint": "Same target."
      },
      {
        "text": "Stop-Process",
        "hint": "Same destructive command."
      },
      {
        "text": "-WhatIf",
        "hint": "Shows exactly what the command would do, without actually doing it."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /notepad/i.test(c) && /stop-process/i.test(c) && /-whatif/i.test(c); },
    "misses": [],
    "hint": "Same pipeline as step 3, just add -WhatIf onto the end of Stop-Process to preview it instead of running it for real.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Same lookup as step 3."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Same parameter."
      },
      {
        "text": "notepad",
        "cat": "value",
        "note": "Same target."
      },
      {
        "text": "|",
        "cat": "pipe",
        "note": "Same pipe."
      },
      {
        "text": "Stop-Process",
        "cat": "cmdlet",
        "note": "Same command."
      },
      {
        "text": "-WhatIf",
        "cat": "param",
        "note": "Simulates the action and prints what it would have done, without actually doing it."
      }
    ],
    "output": "What if: Performing the operation \"Stop-Process\" on target \"notepad (6104)\".",
    "order": "This is last because it's the habit worth building once everything else works: preview any pipeline ending in a destructive command before letting it run for real, especially one you just built and haven't run before.",
    "notice": [
      {
        "field": "What if:",
        "note": "Nothing actually happened, this is a dry run. Remove -WhatIf once you've confirmed the output looks right."
      }
    ],
    "distractor": {
      "name": "Skipping -WhatIf",
      "why": "Running the destructive command directly the first time you build a new pipeline means the first real feedback you get is whatever actually happened, with no chance to catch a mistake beforehand.",
      "better": "Better fit for: a pipeline you've already tested with -WhatIf once and are confident in."
    },
    "concepts": [
      {
        "term": "-WhatIf",
        "explain": "Most cmdlets that change the system support -WhatIf, which prints what would happen without doing it. Cheap insurance on any command you're not 100% sure about yet, especially newly built pipelines."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - find the module",
    "task": "Before installing anything, search for the Az module to confirm it exists and see what you're about to pull down.",
    "prefill": "",
    "chips": [
      {
        "text": "Find-Module",
        "hint": "Searches the online PowerShell Gallery for a module by name, without installing anything yet."
      },
      {
        "text": "-Name Az",
        "hint": "The module you're looking for."
      },
      {
        "text": "Get-Module",
        "hint": "Lists modules already installed or imported locally, not ones out on the gallery you haven't touched yet."
      }
    ],
    "check": function(c){ return /find-module/i.test(c) && /az/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-module/i.test(c) && /az/i.test(c) && !/find-module/i.test(c); },
        "output": "(no output, nothing returned)",
        "note": "That ran, but it came back empty, Get-Module only shows what's already installed or loaded on this machine. Since Az isn't here yet, there's nothing for it to find. Find-Module searches the online gallery instead."
      }
    ],
    "hint": "You're searching for something that isn't installed yet, so this needs Find-Module, which searches the online gallery, not Get-Module.",
    "tokens": [
      {
        "text": "Find-Module",
        "cat": "cmdlet",
        "note": "Searches the PowerShell Gallery online for a module by name, before anything is installed."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "The exact module name to search for."
      },
      {
        "text": "Az",
        "cat": "value",
        "note": "The module in question, Microsoft's Azure management module."
      }
    ],
    "output": "Version    Name                                Repository           Description\n-------    ----                                ----------           -----------\n11.2.0     Az                                  PSGallery            Azure PowerShell - Cmdlets to manage resources in Azure",
    "order": "This is always the first move for a module you don't already have: confirm it exists and see its details before pulling it down onto the machine.",
    "notice": [
      {
        "field": "Repository: PSGallery",
        "note": "Confirms this is coming from the official, trusted PowerShell Gallery, not some other source."
      }
    ],
    "distractor": {
      "name": "Get-Module -Name Az",
      "why": "Get-Module only looks at what's already on this machine, installed or currently imported. Since Az was never installed here, it comes back with nothing, even though the module absolutely exists on the gallery.",
      "better": "Better fit for: checking whether a module you already installed is currently loaded into this session."
    },
    "concepts": [
      {
        "term": "Find- vs Get- for modules",
        "explain": "Find-Module searches the remote gallery, the internet. Get-Module looks at what's local, already on this machine. Confusing the two is one of the most common early mistakes extending PowerShell."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - install it",
    "task": "Now actually install the module, scoped to your own user rather than assuming admin rights.",
    "prefill": "",
    "chips": [
      {
        "text": "Install-Module",
        "hint": "Downloads and installs a module from the gallery onto this machine."
      },
      {
        "text": "-Name Az",
        "hint": "The module to install."
      },
      {
        "text": "-Scope CurrentUser",
        "hint": "Installs just for your account, no admin rights needed, instead of machine-wide."
      },
      {
        "text": "Find-Module",
        "hint": "Searches, from step 1. Doesn't actually install anything by itself."
      }
    ],
    "check": function(c){ return /install-module/i.test(c) && /az/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /find-module/i.test(c) && /az/i.test(c) && !/install-module/i.test(c); },
        "output": "Version    Name                                Repository           Description\n-------    ----                                ----------           -----------\n11.2.0     Az                                  PSGallery            Azure PowerShell - Cmdlets to manage resources in Azure",
        "note": "That's the same search from step 1, run again. Finding it confirms it exists, it doesn't put it on this machine. Install-Module is the cmdlet that actually downloads and installs it."
      }
    ],
    "hint": "Install-Module -Name Az, and add -Scope CurrentUser so it installs just for you without needing administrator rights.",
    "tokens": [
      {
        "text": "Install-Module",
        "cat": "cmdlet",
        "note": "Downloads and installs a module from the gallery."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which module to install."
      },
      {
        "text": "Az",
        "cat": "value",
        "note": "The module being installed."
      },
      {
        "text": "-Scope",
        "cat": "param",
        "note": "Controls whether it installs for just your account or the whole machine."
      },
      {
        "text": "CurrentUser",
        "cat": "value",
        "note": "Installs into your own user profile, no admin rights required."
      }
    ],
    "output": "(Az and its dependent submodules installed to C:\\Users\\jsmith\\Documents\\PowerShell\\Modules)",
    "order": "This comes right after confirming the module exists in step 1, no point installing something you haven't verified is real and legitimate first.",
    "notice": [
      {
        "field": "C:\\Users\\jsmith\\Documents\\PowerShell\\Modules",
        "note": "Installed under your own user profile, not the machine-wide Program Files location, exactly what -Scope CurrentUser controls."
      }
    ],
    "distractor": {
      "name": "Find-Module (again, without Install-Module)",
      "why": "Searching again just repeats step 1. It confirms the module still exists on the gallery, but nothing gets downloaded or installed onto this machine from a search alone.",
      "better": "Better fit for: rechecking the latest available version before an install, not the install itself."
    },
    "concepts": [
      {
        "term": "-Scope CurrentUser vs AllUsers",
        "explain": "CurrentUser installs into your own profile, no admin rights needed, only you can use it. AllUsers installs machine-wide but needs elevated permissions. Default without either specified is usually AllUsers, so specifying CurrentUser explicitly is often the safer, simpler choice."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - confirm it actually landed",
    "task": "Before trying to use anything from it, confirm the module is actually sitting on this machine now.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Module",
        "hint": "Checks what's actually on this machine or loaded in this session."
      },
      {
        "text": "-Name Az",
        "hint": "The module to check for."
      },
      {
        "text": "-ListAvailable",
        "hint": "Shows modules installed on disk, even ones not yet loaded into the current session."
      },
      {
        "text": "Find-Module",
        "hint": "Searches the online gallery again. Doesn't confirm what's actually installed locally."
      }
    ],
    "check": function(c){ return /get-module/i.test(c) && /az/i.test(c) && /-listavailable/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /find-module/i.test(c) && /az/i.test(c); },
        "output": "Version    Name                                Repository           Description\n-------    ----                                ----------           -----------\n11.2.0     Az                                  PSGallery            Azure PowerShell - Cmdlets to manage resources in Azure",
        "note": "That's re-searching the online gallery again, which was step 1's job. It doesn't confirm anything about what's actually sitting on this machine right now. Get-Module -ListAvailable is what checks local disk."
      }
    ],
    "hint": "Get-Module -Name Az with -ListAvailable, that checks modules installed on disk, not just ones already loaded into this session.",
    "tokens": [
      {
        "text": "Get-Module",
        "cat": "cmdlet",
        "note": "Checks modules on this machine, rather than the online gallery."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which module to check for."
      },
      {
        "text": "Az",
        "cat": "value",
        "note": "The module being confirmed."
      },
      {
        "text": "-ListAvailable",
        "cat": "param",
        "note": "Includes modules installed on disk but not yet imported into the current session, without this it would only show already-loaded modules."
      }
    ],
    "output": "ModuleType Version    Name                                ExportedCommands\n---------- -------    ----                                -----------------\nScript     11.2.0     Az                                  {}",
    "order": "This comes after installing in step 2 as a sanity check, confirming the install actually succeeded before you build anything on top of it.",
    "notice": [
      {
        "field": "ExportedCommands: {}",
        "note": "Empty, because the module is installed but not yet imported into this session, that's what step 4 is for."
      }
    ],
    "distractor": {
      "name": "Find-Module -Name Az (again)",
      "why": "This re-searches the online gallery, the same thing step 1 already did. It cannot tell you whether the install in step 2 actually succeeded on this specific machine.",
      "better": "Better fit for: checking what version is currently available online, separate from what you have installed."
    },
    "concepts": [
      {
        "term": "-ListAvailable",
        "explain": "Without it, Get-Module only shows modules already imported into the current session. With it, Get-Module also shows anything installed on disk but not yet loaded, exactly what you need right after a fresh install."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - load it into the session",
    "task": "Finally, import the module so its commands are actually available to use.",
    "prefill": "",
    "chips": [
      {
        "text": "Import-Module",
        "hint": "Loads an installed module's commands into the current session."
      },
      {
        "text": "-Name Az",
        "hint": "The module to load."
      },
      {
        "text": "Install-Module",
        "hint": "From step 2. Installs onto disk, doesn't load it into the current session by itself."
      }
    ],
    "check": function(c){ return /import-module/i.test(c) && /az/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /install-module/i.test(c) && /az/i.test(c) && !/import-module/i.test(c); },
        "output": "(Az is already installed, this reinstalls or updates it, but nothing changes about whether it's loaded into the current session)",
        "note": "That's reinstalling something already confirmed present in step 3. It doesn't load the module's commands into your current session, that's a separate step. Import-Module is what actually makes its commands usable right now."
      }
    ],
    "hint": "Import-Module -Name Az actually loads its commands into your current session, separate from having it merely installed on disk.",
    "tokens": [
      {
        "text": "Import-Module",
        "cat": "cmdlet",
        "note": "Loads a module's commands into the current PowerShell session so they're actually usable."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which module to load."
      },
      {
        "text": "Az",
        "cat": "value",
        "note": "The module being imported."
      }
    ],
    "output": "(Az module imported, 4291 commands now available in this session)",
    "order": "This is last because it's the final step between having something installed and actually being able to use it. Installed and imported are two different states, confirmed separately in steps 3 and 4.",
    "notice": [
      {
        "field": "4291 commands now available",
        "note": "This is the moment Az's cmdlets, like Connect-AzAccount or Get-AzResourceGroup, actually become usable in this session."
      }
    ],
    "distractor": {
      "name": "Install-Module (again)",
      "why": "Running install again just reinstalls or updates something already confirmed present in step 3. It has nothing to do with loading the module's commands into your current, already-running session.",
      "better": "Better fit for: updating to a newer version later, not the first-time setup you're doing here."
    },
    "concepts": [
      {
        "term": "Installed vs imported",
        "explain": "Installed means the module's files exist on disk. Imported means its commands are actually loaded and usable in your current session. Many modules auto-import the first time you use one of their commands, but knowing the explicit step matters when that auto-load doesn't happen or you want it upfront."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - discover what's on the object",
    "task": "Before writing anything, find out what properties and methods a process object actually has.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process",
        "hint": "Returns process objects, the raw material you're about to inspect."
      },
      {
        "text": "Get-Member",
        "hint": "Lists every property and method on whatever object was piped into it."
      },
      {
        "text": "Get-Help",
        "hint": "Looks up documentation for the cmdlet's parameters, not the shape of the objects it returns."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /get-member/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-help/i.test(c) && /get-process/i.test(c) && !/get-member/i.test(c); },
        "output": "NAME\n    Get-Process\n\nSYNOPSIS\n    Gets the processes that are running on the local computer.",
        "note": "That ran, but it explains the cmdlet's parameters, how to call Get-Process itself. It says nothing about what properties exist on the process objects it hands back. Get-Member answers that question instead."
      }
    ],
    "hint": "Pipe Get-Process into Get-Member to see every property and method on the object it returns, not just how to call the cmdlet itself.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Returns process objects, the thing being inspected."
      },
      {
        "text": "Get-Member",
        "cat": "cmdlet",
        "note": "Lists every property and method that exists on whatever object flows into it."
      }
    ],
    "output": "   TypeName: System.Diagnostics.Process\n\nName                       MemberType     Definition\n----                       ----------     ----------\nKill                       Method         void Kill()\nCPU                        Property       double CPU {get;}\nId                         Property       int Id {get;}\nName                       Property       string Name {get;}\nWS                         Property       long WS {get;}",
    "order": "This is always the first move when you're not sure what an object actually offers. Skipping it means guessing property names and hoping.",
    "notice": [
      {
        "field": "CPU, Property",
        "note": "Confirms CPU is a real property you can sort or select on, not something you'd need to calculate yourself."
      },
      {
        "field": "Kill, Method",
        "note": "An action the object can perform on itself, different from a property, which just holds a value."
      }
    ],
    "distractor": {
      "name": "Get-Help Get-Process",
      "why": "Get-Help explains how to call the cmdlet itself, its parameters and switches. It has nothing to say about the properties of the objects the cmdlet actually returns once it runs.",
      "better": "Better fit for: figuring out what parameters Get-Process accepts, like -Name or -Id, not what's on the resulting objects."
    },
    "concepts": [
      {
        "term": "Get-Member",
        "explain": "The single most useful discovery cmdlet for output you don't recognize. Pipe anything into it and see exactly what properties and methods are available, instead of guessing."
      },
      {
        "term": "Properties vs methods",
        "explain": "A property holds a value, like CPU or Name. A method is an action the object can perform, like Kill(). Get-Member's MemberType column tells you which is which."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - sort by CPU, highest first",
    "task": "Now sort by CPU time, highest first.",
    "prefill": "",
    "chips": [
      {
        "text": "Sort-Object",
        "hint": "Sorts objects by a property you specify."
      },
      {
        "text": "CPU",
        "hint": "The property confirmed in step 1, now used to sort."
      },
      {
        "text": "-Descending",
        "hint": "Sorts highest to lowest instead of the default lowest to highest."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /sort-object/i.test(c) && /cpu/i.test(c) && /-descending/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /sort-object/i.test(c) && /cpu/i.test(c) && !/-descending/i.test(c); },
        "output": "Name                   CPU\n----                   ---\nsvchost                0.02\nnotepad                0.14\nchrome                 812.55",
        "note": "That ran, and it did sort, but the default direction is ascending, lowest first. Chrome, the biggest CPU consumer, ends up at the very bottom instead of the top. Add -Descending to flip it."
      }
    ],
    "hint": "Sort-Object CPU sorts ascending by default. Add -Descending to get highest first.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Same object source from step 1."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Reorders the objects flowing through the pipeline by a chosen property."
      },
      {
        "text": "CPU",
        "cat": "value",
        "note": "The property being sorted on, confirmed real back in step 1's Get-Member output."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Flips the default ascending order to highest-value-first."
      }
    ],
    "output": "Name                   CPU\n----                   ---\nchrome                 812.55\nnotepad                0.14\nsvchost                0.02",
    "order": "This comes right after confirming CPU is a real, sortable property in step 1. Sorting happens before narrowing to specific columns in step 3, on purpose.",
    "notice": [
      {
        "field": "chrome, 812.55",
        "note": "Now at the top, exactly what 'highest first' means, confirming -Descending worked."
      }
    ],
    "distractor": {
      "name": "Sort-Object CPU (no -Descending)",
      "why": "Sort-Object defaults to ascending order, smallest value first. For CPU usage that means the biggest resource consumer ends up at the bottom of the list, the opposite of what 'highest first' asked for.",
      "better": "Better fit for: when ascending order is actually what you want, like sorting names alphabetically."
    },
    "concepts": [
      {
        "term": "Sort before you narrow",
        "explain": "Sorting works on the full object and its real properties. Do it before Select-Object trims things down, not after, same principle as formatting always going last."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - narrow to just Name and CPU",
    "task": "Now trim it down to just the Name and CPU columns.",
    "prefill": "",
    "chips": [
      {
        "text": "Select-Object",
        "hint": "Reduces which properties actually stay on the object, not just how they're displayed."
      },
      {
        "text": "Name, CPU",
        "hint": "The two properties to keep."
      },
      {
        "text": "Format-Table",
        "hint": "Changes how something displays. Doesn't actually remove properties from the underlying object."
      }
    ],
    "check": function(c){ return /sort-object/i.test(c) && /-descending/i.test(c) && /select-object/i.test(c) && /name/i.test(c) && /cpu/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /format-table/i.test(c) && /name/i.test(c) && /cpu/i.test(c) && !/select-object/i.test(c); },
        "output": "Name                   CPU\n----                   ---\nchrome                 812.55\nnotepad                0.14\nsvchost                0.02",
        "note": "That looks identical on screen, but Format-Table only changes the display, the underlying object still has every original property. If you piped this further into something else, all those extra properties would still be there. Select-Object actually reduces the object itself."
      }
    ],
    "hint": "Keep the sort from step 2, and pipe into Select-Object Name, CPU to actually trim the object down to just those two properties.",
    "tokens": [
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Carried over from step 2, still sorting before narrowing."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Same as step 2."
      },
      {
        "text": "Select-Object",
        "cat": "cmdlet",
        "note": "Actually reduces the object to just the listed properties, not merely changing how it displays."
      },
      {
        "text": "Name, CPU",
        "cat": "value",
        "note": "The two properties being kept, everything else on the object is dropped."
      }
    ],
    "output": "Name                   CPU\n----                   ---\nchrome                 812.55\nnotepad                0.14\nsvchost                0.02",
    "order": "This comes after sorting because Select-Object trims the object down, and once properties are gone, you can't sort on them anymore. Sort first, narrow second, same rule as formatting.",
    "notice": [
      {
        "field": "Same two columns as Format-Table would show",
        "note": "Looks identical on screen to the distractor's output, the real difference only shows up if you pipe this further into something else."
      }
    ],
    "distractor": {
      "name": "Format-Table Name, CPU",
      "why": "Format-Table changes what's displayed on screen, it doesn't touch the actual object. Every original property, Id, WS, every method, is still there underneath, just hidden from view. Pipe it further and that becomes a problem.",
      "better": "Better fit for: the very last step before printing something to the screen, never in the middle of a pipeline you're still building on."
    },
    "concepts": [
      {
        "term": "Select-Object vs Format-Table",
        "explain": "Select-Object actually reshapes the object, keeping only the properties you name. Format-Table just changes the display. They can look identical printed to the screen, and behave completely differently if you pipe the result anywhere else."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - prove it's still real data",
    "task": "Confirm the result is still a real, usable object and not just formatted text.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Member",
        "hint": "The same discovery tool from step 1, now checking the final result instead of the raw Get-Process output."
      }
    ],
    "check": function(c){ return /select-object/i.test(c) && /get-member/i.test(c); },
    "misses": [],
    "hint": "Pipe the whole thing, sort, select, and all, into Get-Member one more time to confirm what actually came out the other end.",
    "tokens": [
      {
        "text": "Get-Member",
        "cat": "cmdlet",
        "note": "Same discovery cmdlet from step 1, now confirming the final shape of the trimmed, sorted result."
      }
    ],
    "output": "   TypeName: Selected.System.Diagnostics.Process\n\nName    MemberType   Definition\n----    ----------   ----------\nCPU     NoteProperty double CPU=812.55\nName    NoteProperty string Name=chrome",
    "order": "This is last on purpose, it closes the loop back to step 1. You started by discovering what an object offers, and you end by confirming what you built is still a real object, just a smaller one, not plain formatted text that happens to look right.",
    "notice": [
      {
        "field": "Selected.System.Diagnostics.Process",
        "note": "Notice the type name changed slightly, Select-Object created a new, trimmed object type, still a real object, just with only the two properties you kept."
      },
      {
        "field": "NoteProperty",
        "note": "A different member type than the original Property from step 1, this is how Select-Object marks properties it explicitly copied over."
      }
    ],
    "distractor": {
      "name": "Trusting it just because it looks right",
      "why": "Formatted output and real trimmed objects can print identically to the screen. The only way to actually tell the difference, and confirm nothing downstream will break, is to check with Get-Member.",
      "better": "Better fit for: never, really. This is the one habit chapter 8 keeps coming back to: verify, don't assume."
    },
    "concepts": [
      {
        "term": "Trust but verify objects",
        "explain": "Two very different things, a real trimmed object and formatted display text, can look identical printed to a screen. Get-Member is how you tell them apart with certainty instead of guessing from appearances."
      }
    ]
  }
];

var PS_EXAM_POOL_INTERMEDIATE = [
  {
    "title": "Step 1 of 4 - find the right cmdlet yourself",
    "task": "Don't ask what the cmdlet is. Use discovery to find the one that lists files in a folder.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Command",
        "hint": "The discovery cmdlet from chapter 3. Search by verb and noun instead of guessing a name."
      },
      {
        "text": "-Verb Get",
        "hint": "Narrows to read-only commands."
      },
      {
        "text": "-Noun Item",
        "hint": "Narrows to commands acting on filesystem items."
      },
      {
        "text": "Get-ChildItem",
        "hint": "The answer you're trying to discover, not something to type before you've found it."
      }
    ],
    "check": function(c){ return /get-command/i.test(c) && (/-verb/i.test(c) || /-noun/i.test(c)); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && !/get-command/i.test(c); },
        "output": "(this is the right cmdlet, but the task was to find it through discovery first, not type it from memory)",
        "note": "That's actually the correct cmdlet, but the exercise is about the habit, not the destination. Chapters 2 and 3 exist so you never have to just remember a name, you find it with Get-Command."
      }
    ],
    "hint": "Use Get-Command with -Verb Get and -Noun Item to search for the cmdlet, the same discovery habit from chapter 3.",
    "tokens": [
      {
        "text": "Get-Command",
        "cat": "cmdlet",
        "note": "The discovery tool, used here to find a cmdlet name instead of assuming one."
      },
      {
        "text": "-Verb",
        "cat": "param",
        "note": "Read-only action."
      },
      {
        "text": "Get",
        "cat": "value",
        "note": "Confirms you want something that only reads, not changes anything."
      },
      {
        "text": "-Noun",
        "cat": "param",
        "note": "What kind of thing it acts on."
      },
      {
        "text": "Item",
        "cat": "value",
        "note": "A generic filesystem thing, files or folders."
      }
    ],
    "output": "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nCmdlet          Get-ChildItem                                       7.0.0.0    Microsoft.PowerShell.Management",
    "order": "This is the whole point of a practical interlude: applying the discovery habit from chapters 2 and 3 to a brand new problem instead of being handed the cmdlet name upfront.",
    "notice": [
      {
        "field": "Get-ChildItem",
        "note": "The cmdlet you'll actually use for the rest of this lesson, found through search, not memorized."
      }
    ],
    "distractor": {
      "name": "Just typing Get-ChildItem from memory",
      "why": "It happens to be right, but skipping discovery defeats the purpose of this particular lesson, which is proving you can find an unfamiliar cmdlet on your own, not testing whether you already memorized this one.",
      "better": "Better fit for: once you've used Get-ChildItem enough times that discovering it again would be pointless, this lesson is about the muscle, not this specific cmdlet."
    },
    "concepts": [
      {
        "term": "Discoverability, applied",
        "explain": "Chapters 2 and 3 taught Get-Command and Get-Help as abstract tools. This chapter is where that habit gets tested against a real, unscripted task."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - get the files",
    "task": "Now get every file in C:\\Data.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem",
        "hint": "The cmdlet just discovered in step 1."
      },
      {
        "text": "-Path C:\\Data",
        "hint": "Where to look."
      },
      {
        "text": "-File",
        "hint": "Returns only files, skips subfolders, which don't have a meaningful size to compare here."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /data/i.test(c) && /-file/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && /data/i.test(c) && !/-file/i.test(c); },
        "output": "    Directory: C:\\Data\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd----           1/2/2026   9:00 AM                Archive\n-a---           1/2/2026   9:14 AM        4213099 report.xlsx\nd----           1/2/2026   9:14 AM                Backups",
        "note": "That ran, but it mixes in folders like Archive and Backups alongside actual files. Folders don't have a meaningful Length the same way, and sorting by size next would put confusing zero-length folder entries in the mix. -File filters to just files."
      }
    ],
    "hint": "Get-ChildItem -Path C:\\Data, and add -File so folders don't get mixed in with the files you're about to sort by size.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "Found in step 1, now put to use."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where to look."
      },
      {
        "text": "C:\\Data",
        "cat": "value",
        "note": "The folder in question."
      },
      {
        "text": "-File",
        "cat": "param",
        "note": "Restricts results to files only, no subfolders mixed in."
      }
    ],
    "output": "    Directory: C:\\Data\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\n-a---           1/2/2026   9:14 AM        4213099 report.xlsx\n-a---           12/28/2025  2:03 PM       88213221 backup.zip\n-a---           1/1/2026    6:40 AM         951024 notes.docx",
    "order": "This is the raw data everything else in this lesson sorts and trims, following directly from finding the right cmdlet in step 1.",
    "notice": [
      {
        "field": "Length",
        "note": "The property you'll sort on next, already visible here in bytes."
      }
    ],
    "distractor": {
      "name": "Get-ChildItem without -File",
      "why": "Folders get mixed in alongside files. They don't carry a comparable Length the way files do, which muddies a size-based sort right before it happens.",
      "better": "Better fit for: when you actually want folders included too, like browsing a directory's full contents."
    },
    "concepts": [
      {
        "term": "-File and -Directory switches",
        "explain": "Get-ChildItem can filter to just files or just folders right at the source, cheaper and cleaner than piping everything into Where-Object afterward to separate them."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - sort by size, largest first",
    "task": "Sort the files by size, largest first.",
    "prefill": "",
    "chips": [
      {
        "text": "Sort-Object",
        "hint": "Reorders by a chosen property."
      },
      {
        "text": "Length",
        "hint": "The file size property, seen in step 2's output."
      },
      {
        "text": "-Descending",
        "hint": "Largest first instead of the default smallest first."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /-file/i.test(c) && /sort-object/i.test(c) && /length/i.test(c) && /-descending/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /sort-object/i.test(c) && /length/i.test(c) && !/-descending/i.test(c); },
        "output": "Length     Name\n------     ----\n951024     notes.docx\n4213099    report.xlsx\n88213221   backup.zip",
        "note": "That sorted, but ascending, smallest first by default. The largest file, backup.zip, ends up at the bottom instead of the top. Add -Descending."
      }
    ],
    "hint": "Sort-Object Length -Descending, same pattern as sorting by CPU in an earlier lesson, just a different property this time.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "Carried forward from step 2."
      },
      {
        "text": "-File",
        "cat": "param",
        "note": "Same filter from step 2."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Reorders the files by size."
      },
      {
        "text": "Length",
        "cat": "value",
        "note": "The property representing file size in bytes."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Largest value first."
      }
    ],
    "output": "Length     Name\n------     ----\n88213221   backup.zip\n4213099    report.xlsx\n951024     notes.docx",
    "order": "Sorting comes before trimming to the top 5 in step 4, same rule as every earlier lesson: shape the full data first, narrow it down last.",
    "notice": [
      {
        "field": "backup.zip, 88213221",
        "note": "Now sitting at the top, confirming -Descending actually worked."
      }
    ],
    "distractor": {
      "name": "Sort-Object Length (no -Descending)",
      "why": "Ascending by default puts the smallest file first and the largest dead last, backwards from what 'largest first' means.",
      "better": "Better fit for: when smallest-first genuinely is what you want, cleaning up tiny leftover files, for instance."
    },
    "concepts": [
      {
        "term": "Reusing a pattern across contexts",
        "explain": "Sort-Object -Descending here works identically to sorting processes by CPU in an earlier lesson. Once a pattern like this clicks, it applies everywhere, not just to the one example it was first taught with."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - keep just the top 5",
    "task": "Now trim the sorted list down to just the 5 largest.",
    "prefill": "",
    "chips": [
      {
        "text": "Select-Object",
        "hint": "Narrows down the results."
      },
      {
        "text": "-First 5",
        "hint": "Keeps only the first 5 objects in the pipeline, which after sorting descending means the 5 largest."
      }
    ],
    "check": function(c){ return /sort-object/i.test(c) && /-descending/i.test(c) && /select-object/i.test(c) && /-first/i.test(c) && /5/i.test(c); },
    "misses": [],
    "hint": "Pipe the sorted results into Select-Object -First 5.",
    "tokens": [
      {
        "text": "Select-Object",
        "cat": "cmdlet",
        "note": "Narrows down the pipeline results, this time by count rather than by property."
      },
      {
        "text": "-First",
        "cat": "param",
        "note": "Keeps only the first however-many objects."
      },
      {
        "text": "5",
        "cat": "value",
        "note": "The count requested."
      }
    ],
    "output": "Length     Name\n------     ----\n88213221   backup.zip\n4213099    report.xlsx\n951024     notes.docx\n847221     archive-old.zip\n612004     export.csv",
    "order": "This is last because -First only makes sense once the data is already in the right order. Trim before sorting and you'd just get 5 random files, not the 5 largest.",
    "notice": [
      {
        "field": "5 rows exactly",
        "note": "Confirms -First 5 did its job, and because the list was sorted descending first, these are genuinely the 5 largest, not just any 5."
      }
    ],
    "distractor": {
      "name": "Selecting first 5 before sorting",
      "why": "Get-ChildItem returns files in whatever order the filesystem happens to hand them over, not by size. Trimming to 5 before sorting would give you 5 arbitrary files, not the largest ones.",
      "better": "Better fit for: never, order matters here. Sort first, always, then narrow."
    },
    "concepts": [
      {
        "term": "-First on Select-Object",
        "explain": "Grabs a specific count of objects off the front of whatever's currently flowing through the pipeline. Combined with a prior sort, it's how you get a top-N list, top 5 largest files, top 10 busiest processes, and so on."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - get plain names, not objects",
    "task": "Get just the plain text names of every service, not a table of full objects.",
    "prefill": "",
    "chips": [
      {
        "text": "(Get-Service).Name",
        "hint": "Wrapping a command in parentheses lets you reach into its result and pull out one property directly, as plain values."
      },
      {
        "text": "Get-Service | Select-Object Name",
        "hint": "Returns objects with one property each, not plain strings."
      },
      {
        "text": "Get-Service",
        "hint": "Returns full service objects, several columns wide."
      }
    ],
    "check": function(c){ return /\(get-service\)\.name/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /select-object/i.test(c) && /name/i.test(c) && !/\(get-service\)/i.test(c); },
        "output": "Name\n----\nSpooler\nwuauserv\nWinDefend",
        "note": "That's close, and it looks like plain text, but each row is still a full object with one property called Name, not a raw string. Wrapping the command in parentheses and dotting into .Name gives you actual plain string values instead."
      }
    ],
    "hint": "Wrap Get-Service in parentheses, then dot into .Name to pull the raw string values straight out, instead of objects with one property.",
    "tokens": [
      {
        "text": "(Get-Service).Name",
        "cat": "value",
        "note": "The parentheses run the command first, then .Name reaches into every result and extracts just that one property as a plain value."
      }
    ],
    "output": "Spooler\nwuauserv\nWinDefend",
    "order": "This is the simplest way to extract raw values, worth knowing before the rest of the lesson builds on how those values interact with the pipeline.",
    "notice": [
      {
        "field": "Spooler, wuauserv, WinDefend",
        "note": "Plain text, no columns, no object wrapper, just the values themselves."
      }
    ],
    "distractor": {
      "name": "Get-Service | Select-Object Name",
      "why": "This narrows the object down to one property, but it's still an object with a Name property attached, not a raw string. Printed to the screen it looks almost identical, the difference shows up if you try to use the result as plain text somewhere else.",
      "better": "Better fit for: when you want to keep working with it as an object further down a pipeline, not when you need a plain value right now."
    },
    "concepts": [
      {
        "term": "Extracting a raw property value",
        "explain": "(Command).Property runs the command, then reaches directly into the result for one property as a plain value. Different from Select-Object, which keeps the result as an object with just that property attached."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - pipe straight into Stop-Service",
    "task": "Now stop the Spooler service by piping it straight in, without typing -Name yourself on the second command.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "Finds the service object first."
      },
      {
        "text": "-Name Spooler",
        "hint": "Narrows to the specific service."
      },
      {
        "text": "Stop-Service",
        "hint": "Accepts a piped-in service object directly, matching it to its own -InputObject parameter automatically."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /spooler/i.test(c) && /\|/.test(c) && /stop-service/i.test(c); },
    "misses": [],
    "hint": "Get-Service -Name Spooler piped straight into Stop-Service, no need to type the name a second time.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Finds the exact service object."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Narrows to one specific service."
      },
      {
        "text": "Spooler",
        "cat": "value",
        "note": "The service being targeted."
      },
      {
        "text": "|",
        "cat": "pipe",
        "note": "Sends the found object into the next command."
      },
      {
        "text": "Stop-Service",
        "cat": "cmdlet",
        "note": "Accepts the piped service object directly and stops it, no name retyped."
      }
    ],
    "output": "(service 'Spooler' stopped)",
    "order": "This demonstrates the actual mechanic the request is asking about: piping works here because Stop-Service is built to accept a service object directly as input, matching it automatically.",
    "notice": [
      {
        "field": "no -Name typed on Stop-Service",
        "note": "This is the whole point, the piped object supplied everything Stop-Service needed on its own."
      }
    ],
    "distractor": {
      "name": "Typing -Name twice manually",
      "why": "Get-Service -Name Spooler, then separately Stop-Service -Name Spooler works, but it defeats the purpose of this exercise: understanding why the pipe alone is enough.",
      "better": "Better fit for: never really, once you understand the piping works, there's no reason to type the name twice."
    },
    "concepts": [
      {
        "term": "Pipeline input ByValue",
        "explain": "Some cmdlets accept an entire piped-in object directly, matching it to one of their own parameters automatically, usually the one accepting that object's exact type. That's why Get-Service | Stop-Service works with zero extra typing."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - chain a filter into it safely",
    "task": "Now do the same trick across every running service, but check first before actually stopping anything.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "Same starting point."
      },
      {
        "text": "Where-Object",
        "hint": "Filters down to just the services matching a condition."
      },
      {
        "text": "{$_.Status -eq 'Running'}",
        "hint": "Only services currently running."
      },
      {
        "text": "Stop-Service",
        "hint": "Same destructive cmdlet as step 2."
      },
      {
        "text": "-WhatIf",
        "hint": "Previews what would happen without actually stopping anything."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /running/i.test(c) && /stop-service/i.test(c) && /-whatif/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /stop-service/i.test(c) && !/-whatif/i.test(c); },
        "output": "(every currently running service on the machine actually stops, including ones you probably needed)",
        "note": "That's the same chain, without a safety check, aimed at every running service on the entire machine. Running that for real without -WhatIf first would take down services you almost certainly still need."
      }
    ],
    "hint": "Chain Get-Service, Where-Object filtering to Running, and Stop-Service, but add -WhatIf at the end before ever running it for real.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Same starting point as every step in this lesson."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Filters the pipeline down to just services matching the condition."
      },
      {
        "text": "{$_.Status -eq 'Running'}",
        "cat": "param",
        "note": "Only services currently running make it through."
      },
      {
        "text": "Stop-Service",
        "cat": "cmdlet",
        "note": "Same cmdlet from step 2, now receiving multiple piped-in objects instead of just one."
      },
      {
        "text": "-WhatIf",
        "cat": "param",
        "note": "Shows what would happen to every matched service, without actually stopping any of them."
      }
    ],
    "output": "What if: Performing the operation \"Stop-Service\" on target \"Spooler\".\nWhat if: Performing the operation \"Stop-Service\" on target \"WinDefend\".",
    "order": "This comes last because it combines everything: extracting values, ByValue piping, filtering, and this lesson's new safety habit, checking before a chain aimed at every matching service on the whole machine, not just one you already picked by name.",
    "notice": [
      {
        "field": "What if:",
        "note": "Nothing actually stopped, this is a preview of a chain broad enough that you really want to see it before it runs for real."
      }
    ],
    "distractor": {
      "name": "Running it live without -WhatIf first",
      "why": "This chain targets every running service on the machine, not one you picked by name like step 2. Running something that broad for the first time without previewing it risks stopping services you actually needed.",
      "better": "Better fit for: once you've reviewed the -WhatIf output and are confident it's only touching what you intended."
    },
    "concepts": [
      {
        "term": "Piping many objects at once",
        "explain": "The same ByValue binding from step 2 works whether one object or many flow through the pipe. Stop-Service | ForEach-Object under the hood, receiving each matched service one at a time."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - sort, then format as a table",
    "task": "Sort processes by CPU descending, then format as a table with just Name and CPU.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process",
        "hint": "The data source."
      },
      {
        "text": "Sort-Object CPU -Descending",
        "hint": "Sorting, done before any formatting happens."
      },
      {
        "text": "Format-Table Name, CPU",
        "hint": "Displays just these two columns as a table."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /sort-object/i.test(c) && /-descending/i.test(c) && /format-table/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /format-table/i.test(c) && /sort-object/i.test(c) && /format-table.*sort-object/i.test(c); },
        "output": "Get-Process : The input object cannot be bound to any parameters for the command because the command does not accept pipeline input, or the input and its properties do not match any of the parameters that take pipeline input.",
        "note": "Formatting cmdlets return special display objects, not the original data. Trying to sort after formatting either errors outright or silently sorts on the wrong thing. Sort first, always, then format."
      }
    ],
    "hint": "Get-Process, then Sort-Object CPU -Descending, then Format-Table Name, CPU. Sort before you format, never after.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "The raw data."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Reorders the real objects, while they're still real objects."
      },
      {
        "text": "CPU",
        "cat": "value",
        "note": "Sorting property."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Highest first."
      },
      {
        "text": "Format-Table",
        "cat": "cmdlet",
        "note": "Reshapes the already-sorted data into a table for display."
      },
      {
        "text": "Name, CPU",
        "cat": "value",
        "note": "The two columns to show."
      }
    ],
    "output": "Name                   CPU\n----                   ---\nchrome                 812.55\nnotepad                0.14\nsvchost                0.02",
    "order": "Sort-Object runs while the data is still real objects with all their properties intact. Format-Table runs last, once the order is already locked in, because it converts everything into special formatting-only objects that can't be meaningfully sorted afterward.",
    "notice": [
      {
        "field": "chrome at the top",
        "note": "Confirms the sort actually happened before formatting reshaped the data for display."
      }
    ],
    "distractor": {
      "name": "Format-Table before Sort-Object",
      "why": "Format-Table converts real objects into special display-only formatting objects. Once that's happened, Sort-Object either errors trying to bind to them, or silently doesn't sort the way you'd expect. The data has to be sorted while it's still real.",
      "better": "Better fit for: never, this ordering is a hard rule, not a preference."
    },
    "concepts": [
      {
        "term": "Format last, always",
        "explain": "This is the single most repeated rule about formatting: Format-Table and Format-List come at the very end of a pipeline, after every sort, filter, and selection is already done. They exist purely to change how something looks on the way out."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - same thing, as a list",
    "task": "Now show the same sorted data as a list view instead of a table.",
    "prefill": "",
    "chips": [
      {
        "text": "Format-List",
        "hint": "Shows one property per line instead of columns, useful when values are long or there are many properties."
      },
      {
        "text": "Name, CPU",
        "hint": "Same two properties as step 1."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /sort-object/i.test(c) && /-descending/i.test(c) && /format-list/i.test(c); },
    "misses": [],
    "hint": "Same sorted pipeline as step 1, just swap Format-Table for Format-List at the end.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Same source."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Same sort, still happening before formatting."
      },
      {
        "text": "CPU",
        "cat": "value",
        "note": "Same property."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Same order."
      },
      {
        "text": "Format-List",
        "cat": "cmdlet",
        "note": "A different display shape than Format-Table, one property per line instead of columns."
      },
      {
        "text": "Name, CPU",
        "cat": "value",
        "note": "Same two properties, displayed differently."
      }
    ],
    "output": "Name : chrome\nCPU  : 812.55\n\nName : notepad\nCPU  : 0.14\n\nName : svchost\nCPU  : 0.02",
    "order": "This is the same pipeline as step 1 with only the final display cmdlet swapped, showing that the sort itself never has to change, only how the result gets presented at the very end.",
    "notice": [
      {
        "field": "one property per line",
        "note": "The same data as step 1's table, just reshaped for readability when there are more properties than fit comfortably in columns."
      }
    ],
    "distractor": {
      "name": "Format-Table for everything",
      "why": "Not wrong exactly, but a table gets cramped fast with more than a few properties or long values. Format-List trades compactness for readability when that happens.",
      "better": "Better fit for: fewer, shorter properties where columns stay readable, exactly what step 1 used it for."
    },
    "concepts": [
      {
        "term": "Format-Table vs Format-List",
        "explain": "Both come last in a pipeline, same rule. Table suits a handful of short properties side by side. List suits many properties, or long values, better read one per line."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - save the table to a file",
    "task": "Take the table version from step 1 and save it to a text file for the report.",
    "prefill": "",
    "chips": [
      {
        "text": "Format-Table",
        "hint": "Same formatting cmdlet from step 1."
      },
      {
        "text": "Out-File",
        "hint": "Writes whatever would have printed to the screen into a file instead."
      },
      {
        "text": "report.txt",
        "hint": "The output filename."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /sort-object/i.test(c) && /-descending/i.test(c) && /format-table/i.test(c) && /out-file/i.test(c); },
    "misses": [],
    "hint": "Same sorted, formatted table from step 1, piped one more step into Out-File.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Same source as every step."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Same sort."
      },
      {
        "text": "CPU",
        "cat": "value",
        "note": "Same property."
      },
      {
        "text": "-Descending",
        "cat": "param",
        "note": "Same order."
      },
      {
        "text": "Format-Table",
        "cat": "cmdlet",
        "note": "Same table shape from step 1."
      },
      {
        "text": "Name, CPU",
        "cat": "value",
        "note": "Same columns."
      },
      {
        "text": "Out-File",
        "cat": "cmdlet",
        "note": "Captures whatever would have printed and writes it to a file instead."
      },
      {
        "text": "report.txt",
        "cat": "value",
        "note": "The saved output."
      }
    ],
    "output": "(report.txt written, containing the same table exactly as it would have printed to the console)",
    "order": "Out-File comes after formatting because at this point you genuinely do want the display text itself saved, not structured data, this is a human-readable report, not something you'll reopen and reprocess.",
    "notice": [
      {
        "field": "same table exactly as it would have printed",
        "note": "This is correct here, unlike the CSV export lesson earlier, because this file is meant to be read by a person, not reopened as structured data."
      }
    ],
    "distractor": {
      "name": "Export-Csv instead",
      "why": "Export-Csv wants real object properties to turn into columns. Format-Table has already converted the data into display-only text by this point, there's nothing structured left for Export-Csv to work with.",
      "better": "Better fit for: structured data you'll reopen and reprocess, before any formatting happens, exactly the CSV export from an earlier lesson."
    },
    "concepts": [
      {
        "term": "Out-File after formatting is correct here",
        "explain": "Unlike the CSV export lesson, this file is meant purely for a human to read later, a report. Capturing the exact display text with Out-File after formatting is the right tool for that specific job."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - filter to stopped services only",
    "task": "Get only the services that are actually stopped.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "The data source."
      },
      {
        "text": "Where-Object",
        "hint": "Filters the pipeline down to objects matching a condition."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "hint": "Exact match on the Status property."
      },
      {
        "text": "-like",
        "hint": "A text-pattern operator meant for wildcards, not the right tool for an exact status match."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /-eq/i.test(c) && /stopped/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /where-object/i.test(c) && /-like/i.test(c) && /stopped/i.test(c); },
        "output": "Status   Name               DisplayName\n------   ----               -----------\nStopped  wuauserv           Windows Update",
        "note": "That happened to work here, but -like is a wildcard text-matching operator, meant for patterns like 'Stop*', not exact comparisons. -eq is the correct, precise tool when you know the exact value you're matching."
      }
    ],
    "hint": "Get-Service piped into Where-Object with {$_.Status -eq 'Stopped'}, an exact match, not a text pattern.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "The data source, every service on the machine."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Filters the pipeline to objects matching a condition."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "cat": "param",
        "note": "$_ refers to the current object; -eq is an exact-match comparison operator."
      }
    ],
    "output": "Status   Name               DisplayName\n------   ----               -----------\nStopped  wuauserv           Windows Update\nStopped  Fax                Fax",
    "order": "This filter runs directly against Get-Service's output, before anything else happens to the data, keeping the pipeline as lean as possible from the start.",
    "notice": [
      {
        "field": "Status: Stopped only",
        "note": "Nothing Running or Disabled leaked through, confirming -eq matched exactly."
      }
    ],
    "distractor": {
      "name": "-like instead of -eq",
      "why": "-like is built for wildcard text patterns, like 'Stop*' or '*top*'. For an exact, known value such as 'Stopped', -eq is faster and more precise, and doesn't risk accidentally matching something unintended.",
      "better": "Better fit for: partial or pattern-based text matches, like finding every service whose name starts with 'win'."
    },
    "concepts": [
      {
        "term": "-eq vs -like",
        "explain": "-eq checks for an exact match. -like checks against a wildcard pattern (using * and ?). Use -eq whenever you know the precise value, save -like for genuine pattern matching."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - filter early, not late",
    "task": "Explain why the filter belongs right after Get-Service, not at the end of a longer pipeline.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "Filter right after the source, first thing in the pipeline."
      },
      {
        "text": "Where-Object",
        "hint": "As early as possible."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "hint": "Same condition from step 1."
      },
      {
        "text": "Sort-Object DisplayName",
        "hint": "Sorting comes after filtering, on the already-narrowed set."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /stopped/i.test(c) && /sort-object/i.test(c) && /where-object.*sort-object/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /sort-object/i.test(c) && /where-object/i.test(c) && /sort-object.*where-object/i.test(c); },
        "output": "(same final result, but every service, including hundreds of Running ones, gets sorted before most of them are thrown away by the filter)",
        "note": "The output looks the same, but sorting before filtering means PowerShell does the expensive work, sorting the entire list, before most of it gets discarded anyway. Filtering first, left in the pipeline, means every later step only ever touches the smaller, already-narrowed set."
      }
    ],
    "hint": "Where-Object comes right after Get-Service, before Sort-Object. Filter first, then sort what's left, not the other way around.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "The full, unfiltered source."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Placed immediately after the source, narrowing the set as early as possible."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "cat": "param",
        "note": "Same filter condition as step 1."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Now only sorting the already-small, filtered set, not the full list."
      },
      {
        "text": "DisplayName",
        "cat": "value",
        "note": "Sorting property, applied last."
      }
    ],
    "output": "Status   Name               DisplayName\n------   ----               -----------\nStopped  Fax                Fax\nStopped  wuauserv           Windows Update",
    "order": "Filter left, not right, is the core lesson here: every pipeline stage after Where-Object only has to process the smaller, already-narrowed set, which matters even more once a pipeline reaches across a network to a remote machine.",
    "notice": [
      {
        "field": "Where-Object before Sort-Object",
        "note": "The filter runs first so every step after it works with less data, not more."
      }
    ],
    "distractor": {
      "name": "Sort-Object before Where-Object",
      "why": "Produces the same visible result here, but forces PowerShell to sort the entire unfiltered list first, only to throw most of it away a step later. Wasted work that only gets worse with larger data sets or remote pipelines.",
      "better": "Better fit for: never, this ordering is purely wasteful. Filter first, always."
    },
    "concepts": [
      {
        "term": "Filter left",
        "explain": "Put Where-Object as early in the pipeline as possible. Every cmdlet after it only has to process whatever survived the filter, not the full original set. This matters most with large data sets or pipelines reaching across a network."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - two conditions at once",
    "task": "Now find services that are both stopped AND set to start automatically, the ones that actually need fixing.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "Same source."
      },
      {
        "text": "Where-Object",
        "hint": "Same filtering cmdlet."
      },
      {
        "text": "{$_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic'}",
        "hint": "Two conditions joined with -and, both must be true for an object to pass through."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /-and/i.test(c) && /stopped/i.test(c) && /automatic/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /where-object/i.test(c) && /stopped/i.test(c) && !/-and/i.test(c); },
        "output": "Status   Name       StartType\n------   ----       ---------\nStopped  wuauserv   Manual\nStopped  Fax        Manual\nStopped  BITS       Automatic",
        "note": "That's every stopped service, Manual startup types included, not just the ones that were supposed to be running automatically and aren't. Without -and combining both conditions, the ones that actually need attention are buried in the full stopped list."
      }
    ],
    "hint": "Combine two conditions inside one Where-Object block with -and: Status -eq 'Stopped' -and StartType -eq 'Automatic'.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Same source as every step."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Same filtering cmdlet, now with a compound condition."
      },
      {
        "text": "$_.Status -eq 'Stopped'",
        "cat": "value",
        "note": "First condition."
      },
      {
        "text": "-and",
        "cat": "param",
        "note": "Both conditions must be true for the object to pass through."
      },
      {
        "text": "$_.StartType -eq 'Automatic'",
        "cat": "value",
        "note": "Second condition, narrows to services that should be running but aren't."
      }
    ],
    "output": "Status   Name       StartType\n------   ----       ---------\nStopped  BITS       Automatic",
    "order": "This is the most specific filter in the lesson, combining the exact-match habit from step 1 with the filter-early habit from step 2, and adding a second condition because one alone, just 'Stopped', was too broad to point at the real problem.",
    "notice": [
      {
        "field": "BITS only",
        "note": "Every other stopped service had StartType Manual, expected to be stopped. BITS is the one that's supposed to be Automatic but isn't running, the actual problem."
      }
    ],
    "distractor": {
      "name": "Where-Object with just Status -eq 'Stopped'",
      "why": "Returns every stopped service, including ones that are perfectly fine stopped because they're set to Manual startup. Without the second condition on StartType, the genuinely broken ones are buried in noise.",
      "better": "Better fit for: when you really do want every stopped service regardless of why, like a general inventory."
    },
    "concepts": [
      {
        "term": "Combining conditions with -and / -or",
        "explain": "A single Where-Object block can test multiple conditions. -and requires all of them true, -or requires at least one. This is how you narrow from 'broadly interesting' down to 'actually the problem.'"
      }
    ]
  },
  {
    "title": "Step 1 of 4 - confirm remoting works first",
    "task": "Before trying to connect to anything, confirm remoting is actually enabled and reachable on WEB01.",
    "prefill": "",
    "chips": [
      {
        "text": "Test-WSMan",
        "hint": "Checks whether the remoting service is running and reachable on a target machine, without actually connecting a session."
      },
      {
        "text": "-ComputerName WEB01",
        "hint": "The machine to check."
      },
      {
        "text": "Enter-PSSession",
        "hint": "Actually opens a session. Not what you want yet, you're only checking readiness first."
      }
    ],
    "check": function(c){ return /test-wsman/i.test(c) && /web01/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /enter-pssession/i.test(c) && /web01/i.test(c) && !/test-wsman/i.test(c); },
        "output": "Enter-PSSession : Connecting to remote server WEB01 failed with the following error message : WinRM cannot complete the operation.",
        "note": "Jumping straight to a real connection attempt is how you find out remoting isn't working the hard way, with a failed session instead of a quick, cheap check. Test-WSMan confirms reachability first without committing to an actual session."
      }
    ],
    "hint": "Test-WSMan -ComputerName WEB01 checks that remoting is reachable, before you actually try connecting with anything else.",
    "tokens": [
      {
        "text": "Test-WSMan",
        "cat": "cmdlet",
        "note": "A lightweight check that the remoting service (WinRM) is running and reachable on the target, without opening a real session."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Which machine to check."
      },
      {
        "text": "WEB01",
        "cat": "value",
        "note": "The target server."
      }
    ],
    "output": "wsmid           : http://schemas.dmtf.org/wbem/wsman/identity/1/wsmanidentity.xsd\nProtocolVersion  : http://schemas.dmtf.org/wbem/wsman/1/wsman.xsd\nProductVendor    : Microsoft Corporation\nProductVersion   : OS: 0.0.0 SP: 0.0 Stack: 3.0",
    "order": "This comes first because it's a cheap sanity check, confirming remoting is even reachable before spending effort on an actual connection in the next step.",
    "notice": [
      {
        "field": "ProductVendor: Microsoft Corporation",
        "note": "A successful response confirms WinRM is running and answering on WEB01, remoting should work."
      }
    ],
    "distractor": {
      "name": "Enter-PSSession first, no check",
      "why": "This jumps straight to a real connection attempt. If remoting isn't enabled or reachable, you get a connection failure with less specific information than a dedicated readiness check would have given you upfront.",
      "better": "Better fit for: once you already know remoting works and just want to connect."
    },
    "concepts": [
      {
        "term": "Test-WSMan",
        "explain": "A lightweight readiness check for PowerShell remoting (WinRM), confirming a target machine is reachable and listening before you commit to opening an actual session against it."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - a quick one-to-one check",
    "task": "Now open an interactive session with just WEB01 for a quick one-off look around.",
    "prefill": "",
    "chips": [
      {
        "text": "Enter-PSSession",
        "hint": "Opens an interactive remote session with exactly one machine, your prompt changes to show you're 'inside' it."
      },
      {
        "text": "-ComputerName WEB01",
        "hint": "The single machine you're connecting to."
      },
      {
        "text": "Invoke-Command",
        "hint": "Runs a command remotely without an interactive session. Better suited to many machines at once, covered in the next step."
      }
    ],
    "check": function(c){ return /enter-pssession/i.test(c) && /web01/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /invoke-command/i.test(c) && /web01/i.test(c) && !/enter-pssession/i.test(c); },
        "output": "(runs a single command against WEB01 and returns immediately, no interactive prompt)",
        "note": "That works, but it's built for running one specific command and getting a result back, not for poking around interactively. Enter-PSSession is the one-to-one tool that puts you 'inside' the remote machine's prompt for a quick, exploratory look."
      }
    ],
    "hint": "Enter-PSSession -ComputerName WEB01 opens an interactive session, your prompt changes to show you're connected to that one machine.",
    "tokens": [
      {
        "text": "Enter-PSSession",
        "cat": "cmdlet",
        "note": "Opens a one-to-one interactive remote session."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Which single machine to connect to."
      },
      {
        "text": "WEB01",
        "cat": "value",
        "note": "The target."
      }
    ],
    "output": "[WEB01]: PS C:\\Users\\jsmith\\Documents>",
    "order": "This comes right after confirming reachability, and before the one-to-many approach in step 3, establishing the one-to-one half of this chapter's core distinction.",
    "notice": [
      {
        "field": "[WEB01]: PS C:\\...>",
        "note": "The prompt itself changed to show WEB01's name, confirming you're now interactively 'inside' that one remote machine."
      }
    ],
    "distractor": {
      "name": "Invoke-Command for a quick interactive look",
      "why": "Invoke-Command runs a specific command and returns, it doesn't give you an ongoing interactive prompt to poke around in. For a genuine one-off exploratory check on a single machine, Enter-PSSession is the more natural fit.",
      "better": "Better fit for: running the same specific command against several machines at once, exactly what the next step needs."
    },
    "concepts": [
      {
        "term": "One-to-one vs one-to-many",
        "explain": "Enter-PSSession connects you interactively to exactly one remote machine, like RDP but text-based. Invoke-Command runs a specific command against one or many machines without an interactive prompt. Pick based on whether you're exploring or executing."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - check all five machines at once",
    "task": "Now check whether the Windows Update service is running, but across all five web servers at once, not one at a time.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Command",
        "hint": "Runs a script block against one or many machines at once and returns the results, no interactive session needed."
      },
      {
        "text": "-ComputerName WEB01,WEB02,WEB03,WEB04,WEB05",
        "hint": "A comma-separated list, all five targets in a single command."
      },
      {
        "text": "-ScriptBlock {Get-Service wuauserv}",
        "hint": "The command to run on every target machine."
      }
    ],
    "check": function(c){ return /invoke-command/i.test(c) && /web01/i.test(c) && /web05/i.test(c) && /scriptblock/i.test(c) && /wuauserv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /enter-pssession/i.test(c) && /web01/i.test(c) && /wuauserv/i.test(c); },
        "output": "(only ever connects to one machine at a time, would need to be manually repeated five separate times, once per server)",
        "note": "Enter-PSSession only ever connects to one machine per session. Doing this for five servers means manually repeating the whole process five times. Invoke-Command with a comma-separated computer list runs the same command against all five in one call."
      }
    ],
    "hint": "Invoke-Command -ComputerName WEB01,WEB02,WEB03,WEB04,WEB05 -ScriptBlock {Get-Service wuauserv}, one command, five machines, no interactive session.",
    "tokens": [
      {
        "text": "Invoke-Command",
        "cat": "cmdlet",
        "note": "The one-to-many remoting cmdlet, runs a script block against a list of machines."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Accepts a comma-separated list of targets, not just one."
      },
      {
        "text": "WEB01,WEB02,WEB03,WEB04,WEB05",
        "cat": "value",
        "note": "All five servers in one call."
      },
      {
        "text": "-ScriptBlock",
        "cat": "param",
        "note": "The command to run on each target machine."
      },
      {
        "text": "{Get-Service wuauserv}",
        "cat": "value",
        "note": "Checks the Windows Update service specifically."
      }
    ],
    "output": "Status   Name       PSComputerName\n------   ----       --------------\nRunning  wuauserv   WEB01\nRunning  wuauserv   WEB02\nStopped  wuauserv   WEB03\nRunning  wuauserv   WEB04\nRunning  wuauserv   WEB05",
    "order": "This is the one-to-many step this whole request was really about, replacing five separate manual RDP sessions, or five repeated Enter-PSSession connections, with a single command.",
    "notice": [
      {
        "field": "PSComputerName",
        "note": "A column Invoke-Command adds automatically, telling you which machine each result actually came from when querying several at once."
      },
      {
        "field": "Stopped, WEB03",
        "note": "The one server actually worth investigating further, found in a single pass instead of five separate manual checks."
      }
    ],
    "distractor": {
      "name": "Enter-PSSession, repeated five times",
      "why": "Technically gets the same information eventually, but requires manually connecting, running the command, and disconnecting, five separate times. Invoke-Command's -ComputerName list does all five in one call.",
      "better": "Better fit for: genuinely needing an interactive session on one specific machine, not a repeatable check across a fleet."
    },
    "concepts": [
      {
        "term": "PSComputerName",
        "explain": "When Invoke-Command targets multiple machines, results come back tagged with which machine each one came from, in a PSComputerName property, so you can tell the results apart."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - use a different account",
    "task": "Run that same five-machine check again, but using a different account than the one you're currently logged in as.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Command",
        "hint": "Same one-to-many cmdlet from step 3."
      },
      {
        "text": "-ComputerName WEB01,WEB02,WEB03,WEB04,WEB05",
        "hint": "Same five targets."
      },
      {
        "text": "-ScriptBlock {Get-Service wuauserv}",
        "hint": "Same command."
      },
      {
        "text": "-Credential (Get-Credential)",
        "hint": "Prompts for a username and password, and runs the remote command as that account instead of your current login."
      }
    ],
    "check": function(c){ return /invoke-command/i.test(c) && /web01/i.test(c) && /web05/i.test(c) && /-credential/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /invoke-command/i.test(c) && /web01/i.test(c) && !/-credential/i.test(c); },
        "output": "Invoke-Command : Access is denied.",
        "note": "Without -Credential, the command runs as whatever account you're currently logged in as. If that account doesn't have rights on the target machines, you get an access denied error instead of the results you wanted."
      }
    ],
    "hint": "Add -Credential (Get-Credential) to the same Invoke-Command from step 3, it prompts for a username and password and runs the remote command as that account.",
    "tokens": [
      {
        "text": "Invoke-Command",
        "cat": "cmdlet",
        "note": "Same cmdlet from step 3."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Same target list."
      },
      {
        "text": "WEB01,WEB02,WEB03,WEB04,WEB05",
        "cat": "value",
        "note": "Same five servers."
      },
      {
        "text": "-ScriptBlock",
        "cat": "param",
        "note": "Same script block."
      },
      {
        "text": "{Get-Service wuauserv}",
        "cat": "value",
        "note": "Same command."
      },
      {
        "text": "-Credential",
        "cat": "param",
        "note": "Runs the remote command as a specified account instead of your current login."
      },
      {
        "text": "(Get-Credential)",
        "cat": "value",
        "note": "Prompts interactively for a username and password, the result is passed straight into -Credential."
      }
    ],
    "output": "Windows PowerShell credential request\nEnter your credentials.\nUser: CORP\\svc-webcheck\nPassword for CORP\\svc-webcheck: ****\n\nStatus   Name       PSComputerName\n------   ----       --------------\nRunning  wuauserv   WEB01\nRunning  wuauserv   WEB02\nStopped  wuauserv   WEB03\nRunning  wuauserv   WEB04\nRunning  wuauserv   WEB05",
    "order": "This comes last because it builds directly on step 3's working command, adding exactly one more piece, an alternate identity, rather than changing anything else about the approach.",
    "notice": [
      {
        "field": "CORP\\svc-webcheck",
        "note": "A separate service account being used instead of your own login, common when your personal account doesn't have rights on every target machine."
      }
    ],
    "distractor": {
      "name": "Logging in as that account locally first",
      "why": "Would mean actually signing out and back in as a different user just to run one remote check, disruptive and unnecessary. -Credential lets a single command run as another account without touching your actual login session.",
      "better": "Better fit for: never for a task like this, -Credential exists specifically to avoid needing to switch your whole session."
    },
    "concepts": [
      {
        "term": "-Credential (Get-Credential)",
        "explain": "Get-Credential prompts interactively for a username and password and returns a credential object. Passing that straight into a cmdlet's -Credential parameter runs the operation as that account instead of your current login."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - start it in the background",
    "task": "Start the slow event log query as a background job instead of running it directly and freezing the console.",
    "prefill": "",
    "chips": [
      {
        "text": "Start-Job",
        "hint": "Runs a script block as a background job, your console stays free immediately."
      },
      {
        "text": "-ScriptBlock {Get-WinEvent -ComputerName WEB03 -LogName System}",
        "hint": "The slow command, wrapped in a script block to hand off to the background."
      },
      {
        "text": "Get-WinEvent -ComputerName WEB03 -LogName System",
        "hint": "Running it directly, no job wrapper. Exactly the frozen-console problem being avoided."
      }
    ],
    "check": function(c){ return /start-job/i.test(c) && /scriptblock/i.test(c) && /get-winevent/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-winevent/i.test(c) && /web03/i.test(c) && !/start-job/i.test(c); },
        "output": "(console frozen, waiting on WEB03's event log query to complete before anything else can run)",
        "note": "That's running the slow query directly. Your console is now blocked until it finishes, exactly the problem you were trying to avoid. Start-Job hands the same command off to run in the background instead."
      }
    ],
    "hint": "Start-Job with -ScriptBlock wrapping the slow Get-WinEvent command, your console stays usable immediately while it runs.",
    "tokens": [
      {
        "text": "Start-Job",
        "cat": "cmdlet",
        "note": "Hands a command off to run in the background, returns control of the console immediately."
      },
      {
        "text": "-ScriptBlock",
        "cat": "param",
        "note": "The command to run in the background, wrapped in {}."
      },
      {
        "text": "{Get-WinEvent -ComputerName WEB03 -LogName System}",
        "cat": "value",
        "note": "The actual slow query being backgrounded."
      }
    ],
    "output": "Id     Name            PSJobTypeName   State         HasMoreData     Command\n--     ----            -------------   -----         -----------     -------\n1      Job1            BackgroundJob   Running       True            Get-WinEvent -ComputerN...",
    "order": "This is first because it's the whole point of the request: hand the slow work off immediately instead of sitting there waiting on it.",
    "notice": [
      {
        "field": "State: Running",
        "note": "The job started immediately and your console prompt returned right away, it's working in the background, not blocking anything."
      },
      {
        "field": "Id: 1",
        "note": "Every job gets an Id, used in the next steps to check on or retrieve results from this specific job."
      }
    ],
    "distractor": {
      "name": "Running Get-WinEvent directly",
      "why": "This blocks the console until the slow query finishes, exactly the problem the request was trying to avoid. Start-Job hands the same work off to run separately, returning control immediately.",
      "better": "Better fit for: quick commands where you're fine waiting a second or two for the result."
    },
    "concepts": [
      {
        "term": "Start-Job",
        "explain": "Runs a script block as a separate background job instead of directly in your console. Control returns to you immediately, the job keeps running independently, checked on later with Get-Job."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - check whether it's done",
    "task": "Check on the job to see whether it's actually finished yet, don't just assume.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Job",
        "hint": "Lists background jobs and their current state, without retrieving any results."
      },
      {
        "text": "Receive-Job",
        "hint": "Pulls the actual output from a job. Not the right tool yet if you only want to check status."
      }
    ],
    "check": function(c){ return /get-job/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /receive-job/i.test(c) && !/get-job/i.test(c); },
        "output": "(if the job hasn't finished yet, this returns nothing or only partial results, without telling you clearly whether it's actually done)",
        "note": "Receive-Job pulls output, it doesn't clearly tell you the job's current state the way Get-Job does. Checking status first avoids assuming a job is done, or retrieving incomplete results too early."
      }
    ],
    "hint": "Get-Job checks the state of background jobs without pulling their results yet.",
    "tokens": [
      {
        "text": "Get-Job",
        "cat": "cmdlet",
        "note": "Lists all background jobs and their current State, Running, Completed, Failed, and so on."
      }
    ],
    "output": "Id     Name            PSJobTypeName   State         HasMoreData     Command\n--     ----            -------------   -----         -----------     -------\n1      Job1            BackgroundJob   Completed     True            Get-WinEvent -ComputerN...",
    "order": "This comes after starting the job and before retrieving results, checking status is the habit that prevents assuming a job finished when it might still be running.",
    "notice": [
      {
        "field": "State: Completed",
        "note": "Confirms the job actually finished, safe to move on to retrieving its results next."
      },
      {
        "field": "HasMoreData: True",
        "note": "Signals there's output waiting to be picked up with Receive-Job, it hasn't been retrieved yet."
      }
    ],
    "distractor": {
      "name": "Receive-Job to check status",
      "why": "Receive-Job's job is pulling output, not clearly reporting job state. Checking with Get-Job first confirms the job actually finished before you try to collect results from it.",
      "better": "Better fit for: after you've already confirmed the job is Completed, exactly what step 3 does next."
    },
    "concepts": [
      {
        "term": "Job states",
        "explain": "A background job's State property moves through values like NotStarted, Running, Completed, or Failed. Get-Job is how you check which state a job is currently in."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - get the results",
    "task": "Now that it's confirmed done, actually pull the results from the job.",
    "prefill": "",
    "chips": [
      {
        "text": "Receive-Job",
        "hint": "Retrieves the actual output a completed job produced."
      },
      {
        "text": "-Id 1",
        "hint": "Which job to pull results from, matching the Id seen in Get-Job's output."
      },
      {
        "text": "Get-Job",
        "hint": "Checks status again. Already confirmed Completed in step 2, not needed a second time here."
      }
    ],
    "check": function(c){ return /receive-job/i.test(c) && /1/.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-job/i.test(c) && !/receive-job/i.test(c); },
        "output": "Id     Name            PSJobTypeName   State         HasMoreData     Command\n--     ----            -------------   -----         -----------     -------\n1      Job1            BackgroundJob   Completed     True            Get-WinEvent -ComputerN...",
        "note": "That's the same status check from step 2, run again. It confirms the job is done, again, but it doesn't actually hand you the event log data itself. Receive-Job is what pulls the real output out of a completed job."
      }
    ],
    "hint": "Receive-Job -Id 1 pulls the actual output the job collected, now that Get-Job confirmed it's Completed.",
    "tokens": [
      {
        "text": "Receive-Job",
        "cat": "cmdlet",
        "note": "Retrieves the output a background job produced while running."
      },
      {
        "text": "-Id",
        "cat": "param",
        "note": "Which job's results to retrieve."
      },
      {
        "text": "1",
        "cat": "value",
        "note": "The Id seen in the earlier Get-Job output."
      }
    ],
    "output": "ProviderName: EventLog\n\nTimeCreated             Id      LevelDisplayName Message\n----------              --      ---------------- -------\n8/10/2026 3:14:02 AM    7036    Information       The service entered the running state.\n8/10/2026 2:58:41 AM    1074    Information       The process explorer.exe initiated a restart.",
    "order": "This comes right after confirming Completed status in step 2, retrieving results only once you know they're actually ready, not before.",
    "notice": [
      {
        "field": "Actual event log entries",
        "note": "This is the real payload the background job was collecting the whole time, only now handed back to your console."
      }
    ],
    "distractor": {
      "name": "Get-Job again instead of Receive-Job",
      "why": "Get-Job only ever reports status, State, HasMoreData, and so on. It was already confirmed Completed in step 2. Actually collecting the event log data itself requires Receive-Job.",
      "better": "Better fit for: checking on a job's progress, not collecting its finished output."
    },
    "concepts": [
      {
        "term": "Receive-Job",
        "explain": "Pulls the actual output a background job produced. Separate from Get-Job, which only reports status. A job can be Completed for a while before you ever call Receive-Job to actually collect its results."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - clean up",
    "task": "Now clean up after yourself, remove the job now that you have its results.",
    "prefill": "",
    "chips": [
      {
        "text": "Remove-Job",
        "hint": "Deletes a job from the job list once you're done with it, freeing up the resources it was holding."
      },
      {
        "text": "-Id 1",
        "hint": "The same job Id used throughout."
      }
    ],
    "check": function(c){ return /remove-job/i.test(c) && /1/.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-job/i.test(c) && !/remove-job/i.test(c); },
        "output": "Id     Name            PSJobTypeName   State         HasMoreData     Command\n--     ----            -------------   -----         -----------     -------\n1      Job1            BackgroundJob   Completed     True            Get-WinEvent -ComputerN...",
        "note": "That job is still sitting there. Checking on it again doesn't clean anything up, it just confirms what you already knew. Left alone, finished jobs pile up over a session, holding onto memory for results you've already collected. Remove-Job actually clears it out."
      }
    ],
    "hint": "Remove-Job -Id 1 clears the completed job out now that its results have been collected, so it doesn't sit around taking up resources.",
    "tokens": [
      {
        "text": "Remove-Job",
        "cat": "cmdlet",
        "note": "Deletes a job entry, freeing whatever resources it was holding onto."
      },
      {
        "text": "-Id",
        "cat": "param",
        "note": "Which job to remove."
      },
      {
        "text": "1",
        "cat": "value",
        "note": "Same job Id used throughout this lesson."
      }
    ],
    "output": "(job 1 removed, Get-Job now returns nothing)",
    "order": "This is last because it's genuinely the last thing that should happen, after you've collected the results you actually needed in step 3, not before.",
    "notice": [
      {
        "field": "Get-Job now returns nothing",
        "note": "Confirms the cleanup worked, the completed job is no longer sitting around."
      }
    ],
    "distractor": {
      "name": "Leaving the job in place",
      "why": "It costs nothing immediately, but finished jobs accumulate over a long session, each one holding onto memory for results already collected. Removing them once you're done is just good housekeeping.",
      "better": "Better fit for: never leaving them intentionally, though it's a harmless mistake in a short session, it adds up in a long one."
    },
    "concepts": [
      {
        "term": "Remove-Job",
        "explain": "Deletes a job from the session's job list. Worth doing once you've called Receive-Job and no longer need the job hanging around, otherwise completed jobs quietly accumulate over a long session."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - find the matching files",
    "task": "First, find every .log file in C:\\Logs older than 30 days.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem -Path C:\\Logs -Filter *.log",
        "hint": "Finds the log files."
      },
      {
        "text": "Where-Object",
        "hint": "Filters down to just the ones matching the age condition."
      },
      {
        "text": "{$_.LastWriteTime -lt (Get-Date).AddDays(-30)}",
        "hint": "True for files last written more than 30 days ago."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /logs/i.test(c) && /where-object/i.test(c) && /lastwritetime/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && /logs/i.test(c) && !/where-object/i.test(c); },
        "output": "Mode   LastWriteTime      Length Name\n----   -------------      ------ ----\n-a---  6/1/2026  9:14 AM  40213  app.log\n-a---  7/28/2026 2:03 PM  12211  error.log\n-a---  8/9/2026  6:40 AM  9512   today.log",
        "note": "That's every .log file regardless of age, today.log included. Without a Where-Object filter on LastWriteTime, you'd end up renaming files that aren't actually old yet."
      }
    ],
    "hint": "Get-ChildItem -Path C:\\Logs -Filter *.log, piped into Where-Object {$_.LastWriteTime -lt (Get-Date).AddDays(-30)}.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "Lists files in the target folder."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where to look."
      },
      {
        "text": "C:\\Logs",
        "cat": "value",
        "note": "The folder."
      },
      {
        "text": "-Filter",
        "cat": "param",
        "note": "Narrows by filename pattern at the source, cheaper than filtering afterward."
      },
      {
        "text": "*.log",
        "cat": "value",
        "note": "Only .log files."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Filters further by a property, something -Filter's simple pattern matching can't do."
      },
      {
        "text": "{$_.LastWriteTime -lt (Get-Date).AddDays(-30)}",
        "cat": "param",
        "note": "True only for files last modified more than 30 days ago."
      }
    ],
    "output": "Mode   LastWriteTime      Length Name\n----   -------------      ------ ----\n-a---  6/1/2026  9:14 AM  40213  app.log\n-a---  7/28/2026 2:03 PM  12211  error.log",
    "order": "This runs first because everything after it, the renaming, only makes sense once you know exactly which files qualify.",
    "notice": [
      {
        "field": "today.log excluded",
        "note": "Confirms the age filter worked, only files genuinely older than 30 days made it through."
      }
    ],
    "distractor": {
      "name": "Get-ChildItem without the Where-Object age filter",
      "why": "Returns every .log file regardless of how recent it is. Renaming files that aren't actually old yet, like today.log, wasn't part of the request.",
      "better": "Better fit for: when you genuinely want every log file, not just the old ones."
    },
    "concepts": [
      {
        "term": "-Filter vs Where-Object",
        "explain": "-Filter narrows by filename pattern right at the source, cheap and fast. Where-Object filters on any property, like a date, after the objects already exist. Use -Filter for what it can do, Where-Object for what it can't."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - rename each one individually",
    "task": "Now rename each matching file by appending .old to its own filename. Every file needs a different new name.",
    "prefill": "",
    "chips": [
      {
        "text": "ForEach-Object",
        "hint": "Runs a script block once per object flowing through the pipeline, using $_ to refer to whichever one is currently being processed."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\"}",
        "hint": "Renames the current file, building its new name from its own existing name."
      },
      {
        "text": "Rename-Item -NewName app.log.old",
        "hint": "A single fixed name. Works for one file, but every file in this batch needs a different new name."
      }
    ],
    "check": function(c){ return /foreach-object/i.test(c) && /rename-item/i.test(c) && /\$_/.test(c); },
    "misses": [
      {
        "test": function(c){ return /rename-item/i.test(c) && !/foreach-object/i.test(c) && /\|/.test(c); },
        "output": "Rename-Item : Cannot rename because multiple items exist and only one new name was specified.",
        "note": "Rename-Item expects one fixed new name. Piped multiple files straight into it, it has no way to know each one needs a different result. ForEach-Object with $_ is what lets each file get its own individually-computed new name."
      }
    ],
    "hint": "Pipe the filtered files into ForEach-Object {Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\"}. $_ refers to whichever file is currently being processed.",
    "tokens": [
      {
        "text": "ForEach-Object",
        "cat": "cmdlet",
        "note": "Runs its script block once per object in the pipeline, one at a time."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\"}",
        "cat": "param",
        "note": "$_ is the current file; its new name is built directly from its own existing name."
      }
    ],
    "output": "(app.log renamed to app.log.old)\n(error.log renamed to error.log.old)",
    "order": "This comes right after finding the matching files, and uses $_ to handle the fact that no single fixed new name could possibly work for every file in the batch.",
    "notice": [
      {
        "field": "$_.Name inside the new name",
        "note": "Each file's new name is computed individually from its own current name, exactly why a single Rename-Item call couldn't do this alone."
      }
    ],
    "distractor": {
      "name": "Rename-Item with one fixed -NewName",
      "why": "Rename-Item's -NewName expects one specific new name. Piped several files at once, it has no way to give each one something different. ForEach-Object with $_ computes a distinct new name per file instead.",
      "better": "Better fit for: renaming exactly one specific, known file."
    },
    "concepts": [
      {
        "term": "ForEach-Object and $_",
        "explain": "ForEach-Object runs its script block once for every object flowing through the pipeline, with $_ standing in for whichever one is currently being processed. This is how you do something individually calculated, like a per-file new name, rather than one fixed action for the whole batch."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - preview before doing it for real",
    "task": "Now preview the rename operation before actually touching any files.",
    "prefill": "",
    "chips": [
      {
        "text": "ForEach-Object",
        "hint": "Same loop as step 2."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\" -WhatIf}",
        "hint": "-WhatIf inside the script block previews what each individual rename would do."
      }
    ],
    "check": function(c){ return /foreach-object/i.test(c) && /rename-item/i.test(c) && /-whatif/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /rename-item/i.test(c) && /foreach-object/i.test(c) && !/-whatif/i.test(c); },
        "output": "(app.log renamed to app.log.old)\n(error.log renamed to error.log.old)",
        "note": "That's the same rename from step 2, run for real again, no preview. -WhatIf, added inside the script block on Rename-Item itself, would show what each rename would do without actually touching the files."
      }
    ],
    "hint": "Add -WhatIf directly onto the Rename-Item call inside the ForEach-Object script block, previewing every individual rename before committing.",
    "tokens": [
      {
        "text": "ForEach-Object",
        "cat": "cmdlet",
        "note": "Same per-object loop."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\" -WhatIf}",
        "cat": "param",
        "note": "-WhatIf previews what this specific rename would do, without actually doing it."
      }
    ],
    "output": "What if: Performing the operation \"Rename File\" on target \"C:\\Logs\\app.log\".\nWhat if: Performing the operation \"Rename File\" on target \"C:\\Logs\\error.log\".",
    "order": "This comes right before actually committing to the rename in step 4, giving one last chance to confirm exactly which files and new names are about to be affected.",
    "notice": [
      {
        "field": "What if:",
        "note": "Nothing actually renamed yet, this lists exactly what would happen to each file individually if you removed -WhatIf and ran it for real."
      }
    ],
    "distractor": {
      "name": "Running the real rename again without -WhatIf",
      "why": "That's just repeating step 2, no preview involved. -WhatIf specifically exists to show you what would happen first, especially valuable here since ForEach-Object is about to touch multiple files at once.",
      "better": "Better fit for: once you've reviewed the -WhatIf output and are confident it's correct."
    },
    "concepts": [
      {
        "term": "-WhatIf inside a loop",
        "explain": "-WhatIf works the same way inside a ForEach-Object script block as it does standalone, previewing each individual action, in this case each file's rename, before anything actually happens."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - run it for real",
    "task": "Reviewed and confident, now actually run the rename for real.",
    "prefill": "",
    "chips": [
      {
        "text": "ForEach-Object",
        "hint": "Same loop, -WhatIf removed now that it's been reviewed."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\"}",
        "hint": "Same rename logic from step 2, without the preview flag."
      }
    ],
    "check": function(c){ return /foreach-object/i.test(c) && /rename-item/i.test(c) && !/-whatif/i.test(c); },
    "misses": [],
    "hint": "Same command as step 3, just with -WhatIf removed, now that the preview has been reviewed and confirmed correct.",
    "tokens": [
      {
        "text": "ForEach-Object",
        "cat": "cmdlet",
        "note": "Same per-object loop from steps 2 and 3."
      },
      {
        "text": "{Rename-Item -Path $_.FullName -NewName \"$($_.Name).old\"}",
        "cat": "param",
        "note": "Same logic, now actually executing since -WhatIf is gone."
      }
    ],
    "output": "(app.log renamed to app.log.old)\n(error.log renamed to error.log.old)",
    "order": "This is last, deliberately, only running for real after both finding the right files and previewing the exact outcome in the two steps before it.",
    "notice": [
      {
        "field": "No 'What if:' prefix",
        "note": "Confirms this is the real operation, not another preview, the files have actually been renamed now."
      }
    ],
    "distractor": {
      "name": "Skipping straight here without steps 1-3",
      "why": "Works in isolation, but skips confirming which files qualify and previewing the outcome first. The whole point of this lesson is doing those checks before an operation that touches multiple files individually.",
      "better": "Better fit for: a command you've already run and verified many times before, not a new batch operation."
    },
    "concepts": [
      {
        "term": "Preview, then commit",
        "explain": "Run with -WhatIf first, review the output, then remove it and run for real. This habit matters most exactly where this lesson used it, an operation touching several objects individually with ForEach-Object."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - store the result once",
    "task": "Run the service query once and store the entire result in a variable.",
    "prefill": "",
    "chips": [
      {
        "text": "$allServices",
        "hint": "A variable name, prefixed with $. Where the result will be stored."
      },
      {
        "text": "=",
        "hint": "Assignment, stores whatever is on the right into the variable on the left."
      },
      {
        "text": "Get-Service",
        "hint": "The query being run, just once."
      }
    ],
    "check": function(c){ return /\$allservices\s*=\s*get-service/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && !/\$allservices/i.test(c) && !/=/.test(c); },
        "output": "Status   Name               DisplayName\n------   ----               -----------\nRunning  wuauserv           Windows Update\nStopped  Fax                Fax",
        "note": "That runs the query and prints it, but nothing was saved anywhere. The very next command that needs this data would have to run Get-Service all over again, exactly the repeated, slow query the request wanted to avoid."
      }
    ],
    "hint": "$allServices = Get-Service stores the entire result in a variable, so it never has to be queried again for the rest of this session.",
    "tokens": [
      {
        "text": "$allServices",
        "cat": "value",
        "note": "A variable, a named place to store a value for later use."
      },
      {
        "text": "=",
        "cat": "param",
        "note": "Assignment operator, stores the right-hand result into the variable on the left."
      },
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Run exactly once here, its full result gets captured instead of just printed and discarded."
      }
    ],
    "output": "(nothing printed, the result was captured into $allServices instead of displayed)",
    "order": "This runs first and only once, on purpose, everything after this step reuses the stored result instead of hitting Get-Service again.",
    "notice": [
      {
        "field": "No output printed",
        "note": "Assignment captures the result silently instead of displaying it, that's expected, the data is now sitting in $allServices instead."
      }
    ],
    "distractor": {
      "name": "Running Get-Service with no variable",
      "why": "Prints the result once but keeps nothing. Every later step that needs this data would have to re-run the same slow query all over again.",
      "better": "Better fit for: a quick, one-off look you don't need again."
    },
    "concepts": [
      {
        "term": "Variables",
        "explain": "A $-prefixed name that stores a value, any value, a number, text, or a whole collection of objects, for reuse later in the same session, without re-running whatever produced it."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - use the stored result: count",
    "task": "Now show how many services there are, using the stored variable, not a fresh query.",
    "prefill": "",
    "chips": [
      {
        "text": "$allServices.Count",
        "hint": "Reads the Count property directly off the stored collection."
      },
      {
        "text": "Get-Service | Measure-Object",
        "hint": "Would work, but re-runs the slow query, exactly what storing it was meant to avoid."
      }
    ],
    "check": function(c){ return /\$allservices\.count/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /measure-object/i.test(c) && !/\$allservices/i.test(c); },
        "output": "Count    : 74\nAverage  :\nSum      :",
        "note": "That gets the count, but by running Get-Service again from scratch. $allServices already holds the exact same data from step 1, .Count reads it instantly with no repeated query."
      }
    ],
    "hint": "$allServices.Count reads the count straight off the already-stored collection, no new query needed.",
    "tokens": [
      {
        "text": "$allServices",
        "cat": "value",
        "note": "The variable holding the result from step 1."
      },
      {
        "text": ".Count",
        "cat": "param",
        "note": "A property giving the number of items in the stored collection, read instantly, no new query."
      }
    ],
    "output": "74",
    "order": "This is the first payoff of storing the result in step 1: getting an answer instantly from memory instead of running the slow query a second time.",
    "notice": [
      {
        "field": "74",
        "note": "The same total that a fresh Get-Service | Measure-Object would report, but retrieved instantly from the already-stored variable."
      }
    ],
    "distractor": {
      "name": "Get-Service | Measure-Object",
      "why": "Gets the right number, but by running the expensive query all over again. $allServices.Count reaches into data that's already sitting in memory from step 1.",
      "better": "Better fit for: getting a count when you haven't already stored the result in a variable."
    },
    "concepts": [
      {
        "term": "Reusing a stored variable",
        "explain": "Once a result is stored in a variable, later commands can read directly from it instead of re-running whatever produced it in the first place. This matters most with slow or remote queries."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - use the stored result: filter",
    "task": "Now show just the stopped services, still using the stored variable, not a new query.",
    "prefill": "",
    "chips": [
      {
        "text": "$allServices",
        "hint": "The same stored result from step 1."
      },
      {
        "text": "Where-Object",
        "hint": "Filters the stored collection, same as it would filter fresh pipeline output."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "hint": "Same filtering condition used in an earlier lesson."
      }
    ],
    "check": function(c){ return /\$allservices/i.test(c) && /where-object/i.test(c) && /stopped/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /where-object/i.test(c) && /stopped/i.test(c) && !/\$allservices/i.test(c); },
        "output": "Status   Name       DisplayName\n------   ----       -----------\nStopped  Fax        Fax",
        "note": "Correct result, but from a brand new query. $allServices already holds this exact same data from step 1, piping it into Where-Object gets the identical answer without touching the source again."
      }
    ],
    "hint": "Pipe $allServices into Where-Object {$_.Status -eq 'Stopped'}, filtering the already-stored data instead of running Get-Service again.",
    "tokens": [
      {
        "text": "$allServices",
        "cat": "value",
        "note": "The stored result, reused for a second time now."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Filters a collection whether it came fresh off a pipeline or out of a stored variable, works identically either way."
      },
      {
        "text": "{$_.Status -eq 'Stopped'}",
        "cat": "param",
        "note": "Same condition from an earlier lesson."
      }
    ],
    "output": "Status   Name       DisplayName\n------   ----       -----------\nStopped  Fax        Fax",
    "order": "This is the second payoff of step 1's storage, a completely different question, this time filtered instead of counted, still answered without a new query.",
    "notice": [
      {
        "field": "Same result as querying fresh",
        "note": "Where-Object works identically on a stored variable as it would on live pipeline output, because the variable holds real objects, not flattened text."
      }
    ],
    "distractor": {
      "name": "Get-Service | Where-Object again",
      "why": "Works, but re-runs the slow query a second time. $allServices | Where-Object gets the identical answer from data that's already sitting in memory.",
      "better": "Better fit for: when you haven't already stored the result and only need it once."
    },
    "concepts": [
      {
        "term": "Variables work like any pipeline source",
        "explain": "A variable holding a collection of objects can be piped into Where-Object, Sort-Object, or anything else, exactly like fresh cmdlet output. That's what makes storing an expensive query once so useful."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - prove it's still real objects",
    "task": "Confirm the variable still holds real service objects, not just flattened text.",
    "prefill": "",
    "chips": [
      {
        "text": "$allServices",
        "hint": "The stored variable being checked."
      },
      {
        "text": "Get-Member",
        "hint": "The same discovery cmdlet from chapter 8, confirming the real shape of whatever's piped into it."
      }
    ],
    "check": function(c){ return /\$allservices/i.test(c) && /get-member/i.test(c); },
    "misses": [],
    "hint": "Pipe $allServices into Get-Member, same as chapter 8, to confirm it's still real ServiceController objects, not plain text.",
    "tokens": [
      {
        "text": "$allServices",
        "cat": "value",
        "note": "The stored variable."
      },
      {
        "text": "Get-Member",
        "cat": "cmdlet",
        "note": "Confirms the real type and properties of whatever's stored inside, exactly as it did back in chapter 8."
      }
    ],
    "output": "   TypeName: System.ServiceProcess.ServiceController\n\nName        MemberType   Definition\n----        ----------   ----------\nStart       Method       void Start()\nStop        Method       void Stop()\nStatus      Property     ServiceControllerStatus Status {get;}",
    "order": "This closes the loop on the request's second question, confirming the variable holds genuine service objects with real methods like Stop(), not just text that happens to display like one.",
    "notice": [
      {
        "field": "System.ServiceProcess.ServiceController",
        "note": "The exact same real object type Get-Service always returns, confirming nothing was flattened just because it passed through a variable."
      },
      {
        "field": "Stop, Method",
        "note": "A real, callable action still available on the stored objects, not something a plain block of text could ever offer."
      }
    ],
    "distractor": {
      "name": "Assuming it's still real without checking",
      "why": "Variables can hold anything, including plain text if something upstream had reformatted the data first. Assuming instead of checking with Get-Member is exactly the habit chapter 8 warned against.",
      "better": "Better fit for: never, verifying with Get-Member costs nothing and removes any doubt."
    },
    "concepts": [
      {
        "term": "Variables preserve object type",
        "explain": "Storing a result in a variable doesn't change what kind of data it is. $allServices holds the exact same real ServiceController objects Get-Service returned, confirmed with Get-Member exactly like any other pipeline output."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - prompt for input",
    "task": "Prompt for a computer name instead of hardcoding one.",
    "prefill": "",
    "chips": [
      {
        "text": "$computer",
        "hint": "Where the entered value will be stored."
      },
      {
        "text": "=",
        "hint": "Assignment."
      },
      {
        "text": "Read-Host",
        "hint": "Prompts the user and returns whatever they typed as a plain string."
      },
      {
        "text": "-Prompt \"Enter computer name\"",
        "hint": "The text shown to the user when asking for input."
      }
    ],
    "check": function(c){ return /\$computer\s*=\s*read-host/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$computer\s*=\s*['"]WEB01['"]/i.test(c); },
        "output": "(no prompt, WEB01 hardcoded directly into the script)",
        "note": "That's exactly the hardcoding the request was trying to move away from. Read-Host prompts for a value at run time instead, so the same script works against any machine without editing it."
      }
    ],
    "hint": "$computer = Read-Host -Prompt \"Enter computer name\" prompts at run time and stores whatever gets typed.",
    "tokens": [
      {
        "text": "$computer",
        "cat": "value",
        "note": "Where the typed value gets stored, for reuse later in the script."
      },
      {
        "text": "=",
        "cat": "param",
        "note": "Assignment."
      },
      {
        "text": "Read-Host",
        "cat": "cmdlet",
        "note": "Prompts interactively and returns the typed text as a plain string."
      },
      {
        "text": "-Prompt",
        "cat": "param",
        "note": "The message shown when asking for input."
      },
      {
        "text": "\"Enter computer name\"",
        "cat": "value",
        "note": "The actual prompt text displayed."
      }
    ],
    "output": "Enter computer name: WEB03",
    "order": "This runs first because everything else in the script depends on knowing which machine to target, gathered fresh each run instead of baked in.",
    "notice": [
      {
        "field": "WEB03 typed at the prompt",
        "note": "Now stored in $computer, ready to be reused anywhere the script needs a target machine."
      }
    ],
    "distractor": {
      "name": "Hardcoding the computer name",
      "why": "Works exactly once, for exactly one machine. Any other target means editing the script itself. Read-Host makes the same script reusable against any machine without changes.",
      "better": "Better fit for: a script you're certain will only ever target one specific, unchanging machine."
    },
    "concepts": [
      {
        "term": "Read-Host",
        "explain": "Prompts interactively and returns whatever the user types as a plain string. The standard way to gather input at run time instead of hardcoding values into a script."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - a status message that stays off the pipeline",
    "task": "Print a status message to the screen, one that won't end up mixed into piped results later.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Host",
        "hint": "Writes directly to the screen only, never enters the pipeline, so it can't accidentally get piped, captured, or exported."
      },
      {
        "text": "\"Checking $computer...\"",
        "hint": "The status message, using the variable from step 1."
      },
      {
        "text": "Write-Output",
        "hint": "Sends its text into the pipeline itself, which is exactly what would pollute later piped results."
      }
    ],
    "check": function(c){ return /write-host/i.test(c) && /checking/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-output/i.test(c) && /checking/i.test(c) && !/write-host/i.test(c); },
        "output": "Checking WEB03...\n\n(if this were piped into Export-Csv, that status line would end up as a row in the file)",
        "note": "Write-Output sends text into the actual pipeline. If this were piped further, like into Export-Csv, that status message would end up mixed into the real data instead of staying purely on screen. Write-Host bypasses the pipeline entirely, screen only."
      }
    ],
    "hint": "Write-Host \"Checking $computer...\" prints straight to the screen, bypassing the pipeline entirely so it can never get mixed into real data.",
    "tokens": [
      {
        "text": "Write-Host",
        "cat": "cmdlet",
        "note": "Writes directly to the console, never enters the pipeline, so later commands piping this script's output never see it."
      },
      {
        "text": "\"Checking $computer...\"",
        "cat": "value",
        "note": "The message text, with the variable from step 1 embedded directly inside the string."
      }
    ],
    "output": "Checking WEB03...",
    "order": "This comes after gathering input and before the real query, giving visible feedback that something is happening, without risking contaminating whatever comes down the pipeline next.",
    "notice": [
      {
        "field": "$computer inside the string",
        "note": "PowerShell substitutes the variable's value directly into double-quoted strings, so this reads 'Checking WEB03...' at run time."
      }
    ],
    "distractor": {
      "name": "Write-Output for the status message",
      "why": "Write-Output sends its text straight into the pipeline. If this script's output ever got piped further, into Export-Csv, for example, that status message would end up mixed in as if it were real data.",
      "better": "Better fit for: the actual result data itself, exactly what step 3 produces next, meant to flow down the pipeline."
    },
    "concepts": [
      {
        "term": "Write-Host vs the pipeline",
        "explain": "Write-Host writes straight to the console and never touches the pipeline, useful for status messages, progress notes, or anything meant purely for a human watching the screen, not for downstream commands."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - get the real data",
    "task": "Now actually query the service data from that computer, using the variable gathered in step 1.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service",
        "hint": "The real query."
      },
      {
        "text": "-ComputerName $computer",
        "hint": "Uses the variable from step 1 instead of a hardcoded name."
      },
      {
        "text": "-Name wuauserv",
        "hint": "The specific service being checked."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /\$computer/i.test(c) && /wuauserv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /web03/i.test(c) && !/\$computer/i.test(c); },
        "output": "(works this one time, but hardcodes WEB03 right back into the script, undoing the point of step 1's prompt)",
        "note": "That works right now, but it types the machine name directly again instead of using $computer, undoing the entire reason step 1 prompted for it in the first place."
      }
    ],
    "hint": "Get-Service -ComputerName $computer -Name wuauserv, reusing the variable gathered back in step 1 instead of typing the machine name again.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "The actual query, producing real pipeline output this time, unlike step 2's screen-only message."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Which machine to query."
      },
      {
        "text": "$computer",
        "cat": "value",
        "note": "The variable gathered via Read-Host in step 1, reused here instead of a hardcoded name."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which specific service."
      },
      {
        "text": "wuauserv",
        "cat": "value",
        "note": "Windows Update service."
      }
    ],
    "output": "Status   Name       DisplayName      PSComputerName\n------   ----       -----------      --------------\nRunning  wuauserv   Windows Update   WEB03",
    "order": "This is the real data-producing step, coming after the input was gathered and the status message printed, and it's this output, not step 2's message, that will actually flow down a pipeline.",
    "notice": [
      {
        "field": "$computer reused, not retyped",
        "note": "Confirms the whole point of step 1's prompt: gather once, reuse everywhere the script needs that value."
      }
    ],
    "distractor": {
      "name": "Typing the computer name again instead of $computer",
      "why": "Works for this one run, but hardcodes the machine name right back into the script, exactly what Read-Host in step 1 was meant to eliminate.",
      "better": "Better fit for: never, once you've prompted for a value, reuse the variable everywhere that value is needed."
    },
    "concepts": [
      {
        "term": "Real pipeline output",
        "explain": "Cmdlet results like Get-Service's output are genuine pipeline data, unlike Write-Host's screen-only messages. This is the data that would actually flow into something like Export-Csv or Where-Object further down a pipeline."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - prove the status message stayed separate",
    "task": "Now prove the status message from step 2 never actually mixed into the real result data.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Service -ComputerName $computer -Name wuauserv",
        "hint": "The same real query from step 3."
      },
      {
        "text": "Export-Csv -Path result.csv -NoTypeInformation",
        "hint": "If Write-Host's message had entered the pipeline, it would show up as a stray row here. It won't, because Write-Host never touches the pipeline."
      }
    ],
    "check": function(c){ return /get-service/i.test(c) && /\$computer/i.test(c) && /export-csv/i.test(c); },
    "misses": [],
    "hint": "Pipe the real Get-Service query from step 3 into Export-Csv. If Write-Host had polluted the pipeline, a stray row would show up here, it won't.",
    "tokens": [
      {
        "text": "Get-Service",
        "cat": "cmdlet",
        "note": "Same real query from step 3."
      },
      {
        "text": "-ComputerName $computer",
        "cat": "param",
        "note": "Same target."
      },
      {
        "text": "-Name wuauserv",
        "cat": "param",
        "note": "Same service."
      },
      {
        "text": "Export-Csv",
        "cat": "cmdlet",
        "note": "Writes the piped data to a file, exactly the kind of downstream command that would expose any accidental pollution from Write-Host."
      },
      {
        "text": "-Path result.csv",
        "cat": "value",
        "note": "Output file."
      },
      {
        "text": "-NoTypeInformation",
        "cat": "param",
        "note": "Skips a .NET type header PowerShell would otherwise add to the CSV."
      }
    ],
    "output": "(result.csv written, containing exactly one data row for wuauserv, no 'Checking WEB03...' text anywhere in the file)",
    "order": "This closes the loop on the request's core concern, proving directly, not just asserting, that the screen-only status message from step 2 genuinely never touched the pipeline data being exported here.",
    "notice": [
      {
        "field": "No status message in result.csv",
        "note": "Confirms Write-Host output stayed purely on screen the entire time, exactly the separation the request was asking about."
      }
    ],
    "distractor": {
      "name": "Assuming it's fine without checking",
      "why": "The whole request was about proving this separation, not just trusting it. Actually exporting and checking the file is the concrete proof, not an assumption.",
      "better": "Better fit for: never here, this is exactly the kind of thing worth verifying once, explicitly."
    },
    "concepts": [
      {
        "term": "Write-Host never touches the pipeline",
        "explain": "Confirmed here concretely: Write-Host output never shows up in exported or piped results, because it writes directly to the console and bypasses the pipeline entirely, by design."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - open one persistent session",
    "task": "Open a persistent connection to WEB03 that can be reused for multiple commands, and store it.",
    "prefill": "",
    "chips": [
      {
        "text": "$session",
        "hint": "Where the persistent connection will be stored for reuse."
      },
      {
        "text": "=",
        "hint": "Assignment."
      },
      {
        "text": "New-PSSession",
        "hint": "Opens a persistent remote connection and returns an object representing it, without running any command yet."
      },
      {
        "text": "-ComputerName WEB03",
        "hint": "The target machine."
      }
    ],
    "check": function(c){ return /\$session\s*=\s*new-pssession/i.test(c) && /web03/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /invoke-command/i.test(c) && /web03/i.test(c) && !/new-pssession/i.test(c) && !/-session/i.test(c); },
        "output": "(a new connection opens and closes for this one command; running another command afterward opens and closes an entirely new connection)",
        "note": "Invoke-Command with -ComputerName opens a fresh connection, runs the command, and tears it down again, every single time. Repeating that for three or four checks means three or four separate connections. New-PSSession opens one connection you can reuse across all of them."
      }
    ],
    "hint": "$session = New-PSSession -ComputerName WEB03 opens one persistent connection and stores it for reuse across multiple commands.",
    "tokens": [
      {
        "text": "$session",
        "cat": "value",
        "note": "Stores the persistent connection object for reuse in later commands."
      },
      {
        "text": "=",
        "cat": "param",
        "note": "Assignment."
      },
      {
        "text": "New-PSSession",
        "cat": "cmdlet",
        "note": "Opens a reusable remote connection without running any command yet, unlike Invoke-Command which opens, runs, and closes in one step."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Which machine to connect to."
      },
      {
        "text": "WEB03",
        "cat": "value",
        "note": "The target."
      }
    ],
    "output": "Id  Name  ComputerName  State    ConfigurationName\n--  ----  ------------  -----    ------------------\n1   Session1  WEB03     Opened   Microsoft.PowerShell",
    "order": "This runs first because everything else in this lesson depends on having one open connection ready to reuse, instead of opening a fresh one per command.",
    "notice": [
      {
        "field": "State: Opened",
        "note": "The connection is live and ready to reuse, unlike Invoke-Command's -ComputerName, which opens and closes automatically per call."
      }
    ],
    "distractor": {
      "name": "Invoke-Command -ComputerName, repeated per command",
      "why": "Each call opens a brand new connection, runs one command, then closes it. Doing that three or four times in a row means repeating the connection overhead every single time, exactly what the request wanted to avoid.",
      "better": "Better fit for: a single one-off remote command where reconnecting again isn't a concern."
    },
    "concepts": [
      {
        "term": "New-PSSession",
        "explain": "Opens a persistent remote connection and hands back an object representing it, without running any command. That object can then be reused across multiple Invoke-Command calls, avoiding the overhead of reconnecting each time."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - run the first command through it",
    "task": "Run the first check, whether the Windows Update service is running, through that same persistent session.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Command",
        "hint": "Same cmdlet used for one-to-many earlier, now targeting a session instead of a fresh connection."
      },
      {
        "text": "-Session $session",
        "hint": "Reuses the already-open connection instead of opening a new one."
      },
      {
        "text": "-ScriptBlock {Get-Service wuauserv}",
        "hint": "The first check."
      }
    ],
    "check": function(c){ return /invoke-command/i.test(c) && /-session/i.test(c) && /\$session/i.test(c) && /wuauserv/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /invoke-command/i.test(c) && /-computername/i.test(c) && /web03/i.test(c) && /wuauserv/i.test(c); },
        "output": "(runs the check, but opens and closes a brand new connection to do it, ignoring the persistent session already open from step 1)",
        "note": "-ComputerName opens its own fresh connection every time, completely separate from the persistent one just opened in step 1. -Session reuses that already-open connection instead."
      }
    ],
    "hint": "Invoke-Command -Session $session -ScriptBlock {Get-Service wuauserv}, using -Session instead of -ComputerName reuses the already-open connection.",
    "tokens": [
      {
        "text": "Invoke-Command",
        "cat": "cmdlet",
        "note": "Runs a script block against a target, this time a session rather than a fresh connection."
      },
      {
        "text": "-Session",
        "cat": "param",
        "note": "Targets an already-open session instead of opening a new connection."
      },
      {
        "text": "$session",
        "cat": "value",
        "note": "The persistent connection object from step 1."
      },
      {
        "text": "-ScriptBlock",
        "cat": "param",
        "note": "The command to run."
      },
      {
        "text": "{Get-Service wuauserv}",
        "cat": "value",
        "note": "The first check."
      }
    ],
    "output": "Status   Name       PSComputerName\n------   ----       --------------\nRunning  wuauserv   WEB03",
    "order": "This is the first payoff of opening the session in step 1, running a real command through it without any new connection overhead.",
    "notice": [
      {
        "field": "-Session, not -ComputerName",
        "note": "This is what actually reuses the already-open connection instead of opening yet another one."
      }
    ],
    "distractor": {
      "name": "Invoke-Command -ComputerName WEB03",
      "why": "This ignores the persistent session entirely and opens its own separate, brand new connection just for this one command, exactly the repeated overhead the request wanted avoided.",
      "better": "Better fit for: a genuine one-off command where no session has already been opened."
    },
    "concepts": [
      {
        "term": "-Session vs -ComputerName on Invoke-Command",
        "explain": "-ComputerName opens a fresh connection, runs the command, and closes it, every call. -Session reuses an already-open connection from New-PSSession, avoiding that repeated overhead across multiple commands."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - run a second, different command through the same session",
    "task": "Now run a completely different check, free disk space, through that same session, no reconnecting.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Command",
        "hint": "Same cmdlet, same session, different command."
      },
      {
        "text": "-Session $session",
        "hint": "The exact same persistent connection from step 1, reused a second time."
      },
      {
        "text": "-ScriptBlock {Get-PSDrive C}",
        "hint": "A completely different check than step 2's."
      }
    ],
    "check": function(c){ return /invoke-command/i.test(c) && /-session/i.test(c) && /\$session/i.test(c) && /get-psdrive/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /new-pssession/i.test(c) && /web03/i.test(c) && /get-psdrive/i.test(c); },
        "output": "(a second brand new connection opens to WEB03, alongside the first one already sitting open from step 1, doubling the overhead instead of reusing it)",
        "note": "Opening a second New-PSSession here creates a completely separate connection, right alongside the one from step 1 that's still open and perfectly usable. The whole point was reusing that same $session for every command, not opening one per check."
      }
    ],
    "hint": "Same $session from steps 1 and 2, just a different script block this time, no new connection needed.",
    "tokens": [
      {
        "text": "Invoke-Command",
        "cat": "cmdlet",
        "note": "Same cmdlet."
      },
      {
        "text": "-Session",
        "cat": "param",
        "note": "Same reused session."
      },
      {
        "text": "$session",
        "cat": "value",
        "note": "The exact same connection object, used for a second, unrelated command."
      },
      {
        "text": "-ScriptBlock",
        "cat": "param",
        "note": "Different script block than step 2."
      },
      {
        "text": "{Get-PSDrive C}",
        "cat": "value",
        "note": "Checks free disk space on the C: drive."
      }
    ],
    "output": "Name   Used(GB)   Free(GB)   Provider   Root   PSComputerName\n----   --------   --------   --------   ----   --------------\nC      142.30     37.61      FileSystem C:\\   WEB03",
    "order": "This directly proves the value of step 1: a second, entirely different command running through the identical already-open connection, no new session, no reconnect overhead.",
    "notice": [
      {
        "field": "Same $session as step 2",
        "note": "Confirms the connection is genuinely being reused, not reopened, for a second and completely unrelated check."
      }
    ],
    "distractor": {
      "name": "A second New-PSSession for this check",
      "why": "Opens a whole separate connection right alongside the one already open from step 1. That's double the overhead instead of the single reused connection the request specifically asked for.",
      "better": "Better fit for: connecting to a different machine entirely, not running another command against the same one."
    },
    "concepts": [
      {
        "term": "One session, many commands",
        "explain": "Once a session is open via New-PSSession, it can be passed into -Session on as many separate Invoke-Command calls as needed, running any number of different commands without reopening the connection each time."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - close it when done",
    "task": "All checks done, now close the session properly.",
    "prefill": "",
    "chips": [
      {
        "text": "Remove-PSSession",
        "hint": "Closes a session opened with New-PSSession, releasing the connection."
      },
      {
        "text": "-Session $session",
        "hint": "Which session to close."
      }
    ],
    "check": function(c){ return /remove-pssession/i.test(c) && /\$session/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$session\s*=\s*\$null/i.test(c); },
        "output": "(the variable no longer points to the session object, but the actual remote connection is still open on WEB03, just unreachable from here now)",
        "note": "Clearing the variable just removes your own reference to it, it doesn't actually tell WEB03 to close the connection. The session stays open remotely, just orphaned. Remove-PSSession properly closes it."
      }
    ],
    "hint": "Remove-PSSession -Session $session properly closes the connection, not just clearing the variable that points to it.",
    "tokens": [
      {
        "text": "Remove-PSSession",
        "cat": "cmdlet",
        "note": "Actually closes a session and releases its connection, the correct counterpart to New-PSSession."
      },
      {
        "text": "-Session",
        "cat": "param",
        "note": "Which session to close."
      },
      {
        "text": "$session",
        "cat": "value",
        "note": "The same session object used throughout this lesson."
      }
    ],
    "output": "(session to WEB03 closed)",
    "order": "This is last, deliberately, closing the connection only once every command that needed it has already run, not before.",
    "notice": [
      {
        "field": "Session closed, not just the variable cleared",
        "note": "Confirms the actual remote connection was released properly, not just your local reference to it."
      }
    ],
    "distractor": {
      "name": "Just clearing the $session variable",
      "why": "Removes your ability to reference the session locally, but the remote connection on WEB03 stays open, orphaned and unreachable. Remove-PSSession is what actually tells the remote machine to close it.",
      "better": "Better fit for: never as a substitute for actually closing a session, though clearing an unneeded variable afterward is harmless."
    },
    "concepts": [
      {
        "term": "Remove-PSSession",
        "explain": "Properly closes a session opened with New-PSSession, releasing the connection on both ends. Worth doing once you're finished running commands through it, sessions left open unnecessarily tie up resources on the remote machine."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - comment the script",
    "task": "Start the script file with a comment explaining what it does.",
    "prefill": "",
    "chips": [
      {
        "text": "#",
        "hint": "Marks the rest of the line as a comment, ignored entirely when the script runs."
      },
      {
        "text": "Finds services that are stopped but set to start automatically.",
        "hint": "A plain-English description of what the script does."
      }
    ],
    "check": function(c){ return /^#/.test(c.trim()); },
    "misses": [
      {
        "test": function(c){ return /finds services/i.test(c) && !/^#/.test(c.trim()); },
        "output": "Finds : The term 'Finds' is not recognized as the name of a cmdlet, function, script file, or operable program.",
        "note": "Without the leading #, PowerShell tries to actually run that plain-English line as a command, and fails immediately, since 'Finds' isn't a real cmdlet. A # at the start of a line marks it as a comment, ignored entirely when the script runs."
      }
    ],
    "hint": "Start the line with #, then a plain-English description. Anything after # on that line is a comment, never executed.",
    "tokens": [
      {
        "text": "#",
        "cat": "pipe",
        "note": "Marks everything after it on the same line as a comment. PowerShell skips it entirely when running the script."
      },
      {
        "text": "Finds services that are stopped but set to start automatically.",
        "cat": "value",
        "note": "Plain text, purely for a human reading the file later, never executed."
      }
    ],
    "output": "(nothing runs, the line is skipped entirely, exactly as intended for a comment)",
    "order": "This goes first in the file, on purpose, so anyone opening the script sees what it's for before reading a single line of actual code.",
    "notice": [
      {
        "field": "# at the very start of the line",
        "note": "This is what tells PowerShell to treat the whole line as a comment, not a command to execute."
      }
    ],
    "distractor": {
      "name": "Plain text with no # at all",
      "why": "Without the #, PowerShell treats that line as an actual command to run, and fails immediately since it isn't a real cmdlet name.",
      "better": "Better fit for: never, plain descriptive text always needs a # in front of it to become a comment instead of a broken command."
    },
    "concepts": [
      {
        "term": "Comments with #",
        "explain": "Anything after a # on a line is ignored when a script runs. Used to explain what a script does, or leave notes for whoever reads it later, including yourself in six months."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - run it from its own folder",
    "task": "Now actually run the saved script, Check-Services.ps1, sitting in your current folder.",
    "prefill": "",
    "chips": [
      {
        "text": ".\\Check-Services.ps1",
        "hint": "The .\\ prefix tells PowerShell explicitly to run a script from the current folder."
      },
      {
        "text": "Check-Services.ps1",
        "hint": "Without the .\\ prefix, PowerShell won't run a script from the current folder by name alone, a deliberate safety measure."
      }
    ],
    "check": function(c){ return /\.\\check-services\.ps1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /^check-services\.ps1$/i.test(c.trim()); },
        "output": "The term 'Check-Services.ps1' is not recognized as the name of a cmdlet, function, script file, or operable program.",
        "note": "PowerShell deliberately won't run a script from the current folder just by typing its bare filename, unlike cmdlets. The .\\ prefix explicitly says 'run this from right here,' a safety measure against accidentally running a same-named script from somewhere unexpected."
      }
    ],
    "hint": "Type .\\Check-Services.ps1, the .\\ prefix explicitly tells PowerShell to run the script sitting in your current folder.",
    "tokens": [
      {
        "text": ".\\",
        "cat": "param",
        "note": "Explicitly means 'the current folder.' Required before a script filename, unlike cmdlets, which are found automatically."
      },
      {
        "text": "Check-Services.ps1",
        "cat": "value",
        "note": "The saved script file being run."
      }
    ],
    "output": "(execution of scripts is disabled on this system, see about_Execution_Policies)",
    "order": "This comes right after saving and commenting the script, the natural next step, actually running it, is where this particular machine's execution policy immediately gets in the way.",
    "notice": [
      {
        "field": ".\\ required",
        "note": "A deliberate PowerShell safety habit: scripts in the current folder must be referenced explicitly with .\\, never run just by typing their bare name."
      },
      {
        "field": "execution of scripts is disabled",
        "note": "This is the same execution policy concept from an earlier lesson, showing up again now that there's an actual script file to run."
      }
    ],
    "distractor": {
      "name": "Check-Services.ps1 with no .\\ prefix",
      "why": "PowerShell won't run a script from the current folder just by its bare filename, unlike a cmdlet. This is a deliberate safety measure, preventing an unexpected same-named script somewhere else on the path from running unintentionally.",
      "better": "Better fit for: never for a script in your current folder, always use .\\ explicitly."
    },
    "concepts": [
      {
        "term": "The .\\ prefix",
        "explain": "Explicitly means 'right here, in the current folder.' Required to run a local script by filename, unlike cmdlets which PowerShell finds automatically without any prefix."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - deal with the execution policy",
    "task": "The script wouldn't run because of execution policy. Check what it's currently set to.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ExecutionPolicy",
        "hint": "Shows the currently effective policy, exactly the cmdlet used back in chapter 4."
      },
      {
        "text": "Set-ExecutionPolicy RemoteSigned",
        "hint": "Would change it, but jumping straight to changing something without checking what it currently is first isn't the right first move."
      }
    ],
    "check": function(c){ return /get-executionpolicy/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /set-executionpolicy/i.test(c) && !/get-executionpolicy/i.test(c); },
        "output": "(changes the policy, but you didn't first confirm what it actually was, or whether changing it needed elevated permissions on this machine)",
        "note": "That changes the policy, but skips checking what it currently is first, and on some machines changing it requires administrator rights you may not have expected to need. Get-ExecutionPolicy, the same habit from chapter 4, confirms the current state before touching anything."
      }
    ],
    "hint": "Get-ExecutionPolicy, the same cmdlet from chapter 4, confirms exactly what's blocking the script before deciding what to do about it.",
    "tokens": [
      {
        "text": "Get-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Reports the currently effective execution policy, same cmdlet introduced back in chapter 4."
      }
    ],
    "output": "Restricted",
    "order": "This directly calls back to chapter 4, confirming the actual current policy before deciding how to change it, rather than guessing.",
    "notice": [
      {
        "field": "Restricted",
        "note": "The default on many machines, blocks all script execution entirely, exactly why the .ps1 file failed to run in step 2."
      }
    ],
    "distractor": {
      "name": "Set-ExecutionPolicy without checking first",
      "why": "Works, but skips confirming the actual current state first. On some machines, changing the policy also needs administrator rights you may not have realized you'd need until the command failed.",
      "better": "Better fit for: once you've already confirmed the current policy and know exactly what change is needed."
    },
    "concepts": [
      {
        "term": "Restricted execution policy",
        "explain": "The default on many Windows machines: no scripts run at all, only interactive commands. This is exactly why a saved .ps1 file can fail even though typing the same commands directly at the prompt works fine."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - fix it and run the script for real",
    "task": "Now actually resolve the policy issue and get the script running.",
    "prefill": "",
    "chips": [
      {
        "text": "Set-ExecutionPolicy",
        "hint": "Changes the policy."
      },
      {
        "text": "RemoteSigned",
        "hint": "A common, safer middle ground: local scripts run freely, downloaded ones need a trusted signature."
      },
      {
        "text": "-Scope CurrentUser",
        "hint": "Applies just to your account, no administrator rights required, same pattern as installing a module for CurrentUser only."
      }
    ],
    "check": function(c){ return /set-executionpolicy/i.test(c) && /remotesigned/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /set-executionpolicy/i.test(c) && /unrestricted/i.test(c); },
        "output": "(works, but Unrestricted allows every script to run, including untrusted downloaded ones, with no signature check at all)",
        "note": "Unrestricted removes all script safety checks entirely, even for scripts downloaded from the internet. RemoteSigned is the more common, safer middle ground: your own local scripts run freely, only ones downloaded from elsewhere need a trusted digital signature."
      }
    ],
    "hint": "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser, a safer middle ground than Unrestricted, and scoped to your account so it doesn't need administrator rights.",
    "tokens": [
      {
        "text": "Set-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Changes the execution policy, from chapter 4."
      },
      {
        "text": "RemoteSigned",
        "cat": "value",
        "note": "Local scripts run freely, scripts downloaded from the internet need a trusted digital signature first."
      },
      {
        "text": "-Scope",
        "cat": "param",
        "note": "Controls how broadly the change applies."
      },
      {
        "text": "CurrentUser",
        "cat": "value",
        "note": "Just your account, no administrator rights needed, unlike changing the machine-wide default."
      }
    ],
    "output": "(policy updated to RemoteSigned for CurrentUser)\n\nFinds services that are stopped but set to start automatically.\n\nStatus   Name       StartType\n------   ----       ---------\nStopped  BITS       Automatic",
    "order": "This is the final step because it resolves exactly what step 3 diagnosed, and finally lets the commented, saved script from steps 1 and 2 actually run end to end.",
    "notice": [
      {
        "field": "Comment line prints, then real results",
        "note": "Confirms the whole saved script, comment and all, ran successfully this time, closing the loop from step 1 through step 4."
      }
    ],
    "distractor": {
      "name": "Set-ExecutionPolicy Unrestricted",
      "why": "Also fixes the immediate problem, but removes every safety check entirely, including for scripts downloaded from the internet with no verification at all. RemoteSigned keeps a meaningful safety line for anything not written locally.",
      "better": "Better fit for: a fully controlled, isolated test environment, not a real working machine."
    },
    "concepts": [
      {
        "term": "RemoteSigned",
        "explain": "A common, safer execution policy: scripts written locally run without restriction, but anything downloaded from the internet needs a trusted digital signature first. A practical middle ground between Restricted and Unrestricted."
      }
    ]
  },
  {
    "title": "Step 1 of 4 - find the account",
    "task": "Write the command to look up Sarah Chen's AD account.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ADUser",
        "hint": "Looks up one Active Directory user account, by identity or by filter."
      },
      {
        "text": "-Identity",
        "hint": "Exact-match parameter. Give it one precise identifier, like a login name."
      },
      {
        "text": "sarah.chen",
        "hint": "Sarah's sAMAccountName, her login name in Active Directory."
      },
      {
        "text": "Get-ADGroup",
        "hint": "Looks up a group object, not a person. Think about whether sarah.chen is a group name."
      },
      {
        "text": "-Filter",
        "hint": "Looser match parameter, good for display names or partial matches instead of one exact identity."
      }
    ],
    "check": function(c){ return /get-aduser/i.test(c) && /sarah/i.test(c) && (/-identity/i.test(c) || /-filter/i.test(c)); },
    "misses": [
      {
        "test": function(c){ return /get-adgroup/i.test(c) && !/get-adgroupmember/i.test(c); },
        "output": "Get-ADGroup : Cannot find an object with identity: 'sarah.chen' under: 'DC=corp,DC=local'",
        "note": "That ran, but sarah.chen isn't a group, so there's nothing for Get-ADGroup to find. Switch to Get-ADUser, that's the cmdlet for a person."
      }
    ],
    "hint": "You need Get-ADUser, not Get-ADGroup, and it needs a parameter, not just a bare name. Use -Identity sarah.chen, or -Filter to match on her display name.",
    "tokens": [
      {
        "text": "Get-ADUser",
        "cat": "cmdlet",
        "note": "The cmdlet that looks up one Active Directory account."
      },
      {
        "text": "-Identity",
        "cat": "param",
        "note": "Tells PowerShell exactly which account to fetch, using an exact identifier rather than a search."
      },
      {
        "text": "sarah.chen",
        "cat": "value",
        "note": "Her sAMAccountName, the short login name Active Directory uses internally."
      }
    ],
    "output": "DistinguishedName : CN=Sarah Chen,OU=Finance,DC=corp,DC=local\nEnabled           : True\nName              : Sarah Chen\nSamAccountName    : sarah.chen",
    "order": "This is always the first command in a request like this. Everything you do next, her groups, her permissions, needs her account object as the starting point. You cannot look up group membership for a person PowerShell has not found yet.",
    "notice": [
      {
        "field": "OU=Finance",
        "note": "Her Organizational Unit. This is often how default group memberships and policies get applied in the first place."
      },
      {
        "field": "SamAccountName",
        "note": "This exact value is what you reuse as -Identity in the next step."
      }
    ],
    "distractor": {
      "name": "Get-ADGroup",
      "why": "Get-ADGroup looks up a group object, not a person. Pointed at sarah.chen it returns nothing, there is no group with that name, you would just get an empty result or an error.",
      "better": "Better fit for: when the request is about a group itself, for example, who owns the Finance-ShareAccess group or what type of group it is, not what groups a person belongs to."
    },
    "concepts": [
      {
        "term": "Verb-Noun naming",
        "explain": "Real cmdlets follow Verb-Noun, like Get-ADUser or Where-Object. The verb is the action (Get, Set, New, Remove), the noun is what it acts on. Guessing a cmdlet name almost always works if you think this way."
      },
      {
        "term": "-Identity",
        "explain": "A parameter name reused across almost every AD cmdlet. It always means the same thing: give me the one exact thing you're pointing at, not a search."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - list her groups",
    "task": "Now find every group sarah.chen belongs to.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ADPrincipalGroupMembership",
        "hint": "Given a user, lists every group that user belongs to."
      },
      {
        "text": "-Identity",
        "hint": "Picks which user's memberships to list."
      },
      {
        "text": "sarah.chen",
        "hint": "The account you confirmed in step 1."
      },
      {
        "text": "Get-ADGroupMember",
        "hint": "Given a group, lists the members inside it. Runs the opposite direction from what this step needs."
      }
    ],
    "check": function(c){ return /get-adprincipalgroupmembership/i.test(c) && /-identity/i.test(c) && /sarah/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-adgroupmember/i.test(c) && !/get-adprincipalgroupmembership/i.test(c); },
        "output": "Get-ADGroupMember : Cannot find an object with identity: 'sarah.chen' under: 'DC=corp,DC=local'",
        "note": "That ran, but Get-ADGroupMember expects a group as input, not a person. It went looking for a group called sarah.chen and found nothing. Flip to Get-ADPrincipalGroupMembership, that goes user to groups instead of group to members."
      }
    ],
    "hint": "Get-ADGroupMember goes the other way, group to members. You want Get-ADPrincipalGroupMembership, and it still needs -Identity sarah.chen, not just a bare name.",
    "tokens": [
      {
        "text": "Get-ADPrincipalGroupMembership",
        "cat": "cmdlet",
        "note": "Given a user, lists every group that user belongs to."
      },
      {
        "text": "-Identity",
        "cat": "param",
        "note": "Same parameter name as step 1, but here it picks the user whose memberships you want, not the account to display."
      },
      {
        "text": "sarah.chen",
        "cat": "value",
        "note": "The SamAccountName confirmed by step 1's output."
      }
    ],
    "output": "Name                  GroupCategory  GroupScope\n----                  -------------  ----------\nDomain Users          Security       Global\nVPN-Users             Security       Global\nFinance-Team          Distribution   Global\nFinance-ShareAccess   Security       Global",
    "order": "This comes right after step 1 because -Identity sarah.chen only means something once you know that is really her account name. In a real script you would pipe step 1's output straight into this command instead of retyping the name.",
    "notice": [
      {
        "field": "Finance-Team, Distribution",
        "note": "A distribution group, mailing list only. It cannot grant file permissions no matter what."
      },
      {
        "field": "Finance-ShareAccess, Security",
        "note": "A security group. This is the type that can actually appear on a folder's ACL."
      }
    ],
    "distractor": {
      "name": "Get-ADGroupMember",
      "why": "Get-ADGroupMember expects a group as input and lists the people or objects inside it. Pointed at sarah.chen it errors, sarah.chen is not a group, it runs the relationship backward from what you need here.",
      "better": "Better fit for: when the request flips direction, for example, who is in the Finance-ShareAccess group, rather than what groups is Sarah in."
    },
    "concepts": [
      {
        "term": "Everything is an object",
        "explain": "This cmdlet does not return lines of text, it returns full objects with named properties attached, like Name and GroupCategory. That is exactly why the next step can filter on GroupCategory with no text parsing at all."
      }
    ]
  }
];

var PS_EXAM_POOL_ADVANCED = [
  {
    "title": "Step 1 of 4 - turn on advanced script features",
    "task": "Before anything else, add the one line that turns this script into an advanced script.",
    "prefill": "",
    "chips": [
      {
        "text": "[CmdletBinding()]",
        "hint": "Placed as the first line after comment-based help, this single decorator unlocks the parameter attributes used in the rest of this lesson."
      },
      {
        "text": "param ()",
        "hint": "The existing parameter block, already present, not what's being added here."
      }
    ],
    "check": function(c){ return /\[cmdletbinding\(\)\]/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /param\s*\(/i.test(c) && !/cmdletbinding/i.test(c); },
        "output": "(script runs, but Mandatory and ValidateSet attributes added later in this lesson are silently ignored without CmdletBinding)",
        "note": "The param block alone works for basic parameters, but attributes like Mandatory and ValidateSet, which the rest of this request needs, only take effect once [CmdletBinding()] is in place, immediately before the param block."
      }
    ],
    "hint": "[CmdletBinding()] goes on its own line, immediately after the comment-based help and immediately before param(). It must come first for anything that follows to work.",
    "tokens": [
      {
        "text": "[CmdletBinding()]",
        "cat": "param",
        "note": "Turns a plain script into an advanced script, unlocking parameter attributes like Mandatory and ValidateSet, plus common parameters like -Verbose."
      }
    ],
    "output": "(no visible output change yet, but the script is now an advanced script, and everything in the next two steps depends on this line being here first)",
    "order": "This must come before anything else in this lesson, PowerShell only recognizes parameter attributes like Mandatory or ValidateSet when CmdletBinding is already active.",
    "notice": [
      {
        "field": "Placement: right after help, right before param()",
        "note": "CmdletBinding only works if it's in exactly this position, not buried elsewhere in the script."
      }
    ],
    "distractor": {
      "name": "Skipping straight to [Parameter(Mandatory=$True)]",
      "why": "Without [CmdletBinding()] turned on first, the Mandatory attribute is silently ignored, the script keeps running with its old default behavior, no prompt, no error, just quietly wrong.",
      "better": "Better fit for: never on its own, Mandatory and CmdletBinding are always a package deal."
    },
    "concepts": [
      {
        "term": "[CmdletBinding()]",
        "explain": "A single decorator that upgrades a basic script to an advanced one, unlocking parameter attributes (Mandatory, ValidateSet, and more) and PowerShell's common parameters like -Verbose and -ErrorAction."
      }
    ]
  },
  {
    "title": "Step 2 of 4 - make -computername mandatory",
    "task": "Now make -computername mandatory, so the script prompts for it instead of quietly defaulting to localhost.",
    "prefill": "",
    "chips": [
      {
        "text": "[Parameter(Mandatory=$True)]",
        "hint": "Placed directly above a parameter inside the param block, forces PowerShell to prompt for a value if none is supplied."
      },
      {
        "text": "$computername",
        "hint": "The existing parameter, now with its default value removed since Mandatory replaces the need for one."
      }
    ],
    "check": function(c){ return /\[parameter\(mandatory\s*=\s*\$true\)\]/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$computername\s*=\s*['"]?localhost['"]?/i.test(c) && !/mandatory/i.test(c); },
        "output": "(script runs fine with no computer name supplied, silently defaulting to localhost, exactly the quiet assumption the request wanted removed)",
        "note": "Leaving the default value in place means the script still quietly assumes localhost when nobody specifies otherwise. [Parameter(Mandatory=$True)] forces PowerShell to actually prompt for a value instead."
      }
    ],
    "hint": "Add [Parameter(Mandatory=$True)] directly above $computername inside the param block, and remove its default 'localhost' value since Mandatory replaces that.",
    "tokens": [
      {
        "text": "[Parameter(Mandatory=$True)]",
        "cat": "param",
        "note": "Forces PowerShell to prompt interactively for this parameter's value if the caller doesn't supply one."
      },
      {
        "text": "$computername",
        "cat": "value",
        "note": "The parameter being made mandatory, no longer defaulting silently to localhost."
      }
    ],
    "output": "cmdlet Get-DiskInventory.ps1 at command pipeline position 1\nSupply values for the following parameters:\ncomputername:",
    "order": "This comes right after CmdletBinding is confirmed on, since Mandatory is one of the attributes that only works once advanced-script features are turned on.",
    "notice": [
      {
        "field": "Supply values for the following parameters:",
        "note": "Confirms PowerShell is now actually prompting, instead of silently falling back to localhost the way it did before."
      }
    ],
    "distractor": {
      "name": "Just removing the default value, no Mandatory attribute",
      "why": "Without a default, an unsupplied -computername parameter becomes $null instead of prompting for a real value, a script quietly querying nothing is arguably worse than one quietly querying localhost.",
      "better": "Better fit for: never as a substitute for Mandatory, always pair a removed default with an explicit Mandatory attribute."
    },
    "concepts": [
      {
        "term": "Mandatory parameters",
        "explain": "[Parameter(Mandatory=$True)] forces PowerShell to prompt for a value at run time if the caller didn't supply one, instead of silently falling back to a default or leaving the variable empty."
      }
    ]
  },
  {
    "title": "Step 3 of 4 - lock down -drivetype",
    "task": "Now restrict -drivetype so it only ever accepts the values 2 or 3.",
    "prefill": "",
    "chips": [
      {
        "text": "[ValidateSet(2,3)]",
        "hint": "Placed directly above a parameter, restricts it to only the listed values, anything else is rejected before the script body even runs."
      },
      {
        "text": "$drivetype = 3",
        "hint": "The existing parameter and its default, kept as-is, ValidateSet restricts what else it can be changed to."
      }
    ],
    "check": function(c){ return /\[validateset\(2,\s*3\)\]/i.test(c) && /\$drivetype/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$drivetype/i.test(c) && !/validateset/i.test(c); },
        "output": "(the script happily accepts -drivetype 99, a value that doesn't correspond to any real disk type, and just returns nothing useful)",
        "note": "Without a ValidateSet, -drivetype accepts literally any value typed in, valid or not, and only fails much later when the query itself comes back empty. ValidateSet rejects an invalid value immediately, with a clear error, before the script body ever runs."
      }
    ],
    "hint": "Add [ValidateSet(2,3)] directly above $drivetype = 3, restricting the parameter to only those two legitimate values.",
    "tokens": [
      {
        "text": "[ValidateSet(2,3)]",
        "cat": "param",
        "note": "Restricts the parameter to exactly the listed values, any other input is rejected immediately with a clear error."
      },
      {
        "text": "$drivetype",
        "cat": "value",
        "note": "The parameter being restricted, its default of 3 stays exactly as it was."
      }
    ],
    "output": "Get-DiskInventory.ps1 : Cannot validate argument on parameter 'drivetype'. The argument \"99\" does not belong to the set \"2,3\" specified by the ValidateSet attribute.",
    "order": "This comes last because it builds on the same CmdletBinding foundation as Mandatory in step 2, just applied to a different parameter for a different purpose, restricting values instead of requiring one.",
    "notice": [
      {
        "field": "Cannot validate argument",
        "note": "This is exactly the fast, clear failure you want: an invalid drive type rejected immediately, not discovered later as mysteriously empty output."
      }
    ],
    "distractor": {
      "name": "Checking the value manually inside the script body",
      "why": "Works, but requires writing and maintaining your own if-statement and error message by hand. ValidateSet does the same job in one line, declared right where the parameter itself is defined.",
      "better": "Better fit for: validation logic too complex for a simple fixed list, that's what ValidateScript exists for instead."
    },
    "concepts": [
      {
        "term": "[ValidateSet()]",
        "explain": "Restricts a parameter to a specific, fixed list of acceptable values. Any other input is rejected immediately with a clear error, before the script body runs, instead of failing mysteriously later on."
      }
    ]
  },
  {
    "title": "Step 4 of 4 - confirm the finished script behaves correctly",
    "task": "Run the finished script with no parameters at all, and confirm it now prompts instead of silently defaulting.",
    "prefill": "",
    "chips": [
      {
        "text": ".\\Get-DiskInventory.ps1",
        "hint": "Running the script with no arguments at all, to see the mandatory prompt in action."
      }
    ],
    "check": function(c){ return /\.\\get-diskinventory\.ps1/i.test(c); },
    "misses": [],
    "hint": "Just run .\\Get-DiskInventory.ps1 with nothing after it, the mandatory -computername parameter should immediately prompt instead of silently assuming localhost.",
    "tokens": [
      {
        "text": ".\\Get-DiskInventory.ps1",
        "cat": "cmdlet",
        "note": "Running the finished script with zero arguments, to directly observe the mandatory prompt this lesson built."
      }
    ],
    "output": "cmdlet Get-DiskInventory.ps1 at command pipeline position 1\nSupply values for the following parameters:\ncomputername: SRV02\n\nDeviceID FreeSpace(MB) Size(GB) %Free\n-------- ------------- -------- -----\nC:       18211         120      15",
    "order": "This is last, confirming everything built in steps 1 through 3 actually works together end to end: CmdletBinding enabling both attributes, Mandatory prompting instead of defaulting, and ValidateSet still guarding -drivetype in the background.",
    "notice": [
      {
        "field": "computername: (prompt)",
        "note": "No silent localhost fallback anymore, exactly the change the request asked for."
      }
    ],
    "distractor": {
      "name": "Assuming it works without actually running it",
      "why": "The whole point of this final step is confirming the change with a real run, not just trusting that the edits were correct.",
      "better": "Better fit for: never here, a quick real run costs nothing and confirms the behavior actually changed."
    },
    "concepts": [
      {
        "term": "Testing a parameter change",
        "explain": "After adding Mandatory or ValidateSet attributes, running the script with no arguments (or an invalid one) is the fastest way to confirm the new behavior actually took effect."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - find lines containing an IP address",
    "task": "Read app.log and find just the lines that contain something matching an IP address pattern.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Content app.log",
        "hint": "Reads the log file in as an array of lines."
      },
      {
        "text": "Where-Object",
        "hint": "Filters down to just the lines matching a condition."
      },
      {
        "text": "{$_ -match '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}'}",
        "hint": "A regular expression: groups of 1-3 digits separated by literal periods, the shape of an IPv4 address."
      },
      {
        "text": "{$_ -like '*.*.*.*'}",
        "hint": "A wildcard pattern. Matches far too loosely, any text with three periods in it, not specifically digit groups."
      }
    ],
    "check": function(c){ return /get-content/i.test(c) && /where-object/i.test(c) && /-match/i.test(c) && /\\d/.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-content/i.test(c) && /where-object/i.test(c) && /-like/i.test(c) && /\*\.\*\.\*\.\*/.test(c); },
        "output": "Line: \"see readme.txt.v2.final for details\"  (matched, but this isn't an IP address at all)",
        "note": "-like's wildcard * matches any characters at all, it has no concept of 'digits only.' A filename with several periods in it matches just as easily as a real IP address. -match with an actual regex pattern can require digits specifically, wildcards can't express that."
      }
    ],
    "hint": "Get-Content app.log piped into Where-Object {$_ -match '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}'}, a regex pattern describing four digit groups separated by periods.",
    "tokens": [
      {
        "text": "Get-Content",
        "cat": "cmdlet",
        "note": "Reads a text file's contents in as an array of lines."
      },
      {
        "text": "app.log",
        "cat": "value",
        "note": "The file being read."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Filters lines by a condition, in this case a regex match."
      },
      {
        "text": "{$_ -match '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}'}",
        "cat": "param",
        "note": "\\d matches any digit, {1,3} means 1 to 3 of them, \\. matches a literal period. Together, the shape of an IPv4 address."
      }
    ],
    "output": "2026-08-10 03:14:02 Connection from 192.168.1.42 accepted\n2026-08-10 03:15:41 Connection from 10.0.0.17 rejected",
    "order": "This runs first, narrowing down to only the relevant lines before extracting anything specific from them in the next step.",
    "notice": [
      {
        "field": "Only lines with real IPs",
        "note": "Confirms the regex correctly matched digit groups specifically, not just any text containing periods."
      }
    ],
    "distractor": {
      "name": "-like '*.*.*.*'",
      "why": "A wildcard pattern with no concept of digits versus letters, it matches any text containing three periods, filenames, version numbers, anything, not specifically IP addresses.",
      "better": "Better fit for: simple, loose pattern matching where the exact shape of the text doesn't matter, like finding filenames ending in a certain extension."
    },
    "concepts": [
      {
        "term": "-match vs -like",
        "explain": "-like uses simple wildcards (* and ?), fine for loose patterns. -match uses full regular expressions, capable of describing precise shapes like 'exactly this many digits, separated by literal periods,' something wildcards can't express."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - extract just the IP address itself",
    "task": "Now pull out just the matched IP address text from each line, not the whole line.",
    "prefill": "",
    "chips": [
      {
        "text": "$matches[0]",
        "hint": "An automatic variable PowerShell populates every time -match succeeds, holding the actual matched text."
      },
      {
        "text": "ForEach-Object",
        "hint": "Needed to check each line individually and grab its own match, since $matches only ever holds the most recent match."
      }
    ],
    "check": function(c){ return /foreach-object/i.test(c) && /-match/i.test(c) && /\$matches\[0\]/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /where-object/i.test(c) && /-match/i.test(c) && !/\$matches/i.test(c); },
        "output": "2026-08-10 03:14:02 Connection from 192.168.1.42 accepted\n2026-08-10 03:15:41 Connection from 10.0.0.17 rejected",
        "note": "That's step 1's result again, the whole matching lines, not the IP addresses pulled out of them. -match tells you a line matched and populates $matches with the actual matched text, but you have to reference $matches[0] to get just that piece."
      }
    ],
    "hint": "Pipe into ForEach-Object {if ($_ -match '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}') {$matches[0]}}, checking each line individually and pulling its own match out of $matches.",
    "tokens": [
      {
        "text": "ForEach-Object",
        "cat": "cmdlet",
        "note": "Processes each line individually, needed because $matches only ever holds the single most recent match."
      },
      {
        "text": "-match",
        "cat": "param",
        "note": "Same regex test as step 1, run per-line this time."
      },
      {
        "text": "$matches[0]",
        "cat": "value",
        "note": "An automatic variable populated by -match, [0] holds the entire matched text."
      }
    ],
    "output": "192.168.1.42\n10.0.0.17",
    "order": "This comes right after finding the matching lines, extracting the specific piece of text that was actually asked for instead of the whole surrounding line.",
    "notice": [
      {
        "field": "Just the IP, nothing else",
        "note": "This is $matches[0], the exact text the regex matched, not the full log line it came from."
      }
    ],
    "distractor": {
      "name": "Where-Object alone, without $matches",
      "why": "Where-Object confirms which lines matched, but returns the whole original line. Getting just the matched substring itself requires referencing the automatic $matches variable that -match populates.",
      "better": "Better fit for: when the whole line is actually what you want, not just the specific matched piece within it."
    },
    "concepts": [
      {
        "term": "$matches",
        "explain": "An automatic variable PowerShell populates whenever the -match operator succeeds. $matches[0] holds the entire matched text; if the pattern has capture groups in parentheses, $matches[1], $matches[2], and so on hold each group individually."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - count the results",
    "task": "Now count how many IP addresses were found in total.",
    "prefill": "",
    "chips": [
      {
        "text": "Measure-Object",
        "hint": "Counts objects flowing through the pipeline."
      },
      {
        "text": "| Measure-Object",
        "hint": "Placed at the very end of the extraction pipeline from step 2."
      }
    ],
    "check": function(c){ return /foreach-object/i.test(c) && /\$matches\[0\]/i.test(c) && /measure-object/i.test(c); },
    "misses": [],
    "hint": "Add | Measure-Object onto the end of step 2's full pipeline, counting the extracted IP addresses.",
    "tokens": [
      {
        "text": "ForEach-Object {if ($_ -match '...') {$matches[0]}}",
        "cat": "value",
        "note": "Same extraction pipeline from step 2, unchanged."
      },
      {
        "text": "Measure-Object",
        "cat": "cmdlet",
        "note": "Counts the objects reaching it, in this case the extracted IP addresses."
      }
    ],
    "output": "Count    : 2\nAverage  :\nSum      :",
    "order": "This is last, a simple final tally applied to the already-extracted results from step 2, not something that needed to happen any earlier in the pipeline.",
    "notice": [
      {
        "field": "Count: 2",
        "note": "The final answer to the original request, how many IP addresses were actually found in the log."
      }
    ],
    "distractor": {
      "name": "Counting the original Get-Content lines instead",
      "why": "That would count every line in the file, including ones with no IP address at all, not the number of actual matches found through the regex pipeline built in steps 1 and 2.",
      "better": "Better fit for: counting the total size of the log file, a different question than how many IP addresses it contains."
    },
    "concepts": [
      {
        "term": "Measure-Object for counting",
        "explain": "The standard way to count how many objects came out of a pipeline, appended at the very end after any filtering or extraction is already done."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - check its help first",
    "task": "Before reading a single line of code, check whether the script has comment-based help explaining what it does.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Help",
        "hint": "Works on scripts with comment-based help exactly like it works on built-in cmdlets."
      },
      {
        "text": ".\\Restart-WebService.ps1",
        "hint": "The unfamiliar script, referenced the same way any local script is, with .\\ ."
      },
      {
        "text": "-Full",
        "hint": "Shows every section of the help, not just the short synopsis."
      }
    ],
    "check": function(c){ return /get-help/i.test(c) && /restart-webservice/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /notepad|code\s|vscode/i.test(c) && /restart-webservice/i.test(c); },
        "output": "(the script opens in an editor, dozens of lines of code, no clear starting point for understanding what it does or expects)",
        "note": "Opening the raw file and reading line by line works eventually, but it's slow and easy to misread. If the script has comment-based help, exactly like a real cmdlet, Get-Help surfaces a synopsis, parameter descriptions, and examples immediately, without reading the implementation at all."
      }
    ],
    "hint": "Get-Help .\\Restart-WebService.ps1 -Full works on a script with comment-based help exactly the same way it works on a built-in cmdlet.",
    "tokens": [
      {
        "text": "Get-Help",
        "cat": "cmdlet",
        "note": "Works identically on scripts with comment-based help as it does on built-in cmdlets."
      },
      {
        "text": ".\\Restart-WebService.ps1",
        "cat": "value",
        "note": "The unfamiliar script, referenced with the .\\ prefix required for local scripts."
      },
      {
        "text": "-Full",
        "cat": "param",
        "note": "Shows every help section: synopsis, description, parameters, and examples, not just a short summary."
      }
    ],
    "output": "NAME\n    Restart-WebService.ps1\nSYNOPSIS\n    Restarts the IIS web service on a target computer.\nSYNTAX\n    Restart-WebService.ps1 [-ComputerName] <String> [-Force]\nPARAMETERS\n    -ComputerName <String>\n        The computer to restart the web service on. Mandatory.\n    -Force <SwitchParameter>\n        Skip the confirmation prompt.",
    "order": "This is always the first move with an unfamiliar script, exactly like it would be with an unfamiliar cmdlet, checking documented help before reading raw code or guessing at usage.",
    "notice": [
      {
        "field": "-ComputerName <String>, Mandatory",
        "note": "Already tells you the script requires a target machine, no default, exactly what you need to know before trying to run it."
      }
    ],
    "distractor": {
      "name": "Opening the script in an editor and reading the code directly",
      "why": "Works eventually, but is slower and more error-prone than checking documented help first, especially for a script with comment-based help already written, exactly the resource this step goes straight to instead.",
      "better": "Better fit for: scripts with no comment-based help at all, where reading the parameter block directly, covered next in this lesson, becomes the only option."
    },
    "concepts": [
      {
        "term": "Get-Help works on scripts too",
        "explain": "Any script with comment-based help (the <# ... #> block covered back in an earlier lesson) responds to Get-Help exactly like a built-in cmdlet does, synopsis, parameters, and examples included."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - read the parameter block directly",
    "task": "Now open the script and look specifically at its param block, to see exactly what it expects, independent of what the help claimed.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Content",
        "hint": "Reads the raw script file as text, letting you see the actual param block yourself."
      },
      {
        "text": ".\\Restart-WebService.ps1",
        "hint": "Same script."
      },
      {
        "text": "-TotalCount 20",
        "hint": "Reads just the first 20 lines, usually enough to reach the param block near the top of a script."
      }
    ],
    "check": function(c){ return /get-content/i.test(c) && /restart-webservice/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-help/i.test(c) && /restart-webservice/i.test(c) && !/get-content/i.test(c); },
        "output": "(same help text as step 1, already read once, doesn't show the actual code behind it)",
        "note": "That's re-running step 1's help lookup. Help documentation is only as accurate as whoever wrote it kept it, actually reading the param block itself confirms exactly what the script's code expects, independent of what the comments claim."
      }
    ],
    "hint": "Get-Content .\\Restart-WebService.ps1 -TotalCount 20 shows the first lines of the actual script, including its real param block.",
    "tokens": [
      {
        "text": "Get-Content",
        "cat": "cmdlet",
        "note": "Reads the script's raw text directly, showing exactly what the code says, not just what its documentation claims."
      },
      {
        "text": ".\\Restart-WebService.ps1",
        "cat": "value",
        "note": "The script file being inspected."
      },
      {
        "text": "-TotalCount",
        "cat": "param",
        "note": "Limits how many lines are read."
      },
      {
        "text": "20",
        "cat": "value",
        "note": "Usually enough to reach past the comment-based help down to the actual param block."
      }
    ],
    "output": "<#\n.SYNOPSIS\nRestarts the IIS web service on a target computer.\n#>\n[CmdletBinding()]\nparam (\n    [Parameter(Mandatory=$True)]\n    [string]$ComputerName,\n    [switch]$Force\n)",
    "order": "This comes after checking help, as a second, independent confirmation, help text can go stale or be wrong, the actual param block in the code cannot lie about what the script requires.",
    "notice": [
      {
        "field": "[Parameter(Mandatory=$True)]",
        "note": "Confirms directly in the code, not just the help text, that -ComputerName really is required, matching what step 1's help claimed."
      }
    ],
    "distractor": {
      "name": "Trusting the help text alone, without checking the code",
      "why": "Help documentation can go stale or be wrong if the script was edited later without updating its comments. Reading the actual param block confirms what the code truly requires, independent of what any comment claims.",
      "better": "Better fit for: a script you already trust and have used successfully many times before."
    },
    "concepts": [
      {
        "term": "Reading a param block directly",
        "explain": "The definitive source of truth for what a script actually requires, independent of whatever its comment-based help claims. Worth checking directly, especially for a script you didn't write yourself."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - run it deliberately",
    "task": "Now, understanding exactly what it needs, actually run the script against WEB03.",
    "prefill": "",
    "chips": [
      {
        "text": ".\\Restart-WebService.ps1",
        "hint": "The script, now understood."
      },
      {
        "text": "-ComputerName WEB03",
        "hint": "The required parameter, confirmed by both steps 1 and 2."
      }
    ],
    "check": function(c){ return /\.\\restart-webservice\.ps1/i.test(c) && /web03/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\.\\restart-webservice\.ps1/i.test(c) && !/computername/i.test(c) && !/web03/i.test(c); },
        "output": "cmdlet Restart-WebService.ps1 at command pipeline position 1\nSupply values for the following parameters:\nComputerName:",
        "note": "Right script, but running it with no parameters at all still triggers the mandatory prompt confirmed back in step 2. Supplying -ComputerName WEB03 directly avoids the interactive stop and runs it in one deliberate command."
      }
    ],
    "hint": "Run .\\Restart-WebService.ps1 -ComputerName WEB03 directly, supplying the mandatory parameter confirmed in the previous two steps instead of waiting to be prompted.",
    "tokens": [
      {
        "text": ".\\Restart-WebService.ps1",
        "cat": "cmdlet",
        "note": "The now-understood script, referenced with .\\ ."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "The mandatory parameter confirmed independently by both help and the actual code."
      },
      {
        "text": "WEB03",
        "cat": "value",
        "note": "The target machine."
      }
    ],
    "output": "(IIS web service on WEB03 restarted)",
    "order": "This is last, deliberately, only running the unfamiliar script for real once its requirements were confirmed two separate ways, through documented help and through the actual code.",
    "notice": [
      {
        "field": "No mandatory prompt",
        "note": "Confirms -ComputerName was supplied directly, based on what steps 1 and 2 already established the script needed."
      }
    ],
    "distractor": {
      "name": "Running it with no parameters and just answering the prompt when asked",
      "why": "Works, but skips the point of this lesson, understanding a script before running it, not stumbling into its requirements interactively one at a time.",
      "better": "Better fit for: a genuinely unfamiliar interactive tool where reading ahead isn't practical."
    },
    "concepts": [
      {
        "term": "Read before you run",
        "explain": "For any script you didn't write yourself, checking Get-Help and the actual param block first, before running it, is the same habit that makes discovering an unfamiliar cmdlet safe rather than a guessing game."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - check each server, printing a message for each",
    "task": "Loop through all five servers and print a message for each one, reachable or not.",
    "prefill": "",
    "chips": [
      {
        "text": "foreach ($server in $servers)",
        "hint": "A scripting-language loop construct, walks through a known, fixed collection one item at a time."
      },
      {
        "text": "{ if (Test-Connection $server -Count 1 -Quiet) { \"$server is reachable\" } else { \"$server is NOT reachable\" } }",
        "hint": "If/Else inside the loop body, deciding which message to print for each server."
      }
    ],
    "check": function(c){ return /foreach\s*\(/i.test(c) && /\$servers/i.test(c) && /if\s*\(/i.test(c) && /test-connection/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach-object/i.test(c) && /\$servers/i.test(c) && !/foreach\s*\(/i.test(c); },
        "output": "(works about the same here, but ForEach-Object expects piped input, $servers | ForEach-Object, not $servers passed directly in parentheses)",
        "note": "ForEach-Object is a pipeline cmdlet, it expects objects piped into it, not a collection handed to it directly. The foreach (...) construct is the scripting-language keyword for looping over a known collection, and reads more naturally for a script body rather than a single pipeline."
      }
    ],
    "hint": "foreach ($server in $servers) { if (Test-Connection $server -Count 1 -Quiet) { \"$server is reachable\" } else { \"$server is NOT reachable\" } }",
    "tokens": [
      {
        "text": "foreach",
        "cat": "cmdlet",
        "note": "A scripting-language loop keyword, walks through every item in a known collection, one at a time."
      },
      {
        "text": "($server in $servers)",
        "cat": "param",
        "note": "$server holds the current item each time through the loop; $servers is the full list being walked."
      },
      {
        "text": "if (Test-Connection $server -Count 1 -Quiet)",
        "cat": "value",
        "note": "Tests reachability for the current server, -Quiet returns a simple true/false instead of detailed ping output."
      },
      {
        "text": "{ \"$server is reachable\" } else { \"$server is NOT reachable\" }",
        "cat": "value",
        "note": "Different message depending on whether the test succeeded."
      }
    ],
    "output": "WEB01 is reachable\nWEB02 is reachable\nWEB03 is NOT reachable\nWEB04 is reachable\nWEB05 is reachable",
    "order": "This runs first because it's a known, fixed list, exactly what foreach is built for, five known items, checked once each.",
    "notice": [
      {
        "field": "WEB03 is NOT reachable",
        "note": "The one server that will matter for step 2's open-ended retry loop."
      }
    ],
    "distractor": {
      "name": "ForEach-Object instead of foreach",
      "why": "ForEach-Object is a pipeline cmdlet expecting piped input ($servers | ForEach-Object {...}), not a collection passed directly. The foreach (...) keyword is the scripting-language construct built for walking a known collection directly in a script body.",
      "better": "Better fit for: when you're already mid-pipeline and want to act on each object flowing through it, rather than starting fresh with a known collection."
    },
    "concepts": [
      {
        "term": "foreach vs ForEach-Object",
        "explain": "foreach (...) is a scripting-language keyword for looping over a known collection directly. ForEach-Object is a pipeline cmdlet expecting piped input. Both loop per-item, but they fit different situations."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - retry until it's actually back",
    "task": "Now keep checking WEB03 specifically, repeating until it actually comes back online, not just once.",
    "prefill": "",
    "chips": [
      {
        "text": "while (-not (Test-Connection WEB03 -Count 1 -Quiet))",
        "hint": "Keeps looping as long as the condition is true, here, as long as WEB03 is still unreachable."
      },
      {
        "text": "{ Start-Sleep -Seconds 30 }",
        "hint": "Waits between each retry instead of hammering the check nonstop."
      }
    ],
    "check": function(c){ return /while\s*\(/i.test(c) && /test-connection/i.test(c) && /web03/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach\s*\(/i.test(c) && /web03/i.test(c) && !/while/i.test(c); },
        "output": "(a foreach loop only runs once per item in a fixed collection, it has no concept of 'keep trying until this becomes true')",
        "note": "foreach walks a known, fixed collection exactly once through. There's no fixed number of retries here, you genuinely don't know how many attempts it'll take for WEB03 to come back. while keeps looping based on a condition, exactly what an open-ended retry needs."
      }
    ],
    "hint": "while (-not (Test-Connection WEB03 -Count 1 -Quiet)) { Start-Sleep -Seconds 30 }, looping until the condition, WEB03 responding, finally becomes true.",
    "tokens": [
      {
        "text": "while",
        "cat": "cmdlet",
        "note": "Loops for as long as its condition stays true, with no fixed number of iterations decided in advance."
      },
      {
        "text": "(-not (Test-Connection WEB03 -Count 1 -Quiet))",
        "cat": "param",
        "note": "The loop condition: keep going as long as WEB03 is still NOT reachable."
      },
      {
        "text": "{ Start-Sleep -Seconds 30 }",
        "cat": "value",
        "note": "Waits between retries, so the loop isn't hammering the check constantly."
      }
    ],
    "output": "(looping silently every 30 seconds... WEB03 becomes reachable on the 4th check, loop exits)",
    "order": "This comes after the one-time check in step 1, using a different loop entirely because this problem has a genuinely unknown number of iterations, exactly what while is built for.",
    "notice": [
      {
        "field": "No fixed number of attempts",
        "note": "This is exactly why while, not foreach, fits here, the loop naturally continues until its condition becomes false, however long that takes."
      }
    ],
    "distractor": {
      "name": "foreach over a fixed number of retry attempts",
      "why": "Forces picking an arbitrary retry count ahead of time, 5 tries, 10 tries, whatever. If WEB03 takes longer than that guess, the loop gives up even though the server might come back moments later. while keeps going based on the actual condition, not a guessed count.",
      "better": "Better fit for: when you genuinely do want a hard cap on retries, sometimes combined with while for a 'retry until success or N attempts' pattern."
    },
    "concepts": [
      {
        "term": "while loops",
        "explain": "Repeats a block of code for as long as a condition remains true, with no predetermined number of iterations. The right tool whenever 'keep trying until something becomes true' matters more than 'do this exactly N times.'"
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it's really back",
    "task": "Once the while loop exits, confirm WEB03 is actually reachable now.",
    "prefill": "",
    "chips": [
      {
        "text": "Test-Connection WEB03 -Count 1",
        "hint": "A real check, without -Quiet this time, to see the actual response details."
      }
    ],
    "check": function(c){ return /test-connection/i.test(c) && /web03/i.test(c); },
    "misses": [],
    "hint": "Test-Connection WEB03 -Count 1, confirming directly what caused the while loop in step 2 to finally exit.",
    "tokens": [
      {
        "text": "Test-Connection",
        "cat": "cmdlet",
        "note": "Checks reachability, same cmdlet used inside the while condition in step 2."
      },
      {
        "text": "WEB03",
        "cat": "value",
        "note": "Same target."
      },
      {
        "text": "-Count",
        "cat": "param",
        "note": "How many ping attempts to send."
      },
      {
        "text": "1",
        "cat": "value",
        "note": "Just one, enough to confirm."
      }
    ],
    "output": "Destination: WEB03\nAddress: 10.0.0.23\nStatus: Success\nRoundtripTime: 12ms",
    "order": "This is last, a direct real-world confirmation that the while loop's exit actually corresponds to WEB03 being reachable again, not just an assumption.",
    "notice": [
      {
        "field": "Status: Success",
        "note": "Confirms concretely that the retry loop's exit condition genuinely matched reality."
      }
    ],
    "distractor": {
      "name": "Trusting that the loop exiting means it's fixed, without checking",
      "why": "The loop exiting does mean the condition became true, but a direct confirmation costs nothing and rules out any doubt about a flaky, momentary response.",
      "better": "Better fit for: never skipping this in a real troubleshooting scenario, though harmless to skip in a lesson once the logic is understood."
    },
    "concepts": [
      {
        "term": "Confirming after a loop exits",
        "explain": "A while loop's exit already implies its condition became true, but re-checking directly afterward is cheap and removes any doubt, especially useful right after an automated retry."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - see the problem without handling",
    "task": "First, run the risky command against an offline server with no error handling at all, to see what happens by default.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-CimInstance",
        "hint": "The command that fails when a server is unreachable."
      },
      {
        "text": "-ComputerName WEB03 -ClassName Win32_OperatingSystem",
        "hint": "Querying an offline machine."
      }
    ],
    "check": function(c){ return /get-ciminstance/i.test(c) && /web03/i.test(c); },
    "misses": [],
    "hint": "Just run Get-CimInstance -ComputerName WEB03 -ClassName Win32_OperatingSystem directly, with no error handling yet, to see the default, unhandled failure.",
    "tokens": [
      {
        "text": "Get-CimInstance",
        "cat": "cmdlet",
        "note": "The command being run against an unreachable server, with no protection yet."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "The target."
      },
      {
        "text": "WEB03",
        "cat": "value",
        "note": "Currently offline."
      },
      {
        "text": "-ClassName",
        "cat": "param",
        "note": "What information to query."
      },
      {
        "text": "Win32_OperatingSystem",
        "cat": "value",
        "note": "OS details."
      }
    ],
    "output": "Get-CimInstance : The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)\nAt line:1 char:1\n+ Get-CimInstance -ComputerName WEB03 -ClassName Win32_OperatingSyst ...\n(script would stop here if this were part of a longer script with several servers left to check)",
    "order": "This runs first deliberately, to see exactly the wall of red text the request wants avoided, before building the actual handling around it in the next two steps.",
    "notice": [
      {
        "field": "The RPC server is unavailable",
        "note": "The specific error this lesson is about to catch and handle gracefully instead of letting it stop everything."
      }
    ],
    "distractor": {
      "name": "Skipping straight to Try/Catch without seeing this first",
      "why": "Not wrong exactly, but seeing the raw, unhandled failure first makes it obvious exactly what Try/Catch in the next steps is actually solving.",
      "better": "Better fit for: once you're already familiar with what a given error looks like unhandled."
    },
    "concepts": [
      {
        "term": "Terminating vs non-terminating errors",
        "explain": "Some errors stop a script cold by default (terminating), others just print a red message and keep going (non-terminating). Which kind you're dealing with affects whether Try/Catch can even catch it, covered in the next step."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - catch it properly",
    "task": "Now wrap the same command in Try/Catch so a failure gets handled instead of stopping everything.",
    "prefill": "",
    "chips": [
      {
        "text": "try",
        "hint": "Marks a block of code where a failure should be caught instead of stopping the whole script."
      },
      {
        "text": "{ Get-CimInstance -ComputerName WEB03 -ClassName Win32_OperatingSystem -ErrorAction Stop }",
        "hint": "-ErrorAction Stop is required here, it forces this specific command's failure to be treated as a catchable exception."
      },
      {
        "text": "catch",
        "hint": "Runs only if the try block failed, receives the error as $_ or $Error[0]."
      },
      {
        "text": "{ \"Failed to reach WEB03: $($_.Exception.Message)\" }",
        "hint": "A clear, specific message logged from inside catch, instead of the default wall of red text."
      }
    ],
    "check": function(c){ return /try\s*\{/i.test(c) && /catch/i.test(c) && /-erroraction\s+stop/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /try\s*\{/i.test(c) && /catch/i.test(c) && !/-erroraction/i.test(c); },
        "output": "Get-CimInstance : The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)\n(the error still prints in red, the catch block never actually ran)",
        "note": "Try/Catch alone isn't enough. Many cmdlets, Get-CimInstance included, produce non-terminating errors by default, ones that print and continue rather than actually throwing an exception Try/Catch can catch. -ErrorAction Stop forces this specific command's errors to become catchable."
      }
    ],
    "hint": "try { Get-CimInstance -ComputerName WEB03 -ClassName Win32_OperatingSystem -ErrorAction Stop } catch { \"Failed to reach WEB03: $($_.Exception.Message)\" }. -ErrorAction Stop is the piece that's easy to forget.",
    "tokens": [
      {
        "text": "try",
        "cat": "cmdlet",
        "note": "Marks the block where a failure should be caught rather than stopping the script."
      },
      {
        "text": "{ Get-CimInstance ... -ErrorAction Stop }",
        "cat": "value",
        "note": "-ErrorAction Stop forces this command's error to become a genuine, catchable exception, not just a printed warning."
      },
      {
        "text": "catch",
        "cat": "cmdlet",
        "note": "Runs only when the try block actually throws a catchable exception."
      },
      {
        "text": "{ \"Failed to reach WEB03: $($_.Exception.Message)\" }",
        "cat": "value",
        "note": "$_ inside catch refers to the error itself; .Exception.Message pulls out just its readable text."
      }
    ],
    "output": "Failed to reach WEB03: The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)",
    "order": "This comes right after seeing the raw failure in step 1, wrapping the exact same command in Try/Catch, plus the one crucial addition, -ErrorAction Stop, that actually makes it catchable.",
    "notice": [
      {
        "field": "A clear, single-line message, not a wall of red text",
        "note": "This is the actual outcome the request asked for, the failure handled and logged clearly instead of stopping everything."
      },
      {
        "field": "-ErrorAction Stop, easy to forget",
        "note": "Without this, Try/Catch silently does nothing for a non-terminating error, one of the most common early mistakes with this pattern."
      }
    ],
    "distractor": {
      "name": "Try/Catch without -ErrorAction Stop",
      "why": "Many cmdlets produce non-terminating errors by default, ones Try/Catch can't intercept. Without -ErrorAction Stop forcing the error to become a real exception, the catch block never runs, and the original red error text still prints exactly like step 1.",
      "better": "Better fit for: never on its own, -ErrorAction Stop and Try/Catch are a package deal for any cmdlet that doesn't already throw terminating errors natively."
    },
    "concepts": [
      {
        "term": "-ErrorAction Stop",
        "explain": "Forces a specific command's errors to be treated as terminating exceptions, catchable by Try/Catch, even if that cmdlet's default behavior is a non-terminating warning that would otherwise slip right past a catch block."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the script kept going",
    "task": "Prove the script actually continued past the failure instead of stopping, by running one more command right after the catch block.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Output \"Continuing to next server...\"",
        "hint": "A line placed right after the try/catch block, proving execution actually reached this point."
      }
    ],
    "check": function(c){ return /try\s*\{/i.test(c) && /catch/i.test(c) && /-erroraction\s+stop/i.test(c) && /continuing/i.test(c); },
    "misses": [],
    "hint": "Add Write-Output \"Continuing to next server...\" right after the full try/catch block from step 2, confirming execution didn't stop at the failure.",
    "tokens": [
      {
        "text": "try { ... -ErrorAction Stop } catch { ... }",
        "cat": "value",
        "note": "The full block from step 2, unchanged."
      },
      {
        "text": "Write-Output",
        "cat": "cmdlet",
        "note": "A simple line placed right after, proving the script kept running past the handled failure."
      },
      {
        "text": "\"Continuing to next server...\"",
        "cat": "value",
        "note": "If this prints at all, the catch block successfully prevented the script from stopping."
      }
    ],
    "output": "Failed to reach WEB03: The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)\nContinuing to next server...",
    "order": "This is last, direct proof that the entire point of this lesson actually worked: the failure was caught, logged clearly, and the script kept going, exactly what the original request asked for.",
    "notice": [
      {
        "field": "\"Continuing to next server...\" actually printed",
        "note": "Without Try/Catch, step 1 showed this exact failure would have stopped the script cold, this line would never have printed at all."
      }
    ],
    "distractor": {
      "name": "Assuming it continued without checking",
      "why": "Step 1 already proved the unhandled version stops cold. Confirming a line after the catch block actually executes is the concrete proof that this version genuinely behaves differently.",
      "better": "Better fit for: never skipping this kind of check when the whole point was proving the script's behavior actually changed."
    },
    "concepts": [
      {
        "term": "Catch, then continue",
        "explain": "A properly caught exception doesn't just log a nicer message, it lets script execution continue past the point of failure, exactly the behavior this final step confirms directly."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - set a breakpoint at the suspect line",
    "task": "Set a breakpoint at the specific line in Check-DiskSpace.ps1 where the questionable calculation happens, line 14.",
    "prefill": "",
    "chips": [
      {
        "text": "Set-PSBreakpoint",
        "hint": "Pauses execution at a specific point in a script, without editing the script's code at all."
      },
      {
        "text": "-Script .\\Check-DiskSpace.ps1",
        "hint": "Which script file to break inside of."
      },
      {
        "text": "-Line 14",
        "hint": "The exact line to pause at, right where the suspect calculation happens."
      }
    ],
    "check": function(c){ return /set-psbreakpoint/i.test(c) && /check-diskspace/i.test(c) && /-line/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-host/i.test(c) && /check-diskspace/i.test(c) === false && /freespace/i.test(c); },
        "output": "(requires manually editing the script to add print statements, then removing them again afterward, and only shows what you thought to print)",
        "note": "Sprinkling Write-Host statements through the script works, but it means editing the file itself, guessing in advance what to print, and remembering to remove them afterward. Set-PSBreakpoint pauses execution at an exact line without touching the script's code at all, and lets you inspect anything, not just what you thought to print ahead of time."
      }
    ],
    "hint": "Set-PSBreakpoint -Script .\\Check-DiskSpace.ps1 -Line 14 pauses execution right at that line, without editing the script itself at all.",
    "tokens": [
      {
        "text": "Set-PSBreakpoint",
        "cat": "cmdlet",
        "note": "Pauses script execution at a specific point, without modifying the script's actual code."
      },
      {
        "text": "-Script",
        "cat": "param",
        "note": "Which script file to set the breakpoint in."
      },
      {
        "text": ".\\Check-DiskSpace.ps1",
        "cat": "value",
        "note": "The script under investigation."
      },
      {
        "text": "-Line",
        "cat": "param",
        "note": "The specific line number to pause execution at."
      },
      {
        "text": "14",
        "cat": "value",
        "note": "Right where the suspect calculation happens."
      }
    ],
    "output": "  ID Script                 Line Command       Variable          Action\n  -- ------                 ---- -------       --------          ------\n   1 Check-DiskSpace.ps1      14",
    "order": "This runs first, setting up the pause point before actually running the script in the next step, exactly like deciding where to stop before you start walking through something.",
    "notice": [
      {
        "field": "ID: 1",
        "note": "Every breakpoint gets an Id, useful for removing it later once debugging is done."
      }
    ],
    "distractor": {
      "name": "Adding Write-Host statements throughout the script",
      "why": "Requires editing the actual script file, guessing in advance exactly which variables might matter, and remembering to strip them back out afterward. A breakpoint pauses execution without touching the script's code, and lets you inspect anything once stopped there, not just what you thought to print ahead of time.",
      "better": "Better fit for: lightweight, permanent logging you actually want to keep in the script long-term, not a one-time debugging session."
    },
    "concepts": [
      {
        "term": "Set-PSBreakpoint",
        "explain": "Pauses a running script at a specific line, variable change, or command, without editing the script's actual code. The real debugging counterpart to manually sprinkling print statements through a file."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - run it and inspect the variable when it pauses",
    "task": "Now run the script. When it pauses at the breakpoint, check what the suspect variable actually holds at that exact moment.",
    "prefill": "",
    "chips": [
      {
        "text": ".\\Check-DiskSpace.ps1",
        "hint": "Running the script normally, it'll pause automatically once it reaches the breakpoint set in step 1."
      },
      {
        "text": "$freeSpaceGB",
        "hint": "Simply typing the variable's name at the paused debug prompt shows its current value."
      }
    ],
    "check": function(c){ return /\.\\check-diskspace\.ps1/i.test(c) && /\$freespacegb/i.test(c); },
    "misses": [],
    "hint": "Run .\\Check-DiskSpace.ps1, it pauses automatically at line 14. At that paused prompt, just type $freeSpaceGB to see its current value.",
    "tokens": [
      {
        "text": ".\\Check-DiskSpace.ps1",
        "cat": "cmdlet",
        "note": "Running the script normally, execution will automatically pause once it reaches the breakpoint."
      },
      {
        "text": "$freeSpaceGB",
        "cat": "value",
        "note": "Typed directly at the paused debug prompt, showing exactly what this variable currently holds."
      }
    ],
    "output": "Hit Line breakpoint on 'C:\\Scripts\\Check-DiskSpace.ps1:14'\n\n[DBG]: PS C:\\Scripts>> $freeSpaceGB\n-2.4",
    "order": "This comes right after setting the breakpoint, running the script for real and inspecting exactly the value in question at the precise moment it's calculated.",
    "notice": [
      {
        "field": "-2.4",
        "note": "A negative number for free disk space, immediately obvious as wrong, and exactly the kind of bug that's hard to spot just from a script's final output."
      }
    ],
    "distractor": {
      "name": "Reading the script's final output and guessing from there",
      "why": "The final output only shows the end result, not the value at the exact moment something went wrong. A breakpoint stops execution precisely where the calculation happens, showing the actual intermediate value directly.",
      "better": "Better fit for: a script whose final output alone is already enough to diagnose the problem, without needing to see intermediate values."
    },
    "concepts": [
      {
        "term": "Inspecting variables at a breakpoint",
        "explain": "Once paused at a breakpoint, typing any variable's name shows its exact current value at that moment, real evidence instead of guessing based on the script's eventual final output."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - let it continue",
    "task": "Now that the bad value's been confirmed, let the script keep running past the breakpoint.",
    "prefill": "",
    "chips": [
      {
        "text": "c",
        "hint": "Short for 'continue', the debug prompt command that resumes normal execution past the breakpoint."
      }
    ],
    "check": function(c){ return /^c$/i.test(c.trim()); },
    "misses": [],
    "hint": "Just type c at the [DBG]: prompt, short for continue, resuming the script from right where it paused.",
    "tokens": [
      {
        "text": "c",
        "cat": "cmdlet",
        "note": "The debug-prompt command for continuing execution, resuming exactly where the script paused."
      }
    ],
    "output": "(script resumes, runs to completion)",
    "order": "This is last, resuming the script only after the actual bug, the negative free space value, was directly confirmed in step 2, not before.",
    "notice": [
      {
        "field": "c, short for continue",
        "note": "One of several single-letter debug commands available at a [DBG]: prompt, alongside things like s (step) and q (quit debugging)."
      }
    ],
    "distractor": {
      "name": "Stopping the script entirely instead of continuing",
      "why": "Would end the debugging session before confirming whether the rest of the script behaves normally once past the bad calculation. Continuing lets you see the full picture, not just the one broken moment.",
      "better": "Better fit for: once you've seen enough and are ready to go fix the actual bug in the script's code."
    },
    "concepts": [
      {
        "term": "Debug prompt commands",
        "explain": "Once paused at a breakpoint, single letters like c (continue), s (step into the next line), and q (stop debugging) control what happens next, alongside being able to inspect any variable directly by name."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - split a string into an array",
    "task": "Turn 'WEB01,WEB02,WEB03,WEB04,WEB05' into an actual array of separate names.",
    "prefill": "",
    "chips": [
      {
        "text": "'WEB01,WEB02,WEB03,WEB04,WEB05'",
        "hint": "The flat string, as it came out of the spreadsheet."
      },
      {
        "text": "-split ','",
        "hint": "Splits a string into an array wherever the given character appears."
      }
    ],
    "check": function(c){ return /-split/i.test(c) && /,/.test(c); },
    "misses": [
      {
        "test": function(c){ return /'web01,web02,web03,web04,web05'/i.test(c) && !/-split/i.test(c); },
        "output": "WEB01,WEB02,WEB03,WEB04,WEB05\n(still one single string, not an array of five separate items)",
        "note": "That's just the original flat string, unchanged. It looks like it has five names, but PowerShell still treats it as one single string value, not a collection you could loop over individually. -split actually breaks it apart into a real array."
      }
    ],
    "hint": "'WEB01,WEB02,WEB03,WEB04,WEB05' -split ',' splits the string into a real array wherever a comma appears.",
    "tokens": [
      {
        "text": "'WEB01,WEB02,WEB03,WEB04,WEB05'",
        "cat": "value",
        "note": "The original flat string, one single value despite looking like a list."
      },
      {
        "text": "-split",
        "cat": "param",
        "note": "Breaks a string apart into an array, wherever the given separator appears."
      },
      {
        "text": "','",
        "cat": "value",
        "note": "Splitting on the comma character specifically."
      }
    ],
    "output": "WEB01\nWEB02\nWEB03\nWEB04\nWEB05",
    "order": "This runs first because everything else in this lesson needs a real array to work with, not a single flat string that only looks like a list.",
    "notice": [
      {
        "field": "Five separate lines",
        "note": "Confirms this is now genuinely five distinct array elements, not one string that merely displays with commas in it."
      }
    ],
    "distractor": {
      "name": "Using the flat string as-is",
      "why": "It displays with commas that make it look like a list, but PowerShell still treats it as one single string value. Looping over it or checking membership on it wouldn't behave the way it would on a real array.",
      "better": "Better fit for: when you actually do want the data as one plain piece of text, like printing it in a sentence."
    },
    "concepts": [
      {
        "term": "-split",
        "explain": "Breaks a single string into an array of pieces, wherever a specified separator character or pattern appears. The opposite operation of -join, covered later in this lesson."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - check if a value is in the list",
    "task": "Now check whether 'WEB03' is actually in that array, without writing a full loop just to answer one yes-or-no question.",
    "prefill": "",
    "chips": [
      {
        "text": "'WEB03' -in",
        "hint": "Checks whether the left-hand value exists anywhere in the collection on the right, a single true/false answer."
      },
      {
        "text": "($servers)",
        "hint": "The array from step 1, being checked against."
      }
    ],
    "check": function(c){ return /-in/i.test(c) && /web03/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach/i.test(c) && /web03/i.test(c) && !/-in/i.test(c); },
        "output": "(works, but requires writing a full loop with an if-statement inside it, several lines just to answer a single yes-or-no question)",
        "note": "A foreach loop with an if check inside it can answer this too, but it's a lot of code for a simple membership question. -in checks directly whether a value exists in a collection, in one line, no loop needed at all."
      }
    ],
    "hint": "'WEB03' -in $servers checks membership directly, one line, no loop needed for a simple yes-or-no question.",
    "tokens": [
      {
        "text": "'WEB03'",
        "cat": "value",
        "note": "The value being checked for."
      },
      {
        "text": "-in",
        "cat": "param",
        "note": "Tests whether the left value exists anywhere within the collection on the right, returns a simple $True or $False."
      },
      {
        "text": "$servers",
        "cat": "value",
        "note": "The array from step 1, holding the split-apart server names."
      }
    ],
    "output": "True",
    "order": "This comes right after building the real array in step 1, using it for exactly the kind of quick membership check -in is built for.",
    "notice": [
      {
        "field": "True",
        "note": "A simple boolean answer, exactly what a yes-or-no membership question should return, no loop or manual comparison required."
      }
    ],
    "distractor": {
      "name": "A foreach loop with an if-statement inside",
      "why": "Works, but is several lines of code to answer what's ultimately a single true-or-false question. -in does the identical check in one line.",
      "better": "Better fit for: when you need to actually do something different for each matching or non-matching item, not just get a single yes-or-no answer."
    },
    "concepts": [
      {
        "term": "-in and -contains",
        "explain": "-in checks whether a value exists within a collection (value -in collection). -contains checks the reverse direction (collection -contains value). Both answer membership questions in one line, no loop required."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - join a list back into a string",
    "task": "Now take a separate list of names and join it back into one comma-separated string for a report.",
    "prefill": "",
    "chips": [
      {
        "text": "@('DB01','DB02','DB03')",
        "hint": "An array of three names, built directly for this step."
      },
      {
        "text": "-join ','",
        "hint": "The reverse of -split, combines array elements back into a single string, joined by the given character."
      }
    ],
    "check": function(c){ return /-join/i.test(c) && /,/.test(c); },
    "misses": [],
    "hint": "@('DB01','DB02','DB03') -join ',' combines the array back into one single string, joined by commas.",
    "tokens": [
      {
        "text": "@('DB01','DB02','DB03')",
        "cat": "value",
        "note": "A real array of three separate names."
      },
      {
        "text": "-join",
        "cat": "param",
        "note": "Combines array elements into a single string, the reverse operation of -split from step 1."
      },
      {
        "text": "','",
        "cat": "value",
        "note": "Joining with a comma between each element."
      }
    ],
    "output": "DB01,DB02,DB03",
    "order": "This is last, closing the loop by reversing exactly the operation step 1 performed, splitting apart versus joining back together, for two genuinely different purposes.",
    "notice": [
      {
        "field": "One single string again",
        "note": "Confirms -join produced the flat, comma-separated text a report would actually need, the direct opposite of step 1's -split."
      }
    ],
    "distractor": {
      "name": "Manually concatenating each name with commas by hand",
      "why": "Works for three names, but doesn't scale, and requires carefully avoiding an extra trailing comma at the end. -join handles any length of array correctly, with zero manual string-building.",
      "better": "Better fit for: never really, once you know -join exists, manual string concatenation for this purpose is just extra, error-prone work."
    },
    "concepts": [
      {
        "term": "-join",
        "explain": "Combines every element of an array into a single string, separated by whatever character you specify. The direct reverse of -split, which breaks a string apart into an array."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - require the computer name",
    "task": "Start the script by making it require a computer name instead of assuming one, exactly like chapter 20.",
    "prefill": "",
    "chips": [
      {
        "text": "[CmdletBinding()]",
        "hint": "Required first, unlocking the Mandatory attribute that follows."
      },
      {
        "text": "param (",
        "hint": "The parameter block."
      },
      {
        "text": "[Parameter(Mandatory=$True)] [string]$ComputerName",
        "hint": "Forces a value to be supplied, no silent default."
      },
      {
        "text": ")",
        "hint": "Closes the parameter block."
      }
    ],
    "check": function(c){ return /\[cmdletbinding\(\)\]/i.test(c) && /mandatory\s*=\s*\$true/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$computername\s*=\s*['"]localhost['"]/i.test(c); },
        "output": "(quietly defaults to localhost again, exactly the assumption chapter 20 moved away from)",
        "note": "A default value brings back exactly the silent assumption chapter 20 was about removing. [CmdletBinding()] plus [Parameter(Mandatory=$True)] forces an explicit value every time instead."
      }
    ],
    "hint": "[CmdletBinding()] first, then inside param(), [Parameter(Mandatory=$True)] [string]$ComputerName, no default value, same pattern as chapter 20.",
    "tokens": [
      {
        "text": "[CmdletBinding()]",
        "cat": "param",
        "note": "From chapter 20, unlocks parameter attributes like Mandatory."
      },
      {
        "text": "param (",
        "cat": "cmdlet",
        "note": "The parameter block."
      },
      {
        "text": "[Parameter(Mandatory=$True)]",
        "cat": "param",
        "note": "Also from chapter 20, forces an explicit value with no silent default."
      },
      {
        "text": "[string]$ComputerName",
        "cat": "value",
        "note": "The required parameter."
      },
      {
        "text": ")",
        "cat": "cmdlet",
        "note": "Closes the block."
      }
    ],
    "output": "(no output yet, this is just the top of the script, the same requirement pattern built in chapter 20)",
    "order": "This goes first, establishing what the script needs before any of its actual logic runs.",
    "notice": [
      {
        "field": "Nothing new here",
        "note": "This entire step is a direct reuse of chapter 20's pattern, exactly the point of this synthesis lesson."
      }
    ],
    "distractor": {
      "name": "A default value instead of Mandatory",
      "why": "Reintroduces the exact silent assumption chapter 20 specifically moved away from.",
      "better": "Better fit for: never here, this phase already established why an explicit value beats a silent default."
    },
    "concepts": [
      {
        "term": "Reusing earlier patterns",
        "explain": "Advanced scripting isn't about constantly learning new syntax, it's about combining a small set of well-understood patterns, like this one from chapter 20, into something new."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - retry until reachable, without stopping cold",
    "task": "Now loop, checking the computer until it's reachable, without letting an unreachable machine crash the script, combining chapters 23 and 24.",
    "prefill": "",
    "chips": [
      {
        "text": "while (-not (Test-Connection $ComputerName -Count 1 -Quiet -ErrorAction SilentlyContinue))",
        "hint": "The retry loop from chapter 23, with -ErrorAction added so an unreachable host doesn't itself throw mid-condition."
      },
      {
        "text": "{ Start-Sleep -Seconds 30 }",
        "hint": "Same wait-between-retries pattern from chapter 23."
      }
    ],
    "check": function(c){ return /while\s*\(/i.test(c) && /test-connection/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach\s*\(/i.test(c) && /\$computername/i.test(c) && !/while/i.test(c); },
        "output": "(a foreach loop only runs a fixed number of times, it can't naturally express 'keep trying until reachable')",
        "note": "Same lesson as chapter 23: this is an open-ended retry, not a fixed collection to walk through once. while is the loop that fits, exactly as it did there."
      }
    ],
    "hint": "while (-not (Test-Connection $ComputerName -Count 1 -Quiet -ErrorAction SilentlyContinue)) { Start-Sleep -Seconds 30 }, the same retry pattern from chapter 23.",
    "tokens": [
      {
        "text": "while",
        "cat": "cmdlet",
        "note": "From chapter 23, the open-ended retry loop."
      },
      {
        "text": "(-not (Test-Connection $ComputerName -Count 1 -Quiet -ErrorAction SilentlyContinue))",
        "cat": "param",
        "note": "Keeps looping until the target becomes reachable."
      },
      {
        "text": "{ Start-Sleep -Seconds 30 }",
        "cat": "value",
        "note": "Waits between attempts, same as chapter 23."
      }
    ],
    "output": "(looping every 30 seconds, using the exact same while pattern from chapter 23, now with the parameterized $ComputerName from step 1 instead of a hardcoded name)",
    "order": "This is the second combined piece, chapter 23's loop pattern now operating on the mandatory parameter from step 1 instead of a name typed directly into the script.",
    "notice": [
      {
        "field": "$ComputerName, not a hardcoded name",
        "note": "The exact same while loop from chapter 23, but now genuinely reusable against any machine, thanks to step 1's parameter."
      }
    ],
    "distractor": {
      "name": "A foreach loop with a fixed retry count",
      "why": "Forces guessing a retry count ahead of time, exactly the limitation chapter 23 walked through when comparing foreach against while for this kind of problem.",
      "better": "Better fit for: a capped number of attempts, sometimes combined with while for a 'retry until success or N attempts' pattern."
    },
    "concepts": [
      {
        "term": "Parameters feeding into loops",
        "explain": "Once a value comes in through a parameter, chapter 20's contribution, it can be used anywhere in the script's logic, including inside a loop's condition, chapter 23's contribution, without hardcoding anything."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - query it safely once reachable",
    "task": "Once reachable, query it for real, wrapped in Try/Catch so a late failure still doesn't crash the script, exactly like chapter 24.",
    "prefill": "",
    "chips": [
      {
        "text": "try",
        "hint": "From chapter 24."
      },
      {
        "text": "{ Get-CimInstance -ComputerName $ComputerName -ClassName Win32_OperatingSystem -ErrorAction Stop }",
        "hint": "-ErrorAction Stop required, same as chapter 24, so a failure here is genuinely catchable."
      },
      {
        "text": "catch",
        "hint": "Handles a failure gracefully instead of stopping cold."
      },
      {
        "text": "{ \"Could not query $ComputerName`: $($_.Exception.Message)\" }",
        "hint": "A clear message, same pattern as chapter 24's catch block."
      }
    ],
    "check": function(c){ return /try\s*\{/i.test(c) && /catch/i.test(c) && /-erroraction\s+stop/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-ciminstance/i.test(c) && /\$computername/i.test(c) && !/try/i.test(c); },
        "output": "Get-CimInstance : The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)\n(unhandled, exactly the wall of red text chapter 24 was about avoiding)",
        "note": "Same lesson as chapter 24: without Try/Catch and -ErrorAction Stop, a failure here still produces the unhandled wall of red text, even after all the careful work in steps 1 and 2 to get this far reliably."
      }
    ],
    "hint": "try { Get-CimInstance -ComputerName $ComputerName -ClassName Win32_OperatingSystem -ErrorAction Stop } catch { \"Could not query $ComputerName: $($_.Exception.Message)\" }, the same pattern from chapter 24.",
    "tokens": [
      {
        "text": "try",
        "cat": "cmdlet",
        "note": "From chapter 24."
      },
      {
        "text": "{ Get-CimInstance -ComputerName $ComputerName ... -ErrorAction Stop }",
        "cat": "value",
        "note": "The mandatory parameter from step 1, now used inside a Try block."
      },
      {
        "text": "catch",
        "cat": "cmdlet",
        "note": "Handles any failure gracefully."
      },
      {
        "text": "{ \"Could not query $ComputerName: $($_.Exception.Message)\" }",
        "cat": "value",
        "note": "A clear message, reusing $ComputerName from the parameter, not a hardcoded name."
      }
    ],
    "output": "(OS details returned successfully, since the while loop in step 2 already confirmed the machine was reachable first)",
    "order": "This is last, the same three chapters landing in one script: a required parameter feeding a retry loop, feeding a safely wrapped final query, each piece exactly as it was taught, just working together now.",
    "notice": [
      {
        "field": "Three chapters, one script",
        "note": "CmdletBinding and Mandatory from chapter 20, while from chapter 23, Try/Catch with -ErrorAction Stop from chapter 24. Nothing new, just combined."
      }
    ],
    "distractor": {
      "name": "Get-CimInstance with no Try/Catch at all",
      "why": "Even after the while loop confirms reachability, a machine can still fail moments later, going offline again, or refusing this specific query. Try/Catch protects against that final moment too, exactly chapter 24's point.",
      "better": "Better fit for: never skipping this step, reachability and query success are two different things, confirmed separately."
    },
    "concepts": [
      {
        "term": "Synthesis over new syntax",
        "explain": "The actual skill this phase built isn't memorizing more commands, it's recognizing which already-known pattern, a parameter, a loop, an error handler, fits a given piece of a problem, and combining them."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - check the PowerShell edition and version",
    "task": "Before writing anything serious, confirm exactly which PowerShell edition and version this session is running.",
    "prefill": "",
    "chips": [
      {
        "text": "$PSVersionTable",
        "hint": "The same built-in variable from chapter 2, still the right tool here, now specifically checking the PSEdition field too."
      }
    ],
    "check": function(c){ return /\$psversiontable/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-host/i.test(c) && !/\$psversiontable/i.test(c); },
        "output": "Name             : ConsoleHost\nVersion          : 7.4.1\nCurrentCulture   : en-US",
        "note": "Get-Host mixes in console and UI details, and doesn't clearly show PSEdition, whether this is Windows PowerShell versus PowerShell 7+, information that matters for which features and syntax a script can actually rely on. $PSVersionTable is the more direct, complete source."
      }
    ],
    "hint": "$PSVersionTable, the same variable from way back in chapter 2, still the right first check before writing anything meant to be reused seriously.",
    "tokens": [
      {
        "text": "$PSVersionTable",
        "cat": "value",
        "note": "A built-in variable holding version and edition details, the definitive source for what this session can actually do."
      }
    ],
    "output": "Name                           Value\n----                           -----\nPSVersion                      7.4.1\nPSEdition                      Core\nOS                             Microsoft Windows 10.0.19045",
    "order": "This is the very first move before writing anything meant to last, a script relying on PowerShell 7+ syntax will simply fail on a machine only running Windows PowerShell 5.1, and this confirms which one you're actually working in.",
    "notice": [
      {
        "field": "PSEdition: Core",
        "note": "Confirms this is PowerShell 7+ (cross-platform), not the older Windows PowerShell 5.1 (Desktop edition), which matters for certain syntax and module compatibility."
      }
    ],
    "distractor": {
      "name": "Get-Host",
      "why": "Returns some version information, but mixed in with console-specific UI details, and without a clear PSEdition field distinguishing Windows PowerShell from PowerShell 7+.",
      "better": "Better fit for: checking details about the current host application itself, like buffer size, not the PowerShell engine's version or edition."
    },
    "concepts": [
      {
        "term": "PSEdition",
        "explain": "Distinguishes 'Desktop' (Windows PowerShell 5.1, Windows-only) from 'Core' (PowerShell 7+, cross-platform). A script relying on features specific to one edition can fail outright on the other."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - check for administrator rights",
    "task": "Now confirm whether this specific session is actually running with administrator rights.",
    "prefill": "",
    "chips": [
      {
        "text": "[Security.Principal.WindowsPrincipal]",
        "hint": "A .NET class used to inspect the current user's identity and role membership directly."
      },
      {
        "text": "[Security.Principal.WindowsIdentity]::GetCurrent()",
        "hint": "Gets the identity actually running this session."
      },
      {
        "text": ").IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)",
        "hint": "Checks whether that identity belongs to the built-in Administrator role."
      }
    ],
    "check": function(c){ return /windowsprincipal/i.test(c) && /administrator/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /whoami/i.test(c) && !/windowsprincipal/i.test(c); },
        "output": "corp\\jsmith",
        "note": "whoami confirms who you're logged in as, but not whether this specific session is actually elevated with administrator rights. A regular user account can also open a session with 'Run as Administrator', or not, whoami alone can't tell the difference."
      }
    ],
    "hint": "([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator), directly checks whether this session is actually elevated.",
    "tokens": [
      {
        "text": "[Security.Principal.WindowsPrincipal]",
        "cat": "value",
        "note": "A .NET class wrapping identity and role-membership information."
      },
      {
        "text": "[Security.Principal.WindowsIdentity]::GetCurrent()",
        "cat": "value",
        "note": "Gets the identity actually running the current session."
      },
      {
        "text": ".IsInRole(...)",
        "cat": "param",
        "note": "Checks role membership directly."
      },
      {
        "text": "[Security.Principal.WindowsBuiltInRole]::Administrator",
        "cat": "value",
        "note": "The specific role being checked for."
      }
    ],
    "output": "False",
    "order": "This comes right after confirming the PowerShell version, a second piece of the same upfront environment check, before assuming a machine-wide setting change like execution policy could succeed.",
    "notice": [
      {
        "field": "False",
        "note": "This session is not currently elevated, meaning changing an execution policy machine-wide, rather than -Scope CurrentUser, would fail here."
      }
    ],
    "distractor": {
      "name": "whoami",
      "why": "Confirms your account identity, but not whether this particular session is running elevated. The same account can open both a regular and an elevated session, whoami can't distinguish between them.",
      "better": "Better fit for: confirming which account you're logged in as, a separate question from whether this session is elevated."
    },
    "concepts": [
      {
        "term": "Checking for elevation",
        "explain": "Whether a session is 'Run as Administrator' affects what it's allowed to do, like setting a machine-wide execution policy. Checking this directly, rather than assuming, avoids a command failing partway through a script for a permissions reason that could've been caught upfront."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - pick an execution policy scope that matches",
    "task": "Given this session isn't elevated, set an execution policy at a scope that will actually work without administrator rights.",
    "prefill": "",
    "chips": [
      {
        "text": "Set-ExecutionPolicy RemoteSigned",
        "hint": "The policy from an earlier lesson."
      },
      {
        "text": "-Scope CurrentUser",
        "hint": "Applies just to this account, no elevation required, unlike the machine-wide default scope."
      }
    ],
    "check": function(c){ return /set-executionpolicy/i.test(c) && /-scope\s+currentuser/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /set-executionpolicy/i.test(c) && !/-scope/i.test(c); },
        "output": "Set-ExecutionPolicy : Access to the registry key 'HKEY_LOCAL_MACHINE\\...' is denied.",
        "note": "Without an explicit -Scope, this defaults to the machine-wide LocalMachine scope, which requires administrator rights, exactly what step 2 just confirmed this session doesn't have. -Scope CurrentUser applies just to this account, no elevation needed."
      }
    ],
    "hint": "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser, matching the non-elevated session confirmed in step 2.",
    "tokens": [
      {
        "text": "Set-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Changes the execution policy."
      },
      {
        "text": "RemoteSigned",
        "cat": "value",
        "note": "The safer middle-ground policy from an earlier lesson."
      },
      {
        "text": "-Scope",
        "cat": "param",
        "note": "Controls how broadly the change applies."
      },
      {
        "text": "CurrentUser",
        "cat": "value",
        "note": "Just this account, matching a session confirmed non-elevated in step 2, no administrator rights needed."
      }
    ],
    "output": "(policy updated to RemoteSigned for CurrentUser, no elevation required)",
    "order": "This is last, directly acting on what steps 1 and 2 established, choosing a scope that actually matches this session's real, confirmed permissions instead of assuming.",
    "notice": [
      {
        "field": "No access denied error this time",
        "note": "Confirms picking -Scope CurrentUser correctly matched the non-elevated session confirmed in step 2."
      }
    ],
    "distractor": {
      "name": "Set-ExecutionPolicy with no -Scope specified",
      "why": "Defaults to the machine-wide LocalMachine scope, which requires administrator rights. Step 2 already confirmed this session doesn't have them, so this would fail with an access denied error.",
      "better": "Better fit for: a session already confirmed to be running elevated."
    },
    "concepts": [
      {
        "term": "Matching scope to actual permissions",
        "explain": "Checking whether a session is elevated first, then picking -Scope CurrentUser or the machine-wide default accordingly, avoids a command failing partway through for a permissions reason that was entirely predictable upfront."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - name it like PowerShell would",
    "task": "Pick a name for this new tool, matching the Verb-Noun convention every built-in cmdlet already follows.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-LowDiskServer",
        "hint": "Get, an approved PowerShell verb meaning 'retrieve, don't change anything', paired with a singular noun describing what's returned."
      },
      {
        "text": "Find-Servers-With-Low-Disk",
        "hint": "Not how PowerShell names anything, hyphen-separated phrases and plural nouns break the convention every built-in cmdlet follows."
      }
    ],
    "check": function(c){ return /^get-lowdiskserver$/i.test(c.trim()); },
    "misses": [
      {
        "test": function(c){ return /find-servers-with-low-disk/i.test(c) || /checklowdisk/i.test(c); },
        "output": "(technically works as a function name, but nothing about it looks like it belongs next to Get-Service or Get-Process, and Find- isn't an approved read-only verb either)",
        "note": "PowerShell's own cmdlets all follow Verb-Noun, using one of a fixed, approved list of verbs (Get-Verb shows them all), and a singular noun. A name like this breaks that pattern in multiple ways at once, an unapproved verb, hyphens mid-phrase, and a plural noun, none of which match how the rest of PowerShell is named."
      }
    ],
    "hint": "Get-LowDiskServer: Get is an approved, read-only verb, LowDiskServer is a singular noun describing exactly what comes back.",
    "tokens": [
      {
        "text": "Get-LowDiskServer",
        "cat": "value",
        "note": "Get (an approved verb meaning retrieve without changing anything) plus a singular noun, exactly how every built-in cmdlet is named."
      }
    ],
    "output": "(Get-Verb confirms 'Get' is on the official approved verb list; a name like Get-LowDiskServer would sit naturally alongside Get-Service or Get-Process)",
    "order": "This comes first, before any actual code, because a tool's name is the first thing anyone using it, including future you, encounters, and matching PowerShell's own convention makes it discoverable and predictable the same way.",
    "notice": [
      {
        "field": "Get-Verb",
        "note": "The cmdlet that lists every officially approved PowerShell verb, worth checking before inventing your own when naming a new tool."
      }
    ],
    "distractor": {
      "name": "Find-Servers-With-Low-Disk",
      "why": "Breaks the Verb-Noun convention in several ways at once: hyphenated multi-word phrases instead of a single noun, a plural noun, and Find isn't among the approved verbs for this kind of read-only lookup.",
      "better": "Better fit for: never, matching this convention costs nothing and makes a tool immediately feel native alongside real cmdlets."
    },
    "concepts": [
      {
        "term": "Verb-Noun naming",
        "explain": "Every PowerShell cmdlet follows Verb-Noun, using one of a fixed, approved list of verbs (checked with Get-Verb) and a singular noun. Following this convention for your own tools makes them discoverable and predictable the same way built-in cmdlets are."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - produce real objects, not preformatted text",
    "task": "Now make sure the tool's output is real, reusable objects, not text formatted for display.",
    "prefill": "",
    "chips": [
      {
        "text": "Select-Object",
        "hint": "Reshapes the object down to just the relevant properties, while keeping it a real, reusable object."
      },
      {
        "text": "DeviceID, FreeSpaceGB",
        "hint": "The specific properties worth keeping."
      },
      {
        "text": "Format-Table",
        "hint": "Changes only how something displays. Locks the output into text, unusable by anything piped after it."
      }
    ],
    "check": function(c){ return /select-object/i.test(c) && !/format-table/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /format-table/i.test(c) && !/select-object/i.test(c); },
        "output": "DeviceID FreeSpaceGB\n-------- -----------\nC:       4\n\n(looks fine printed to the screen, but piping this into Export-Csv or Where-Object afterward breaks, there's no real object left underneath)",
        "note": "This is exactly the same distinction from an earlier lesson: Format-Table only changes the display, it doesn't preserve the object underneath. A tool meant to be reused by other scripts, piped into Export-Csv, filtered further, has to hand back real objects, not preformatted text."
      }
    ],
    "hint": "Select-Object DeviceID, FreeSpaceGB keeps this a real, reusable object. Format-Table would lock the output into display-only text instead.",
    "tokens": [
      {
        "text": "Select-Object",
        "cat": "cmdlet",
        "note": "Reshapes an object down to specific properties while keeping it a genuine, reusable object."
      },
      {
        "text": "DeviceID, FreeSpaceGB",
        "cat": "value",
        "note": "The properties this tool's output should actually carry."
      }
    ],
    "output": "DeviceID FreeSpaceGB\n-------- -----------\nC:       4",
    "order": "This comes right after naming the tool, both steps are about the same underlying question: does this behave the way a real PowerShell tool should, in name and in output.",
    "notice": [
      {
        "field": "Still a real object, not locked-in text",
        "note": "This output could be piped into Export-Csv, Where-Object, or Sort-Object and behave correctly, exactly what Format-Table's output could not do."
      }
    ],
    "distractor": {
      "name": "Format-Table for the final output",
      "why": "Looks identical on screen, but locks the output into display-only text. Anyone piping this tool's results into Export-Csv or another cmdlet afterward would find nothing real left to work with.",
      "better": "Better fit for: the very last step before printing to a screen, in an interactive session, never inside a reusable tool meant to be piped further."
    },
    "concepts": [
      {
        "term": "Tools should output objects, not formatted text",
        "explain": "A reusable tool, meant to be piped into other commands, should always hand back real objects (via Select-Object or similar), leaving formatting decisions, Format-Table, Format-List, to whoever eventually displays the result, not baked in ahead of time."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it behaves like a real cmdlet",
    "task": "Confirm the finished tool can be piped into something else, exactly like a built-in cmdlet could.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-LowDiskServer",
        "hint": "The finished tool from steps 1 and 2."
      },
      {
        "text": "Export-Csv -Path report.csv -NoTypeInformation",
        "hint": "If step 2's output really is a reusable object, this should work cleanly, just like it would on any built-in cmdlet's output."
      }
    ],
    "check": function(c){ return /get-lowdiskserver/i.test(c) && /export-csv/i.test(c); },
    "misses": [],
    "hint": "Get-LowDiskServer | Export-Csv -Path report.csv -NoTypeInformation, confirming the tool's real-object output from step 2 actually works when piped further, exactly like a built-in cmdlet.",
    "tokens": [
      {
        "text": "Get-LowDiskServer",
        "cat": "cmdlet",
        "note": "The finished tool, named and shaped exactly like a built-in cmdlet would be."
      },
      {
        "text": "Export-Csv",
        "cat": "cmdlet",
        "note": "A downstream command that only works cleanly on real, reusable objects, exactly the kind of check that would fail on Format-Table output."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Output file."
      },
      {
        "text": "report.csv",
        "cat": "value",
        "note": "Where the CSV is written."
      },
      {
        "text": "-NoTypeInformation",
        "cat": "param",
        "note": "Skips a .NET type header line."
      }
    ],
    "output": "(report.csv written cleanly, one row per low-disk server, exactly as it would for any built-in cmdlet's output)",
    "order": "This is last, direct proof that both earlier decisions, the Verb-Noun name and the real-object output, add up to a tool that genuinely behaves like PowerShell's own built-in cmdlets, not just something that looks similar.",
    "notice": [
      {
        "field": "Clean CSV export, no errors",
        "note": "Confirms the tool's output really is a reusable object, not display-only text that would have broken this exact command."
      }
    ],
    "distractor": {
      "name": "Just trusting it works without piping it anywhere",
      "why": "The whole point of asking 'what would PowerShell do' is behaving like a real cmdlet in practice, not just in appearance. Actually piping the result somewhere is the concrete proof.",
      "better": "Better fit for: never skipping this kind of check for a tool meant to be reused, though harmless to skip once you've verified the pattern enough times to trust it."
    },
    "concepts": [
      {
        "term": "WWPD: What would PowerShell do?",
        "explain": "The core question this chapter asks before writing anything: would a built-in cmdlet name it this way, output this way, behave this way? Matching that standard is what makes a homemade tool feel native instead of bolted on."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - watch the binder work",
    "task": "Use Trace-Command to actually watch how PowerShell binds a piped Get-Service object to Stop-Service's parameters.",
    "prefill": "",
    "chips": [
      {
        "text": "Trace-Command",
        "hint": "Shows PowerShell's internal decision-making for a specific system, in real time, as a command actually runs."
      },
      {
        "text": "-Name ParameterBinding",
        "hint": "Specifically traces how parameters get matched and bound, not other internal systems."
      },
      {
        "text": "-Expression { Get-Service -Name Spooler | Stop-Service -WhatIf } -PSHost",
        "hint": "The actual command being traced, wrapped in a script block, -WhatIf keeps it safe to actually run."
      }
    ],
    "check": function(c){ return /trace-command/i.test(c) && /parameterbinding/i.test(c) && /stop-service/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-service/i.test(c) && /stop-service/i.test(c) && !/trace-command/i.test(c); },
        "output": "(the pipe works, but running it alone doesn't show you why, or how PowerShell actually decided to bind the piped object)",
        "note": "Running the pipeline alone confirms it works, but explains nothing about the mechanism behind it. Trace-Command with -Name ParameterBinding exposes PowerShell's actual internal decision-making as it happens."
      }
    ],
    "hint": "Trace-Command -Name ParameterBinding -Expression { Get-Service -Name Spooler | Stop-Service -WhatIf } -PSHost, watching the binder work in real time.",
    "tokens": [
      {
        "text": "Trace-Command",
        "cat": "cmdlet",
        "note": "Exposes PowerShell's internal decision-making for a specific system, as a command actually runs."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which internal system to trace."
      },
      {
        "text": "ParameterBinding",
        "cat": "value",
        "note": "Specifically, how parameters get matched to incoming values."
      },
      {
        "text": "-Expression",
        "cat": "param",
        "note": "The actual command to run while tracing."
      },
      {
        "text": "{ Get-Service -Name Spooler | Stop-Service -WhatIf }",
        "cat": "value",
        "note": "The real pipeline being examined, -WhatIf keeps it safe to actually execute."
      },
      {
        "text": "-PSHost",
        "cat": "param",
        "note": "Sends the trace output to the console instead of a file."
      }
    ],
    "output": "DEBUG: ParameterBinding Information: 0 : BIND arg [System.ServiceProcess.ServiceController] to parameter [InputObject]\nDEBUG: ParameterBinding Information: 0 :     BIND arg [Spooler] to param [InputObject] SUCCESSFUL",
    "order": "This runs first, actually exposing the internal mechanism directly instead of taking it on faith, exactly the proof the request asked for.",
    "notice": [
      {
        "field": "BIND arg [...ServiceController] to parameter [InputObject]",
        "note": "Direct proof: the piped service object matched Stop-Service's own -InputObject parameter automatically, exactly the mechanic behind Get-Service | Stop-Service."
      }
    ],
    "distractor": {
      "name": "Running the pipeline alone and trusting it works",
      "why": "Confirms the behavior, but explains nothing about why it works. The request specifically asked for proof of the mechanism, not just another demonstration that the pipe succeeds.",
      "better": "Better fit for: everyday use, once the mechanism is already understood, tracing every pipeline you run would be excessive."
    },
    "concepts": [
      {
        "term": "Trace-Command",
        "explain": "Exposes PowerShell's internal systems, including parameter binding, as a command actually runs. The real way to prove how something works, rather than just observing that it does."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - see what -InputObject actually is",
    "task": "Now confirm directly that Stop-Service has an -InputObject parameter designed to accept this kind of piped object.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Command",
        "hint": "Discovery, from chapter 3, still useful here."
      },
      {
        "text": "Stop-Service",
        "hint": "The cmdlet in question."
      },
      {
        "text": "-Syntax",
        "hint": "Shows the parameter sets directly, including -InputObject."
      }
    ],
    "check": function(c){ return /get-command/i.test(c) && /stop-service/i.test(c) && /-syntax/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-help/i.test(c) && /stop-service/i.test(c) && !/-syntax/i.test(c) && !/get-command/i.test(c); },
        "output": "NAME\n    Stop-Service\nSYNOPSIS\n    Stops one or more running services.",
        "note": "That's the general help summary, it doesn't show the parameter sets directly the way -Syntax does. Get-Command -Syntax lays out exactly which parameters exist, including -InputObject, the one that made step 1's binding possible."
      }
    ],
    "hint": "Get-Command Stop-Service -Syntax lays out its actual parameter sets, confirming -InputObject exists and accepts pipeline input.",
    "tokens": [
      {
        "text": "Get-Command",
        "cat": "cmdlet",
        "note": "The discovery cmdlet, from chapter 3, now used to confirm a specific parameter's existence."
      },
      {
        "text": "Stop-Service",
        "cat": "value",
        "note": "The cmdlet being inspected."
      },
      {
        "text": "-Syntax",
        "cat": "param",
        "note": "Shows the exact parameter sets and their types directly."
      }
    ],
    "output": "Stop-Service [-InputObject] <ServiceController[]> [-Force] [-NoWait] [-WhatIf] [-Confirm]\nStop-Service [-Name] <String[]> [-Force] [-NoWait] [-WhatIf] [-Confirm]",
    "order": "This comes right after watching the trace in step 1, confirming directly in the cmdlet's own definition the specific parameter that trace output referenced.",
    "notice": [
      {
        "field": "[-InputObject] <ServiceController[]>",
        "note": "Confirms directly: Stop-Service has a parameter specifically typed to accept ServiceController objects, exactly the type Get-Service returns, exactly what step 1's trace showed binding to."
      }
    ],
    "distractor": {
      "name": "Get-Help Stop-Service, without -Syntax",
      "why": "Shows a general description, not the precise parameter sets and types the way -Syntax does. Confirming -InputObject's existence and its exact type needs the syntax view specifically.",
      "better": "Better fit for: understanding what a cmdlet does in general, not confirming a specific parameter's exact type."
    },
    "concepts": [
      {
        "term": "-InputObject",
        "explain": "A common parameter pattern on cmdlets designed to accept pipeline input directly, typed to match whatever object type is expected, ServiceController for Stop-Service, Process for Stop-Process, and so on."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm what happens with the wrong object type",
    "task": "Now confirm what happens when you pipe an object of the wrong type entirely, proving the binding is genuinely type-specific.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process -Name notepad",
        "hint": "An entirely different object type, Process, not ServiceController."
      },
      {
        "text": "| Stop-Service",
        "hint": "Attempting to pipe the wrong type into the same cmdlet from steps 1 and 2."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /stop-service/i.test(c); },
    "misses": [],
    "hint": "Get-Process -Name notepad | Stop-Service, piping a Process object where Stop-Service expects a ServiceController, to see the binding fail as proof it's genuinely type-specific.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "Returns Process objects, a completely different type than ServiceController."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which process."
      },
      {
        "text": "notepad",
        "cat": "value",
        "note": "An arbitrary running process."
      },
      {
        "text": "Stop-Service",
        "cat": "cmdlet",
        "note": "Same cmdlet from steps 1 and 2, its -InputObject only accepts ServiceController objects."
      }
    ],
    "output": "Stop-Service : Cannot bind parameter 'InputObject'. Cannot convert the \"System.Diagnostics.Process (notepad)\" value of type \"System.Diagnostics.Process\" to type \"System.ServiceProcess.ServiceController\".",
    "order": "This is last, deliberately proving the reverse of steps 1 and 2, if binding genuinely depends on matching object types, an unrelated object type should fail to bind, and it does.",
    "notice": [
      {
        "field": "Cannot convert ... Process ... to ... ServiceController",
        "note": "Direct proof that the binding mechanism confirmed in steps 1 and 2 is genuinely type-specific, not some looser or coincidental match."
      }
    ],
    "distractor": {
      "name": "Assuming any piped object would bind, without testing",
      "why": "The whole value of this final step is proving the binding is type-specific, not just type-shaped-like-a-list. A deliberate mismatch is the clearest possible confirmation.",
      "better": "Better fit for: never skipping this kind of check when the entire lesson was about proving a mechanism rather than asserting it."
    },
    "concepts": [
      {
        "term": "ByValue binding is type-specific",
        "explain": "A piped object only binds automatically to a parameter like -InputObject if its actual .NET type matches what that parameter expects. A ServiceController binds to Stop-Service's -InputObject; a Process object does not, confirmed directly by the failure this step produced."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - categorize with Switch instead of if/elseif",
    "task": "Categorize a service's Status into 'OK', 'Down', or 'Check', using Switch instead of a long if/elseif chain.",
    "prefill": "",
    "chips": [
      {
        "text": "switch ($service.Status)",
        "hint": "Tests one value against several possible matches, cleaner than a long if/elseif chain checking the same variable repeatedly."
      },
      {
        "text": "{ 'Running' { 'OK' } 'Stopped' { 'Down' } default { 'Check' } }",
        "hint": "Each possible value gets its own block; default catches anything not explicitly listed."
      }
    ],
    "check": function(c){ return /switch\s*\(/i.test(c) && /running/i.test(c) && /stopped/i.test(c) && /default/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /if\s*\(.*status.*-eq.*running/i.test(c) && /elseif/i.test(c); },
        "output": "(works, but requires repeating $service.Status in every single elseif comparison, and gets harder to read as more categories get added)",
        "note": "An if/elseif chain works here, but repeats the same variable comparison over and over, once per possible value, and only gets messier as more categories are added. Switch tests one value once, then matches it against several possibilities cleanly."
      }
    ],
    "hint": "switch ($service.Status) { 'Running' { 'OK' } 'Stopped' { 'Down' } default { 'Check' } }, one value tested once, matched against several possibilities.",
    "tokens": [
      {
        "text": "switch",
        "cat": "cmdlet",
        "note": "Tests a single value against multiple possible matches, cleaner than repeating the same comparison in a long if/elseif chain."
      },
      {
        "text": "($service.Status)",
        "cat": "param",
        "note": "The one value being tested."
      },
      {
        "text": "{ 'Running' { 'OK' } 'Stopped' { 'Down' } default { 'Check' } }",
        "cat": "value",
        "note": "Each specific value gets its own matching block; default catches anything not explicitly listed."
      }
    ],
    "output": "OK",
    "order": "This runs first, establishing the categorization logic Switch was specifically built for, one value, several known possibilities.",
    "notice": [
      {
        "field": "default",
        "note": "Catches any status not explicitly listed, 'Paused' or 'StartPending' for instance, without needing a case written for every possible value."
      }
    ],
    "distractor": {
      "name": "A long if/elseif chain",
      "why": "Works, but repeats $service.Status in every single condition, once per possible category, and only gets harder to read and maintain as more categories get added later.",
      "better": "Better fit for: conditions that aren't simple equality checks, like ranges or combined comparisons, something Switch's simple value-matching can't express."
    },
    "concepts": [
      {
        "term": "switch",
        "explain": "Tests one value against several possible matches in a single, clean block, instead of repeating the same comparison across a long if/elseif chain. Best suited to exact-value matching; more complex conditions still need if/elseif."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - stop the loop the instant you find what you need",
    "task": "Now loop through servers checking status, but stop immediately the moment you find the first one that's down, don't keep checking the rest.",
    "prefill": "",
    "chips": [
      {
        "text": "foreach ($server in $servers)",
        "hint": "Same loop construct from an earlier lesson."
      },
      {
        "text": "{ if ((Get-Service -ComputerName $server -Name wuauserv).Status -eq 'Stopped') { \"$server is down\"; break } }",
        "hint": "break exits the loop entirely, the instant this condition is met, skipping every remaining server."
      }
    ],
    "check": function(c){ return /foreach\s*\(/i.test(c) && /break/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach\s*\(/i.test(c) && /stopped/i.test(c) && !/break/i.test(c); },
        "output": "(checks every single server in the list, even after already finding one that's down, wasting time on servers that no longer matter for this answer)",
        "note": "Without break, the loop keeps running through every remaining server even after already finding what it was looking for. break exits the loop immediately once the condition is met, exactly the 'stop wasting time' behavior the request asked for."
      }
    ],
    "hint": "Add break right after finding the first down server, inside the if block, it exits the entire foreach loop immediately, skipping every remaining server.",
    "tokens": [
      {
        "text": "foreach ($server in $servers)",
        "cat": "cmdlet",
        "note": "The same loop construct from an earlier lesson."
      },
      {
        "text": "if ((Get-Service ...).Status -eq 'Stopped')",
        "cat": "value",
        "note": "The condition being checked for each server."
      },
      {
        "text": "{ \"$server is down\"; break }",
        "cat": "value",
        "note": "break exits the entire loop immediately once this condition is true, skipping any remaining servers."
      }
    ],
    "output": "WEB03 is down\n(loop exits immediately, WEB04 and WEB05 never checked at all)",
    "order": "This comes right after the Switch categorization, both steps about picking the control-flow tool that matches the actual shape of the problem, one-of-several-values for Switch, stop-as-soon-as-found for break.",
    "notice": [
      {
        "field": "WEB04 and WEB05 never checked",
        "note": "Direct proof that break genuinely stopped the loop the instant its condition was met, rather than merely skipping ahead."
      }
    ],
    "distractor": {
      "name": "A foreach loop with no break",
      "why": "Finishes checking every server in the list regardless of whether the answer was already found early on, wasted work once the actual question, 'is there a down server', is already answered.",
      "better": "Better fit for: when you genuinely need results from every item, not just the first match."
    },
    "concepts": [
      {
        "term": "break",
        "explain": "Immediately exits the loop it's inside, skipping any remaining iterations entirely. The right tool once a loop has found what it was actually looking for and doesn't need to keep going."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm nothing else ran after the break",
    "task": "Add a line right after the entire loop, and confirm it still runs, proving break only stopped the loop, not the whole script.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Output \"Check complete.\"",
        "hint": "Placed after the entire foreach block from step 2."
      }
    ],
    "check": function(c){ return /foreach\s*\(/i.test(c) && /break/i.test(c) && /check complete/i.test(c); },
    "misses": [],
    "hint": "Add Write-Output \"Check complete.\" right after the closing brace of the whole foreach loop from step 2, confirming execution continues past the loop even though break exited it early.",
    "tokens": [
      {
        "text": "foreach (...) { ... break ... }",
        "cat": "value",
        "note": "The full loop from step 2, unchanged."
      },
      {
        "text": "Write-Output",
        "cat": "cmdlet",
        "note": "A line placed after the entire loop, proving script execution continues normally past it."
      },
      {
        "text": "\"Check complete.\"",
        "cat": "value",
        "note": "If this prints, break only exited the loop, not the whole script."
      }
    ],
    "output": "WEB03 is down\nCheck complete.",
    "order": "This is last, confirming precisely what break did and didn't affect, it exited the loop the instant its condition was met, but the rest of the script, everything after that loop, still ran normally.",
    "notice": [
      {
        "field": "\"Check complete.\" still printed",
        "note": "Confirms break's effect is scoped to the loop it's inside, not the entire script."
      }
    ],
    "distractor": {
      "name": "Assuming break stops the whole script",
      "why": "break only exits the loop it's directly inside. A common early misconception is thinking it halts everything, this step's output proves otherwise, execution continues right past the loop.",
      "better": "Better fit for: never assuming, confirming break's actual scope directly removes any doubt."
    },
    "concepts": [
      {
        "term": "break's scope",
        "explain": "break exits only the loop it's directly inside, script execution resumes immediately after that loop's closing brace, not at the very end of the script. Worth confirming directly if you're not certain."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - build the generic tool",
    "task": "Build the first piece as a tool: generic, parameterized, no specific server names or environment details baked in.",
    "prefill": "",
    "chips": [
      {
        "text": "function Get-DiskSpace {",
        "hint": "A tool, reusable anywhere, starts as a generic function."
      },
      {
        "text": "param ([Parameter(Mandatory=$True)][string]$ComputerName)",
        "hint": "A required parameter, no hardcoded machine name, works against any computer the caller provides."
      },
      {
        "text": "Get-CimInstance -ComputerName $ComputerName -ClassName Win32_LogicalDisk",
        "hint": "The actual query, using only the parameter, nothing environment-specific."
      },
      {
        "text": "}",
        "hint": "Closes the function."
      }
    ],
    "check": function(c){ return /function\s+get-diskspace/i.test(c) && /mandatory\s*=\s*\$true/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /function\s+get-diskspace/i.test(c) && /web01/i.test(c); },
        "output": "(a specific server name hardcoded right into a function meant to be generic, defeats the entire purpose of a reusable tool)",
        "note": "Hardcoding a specific server name directly into what's supposed to be a generic, reusable tool defeats the point entirely, it would only ever work against that one machine. A tool takes its target as a parameter, exactly like every built-in cmdlet does."
      }
    ],
    "hint": "function Get-DiskSpace { param ([Parameter(Mandatory=$True)][string]$ComputerName) Get-CimInstance -ComputerName $ComputerName -ClassName Win32_LogicalDisk }, no server names hardcoded anywhere.",
    "tokens": [
      {
        "text": "function Get-DiskSpace {",
        "cat": "cmdlet",
        "note": "A tool, named Verb-Noun style, meant to be generic and reusable."
      },
      {
        "text": "param ([Parameter(Mandatory=$True)][string]$ComputerName)",
        "cat": "param",
        "note": "Required, but generic, works against any machine the caller names, no environment-specific assumptions."
      },
      {
        "text": "Get-CimInstance -ComputerName $ComputerName -ClassName Win32_LogicalDisk",
        "cat": "value",
        "note": "The actual query, entirely driven by the parameter, nothing hardcoded."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(a function defined, callable as Get-DiskSpace -ComputerName <any machine at all>, nothing about our specific five servers baked in anywhere)",
    "order": "This is built first, deliberately as the generic piece, since step 2's controller will actually call this tool, orchestrating it against specific machines rather than duplicating its logic.",
    "notice": [
      {
        "field": "No server names anywhere in this function",
        "note": "This is exactly what makes it a tool rather than a controller, genuinely reusable in any environment, not just this one."
      }
    ],
    "distractor": {
      "name": "Hardcoding one of the five real server names into the function",
      "why": "Immediately breaks the whole premise of a generic, reusable tool, it would only ever work against that one specific machine, exactly the opposite of what a tool is meant to be.",
      "better": "Better fit for: never inside a tool, hardcoded specifics belong in the controller that calls the tool, built next in step 2."
    },
    "concepts": [
      {
        "term": "Tools",
        "explain": "Generic, parameterized, reusable in any environment, no specific assumptions baked in. A tool should work as well against a company's servers as it would against anyone else's, exactly like a built-in cmdlet does."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - build the specific controller",
    "task": "Now build the second piece as a controller: specific to your five real web servers, and email the team if one's low, hardcoding is fine here.",
    "prefill": "",
    "chips": [
      {
        "text": "$servers = 'WEB01','WEB02','WEB03','WEB04','WEB05'",
        "hint": "Hardcoded, on purpose, this script's whole job is orchestrating this specific, known set of machines."
      },
      {
        "text": "foreach ($server in $servers) { $disk = Get-DiskSpace -ComputerName $server; if ($disk.FreeSpaceGB -lt 10) { Send-MailMessage -To 'ops-team@corp.local' -Subject \"$server low on disk\" } }",
        "hint": "Calls the generic tool from step 1, then does something specific to this environment: emailing this exact team."
      }
    ],
    "check": function(c){ return /\$servers\s*=/i.test(c) && /web01/i.test(c) && /get-diskspace/i.test(c) && /send-mailmessage/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /function\s+get-diskspace2/i.test(c) || (/get-ciminstance/i.test(c) && !/get-diskspace/i.test(c) && /web01/i.test(c)); },
        "output": "(rewrites the same disk-checking logic that already exists in the tool from step 1, instead of just calling it)",
        "note": "Rebuilding the disk-checking logic again here duplicates what the tool from step 1 already does. A controller's job is to orchestrate, calling the existing generic tool, then adding the environment-specific behavior, hardcoded server names and a real email, on top of it."
      }
    ],
    "hint": "Hardcode the five real server names, then loop through them calling the Get-DiskSpace tool from step 1, and Send-MailMessage if one's low, exactly the specific orchestration a controller is for.",
    "tokens": [
      {
        "text": "$servers = 'WEB01','WEB02','WEB03','WEB04','WEB05'",
        "cat": "value",
        "note": "Hardcoded on purpose, a controller is allowed, even expected, to know specifics about its actual environment."
      },
      {
        "text": "foreach ($server in $servers)",
        "cat": "cmdlet",
        "note": "Loops through the known, specific list."
      },
      {
        "text": "Get-DiskSpace -ComputerName $server",
        "cat": "value",
        "note": "Calls the generic tool built in step 1, rather than duplicating its logic."
      },
      {
        "text": "Send-MailMessage -To 'ops-team@corp.local'",
        "cat": "value",
        "note": "A specific, hardcoded action for this specific environment, exactly what a controller is meant to do."
      }
    ],
    "output": "(loops through the five real servers, calling Get-DiskSpace for each, emailing ops-team@corp.local for any that come back low)",
    "order": "This comes right after building the generic tool, and deliberately calls it rather than rewriting its logic, exactly the relationship a controller should have with the tools it orchestrates.",
    "notice": [
      {
        "field": "Calls Get-DiskSpace, doesn't rewrite it",
        "note": "The controller reuses the tool from step 1 rather than duplicating its logic, exactly the intended relationship between the two script types."
      }
    ],
    "distractor": {
      "name": "Rewriting the disk-checking logic directly instead of calling the tool",
      "why": "Duplicates logic that already exists cleanly in the generic tool from step 1. A controller's job is orchestration, calling existing tools and adding environment-specific behavior on top, not reimplementing what a tool already does.",
      "better": "Better fit for: never once a generic tool already exists for the underlying task."
    },
    "concepts": [
      {
        "term": "Controllers",
        "explain": "Specific, often hardcoded, scripts that orchestrate one particular situation, this company's five servers, this team's email address. Controllers are expected to call generic tools rather than duplicate their logic."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the split actually holds up",
    "task": "Confirm the tool from step 1 still works completely on its own, against a machine that isn't even one of the five hardcoded servers.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-DiskSpace -ComputerName DB07",
        "hint": "A machine that was never mentioned anywhere in step 2's controller, proving the tool genuinely doesn't depend on it."
      }
    ],
    "check": function(c){ return /get-diskspace/i.test(c) && /db07/i.test(c); },
    "misses": [],
    "hint": "Get-DiskSpace -ComputerName DB07, a totally different, unrelated machine, confirming the generic tool from step 1 works completely independent of the controller's specific five servers.",
    "tokens": [
      {
        "text": "Get-DiskSpace",
        "cat": "cmdlet",
        "note": "The generic tool from step 1, being tested entirely on its own, outside the controller."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Its one required, generic parameter."
      },
      {
        "text": "DB07",
        "cat": "value",
        "note": "A machine that appears nowhere in step 2's controller, proof the tool has no hidden dependency on it."
      }
    ],
    "output": "DeviceID FreeSpaceGB\n-------- -----------\nC:       28",
    "order": "This is last, direct proof that the split from steps 1 and 2 actually holds up: the tool works completely independently, and the controller's specificity lives entirely in its own script, not leaked into the tool.",
    "notice": [
      {
        "field": "DB07, a server never mentioned in step 2",
        "note": "Confirms the tool genuinely has zero dependency on the controller's specific, hardcoded environment."
      }
    ],
    "distractor": {
      "name": "Only testing the tool against the same five servers from the controller",
      "why": "Wouldn't actually prove the tool is generic, it might happen to work on those five for coincidental reasons. Testing against a completely unrelated machine is the real proof of genuine reusability.",
      "better": "Better fit for: never as the only test, though it's a reasonable first check, a genuinely unrelated machine is the real proof."
    },
    "concepts": [
      {
        "term": "Verifying the tools/controllers split",
        "explain": "A genuinely reusable tool should work identically regardless of which controller calls it, or none at all. Testing it against something outside the controller's specific, hardcoded scope is the real confirmation the separation actually holds."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - check its digital signature",
    "task": "Before running anything, check whether Fix-Permissions.ps1 is actually digitally signed, and by whom.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-AuthenticodeSignature",
        "hint": "Checks a file's digital signature directly, confirming whether it's signed and by whom, not just whether it runs."
      },
      {
        "text": ".\\Fix-Permissions.ps1",
        "hint": "The script in question."
      }
    ],
    "check": function(c){ return /get-authenticodesignature/i.test(c) && /fix-permissions/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\.\\fix-permissions\.ps1/i.test(c) && !/get-authenticodesignature/i.test(c) && !/get-content/i.test(c); },
        "output": "(if execution policy allows it, the script just runs, potentially against production, with zero confirmation of who actually wrote it)",
        "note": "Running it directly, even if execution policy happens to allow it, tells you nothing about who actually wrote or signed it. Get-AuthenticodeSignature checks that directly, before the script ever gets a chance to run against anything."
      }
    ],
    "hint": "Get-AuthenticodeSignature .\\Fix-Permissions.ps1 checks the file's actual digital signature status directly.",
    "tokens": [
      {
        "text": "Get-AuthenticodeSignature",
        "cat": "cmdlet",
        "note": "Checks a file's digital signature status directly: signed or not, and by whom, if so."
      },
      {
        "text": ".\\Fix-Permissions.ps1",
        "cat": "value",
        "note": "The untrusted script downloaded from a random gist."
      }
    ],
    "output": "SignerCertificate                        Status                                    Path\n------------------                       ------                                    ----\n                                          NotSigned                                 Fix-Permissions.ps1",
    "order": "This is always the first move for a script from an unknown or untrusted source, confirming its actual trust status directly, before reading its content or considering running it at all.",
    "notice": [
      {
        "field": "Status: NotSigned",
        "note": "Confirms this script has no digital signature at all, exactly the kind of thing worth knowing before running it anywhere near production."
      }
    ],
    "distractor": {
      "name": "Just running the script directly",
      "why": "Even if execution policy happens to allow it, running it first tells you nothing in advance about who wrote it or whether it's trustworthy. Checking the signature is the step that comes before deciding whether to run anything at all.",
      "better": "Better fit for: never as the first move on an unfamiliar script, though fine for a script you've already reviewed and trust."
    },
    "concepts": [
      {
        "term": "Get-AuthenticodeSignature",
        "explain": "Checks whether a script (or any file) carries a valid digital signature, and identifies who signed it, if anyone. The concrete way to check trustworthiness, rather than assuming based on where a file came from."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - read the script's actual content",
    "task": "Now, since it's unsigned, actually read through the script's content before considering running it at all.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Content",
        "hint": "Reads the raw script text, letting you review exactly what it does before ever executing it."
      },
      {
        "text": ".\\Fix-Permissions.ps1",
        "hint": "Same script."
      }
    ],
    "check": function(c){ return /get-content/i.test(c) && /fix-permissions/i.test(c); },
    "misses": [],
    "hint": "Get-Content .\\Fix-Permissions.ps1 reads the raw script text, letting you review exactly what it does before ever running it, especially important now that step 1 confirmed it's unsigned.",
    "tokens": [
      {
        "text": "Get-Content",
        "cat": "cmdlet",
        "note": "Reads a script's raw text directly, the same discovery habit from an earlier lesson, now applied specifically because the script failed the trust check in step 1."
      },
      {
        "text": ".\\Fix-Permissions.ps1",
        "cat": "value",
        "note": "The unsigned script being reviewed."
      }
    ],
    "output": "Get-Acl C:\\Shared | Set-Acl -Path C:\\Windows\\System32\nRemove-Item C:\\Windows\\System32\\* -Recurse -Force",
    "order": "This comes right after confirming the script is unsigned, an unsigned script from an unknown source genuinely deserves a manual read before anyone considers running it, exactly what this line reveals was worth doing.",
    "notice": [
      {
        "field": "C:\\Windows\\System32, Remove-Item ... -Recurse -Force",
        "note": "This script would have overwritten and then deleted core system files, exactly the kind of outcome that checking its signature and content upfront was meant to catch before it ran anywhere."
      }
    ],
    "distractor": {
      "name": "Trusting it because it looked like it did what the gist description claimed",
      "why": "A description on a random gist page is just text someone wrote, it has no relationship to what the actual script code does. Reading the real content directly is the only way to know for certain.",
      "better": "Better fit for: never, a description is never a substitute for reading the actual code."
    },
    "concepts": [
      {
        "term": "Review before you run, especially unsigned scripts",
        "explain": "An unsigned script from an unfamiliar source deserves a manual read before ever being run, exactly what this step's discovery of a destructive System32 deletion was there to catch."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm what execution policy actually would have done",
    "task": "Now confirm whether the current execution policy would have even allowed this unsigned script to run in the first place.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ExecutionPolicy",
        "hint": "The same cmdlet from an earlier lesson, now checked specifically against this scenario."
      }
    ],
    "check": function(c){ return /get-executionpolicy/i.test(c); },
    "misses": [],
    "hint": "Get-ExecutionPolicy, the same cmdlet from an earlier lesson, confirms directly whether RemoteSigned would have blocked this specific unsigned script.",
    "tokens": [
      {
        "text": "Get-ExecutionPolicy",
        "cat": "cmdlet",
        "note": "Reports the currently effective execution policy."
      }
    ],
    "output": "RemoteSigned",
    "order": "This is last, closing the loop on what execution policy actually protects against: under RemoteSigned, a locally-created script runs freely regardless of signing, but a script downloaded from the internet, exactly this gist, needs a trusted signature or it's blocked outright.",
    "notice": [
      {
        "field": "RemoteSigned, and this script is NotSigned and downloaded",
        "note": "Since Fix-Permissions.ps1 came from a gist (an internet source) and has no signature, RemoteSigned would have actually blocked it from running at all, catching this specific danger even before steps 1 and 2's manual review."
      }
    ],
    "distractor": {
      "name": "Assuming execution policy alone is enough protection",
      "why": "Execution policy is a safety net against accidentally running unsigned scripts from the internet, not a comprehensive security boundary. It wouldn't have caught a signed-but-malicious script, or one run locally after being downloaded and saved first. Manually reviewing content, steps 1 and 2, still matters.",
      "better": "Better fit for: catching accidental execution of unreviewed internet scripts specifically, one layer of protection, not the only one needed."
    },
    "concepts": [
      {
        "term": "Execution policy is a safety net, not a security boundary",
        "explain": "RemoteSigned and similar policies catch accidental execution of unsigned scripts downloaded from the internet, a meaningful safety net, but not a substitute for actually reviewing what a script does, especially since policies can be bypassed or a file's 'downloaded from the internet' marker can be stripped."
      }
    ]
  }
];

var PS_EXAM_POOL_EXPERT = [
  {
    "title": "Step 1 of 3 - write the single-machine example call",
    "task": "Write what calling the finished tool against one machine should look like, before any code exists.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01",
        "hint": "A single, plain example call, Verb-Noun name, one required-feeling parameter."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /-computername/i.test(c) && /srv01/i.test(c); },
    "misses": [],
    "hint": "Get-MachineInfo -ComputerName SRV01, the simplest possible usage example, written before any actual function code exists.",
    "tokens": [
      {
        "text": "Get-MachineInfo",
        "cat": "cmdlet",
        "note": "The not-yet-written tool, already named Verb-Noun style even before a line of its code exists."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "The parameter this example call already implies the function will need."
      },
      {
        "text": "SRV01",
        "cat": "value",
        "note": "A single target machine."
      }
    ],
    "output": "(no code exists yet, this is purely a usage example, the design deliverable this chapter insists on writing first)",
    "order": "This is written first, before any implementation, because a usage example forces you to decide what the finished interface looks like before getting lost in how it works internally.",
    "notice": [
      {
        "field": "No implementation anywhere",
        "note": "This step is entirely about the interface, what a caller would type, not what happens inside the function."
      }
    ],
    "distractor": {
      "name": "Jumping straight to writing the function body",
      "why": "Without deciding what calling the finished tool should look like first, it's easy to end up with a function whose parameters don't actually match how people would naturally want to call it.",
      "better": "Better fit for: never as the first move, design-first is specifically about deciding the interface before the implementation."
    },
    "concepts": [
      {
        "term": "Design first: usage examples",
        "explain": "Writing example calls exactly as you'd want to type them, before any code exists, is the primary design deliverable this chapter recommends. It reveals the real parameter list before you're deep in implementation details."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - write the multi-machine example call",
    "task": "Now write an example call against several machines at once.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03",
        "hint": "Reveals that -ComputerName needs to accept more than one value, an array, not just a single string."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /-computername/i.test(c) && /srv01/i.test(c) && /srv02/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && /srv01/i.test(c) && !/srv02/i.test(c); },
        "output": "(same single-machine example from step 1, doesn't reveal anything new about the parameter's actual required shape)",
        "note": "That's a repeat of step 1's example. Writing a multi-machine call specifically is what reveals -ComputerName needs to be typed as an array ([string[]]), not a single string, information the single-machine example alone never would have surfaced."
      }
    ],
    "hint": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03, this specific example is what reveals -ComputerName needs to accept multiple values.",
    "tokens": [
      {
        "text": "Get-MachineInfo",
        "cat": "cmdlet",
        "note": "Same not-yet-built tool."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "The same parameter as step 1, but this example proves it needs to accept an array."
      },
      {
        "text": "SRV01,SRV02,SRV03",
        "cat": "value",
        "note": "Multiple machines, comma-separated, exactly the shape that reveals the parameter's real type requirement."
      }
    ],
    "order": "This comes right after the single-machine example, and specifically because it's different, several machines instead of one, it reveals a design requirement the first example alone couldn't show.",
    "output": "(still no code, but this example alone reveals that -ComputerName must be typed as [string[]], an array, not a plain [string])",
    "notice": [
      {
        "field": "Multiple comma-separated values",
        "note": "This single example already tells you something concrete about the eventual parameter's type, before any code exists to get wrong."
      }
    ],
    "distractor": {
      "name": "Assuming the single-machine example already covers this",
      "why": "A parameter that only accepts one value looks identical to one that accepts several, right up until someone actually tries passing several. Writing this example specifically is what catches the difference upfront.",
      "better": "Better fit for: never skipping, each meaningfully different usage scenario deserves its own example."
    },
    "concepts": [
      {
        "term": "Multiple usage examples surface different requirements",
        "explain": "A single usage example only reveals so much. Writing several genuinely different ones, one machine, many machines, with extra options, surfaces different parameter requirements before any of them get implemented."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - write the logging example call",
    "task": "Now write an example call where failures should be logged to a file instead of just displayed.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 -LogFailuresToPath C:\\Logs\\failures.txt",
        "hint": "Reveals a whole second parameter the earlier two examples never surfaced."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /-logfailurestopath/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && !/logfailurestopath/i.test(c) && /srv01/i.test(c); },
        "output": "(still just step 1 or 2's example, this scenario, logging failures to a file, was never actually written down)",
        "note": "Neither earlier example mentions logging failures anywhere. Without writing this specific usage example, that entire parameter, -LogFailuresToPath, would be easy to forget about until the implementation was already underway."
      }
    ],
    "hint": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 -LogFailuresToPath C:\\Logs\\failures.txt, this example is what reveals an entire second parameter the other two never surfaced.",
    "tokens": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03",
        "cat": "value",
        "note": "Same multi-machine call from step 2."
      },
      {
        "text": "-LogFailuresToPath",
        "cat": "param",
        "note": "A brand new parameter, only surfaced because this specific usage scenario was written down as an example."
      },
      {
        "text": "C:\\Logs\\failures.txt",
        "cat": "value",
        "note": "Where failures should be logged, instead of just displayed."
      }
    ],
    "output": "(three finished usage examples now exist, and between them, they've already revealed every parameter the real function will need, before a single line of implementation was written)",
    "order": "This is last, and completes the design deliverable: three genuinely different usage scenarios, each surfacing something the others didn't, all written before any actual code.",
    "notice": [
      {
        "field": "Three examples, two full parameters revealed",
        "note": "-ComputerName needing to be an array, and -LogFailuresToPath existing at all, both surfaced purely from writing usage examples, before implementation began."
      }
    ],
    "distractor": {
      "name": "Skipping this scenario since it seemed like an edge case",
      "why": "Logging failures wasn't a hypothetical edge case, it was explicitly part of the original request. Skipping it here would mean discovering the missing parameter later, mid-implementation, exactly what design-first is meant to prevent.",
      "better": "Better fit for: never skipping a genuinely requested scenario just because it's the least common one."
    },
    "concepts": [
      {
        "term": "Design deliverable: usage examples first",
        "explain": "This chapter's core recommendation: write out how you'd want to call the finished tool, in several genuinely different scenarios, before writing any of its actual implementation. The examples themselves become the parameter design."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - get the raw command working first",
    "task": "Before any function exists, get the actual CIM query working correctly as a plain one-liner.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-CimInstance",
        "hint": "The underlying command doing the real work."
      },
      {
        "text": "-ClassName Win32_OperatingSystem",
        "hint": "The specific class being queried."
      },
      {
        "text": "-ComputerName SRV01",
        "hint": "Tested against one real, known machine first."
      }
    ],
    "check": function(c){ return /get-ciminstance/i.test(c) && /win32_operatingsystem/i.test(c) && /srv01/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /function\s+get-machineinfo/i.test(c) && /get-ciminstance/i.test(c); },
        "output": "(if the CIM query itself has a typo or wrong class name, the error now shows up buried inside a function body, harder to isolate than a plain one-liner would have been)",
        "note": "Writing the query directly inside the function from the start means any mistake in the query itself now has to be found buried inside function syntax, param blocks, and everything else around it. Getting the plain command right first, alone, makes any query-specific mistake immediately obvious and isolated."
      }
    ],
    "hint": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV01, run directly, no function wrapper yet, just the plain working command.",
    "tokens": [
      {
        "text": "Get-CimInstance",
        "cat": "cmdlet",
        "note": "The actual command doing the real work, tested completely on its own first."
      },
      {
        "text": "-ClassName",
        "cat": "param",
        "note": "Which CIM class to query."
      },
      {
        "text": "Win32_OperatingSystem",
        "cat": "value",
        "note": "OS details."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Tested against one specific, known-good machine."
      },
      {
        "text": "SRV01",
        "cat": "value",
        "note": "A real target to confirm the query actually works before it goes anywhere near a function."
      }
    ],
    "output": "Caption               Version    BuildNumber\n-------               -------    -----------\nMicrosoft Windows...  10.0.20348 20348",
    "order": "This runs first, deliberately, proving the actual underlying logic works in complete isolation, before it's wrapped in anything else that could make a future mistake harder to isolate.",
    "notice": [
      {
        "field": "Clean, correct output, and nothing else going on",
        "note": "Confirms the query itself is fully correct before any function-related complexity gets added around it."
      }
    ],
    "distractor": {
      "name": "Writing the query directly inside a function from the start",
      "why": "If the query itself has a mistake, that error now shows up mixed in with param blocks, braces, and everything else around it, much harder to isolate than a plain one-liner's error would be.",
      "better": "Better fit for: once the underlying command has already been proven correct on its own, exactly what step 1 establishes before wrapping it in anything."
    },
    "concepts": [
      {
        "term": "Start with a command, not a function",
        "explain": "Get the actual underlying logic working as a plain, standalone command first. Debugging a broken one-liner directly is faster and clearer than debugging the same mistake once it's buried inside function syntax."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - confirm it against a second, different machine",
    "task": "Before trusting it, confirm the same command works correctly against a second, different machine too.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-CimInstance",
        "hint": "Same command."
      },
      {
        "text": "-ClassName Win32_OperatingSystem",
        "hint": "Same class."
      },
      {
        "text": "-ComputerName SRV02",
        "hint": "A different machine than step 1, confirming the command isn't accidentally specific to just one target."
      }
    ],
    "check": function(c){ return /get-ciminstance/i.test(c) && /win32_operatingsystem/i.test(c) && /srv02/i.test(c); },
    "misses": [],
    "hint": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV02, the same command from step 1, now tested against a different machine.",
    "tokens": [
      {
        "text": "Get-CimInstance",
        "cat": "cmdlet",
        "note": "Same command from step 1."
      },
      {
        "text": "-ClassName Win32_OperatingSystem",
        "cat": "param",
        "note": "Same class."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Same parameter."
      },
      {
        "text": "SRV02",
        "cat": "value",
        "note": "A genuinely different machine, confirming the command's correctness isn't a coincidence specific to SRV01."
      }
    ],
    "output": "Caption               Version    BuildNumber\n-------               -------    -----------\nMicrosoft Windows...  10.0.19045 19045",
    "order": "This comes right after confirming the command once, testing it a second time against a different target rules out the possibility that step 1's success was coincidental or specific to that one machine.",
    "notice": [
      {
        "field": "Different, still correct output",
        "note": "Confirms the command genuinely works in general, not just against the one specific machine tested in step 1."
      }
    ],
    "distractor": {
      "name": "Trusting step 1's single successful test as enough",
      "why": "One success against one machine doesn't rule out something specific to that particular machine happening to work by coincidence. A second, different target is a more genuine confirmation.",
      "better": "Better fit for: never as the only test before building a function meant to run against many different machines."
    },
    "concepts": [
      {
        "term": "Testing against more than one target",
        "explain": "A command that works against exactly one machine might be coincidentally correct rather than genuinely correct. Testing against a second, different target before trusting it catches that difference."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - now wrap it in the function",
    "task": "Only now, with the command proven correct twice, wrap it in the actual Get-MachineInfo function.",
    "prefill": "",
    "chips": [
      {
        "text": "function Get-MachineInfo {",
        "hint": "The function, built around logic already proven to work."
      },
      {
        "text": "param ([string[]]$ComputerName)",
        "hint": "The parameter, informed by the design work from the previous lesson."
      },
      {
        "text": "foreach ($computer in $ComputerName) { Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $computer }",
        "hint": "The exact same proven query from steps 1 and 2, now parameterized instead of hardcoded."
      },
      {
        "text": "}",
        "hint": "Closes the function."
      }
    ],
    "check": function(c){ return /function\s+get-machineinfo/i.test(c) && /get-ciminstance/i.test(c) && /win32_operatingsystem/i.test(c) && /\$computername/i.test(c); },
    "misses": [],
    "hint": "function Get-MachineInfo { param ([string[]]$ComputerName) foreach ($computer in $ComputerName) { Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $computer } }, the exact proven query, now parameterized.",
    "tokens": [
      {
        "text": "function Get-MachineInfo {",
        "cat": "cmdlet",
        "note": "The function, now being built around already-proven logic instead of untested guesswork."
      },
      {
        "text": "param ([string[]]$ComputerName)",
        "cat": "param",
        "note": "An array parameter, matching the multi-machine usage example from the design lesson."
      },
      {
        "text": "foreach ($computer in $ComputerName) { Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $computer }",
        "cat": "value",
        "note": "The exact query proven correct in steps 1 and 2, just swapped from a hardcoded name to the parameter."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(Get-MachineInfo -ComputerName SRV01,SRV02 now runs the exact same query already proven correct twice, just looped across whatever machines are supplied)",
    "order": "This is last, deliberately, wrapping already-proven logic in a function instead of writing and debugging both the query and the function structure at the same time.",
    "notice": [
      {
        "field": "Identical query logic to steps 1 and 2, just parameterized",
        "note": "Nothing about the actual CIM query changed here, only how its target machine gets supplied, exactly the point of proving it correct first."
      }
    ],
    "distractor": {
      "name": "Writing the function and the query logic simultaneously from scratch",
      "why": "Means debugging two things at once if something goes wrong, the query itself and the function's structure, instead of trusting one already-proven piece while focusing entirely on the other.",
      "better": "Better fit for: a query so trivial that separate testing genuinely wouldn't add anything, rare in practice."
    },
    "concepts": [
      {
        "term": "Wrap proven logic, don't build blind",
        "explain": "Once a command is proven correct on its own, wrapping it in a function is a much smaller, more contained step, you're only introducing the function structure itself, not simultaneously debugging the underlying logic too."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - save it as a script module file",
    "task": "Save the working Get-MachineInfo function into a properly named .psm1 module file.",
    "prefill": "",
    "chips": [
      {
        "text": "New-Item",
        "hint": "Creates the module folder and file."
      },
      {
        "text": "-Path 'ScriptingMOL\\ScriptingMOL.psm1'",
        "hint": "The subfolder name and the filename must match exactly, that's what lets PowerShell auto-discover it."
      }
    ],
    "check": function(c){ return /scriptingmol\\?\/?scriptingmol\.psm1/i.test(c) || (/scriptingmol/i.test(c) && /\.psm1/i.test(c)); },
    "misses": [
      {
        "test": function(c){ return /\.psm1/i.test(c) && /mytools/i.test(c) && /scriptingmol/i.test(c) === false; },
        "output": "(saved fine, but the folder and file are named differently, PowerShell won't auto-discover a module unless the two names match exactly)",
        "note": "PowerShell only auto-discovers a module when its containing folder and its .psm1 filename match exactly. A mismatched name still works if you import it by full path every time, but defeats the whole point of a module anyone can just load by name."
      }
    ],
    "hint": "Save the function into a folder and file both named ScriptingMOL: ScriptingMOL\\ScriptingMOL.psm1, matching names is the one rule that makes auto-discovery work.",
    "tokens": [
      {
        "text": "New-Item",
        "cat": "cmdlet",
        "note": "Creates the folder and file structure for the module."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where to create it."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psm1'",
        "cat": "value",
        "note": "Folder and filename match exactly, ScriptingMOL both times, the one requirement for PowerShell to auto-discover this as a module."
      }
    ],
    "output": "(ScriptingMOL.psm1 created inside a ScriptingMOL folder, with the Get-MachineInfo function's code saved inside it)",
    "order": "This runs first, turning a function that only exists in one console session into an actual saved file, before confirming in the next steps that it loads correctly and matches PowerShell's discovery rules.",
    "notice": [
      {
        "field": "ScriptingMOL folder, ScriptingMOL.psm1 file",
        "note": "The exact matching names PowerShell requires to auto-discover a module without needing its full path typed out every time."
      }
    ],
    "distractor": {
      "name": "Saving it with a mismatched folder and filename",
      "why": "Still works if you always provide the full path to Import-Module, but defeats the actual convenience of a module, being loadable by name alone from anywhere.",
      "better": "Better fit for: never intentionally, mismatched names only work by accident or when full-path importing was already the plan anyway."
    },
    "concepts": [
      {
        "term": "Module folder and filename must match",
        "explain": "For PowerShell to automatically discover a module by name, its containing folder and its .psm1 filename need to match exactly. This is what separates a reusable, easily loadable module from one that only works via a manually-typed full path."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - place it where PowerShell looks automatically",
    "task": "Confirm where PowerShell actually looks for modules by default, so the saved file can go there.",
    "prefill": "",
    "chips": [
      {
        "text": "$env:PSModulePath",
        "hint": "An environment variable listing every folder PowerShell automatically searches for modules."
      },
      {
        "text": "-split ';'",
        "hint": "Splits the raw semicolon-separated string into individual, readable paths."
      }
    ],
    "check": function(c){ return /\$env:psmodulepath/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /c:\\program files/i.test(c) && !/psmodulepath/i.test(c); },
        "output": "(guessing at a plausible-looking path without confirming it's actually one PowerShell searches automatically)",
        "note": "Guessing at a folder that sounds right risks placing the module somewhere PowerShell never actually looks. $env:PSModulePath is the definitive, confirmed list of every folder PowerShell automatically searches, no guessing required."
      }
    ],
    "hint": "$env:PSModulePath -split ';' shows every folder PowerShell automatically searches for modules, confirming exactly where to place the file instead of guessing.",
    "tokens": [
      {
        "text": "$env:PSModulePath",
        "cat": "value",
        "note": "An environment variable listing every folder PowerShell searches automatically when looking for a module by name."
      },
      {
        "text": "-split",
        "cat": "param",
        "note": "Breaks the raw semicolon-separated string into individually readable paths."
      },
      {
        "text": "';'",
        "cat": "value",
        "note": "The separator character used in this particular environment variable."
      }
    ],
    "output": "C:\\Users\\jsmith\\Documents\\PowerShell\\Modules\nC:\\Program Files\\PowerShell\\Modules\nC:\\Program Files\\PowerShell\\7\\Modules",
    "order": "This comes right after saving the module file, confirming exactly where PowerShell will actually look for it automatically, rather than guessing at a plausible-sounding location.",
    "notice": [
      {
        "field": "Multiple confirmed real paths, not a guess",
        "note": "Placing the ScriptingMOL folder from step 1 into any one of these confirmed locations is what makes it auto-discoverable by name."
      }
    ],
    "distractor": {
      "name": "Guessing at a folder that sounds like it should work",
      "why": "A plausible-sounding path might not actually be one PowerShell searches automatically. $env:PSModulePath is the definitive, confirmed list, no guessing needed.",
      "better": "Better fit for: never guessing when the definitive list is one command away."
    },
    "concepts": [
      {
        "term": "$env:PSModulePath",
        "explain": "The environment variable listing every folder PowerShell automatically searches when a module is referenced by name alone. Placing a properly named module folder in any of these locations makes it discoverable without a full path."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it loads in a fresh session",
    "task": "Confirm the module actually loads correctly, by name alone, in what would be a brand new session.",
    "prefill": "",
    "chips": [
      {
        "text": "Import-Module",
        "hint": "Loads a module's commands into the current session."
      },
      {
        "text": "ScriptingMOL",
        "hint": "Referenced by name alone, since it's now in a location PowerShell searches automatically."
      }
    ],
    "check": function(c){ return /import-module/i.test(c) && /scriptingmol/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && !/import-module/i.test(c); },
        "output": "The term 'Get-MachineInfo' is not recognized as the name of a cmdlet, function, script file, or operable program.",
        "note": "In a genuinely fresh session, the function doesn't exist until its module is actually imported. Running the command directly, without first importing the module, fails exactly the way it would for a teammate who's never loaded this session's in-memory function."
      }
    ],
    "hint": "Import-Module ScriptingMOL, referenced by name alone, confirming the module was placed correctly and is auto-discoverable, no full path needed.",
    "tokens": [
      {
        "text": "Import-Module",
        "cat": "cmdlet",
        "note": "Loads a module's commands into the current session."
      },
      {
        "text": "ScriptingMOL",
        "cat": "value",
        "note": "Referenced by name alone, proof the module is sitting in one of PowerShell's automatically searched locations."
      }
    ],
    "output": "(ScriptingMOL module imported, Get-MachineInfo now available in this session)",
    "order": "This is last, the real proof that steps 1 and 2 actually worked together: a properly named module, placed in a location PowerShell searches automatically, loadable by name alone, exactly what makes it usable by anyone on the team.",
    "notice": [
      {
        "field": "Loaded by name alone, no path typed",
        "note": "This is the concrete difference between a function that only ever existed in one console session and a genuinely reusable module."
      }
    ],
    "distractor": {
      "name": "Only testing in the same session where the function was originally typed",
      "why": "That session already has the function defined in memory from earlier, it wouldn't actually prove the module loads correctly from scratch. A genuinely fresh session, or explicitly importing by name, is the real test.",
      "better": "Better fit for: never as the only test, the whole point is proving it works for someone who's never seen this function before."
    },
    "concepts": [
      {
        "term": "Import-Module by name",
        "explain": "Once a module is correctly named and placed in a location listed in $env:PSModulePath, it can be loaded with just Import-Module <name>, no path required, exactly what makes it usable by anyone on the team, not just in the console session it was written in."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - unlock -Verbose support",
    "task": "First, turn on the advanced-function feature that unlocks common parameters like -Verbose.",
    "prefill": "",
    "chips": [
      {
        "text": "[CmdletBinding()]",
        "hint": "The same decorator from an earlier lesson, here specifically unlocking -Verbose and the other 10+ common parameters."
      }
    ],
    "check": function(c){ return /\[cmdletbinding\(\)\]/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-verbose/i.test(c) && !/cmdletbinding/i.test(c); },
        "output": "(Write-Verbose calls exist in the function, but -Verbose itself was never actually offered as a usable parameter, so there's no way to turn that output on)",
        "note": "Write-Verbose calls only actually do anything once [CmdletBinding()] has unlocked -Verbose as a real, usable common parameter. Without it, the function has no way to turn that output on at all."
      }
    ],
    "hint": "[CmdletBinding()] as the first line in the function, unlocking -Verbose along with the rest of PowerShell's common parameters.",
    "tokens": [
      {
        "text": "[CmdletBinding()]",
        "cat": "param",
        "note": "Unlocks common parameters like -Verbose, -ErrorAction, and -Debug, the actual defining feature of an advanced function."
      }
    ],
    "output": "(help test now shows [-Verbose] and [-Debug] among its available parameters, none of which existed before this line was added)",
    "order": "This is first because every remaining piece of this lesson, -Verbose output and pipeline input, depends on the function actually being an advanced function first.",
    "notice": [
      {
        "field": "[<CommonParameters>] now appears in the function's syntax",
        "note": "Direct confirmation that CmdletBinding successfully unlocked -Verbose and the rest of the common parameter set."
      }
    ],
    "distractor": {
      "name": "Adding Write-Verbose calls without CmdletBinding first",
      "why": "Write-Verbose only produces visible output when -Verbose has actually been turned on for that call, and -Verbose only exists as a usable parameter once CmdletBinding is in place.",
      "better": "Better fit for: never on its own, CmdletBinding and any use of the common parameters it unlocks are a package deal."
    },
    "concepts": [
      {
        "term": "Common parameters",
        "explain": "A set of 11+ parameters, including -Verbose, -Debug, and -ErrorAction, that every advanced function automatically supports once [CmdletBinding()] is added, no extra code required to enable them individually."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - add quiet-by-default verbose output",
    "task": "Now add step-by-step status output that stays completely silent unless someone explicitly asks for it with -Verbose.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Verbose",
        "hint": "Only visible when -Verbose is explicitly used, silent by default, unlike Write-Host which always shows."
      },
      {
        "text": "\"Querying $computer...\"",
        "hint": "The status message content."
      }
    ],
    "check": function(c){ return /write-verbose/i.test(c) && /querying/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-host/i.test(c) && /querying/i.test(c) && !/write-verbose/i.test(c); },
        "output": "Querying SRV01...\nQuerying SRV02...\nQuerying SRV03...\n(this always prints, for every user, every single time, whether or not anyone actually wanted this level of detail)",
        "note": "Write-Host always prints, with no way to quietly turn it off. Write-Verbose stays completely silent by default, only appearing when a caller explicitly adds -Verbose, exactly the 'not noisy by default' requirement."
      }
    ],
    "hint": "Write-Verbose \"Querying $computer...\" stays silent unless -Verbose is explicitly used when calling the function, unlike Write-Host which always shows.",
    "tokens": [
      {
        "text": "Write-Verbose",
        "cat": "cmdlet",
        "note": "Produces output only visible when the caller explicitly adds -Verbose, silent by default, unlocked by CmdletBinding from step 1."
      },
      {
        "text": "\"Querying $computer...\"",
        "cat": "value",
        "note": "The actual status message, only shown to someone who asked for this level of detail."
      }
    ],
    "output": "(nothing prints by default; running Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 -Verbose shows 'Querying SRV01...', 'Querying SRV02...', 'Querying SRV03...' as each one runs)",
    "order": "This comes right after unlocking CmdletBinding, adding the actual quiet-by-default status output the request specifically asked for, not noisy for everyone by default.",
    "notice": [
      {
        "field": "Silent unless -Verbose is added",
        "note": "This is the exact behavior Write-Host could never offer, visible only to someone who explicitly opts in."
      }
    ],
    "distractor": {
      "name": "Write-Host for the status messages",
      "why": "Always prints, for every caller, every time, with no way to quietly suppress it. The request specifically wanted this detail available but not noisy by default, exactly what Write-Verbose provides and Write-Host cannot.",
      "better": "Better fit for: a message that should always be visible to everyone, regardless of any preference, genuinely rare in a well-designed tool."
    },
    "concepts": [
      {
        "term": "Write-Verbose",
        "explain": "Produces output only visible when a caller explicitly adds -Verbose (or sets $VerbosePreference). The correct way to offer optional, detailed status information without being noisy for everyone by default."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - accept computer names piped in directly",
    "task": "Now make the function accept computer names piped straight in, from something like Get-Content, not just typed as an array by hand.",
    "prefill": "",
    "chips": [
      {
        "text": "[Parameter(ValueFromPipeline=$True)]",
        "hint": "Placed above the parameter, tells PowerShell this specific parameter can receive a value directly from the pipeline."
      },
      {
        "text": "[string[]]$ComputerName",
        "hint": "The existing parameter, now additionally pipeline-aware."
      }
    ],
    "check": function(c){ return /valuefrompipeline\s*=\s*\$true/i.test(c) && /\$computername/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-content/i.test(c) && /get-machineinfo/i.test(c) && !/valuefrompipeline/i.test(c); },
        "output": "(runs, but -ComputerName never actually receives anything from the pipe, it silently stays empty or errors, since the parameter was never told it could accept pipeline input)",
        "note": "Piping into a function does nothing on its own unless a specific parameter has been explicitly marked to accept it. [Parameter(ValueFromPipeline=$True)] is what tells PowerShell 'this parameter can receive its value directly from whatever's piped in.'"
      }
    ],
    "hint": "Add [Parameter(ValueFromPipeline=$True)] directly above [string[]]$ComputerName, telling PowerShell this specific parameter can accept piped-in values.",
    "tokens": [
      {
        "text": "[Parameter(ValueFromPipeline=$True)]",
        "cat": "param",
        "note": "Marks this specific parameter as able to receive its value directly from piped input, not just from being typed explicitly."
      },
      {
        "text": "[string[]]$ComputerName",
        "cat": "value",
        "note": "The same parameter from earlier lessons, now additionally pipeline-aware."
      }
    ],
    "output": "(Get-Content servers.txt | Get-MachineInfo now works, each line from the file flowing directly into -ComputerName)",
    "order": "This is last, and it's a genuinely different kind of parameter enhancement than -Verbose, this one changes how a value can arrive at the parameter in the first place, not just what optional output is available.",
    "notice": [
      {
        "field": "Get-Content servers.txt | Get-MachineInfo, no -ComputerName typed at all",
        "note": "Direct proof the function now accepts piped-in values, exactly the same ByValue mechanic proven with Trace-Command back in an earlier lesson, now applied to a function you built yourself."
      }
    ],
    "distractor": {
      "name": "Piping into the function without ValueFromPipeline set",
      "why": "PowerShell has no way to know which parameter a piped-in value should bind to unless a parameter is explicitly marked with ValueFromPipeline. Without it, the pipe either fails outright or silently does nothing useful.",
      "better": "Better fit for: never skipping this attribute if pipeline input is genuinely a requirement, exactly what this lesson's request specified."
    },
    "concepts": [
      {
        "term": "ValueFromPipeline",
        "explain": "Marks a specific parameter as able to receive its value directly from piped-in input, the same underlying mechanic behind Get-Service | Stop-Service, now available to add to your own functions."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - see the problem with the raw output",
    "task": "First look at what Get-CimInstance hands back raw, to see exactly why it's not fit to be the function's output as-is.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-CimInstance",
        "hint": "The raw command."
      },
      {
        "text": "-ClassName Win32_OperatingSystem -ComputerName SRV01 | Get-Member",
        "hint": "Confirming exactly how many properties actually exist on the raw object."
      }
    ],
    "check": function(c){ return /get-ciminstance/i.test(c) && /get-member/i.test(c); },
    "misses": [],
    "hint": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV01 | Get-Member, confirming directly just how many properties the raw object actually carries.",
    "tokens": [
      {
        "text": "Get-CimInstance",
        "cat": "cmdlet",
        "note": "Returns the raw CIM object, dozens of properties, most of them irrelevant to this specific tool's purpose."
      },
      {
        "text": "-ClassName Win32_OperatingSystem -ComputerName SRV01",
        "cat": "param",
        "note": "Same query from an earlier lesson."
      },
      {
        "text": "Get-Member",
        "cat": "cmdlet",
        "note": "Confirms exactly how many properties exist on the raw object."
      }
    ],
    "output": "   TypeName: Microsoft.Management.Infrastructure.CimInstance#root/cimv2/Win32_OperatingSystem\n\n(60+ properties listed: BootDevice, BuildNumber, Caption, CodeSet, CountryCode, CreationClassName, CSName, ...)",
    "order": "This runs first, confirming concretely why raw CIM output isn't a good fit as a tool's final output, dozens of properties nobody asked for, most genuinely irrelevant to this specific request.",
    "notice": [
      {
        "field": "60+ properties",
        "note": "The scale of the actual problem: a caller wanting just three specific values has to wade through dozens of irrelevant ones in the raw object."
      }
    ],
    "distractor": {
      "name": "Just outputting the raw CIM object directly",
      "why": "Technically real data, but drowns the three properties anyone actually wants in dozens of irrelevant ones, awkward to work with and a poor interface for a tool meant to be reused.",
      "better": "Better fit for: quick, one-off interactive exploration, not a tool meant to be a clean, reusable interface."
    },
    "concepts": [
      {
        "term": "Raw output isn't always good output",
        "explain": "A command's raw return value can be real, genuine data and still be a poor choice for a tool's actual output, if it's cluttered with far more than a caller actually needs. Deciding what belongs in the final shape is part of good tool design."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - build a clean custom object",
    "task": "Now build a clean custom object with just ComputerName, OSVersion, and BuildNumber.",
    "prefill": "",
    "chips": [
      {
        "text": "[PSCustomObject]@{",
        "hint": "Builds a real, genuine custom object with exactly the properties you choose, no more, no less."
      },
      {
        "text": "ComputerName = $computer",
        "hint": "First property."
      },
      {
        "text": "OSVersion = $os.Version",
        "hint": "Second property, pulled from the raw CIM object."
      },
      {
        "text": "BuildNumber = $os.BuildNumber",
        "hint": "Third property, same source."
      },
      {
        "text": "}",
        "hint": "Closes the custom object."
      }
    ],
    "check": function(c){ return /\[pscustomobject\]/i.test(c) && /computername/i.test(c) && /osversion/i.test(c) && /buildnumber/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /select-object/i.test(c) && /version/i.test(c) && !/pscustomobject/i.test(c); },
        "output": "(Select-Object works here too, but only ever narrows down properties that already exist on the source object, it can't rename them or combine values from more than one source cleanly)",
        "note": "Select-Object can narrow down existing properties, but [PSCustomObject] gives full control: renaming OSVersion from whatever the raw property was actually called, and structuring the exact three-property shape the request specifically asked for, cleanly."
      }
    ],
    "hint": "[PSCustomObject]@{ ComputerName = $computer; OSVersion = $os.Version; BuildNumber = $os.BuildNumber }, exactly the three properties requested, cleanly named.",
    "tokens": [
      {
        "text": "[PSCustomObject]@{",
        "cat": "value",
        "note": "Builds a genuine, real custom object with exactly the shape you define."
      },
      {
        "text": "ComputerName = $computer",
        "cat": "value",
        "note": "First of exactly three properties."
      },
      {
        "text": "OSVersion = $os.Version",
        "cat": "value",
        "note": "Second property, its name chosen deliberately, not just inherited from the raw CIM property name."
      },
      {
        "text": "BuildNumber = $os.BuildNumber",
        "cat": "value",
        "note": "Third and final property."
      },
      {
        "text": "}",
        "cat": "value",
        "note": "Closes the object definition."
      }
    ],
    "output": "ComputerName OSVersion  BuildNumber\n------------ ---------  -----------\nSRV01        10.0.20348 20348",
    "order": "This comes right after seeing the raw output's problem, building the deliberately narrow, clean shape the request actually asked for, instead of the sprawling raw CIM object from step 1.",
    "notice": [
      {
        "field": "Exactly three properties",
        "note": "Precisely what the request asked for, nothing more, a direct contrast with step 1's 60+ raw properties."
      }
    ],
    "distractor": {
      "name": "Select-Object on the raw CIM object",
      "why": "Narrows down to existing properties fine, but can't cleanly rename them or combine values, and here the request specifically wanted a purpose-built shape, exactly what [PSCustomObject] is for.",
      "better": "Better fit for: when the raw object's existing property names are already exactly what you want, just fewer of them."
    },
    "concepts": [
      {
        "term": "[PSCustomObject]",
        "explain": "Builds a genuine, real custom object with exactly the properties and names you define, giving full control over a tool's output shape, rather than being constrained to whatever a source command's raw properties happened to be called."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it's still a real, usable object",
    "task": "Confirm the custom object is still genuinely real and reusable, not just text that happens to look right.",
    "prefill": "",
    "chips": [
      {
        "text": "[PSCustomObject]@{ ComputerName = $computer; OSVersion = $os.Version; BuildNumber = $os.BuildNumber }",
        "hint": "The object from step 2."
      },
      {
        "text": "Get-Member",
        "hint": "The same discovery habit from way back in chapter 8, confirming this is genuinely real."
      }
    ],
    "check": function(c){ return /\[pscustomobject\]/i.test(c) && /get-member/i.test(c); },
    "misses": [],
    "hint": "Pipe the custom object from step 2 into Get-Member, the same habit from chapter 8, confirming it's genuinely a real, usable object, not display-only text.",
    "tokens": [
      {
        "text": "[PSCustomObject]@{ ... }",
        "cat": "value",
        "note": "The clean custom object from step 2."
      },
      {
        "text": "Get-Member",
        "cat": "cmdlet",
        "note": "Confirms the object's real type and properties, exactly the habit from chapter 8, now applied to a custom object you built yourself."
      }
    ],
    "output": "   TypeName: System.Management.Automation.PSCustomObject\n\nName          MemberType   Definition\n----          ----------   ----------\nComputerName  NoteProperty string ComputerName=SRV01\nOSVersion     NoteProperty string OSVersion=10.0.20348\nBuildNumber   NoteProperty string BuildNumber=20348",
    "order": "This is last, closing the loop back to chapter 8's core habit, confirming this hand-built object is genuinely real and reusable, not just clean-looking text, before trusting it as the function's actual output.",
    "notice": [
      {
        "field": "TypeName: PSCustomObject, three real NoteProperty entries",
        "note": "Confirms directly: this is a genuine, sortable, filterable, exportable object, exactly what the original request needed, not display-only text."
      }
    ],
    "distractor": {
      "name": "Trusting it's a real object just because it displays cleanly",
      "why": "Clean-looking display output and a genuinely real object can look identical printed to a screen, exactly the trap chapter 8 warned about. Get-Member is the concrete way to tell them apart with certainty.",
      "better": "Better fit for: never skipping, this final confirmation costs nothing and removes any doubt."
    },
    "concepts": [
      {
        "term": "PSCustomObject is still real",
        "explain": "A [PSCustomObject] you build yourself is exactly as real and reusable as one returned by a built-in cmdlet, sortable, filterable, exportable, confirmed here with the exact same Get-Member habit that verified built-in objects back in chapter 8."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - a real problem: Write-Warning",
    "task": "When a machine can't be reached, produce a message that stands out as an actual problem.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Warning",
        "hint": "Produces a distinct yellow warning message, visible by default, but separately suppressible with -WarningAction and capturable with -WarningVariable."
      },
      {
        "text": "\"$computer could not be reached\"",
        "hint": "The actual problem message."
      }
    ],
    "check": function(c){ return /write-warning/i.test(c) && /could not be reached/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-host/i.test(c) && /could not be reached/i.test(c) && !/write-warning/i.test(c); },
        "output": "SRV03 could not be reached\n(prints in plain default text, indistinguishable from any other Write-Host message, and impossible to suppress or capture separately from normal output)",
        "note": "Write-Host prints everything the same plain way, with no way to distinguish a genuine problem from routine status text, and no way to suppress or capture it separately. Write-Warning is specifically for this: a distinct, separately controllable stream for real problems."
      }
    ],
    "hint": "Write-Warning \"$computer could not be reached\", a distinct stream for genuine problems, separately controllable from routine output.",
    "tokens": [
      {
        "text": "Write-Warning",
        "cat": "cmdlet",
        "note": "Produces a distinct warning message, visible by default in yellow, controllable separately with -WarningAction and capturable with -WarningVariable."
      },
      {
        "text": "\"$computer could not be reached\"",
        "cat": "value",
        "note": "The actual problem being flagged."
      }
    ],
    "output": "WARNING: SRV03 could not be reached",
    "order": "This runs first, the most urgent of the three message types, a genuine problem deserving its own distinct, separately controllable stream.",
    "notice": [
      {
        "field": "WARNING: prefix, distinct from normal output",
        "note": "Confirms this used a genuinely separate stream, not the same plain output every other message type would use."
      }
    ],
    "distractor": {
      "name": "Write-Host for the unreachable message",
      "why": "Prints identically to every other Write-Host message, with no way to distinguish a genuine problem from routine status text, and no way to suppress or capture it separately from the rest of a script's output.",
      "better": "Better fit for: a message meant purely for a human watching the screen, with no meaningful distinction from other output, genuinely rare in a well-designed tool."
    },
    "concepts": [
      {
        "term": "Write-Warning",
        "explain": "A distinct output stream for genuine problems, visible by default (usually in yellow), but separately controllable with -WarningAction and capturable with -WarningVariable, unlike plain Write-Host text."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - opt-in detail: Write-Verbose",
    "task": "Now add step-by-step detail that stays invisible unless someone specifically opts into seeing it.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Verbose",
        "hint": "From an earlier lesson, silent by default, visible only with -Verbose."
      },
      {
        "text": "\"Connecting to $computer...\"",
        "hint": "Step-by-step detail, the kind nobody wants to see by default."
      }
    ],
    "check": function(c){ return /write-verbose/i.test(c) && /connecting/i.test(c); },
    "misses": [],
    "hint": "Write-Verbose \"Connecting to $computer...\", silent by default, only visible with -Verbose, exactly the opt-in detail requested.",
    "tokens": [
      {
        "text": "Write-Verbose",
        "cat": "cmdlet",
        "note": "From an earlier lesson, produces output only visible when -Verbose is explicitly used."
      },
      {
        "text": "\"Connecting to $computer...\"",
        "cat": "value",
        "note": "Step-by-step detail, invisible unless specifically requested."
      }
    ],
    "output": "(nothing by default; with -Verbose added: VERBOSE: Connecting to SRV01...)",
    "order": "This is the second of three genuinely different message types, opt-in detail, distinct from both the urgent warning in step 1 and the general FYI note coming in step 3.",
    "notice": [
      {
        "field": "Completely silent unless -Verbose is added",
        "note": "Exactly the opt-in behavior requested, distinct from Write-Warning's always-visible-by-default behavior in step 1."
      }
    ],
    "distractor": {
      "name": "Write-Warning for step-by-step detail",
      "why": "Write-Warning is always visible by default, exactly the opposite of what routine step-by-step detail should be. Overusing it for non-problems trains callers to start ignoring real warnings.",
      "better": "Better fit for: genuine problems specifically, not routine detail, exactly what step 1 used it for correctly."
    },
    "concepts": [
      {
        "term": "Matching stream to message severity",
        "explain": "Write-Warning, Write-Verbose, and Write-Information each carry a different implicit severity and default visibility. Using the wrong one, like Write-Warning for routine detail, trains callers to tune out real warnings when they matter most."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - an informative note: Write-Information",
    "task": "Now add a general, informative note, not urgent, but more visible than opt-in verbose detail.",
    "prefill": "",
    "chips": [
      {
        "text": "Write-Information",
        "hint": "A stream for informative messages, more visible than Write-Verbose by default in some configurations, but distinctly separate from a warning."
      },
      {
        "text": "\"Checked 5 machines, 1 unreachable.\"",
        "hint": "A general summary note, informative without being urgent."
      },
      {
        "text": "-InformationAction Continue",
        "hint": "Ensures the message actually displays, since Write-Information is silent by default in many sessions unless this is set."
      }
    ],
    "check": function(c){ return /write-information/i.test(c) && /checked 5 machines/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-warning/i.test(c) && /checked 5 machines/i.test(c); },
        "output": "WARNING: Checked 5 machines, 1 unreachable.\n(this isn't actually a problem, just a summary note, but Write-Warning makes it look like one)",
        "note": "This isn't actually a problem, it's a routine summary. Using Write-Warning here makes a non-issue look urgent, exactly the kind of overuse that trains people to start ignoring real warnings, like the one correctly used in step 1."
      }
    ],
    "hint": "Write-Information \"Checked 5 machines, 1 unreachable.\" -InformationAction Continue, a general note, distinct from both the urgent warning in step 1 and the silent-by-default detail in step 2.",
    "tokens": [
      {
        "text": "Write-Information",
        "cat": "cmdlet",
        "note": "A stream specifically for informative messages, distinct from both warnings and verbose detail."
      },
      {
        "text": "\"Checked 5 machines, 1 unreachable.\"",
        "cat": "value",
        "note": "A general, non-urgent summary note."
      },
      {
        "text": "-InformationAction",
        "cat": "param",
        "note": "Controls whether Write-Information output actually displays, since it can be silent by default in some configurations."
      },
      {
        "text": "Continue",
        "cat": "value",
        "note": "Ensures this particular message actually shows."
      }
    ],
    "output": "INFO: Checked 5 machines, 1 unreachable.",
    "order": "This is last, the third genuinely distinct message type, general and informative, but neither an urgent problem like step 1's warning, nor opt-in-only detail like step 2's verbose output.",
    "notice": [
      {
        "field": "Three genuinely different streams used for three genuinely different purposes",
        "note": "Write-Warning for a real problem, Write-Verbose for opt-in detail, Write-Information for a general note, exactly matching each message's actual nature instead of Write-Host for all three."
      }
    ],
    "distractor": {
      "name": "Write-Host for the summary note",
      "why": "Works, but flattens every message type into the same plain, always-visible text, with no way for a caller to filter, suppress, or capture different kinds of output separately, exactly what this whole lesson was about avoiding.",
      "better": "Better fit for: a message that genuinely needs to be identical to every other message type, no meaningful distinction, rare in a well-designed tool."
    },
    "concepts": [
      {
        "term": "PowerShell's output streams",
        "explain": "PowerShell has several distinct output streams (Success, Error, Warning, Verbose, Debug, Information, and more), each with its own default visibility and its own controlling parameters. Matching a message to the right stream, instead of routing everything through Write-Host, is what makes a tool's output genuinely usable and filterable."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - write the synopsis and description",
    "task": "Start the comment-based help block with a short synopsis and a slightly longer description.",
    "prefill": "",
    "chips": [
      {
        "text": "<#",
        "hint": "Opens a comment-based help block."
      },
      {
        "text": ".SYNOPSIS\nGets basic OS information from one or more computers.",
        "hint": "A short, one-line summary."
      },
      {
        "text": ".DESCRIPTION\nGet-MachineInfo queries Win32_OperatingSystem on the specified computers and returns a clean, custom object with ComputerName, OSVersion, and BuildNumber.",
        "hint": "A slightly longer explanation."
      }
    ],
    "check": function(c){ return /<#/.test(c) && /\.synopsis/i.test(c) && /\.description/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /#\s/.test(c) && !/<#/.test(c) && !/\.synopsis/i.test(c); },
        "output": "(a single-line # comment above the function does nothing for Get-Help, it's invisible to the help system entirely)",
        "note": "A plain single-line # comment is never picked up by Get-Help at all, it's just a regular code comment. Comment-based help specifically requires the <# ... #> block format with recognized keywords like .SYNOPSIS."
      }
    ],
    "hint": "Start with <#, then .SYNOPSIS followed by a short one-line summary, then .DESCRIPTION with a longer explanation, this is the required format Get-Help actually recognizes.",
    "tokens": [
      {
        "text": "<#",
        "cat": "value",
        "note": "Opens a comment-based help block, the format Get-Help specifically recognizes."
      },
      {
        "text": ".SYNOPSIS",
        "cat": "param",
        "note": "A required keyword, followed by a short, one-line summary."
      },
      {
        "text": ".DESCRIPTION",
        "cat": "param",
        "note": "A keyword for a longer, more detailed explanation of what the tool does."
      }
    ],
    "output": "(no visible output yet, this is documentation, not executable code, but it's now in the exact format Get-Help will recognize)",
    "order": "This is written first, the foundational identity of the help block, before the more granular parameter-specific documentation that follows.",
    "notice": [
      {
        "field": "<# ... required keywords like .SYNOPSIS",
        "note": "This exact format is what separates comment-based help, recognized by Get-Help, from an ordinary code comment that Get-Help would never see."
      }
    ],
    "distractor": {
      "name": "A plain # comment above the function",
      "why": "Invisible to Get-Help entirely, it's just a regular code comment meant for someone reading the source directly, not the structured help format PowerShell's help system actually looks for.",
      "better": "Better fit for: brief notes meant only for someone reading the raw source code, not real, discoverable documentation."
    },
    "concepts": [
      {
        "term": "Comment-based help format",
        "explain": "A specific <# ... #> block using recognized keywords like .SYNOPSIS and .DESCRIPTION, placed immediately above (or inside) a function. This exact format is what Get-Help actually looks for, an ordinary code comment is invisible to it."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - document each parameter",
    "task": "Now document what each parameter actually does.",
    "prefill": "",
    "chips": [
      {
        "text": ".PARAMETER ComputerName\nOne or more computer names to query. Accepts pipeline input.",
        "hint": "One .PARAMETER block per actual parameter."
      },
      {
        "text": ".PARAMETER LogFailuresToPath\nOptional path to log any unreachable computers to a text file.",
        "hint": "A second parameter block, matching the second real parameter."
      }
    ],
    "check": function(c){ return /\.parameter\s+computername/i.test(c) && /\.parameter\s+logfailurestopath/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\.parameter\s+computername/i.test(c) && !/\.parameter\s+logfailurestopath/i.test(c); },
        "output": "(help now describes -ComputerName correctly, but running Get-Help -Full still shows nothing at all for -LogFailuresToPath, exactly the parameter someone on the team would need explained most)",
        "note": "Documenting only one parameter leaves the other one completely undocumented in the help output, even though it actually exists and takes a real value. Every real parameter needs its own .PARAMETER block to show up properly in Get-Help."
      }
    ],
    "hint": "Add one .PARAMETER block per actual parameter, matching the exact parameter names from the function itself.",
    "tokens": [
      {
        "text": ".PARAMETER ComputerName",
        "cat": "param",
        "note": "Documents the first parameter, its name must match the actual parameter exactly."
      },
      {
        "text": "One or more computer names to query. Accepts pipeline input.",
        "cat": "value",
        "note": "A clear description of what this specific parameter does."
      },
      {
        "text": ".PARAMETER LogFailuresToPath",
        "cat": "param",
        "note": "Documents the second parameter."
      },
      {
        "text": "Optional path to log any unreachable computers to a text file.",
        "cat": "value",
        "note": "A clear description of the second parameter."
      }
    ],
    "output": "(Get-Help Get-MachineInfo -Full now shows a PARAMETERS section listing both -ComputerName and -LogFailuresToPath, each with their own real description)",
    "order": "This comes right after the synopsis and description, going one level more specific, explaining each individual piece of the function's interface, not just the tool as a whole.",
    "notice": [
      {
        "field": "Parameter names must match exactly",
        "note": ".PARAMETER ComputerName only documents a parameter actually named $ComputerName, a typo or mismatch here means Get-Help silently shows nothing for that parameter."
      }
    ],
    "distractor": {
      "name": "Documenting only the parameter that seemed most important",
      "why": "Any parameter without its own .PARAMETER block simply shows nothing in Get-Help's output, even though it genuinely exists and takes a real value, exactly the gap someone unfamiliar with the tool would trip over.",
      "better": "Better fit for: never skipping a real parameter, every one that exists deserves its own documented block."
    },
    "concepts": [
      {
        "term": ".PARAMETER blocks",
        "explain": "One required per actual parameter, its name must match the real parameter name exactly for Get-Help to associate the description correctly. A parameter with no matching .PARAMETER block simply shows no description in help output."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - add a working example",
    "task": "Finally, add at least one concrete, working example of actually calling the function.",
    "prefill": "",
    "chips": [
      {
        "text": ".EXAMPLE\nGet-MachineInfo -ComputerName SRV01,SRV02 -Verbose",
        "hint": "A real, runnable example, not just a description of what the function does."
      },
      {
        "text": "#>",
        "hint": "Closes the comment-based help block."
      }
    ],
    "check": function(c){ return /\.example/i.test(c) && /get-machineinfo/i.test(c) && /#>/.test(c); },
    "misses": [
      {
        "test": function(c){ return /\.example/i.test(c) && !/get-machineinfo/i.test(c); },
        "output": "(an .EXAMPLE section exists but contains no actual runnable command, just a vague description, far less useful than a real, copy-pasteable line)",
        "note": "An .EXAMPLE section is meant to hold an actual, runnable command someone could copy and paste directly. A vague description instead of a real command line defeats the purpose, someone reading Get-Help wants to see exactly what to type."
      }
    ],
    "hint": ".EXAMPLE followed by a real, runnable command line, Get-MachineInfo -ComputerName SRV01,SRV02 -Verbose, then #> to close the whole help block.",
    "tokens": [
      {
        "text": ".EXAMPLE",
        "cat": "param",
        "note": "Introduces a concrete, runnable example."
      },
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02 -Verbose",
        "cat": "value",
        "note": "An actual command someone could copy and paste directly, not just a description."
      },
      {
        "text": "#>",
        "cat": "value",
        "note": "Closes the entire comment-based help block, matching the <# from step 1."
      }
    ],
    "output": "NAME\n    Get-MachineInfo\nSYNOPSIS\n    Gets basic OS information from one or more computers.\nSYNTAX\n    Get-MachineInfo [-ComputerName] <string[]> [-LogFailuresToPath <string>] [<CommonParameters>]\nPARAMETERS\n    -ComputerName <string[]>\n        One or more computer names to query. Accepts pipeline input.\n    -LogFailuresToPath <string>\n        Optional path to log any unreachable computers to a text file.\nEXAMPLES\n    -------------------------- EXAMPLE 1 --------------------------\n    Get-MachineInfo -ComputerName SRV01,SRV02 -Verbose",
    "order": "This is last, closing the entire help block with a concrete example, the piece that turns documentation someone has to interpret into something they can immediately copy and actually run.",
    "notice": [
      {
        "field": "Full Get-Help output, exactly like a built-in cmdlet",
        "note": "This is the complete payoff of the whole lesson: Get-Help Get-MachineInfo -Full now works exactly the way it would on any real, built-in cmdlet."
      }
    ],
    "distractor": {
      "name": "Leaving out .EXAMPLE entirely",
      "why": "The synopsis and parameter descriptions explain what the tool does in the abstract, but a concrete example is often what someone actually needs to get started quickly, a real, copy-pasteable command.",
      "better": "Better fit for: never skipping, at least one working example is what makes help genuinely actionable rather than just descriptive."
    },
    "concepts": [
      {
        "term": "Comment-based help is what makes Get-Help work on your own tools",
        "explain": "A complete <# ... #> block, with .SYNOPSIS, .DESCRIPTION, .PARAMETER, and .EXAMPLE, placed right above a function, makes Get-Help work on it exactly the way it works on any built-in cmdlet, no separate documentation system required."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - wrap the per-computer query in Try/Catch",
    "task": "Inside the function's loop, wrap the per-computer query in Try/Catch so one failure doesn't stop the whole loop.",
    "prefill": "",
    "chips": [
      {
        "text": "foreach ($computer in $ComputerName) {",
        "hint": "The existing loop from earlier lessons."
      },
      {
        "text": "try { $os = Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $computer -ErrorAction Stop }",
        "hint": "-ErrorAction Stop required, same as an earlier lesson, so a failure here is genuinely catchable."
      },
      {
        "text": "catch { }",
        "hint": "Handled in the next step."
      },
      {
        "text": "}",
        "hint": "Closes the loop."
      }
    ],
    "check": function(c){ return /foreach\s*\(/i.test(c) && /try\s*\{/i.test(c) && /-erroraction\s+stop/i.test(c) && /catch/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach\s*\(/i.test(c) && /get-ciminstance/i.test(c) && !/try/i.test(c); },
        "output": "(one unreachable computer partway through the list stops the entire foreach loop cold, every remaining computer never gets checked at all)",
        "note": "Without Try/Catch inside the loop itself, one unreachable computer partway through the list stops the entire loop, exactly the problem this request is about. Wrapping just the risky query in Try/Catch, inside the loop, is what lets it continue to the next computer."
      }
    ],
    "hint": "try { $os = Get-CimInstance ... -ErrorAction Stop } catch { }, placed inside the foreach loop from earlier lessons, wrapping just the risky query.",
    "tokens": [
      {
        "text": "foreach ($computer in $ComputerName) {",
        "cat": "cmdlet",
        "note": "The existing per-computer loop."
      },
      {
        "text": "try { ... -ErrorAction Stop }",
        "cat": "value",
        "note": "-ErrorAction Stop, same requirement as an earlier lesson, makes this specific query's failure genuinely catchable."
      },
      {
        "text": "catch { }",
        "cat": "cmdlet",
        "note": "Will hold the actual handling logic, built in the next step."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the loop."
      }
    ],
    "output": "(loop structure now in place to catch a per-computer failure without stopping the whole loop, the actual handling logic comes next)",
    "order": "This runs first, establishing where inside the function the catching needs to happen, right around the one risky operation per iteration, not around the whole function.",
    "notice": [
      {
        "field": "try/catch placed inside the loop, not around it",
        "note": "This positioning is what allows the loop to genuinely continue to the next computer after a failure, rather than the whole loop still being interrupted."
      }
    ],
    "distractor": {
      "name": "Wrapping the entire function body in one big Try/Catch",
      "why": "A single failure anywhere would still stop the entire loop at that point, exactly the same problem as no error handling at all. The Try/Catch needs to be inside the loop, around just the risky per-computer operation.",
      "better": "Better fit for: catching a genuinely fatal, function-wide setup failure, not a per-item failure inside a loop meant to keep going."
    },
    "concepts": [
      {
        "term": "Try/Catch placement inside a loop",
        "explain": "To let a loop continue past a single item's failure, the Try/Catch needs to wrap just that risky operation, inside the loop, not the entire loop or function. Placement determines exactly how much gets skipped when something fails."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - use Write-Error, not a plain message",
    "task": "Inside the catch block, flag the failure using Write-Error, tagged clearly to the specific computer, instead of a plain message.",
    "prefill": "",
    "chips": [
      {
        "text": "catch { Write-Error \"Failed to query $computer\": $($_.Exception.Message)\" }",
        "hint": "Write-Error produces a genuine, catchable PowerShell error object, unlike a plain returned string."
      }
    ],
    "check": function(c){ return /catch\s*\{/i.test(c) && /write-error/i.test(c) && /\$computer/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /catch\s*\{/i.test(c) && /\"failed/i.test(c) && !/write-error/i.test(c); },
        "output": "(the plain string 'Failed to query SRV03' gets mixed directly into the function's normal output, indistinguishable from an actual successful result, and impossible for a caller to filter separately)",
        "note": "A plain returned string looks like ordinary output, mixed directly into the function's normal results, with no way for a caller to distinguish it from a real, successful record, or filter it out separately. Write-Error produces a genuine, distinct error object instead, properly tagged and separately catchable by anyone calling this function."
      }
    ],
    "hint": "Write-Error \"Failed to query $computer: $($_.Exception.Message)\" inside the catch block, a real, tagged error object, not a plain string mixed into normal output.",
    "tokens": [
      {
        "text": "catch {",
        "cat": "cmdlet",
        "note": "Runs when the try block's query fails."
      },
      {
        "text": "Write-Error",
        "cat": "cmdlet",
        "note": "Produces a genuine, distinct PowerShell error object, unlike a plain returned string that would blend into normal output."
      },
      {
        "text": "\"Failed to query $computer: $($_.Exception.Message)\"",
        "cat": "value",
        "note": "A message clearly tagged to the specific computer that failed."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the catch block."
      }
    ],
    "output": "Get-MachineInfo : Failed to query SRV03: The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)",
    "order": "This comes right after establishing the Try/Catch structure in step 1, filling in exactly how the failure should actually be reported, as a real, distinct error, not blended into ordinary output.",
    "notice": [
      {
        "field": "A genuinely distinct error, not mixed into normal results",
        "note": "Confirms Write-Error produced something a caller could specifically catch, filter, or redirect separately from this tool's normal, successful output."
      }
    ],
    "distractor": {
      "name": "Returning a plain string describing the failure",
      "why": "A plain string return value mixes directly into the function's normal output stream, indistinguishable from a real successful result, and impossible for a caller to filter out or handle separately.",
      "better": "Better fit for: never as a substitute for Write-Error inside a tool meant to be reused by other scripts or callers."
    },
    "concepts": [
      {
        "term": "Write-Error inside a tool",
        "explain": "Produces a genuine, distinct PowerShell error object, separately catchable and filterable by anyone calling your function, unlike a plain string that would blend indistinguishably into normal output."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the loop actually continued",
    "task": "Run the function against a mix of reachable and unreachable machines, confirming the loop genuinely continued past the failure.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV03,SRV02",
        "hint": "SRV03, in the middle, is the unreachable one."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /srv01/i.test(c) && /srv03/i.test(c) && /srv02/i.test(c); },
    "misses": [],
    "hint": "Get-MachineInfo -ComputerName SRV01,SRV03,SRV02, with the unreachable machine placed in the middle, confirming the loop genuinely continues to SRV02 afterward.",
    "tokens": [
      {
        "text": "Get-MachineInfo",
        "cat": "cmdlet",
        "note": "The finished function, now with per-computer error handling built in."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Same parameter."
      },
      {
        "text": "SRV01,SRV03,SRV02",
        "cat": "value",
        "note": "SRV03, unreachable, placed deliberately in the middle, the real test of whether the loop continues past it."
      }
    ],
    "output": "ComputerName OSVersion  BuildNumber\n------------ ---------  -----------\nSRV01        10.0.20348 20348\nGet-MachineInfo : Failed to query SRV03: The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)\nSRV02        10.0.19045 19045",
    "order": "This is last, direct proof that everything built in steps 1 and 2 actually works together: SRV03's failure produces a clearly tagged error, and SRV02, listed after it, still gets checked and returns a real result.",
    "notice": [
      {
        "field": "SRV02's result still appears, after SRV03's error",
        "note": "Direct proof the loop genuinely continued past the failure, exactly the behavior the original request asked for."
      }
    ],
    "distractor": {
      "name": "Only testing with the unreachable machine listed last",
      "why": "Wouldn't actually prove the loop continues past a failure, since there'd be nothing left to check afterward anyway. Placing it in the middle is the real test.",
      "better": "Better fit for: never as the only test, a failure in the middle of the list is the genuine proof this lesson needed."
    },
    "concepts": [
      {
        "term": "Testing that a loop actually continues",
        "explain": "Placing a deliberately failing item in the middle of a test list, rather than at the end, is what actually proves a loop continues past a failure, rather than just happening to finish because nothing came after it."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - generate the manifest file",
    "task": "Generate a new manifest file for the ScriptingMOL module.",
    "prefill": "",
    "chips": [
      {
        "text": "New-ModuleManifest",
        "hint": "Generates a properly structured .psd1 manifest file, the metadata companion to a .psm1 module."
      },
      {
        "text": "-Path 'ScriptingMOL\\ScriptingMOL.psd1'",
        "hint": "Same folder as the .psm1, same base name, .psd1 extension instead."
      },
      {
        "text": "-RootModule 'ScriptingMOL.psm1'",
        "hint": "Points the manifest at the actual module code file."
      }
    ],
    "check": function(c){ return /new-modulemanifest/i.test(c) && /scriptingmol\.psd1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /new-item/i.test(c) && /\.psd1/i.test(c) && !/new-modulemanifest/i.test(c); },
        "output": "(creates an empty or improperly structured file, missing the specific fields PowerShell's module system actually expects in a manifest)",
        "note": "A manifest has a specific, structured format PowerShell's module system expects, version, GUID, author fields, and more, in a precise layout. New-ModuleManifest generates that correct structure directly, a plain New-Item would just create an empty or malformed file."
      }
    ],
    "hint": "New-ModuleManifest -Path 'ScriptingMOL\\ScriptingMOL.psd1' -RootModule 'ScriptingMOL.psm1', generating the properly structured manifest file PowerShell expects.",
    "tokens": [
      {
        "text": "New-ModuleManifest",
        "cat": "cmdlet",
        "note": "Generates a properly structured .psd1 manifest file with all the fields PowerShell's module system expects."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where to create the manifest, same folder and base name as the .psm1 file."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psd1'",
        "cat": "value",
        "note": "Matches the module's existing name, .psd1 instead of .psm1."
      },
      {
        "text": "-RootModule",
        "cat": "param",
        "note": "Points the manifest at the actual module code."
      },
      {
        "text": "'ScriptingMOL.psm1'",
        "cat": "value",
        "note": "The existing module file from an earlier lesson."
      }
    ],
    "output": "(ScriptingMOL.psd1 created alongside ScriptingMOL.psm1, containing a full, properly structured manifest with default values ready to be filled in)",
    "order": "This runs first, generating the correctly structured manifest file before filling in its actual metadata in the next step.",
    "notice": [
      {
        "field": "A .psd1 file alongside the existing .psm1",
        "note": "The manifest and the module code are separate files, working together, the manifest holds metadata, the .psm1 holds the actual code."
      }
    ],
    "distractor": {
      "name": "Manually creating a plain text file with a .psd1 extension",
      "why": "A manifest needs a specific, structured hashtable format with particular fields, ModuleVersion, GUID, Author, and more, in a precise layout PowerShell's module system expects. New-ModuleManifest generates that exact structure automatically.",
      "better": "Better fit for: never manually, New-ModuleManifest exists specifically to avoid getting this structure wrong by hand."
    },
    "concepts": [
      {
        "term": "Module manifest (.psd1)",
        "explain": "A structured metadata file, separate from the actual module code (.psm1), holding version, author, description, and other details. Generated with New-ModuleManifest rather than written by hand, to guarantee the exact format PowerShell's module system expects."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - fill in the real metadata",
    "task": "Now regenerate it with the actual metadata filled in: version, author, and description.",
    "prefill": "",
    "chips": [
      {
        "text": "New-ModuleManifest -Path 'ScriptingMOL\\ScriptingMOL.psd1' -RootModule 'ScriptingMOL.psm1'",
        "hint": "Same base command from step 1."
      },
      {
        "text": "-ModuleVersion '1.0.0'",
        "hint": "A real starting version number."
      },
      {
        "text": "-Author 'IT Team'",
        "hint": "Who actually maintains this module."
      },
      {
        "text": "-Description 'Provides Get-MachineInfo for querying basic OS details from remote computers.'",
        "hint": "A real, specific description, not a placeholder."
      }
    ],
    "check": function(c){ return /new-modulemanifest/i.test(c) && /-moduleversion/i.test(c) && /-author/i.test(c) && /-description/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /new-modulemanifest/i.test(c) && !/-author/i.test(c) && !/-description/i.test(c); },
        "output": "(a manifest file exists, but Get-Module -ListAvailable still shows a blank Author and Description, exactly the mystery-module problem the original request wanted fixed)",
        "note": "A manifest generated with only defaults still leaves Author and Description blank. Someone running Get-Module -ListAvailable would still have no idea who maintains this or what it's actually for, exactly the original complaint."
      }
    ],
    "hint": "Re-run New-ModuleManifest with -ModuleVersion '1.0.0', -Author 'IT Team', and -Description explaining what Get-MachineInfo actually does.",
    "tokens": [
      {
        "text": "New-ModuleManifest -Path ... -RootModule ...",
        "cat": "value",
        "note": "Same base command as step 1."
      },
      {
        "text": "-ModuleVersion",
        "cat": "param",
        "note": "A real starting version number for this module."
      },
      {
        "text": "'1.0.0'",
        "cat": "value",
        "note": "A sensible starting version."
      },
      {
        "text": "-Author",
        "cat": "param",
        "note": "Who maintains it."
      },
      {
        "text": "'IT Team'",
        "cat": "value",
        "note": "A real, specific value instead of a blank default."
      },
      {
        "text": "-Description",
        "cat": "param",
        "note": "What the module actually does."
      },
      {
        "text": "'Provides Get-MachineInfo for querying basic OS details from remote computers.'",
        "cat": "value",
        "note": "A real, specific description someone could actually read and understand."
      }
    ],
    "output": "(ScriptingMOL.psd1 regenerated with real version, author, and description fields filled in, no longer blank defaults)",
    "order": "This comes right after generating the basic manifest structure in step 1, now filling in the actual identifying details that make it useful to someone browsing available modules.",
    "notice": [
      {
        "field": "Real values instead of blank defaults",
        "note": "This is the actual substance of the original request, a module someone can identify and understand just from browsing, not a mystery file."
      }
    ],
    "distractor": {
      "name": "Leaving Author and Description at their blank defaults",
      "why": "Technically produces a valid manifest structurally, but leaves exactly the information gap the original request was about, nobody browsing modules would learn anything about who maintains this or what it does.",
      "better": "Better fit for: never intentionally, filling in real metadata is the entire point of this step."
    },
    "concepts": [
      {
        "term": "Manifest metadata fields",
        "explain": "ModuleVersion, Author, and Description are among the fields a manifest can carry, surfaced directly when someone runs Get-Module -ListAvailable, turning an anonymous .psm1 file into a properly identified, documented module."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the manifest is valid",
    "task": "Confirm the finished manifest is actually valid before trusting it.",
    "prefill": "",
    "chips": [
      {
        "text": "Test-ModuleManifest",
        "hint": "Validates a manifest file's structure and confirms it points at real, existing files."
      },
      {
        "text": "-Path 'ScriptingMOL\\ScriptingMOL.psd1'",
        "hint": "The manifest being validated."
      }
    ],
    "check": function(c){ return /test-modulemanifest/i.test(c) && /scriptingmol\.psd1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-module/i.test(c) && /scriptingmol/i.test(c) && !/test-modulemanifest/i.test(c); },
        "output": "(Get-Module confirms the module loads, but doesn't specifically validate the manifest file's own structure and required fields the way Test-ModuleManifest does)",
        "note": "Get-Module confirms the module loads overall, but Test-ModuleManifest specifically validates the manifest file itself, its structure, required fields, and whether RootModule actually points at a real, existing file, catching manifest-specific problems Get-Module wouldn't necessarily surface."
      }
    ],
    "hint": "Test-ModuleManifest -Path 'ScriptingMOL\\ScriptingMOL.psd1', specifically validating the manifest's structure before trusting it's correctly built.",
    "tokens": [
      {
        "text": "Test-ModuleManifest",
        "cat": "cmdlet",
        "note": "Validates a manifest file's structure, required fields, and whether it correctly points at real, existing files."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Which manifest to validate."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psd1'",
        "cat": "value",
        "note": "The finished manifest from step 2."
      }
    ],
    "output": "ModuleType Version    Name           ExportedCommands\n---------- -------    ----           -----------------\nScript     1.0.0      ScriptingMOL   {Get-MachineInfo}",
    "order": "This is last, a direct validation step confirming everything built in steps 1 and 2 is actually structurally correct, before trusting it as a genuine, documented module.",
    "notice": [
      {
        "field": "Version 1.0.0, ExportedCommands: {Get-MachineInfo}",
        "note": "Confirms the manifest is not just present but genuinely valid, correctly reporting the real version and the actual function it exposes."
      }
    ],
    "distractor": {
      "name": "Assuming the manifest is correct without validating it",
      "why": "A manifest can have a typo in a field name, an incorrect RootModule reference, or other structural issues that wouldn't be obvious just from having created the file. Test-ModuleManifest catches these directly.",
      "better": "Better fit for: never skipping this check for a manifest meant to represent a module other people will actually rely on."
    },
    "concepts": [
      {
        "term": "Test-ModuleManifest",
        "explain": "Validates a manifest file's structure and required fields, and confirms references like RootModule actually point at real, existing files, catching problems before anyone else tries to rely on this module."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - separate the general piece",
    "task": "First identify and build the genuinely reusable, general piece: finding inactive accounts, without deciding what to do about them yet.",
    "prefill": "",
    "chips": [
      {
        "text": "function Find-InactiveADUser {",
        "hint": "A tool, genuinely reusable, its only job is finding, not acting."
      },
      {
        "text": "param ([int]$DaysInactive = 90)",
        "hint": "A general parameter, no hardcoded action baked in."
      },
      {
        "text": "Get-ADUser -Filter * -Properties LastLogonDate | Where-Object { $_.LastLogonDate -lt (Get-Date).AddDays(-$DaysInactive) }",
        "hint": "Finds accounts, returns them as real objects, doesn't decide their fate."
      },
      {
        "text": "}",
        "hint": "Closes the function."
      }
    ],
    "check": function(c){ return /function\s+find-inactiveaduser/i.test(c) && /daysinactive/i.test(c) && !/disable-aduser/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /disable-aduser/i.test(c) && /function/i.test(c); },
        "output": "(a function that both finds AND disables accounts in one step, meaning anyone who ever just wants to find inactive accounts, for a report, for review, for anything else, has no way to use just that part)",
        "note": "Combining finding and disabling into a single function means the finding logic can never be reused on its own, for a report, a review before acting, or any purpose other than immediate disabling. This chapter's whole point is recognizing that finding is the genuinely general, reusable piece, and separating it out."
      }
    ],
    "hint": "function Find-InactiveADUser { param ([int]$DaysInactive = 90) Get-ADUser -Filter * -Properties LastLogonDate | Where-Object { ... } }, purely about finding, no action decided yet.",
    "tokens": [
      {
        "text": "function Find-InactiveADUser {",
        "cat": "cmdlet",
        "note": "Named Verb-Noun, Find, not Disable, because finding is the genuinely general piece."
      },
      {
        "text": "param ([int]$DaysInactive = 90)",
        "cat": "param",
        "note": "A general parameter, controls the definition of 'inactive', nothing about what happens next."
      },
      {
        "text": "Get-ADUser -Filter * -Properties LastLogonDate | Where-Object { $_.LastLogonDate -lt (Get-Date).AddDays(-$DaysInactive) }",
        "cat": "value",
        "note": "Finds and returns real account objects, doesn't decide their fate."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(a genuinely reusable tool, callable as Find-InactiveADUser, or Find-InactiveADUser -DaysInactive 30, useful for a report, a review, or as input to some other action entirely, not just this one request)",
    "order": "This is built first, deliberately separated from any specific action, because it's the piece with real, general value beyond this one particular request.",
    "notice": [
      {
        "field": "No disabling logic anywhere in this function",
        "note": "This is exactly what makes it genuinely reusable, someone wanting just a report of inactive accounts can use this same function without it doing anything destructive."
      }
    ],
    "distractor": {
      "name": "One function that finds and disables in a single step",
      "why": "Locks the finding logic permanently together with one specific action. Anyone who ever wants just the list, for a report, a review before acting, anything else, has no way to get it without also triggering the disable.",
      "better": "Better fit for: never as a first move, this chapter's whole point is recognizing the general piece and separating it out first."
    },
    "concepts": [
      {
        "term": "Separating general capability from specific action",
        "explain": "The actual brain change this chapter is about: instinctively asking 'what's the reusable, general piece here?' before writing anything, rather than building one script that does everything a specific request happened to ask for."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - build the specific action separately",
    "task": "Now, separately, build the specific part: actually disabling the accounts this particular request asked about.",
    "prefill": "",
    "chips": [
      {
        "text": "Find-InactiveADUser -DaysInactive 90",
        "hint": "Calls the general tool from step 1, rather than duplicating its logic."
      },
      {
        "text": "| Disable-ADAccount",
        "hint": "The specific action this particular request actually wanted."
      }
    ],
    "check": function(c){ return /find-inactiveaduser/i.test(c) && /disable-adaccount/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-aduser/i.test(c) && /disable-adaccount/i.test(c) && !/find-inactiveaduser/i.test(c); },
        "output": "(rewrites the same account-finding logic that already exists in the tool from step 1, instead of just calling it)",
        "note": "Rebuilding the account-finding logic here duplicates exactly what the tool from step 1 already does. Calling Find-InactiveADUser directly, then piping into the specific action, is what actually demonstrates the separation this chapter is about."
      }
    ],
    "hint": "Find-InactiveADUser -DaysInactive 90 | Disable-ADAccount, calling the general tool from step 1, then applying the specific action this request actually wanted.",
    "tokens": [
      {
        "text": "Find-InactiveADUser -DaysInactive 90",
        "cat": "value",
        "note": "Calls the general tool built in step 1, rather than duplicating its logic."
      },
      {
        "text": "|",
        "cat": "pipe",
        "note": "Sends the found accounts into the specific action."
      },
      {
        "text": "Disable-ADAccount",
        "cat": "cmdlet",
        "note": "The actual, specific action this particular request asked for, kept entirely separate from the general finding logic."
      }
    ],
    "output": "(every account inactive 90+ days gets disabled, using the exact same finding logic from step 1, now combined with one specific action)",
    "order": "This comes right after building the general tool, deliberately calling it rather than rewriting its logic, exactly demonstrating the separation this chapter is training you to make instinctively.",
    "notice": [
      {
        "field": "Calls Find-InactiveADUser, doesn't rewrite it",
        "note": "The specific action reuses the general tool rather than duplicating its logic, exactly the relationship this chapter is about recognizing."
      }
    ],
    "distractor": {
      "name": "Rewriting the account-finding logic directly here instead of calling the tool",
      "why": "Duplicates logic that already exists cleanly in the general tool from step 1, and means any future improvement to how inactive accounts get found has to be made in two places instead of one.",
      "better": "Better fit for: never once a general tool already exists for the underlying task."
    },
    "concepts": [
      {
        "term": "General tools get called, not duplicated",
        "explain": "Once a general, reusable piece exists, like Find-InactiveADUser, a specific action should call it, not reimplement its logic. This is the same tools-versus-controllers relationship from an earlier lesson, now applied instinctively rather than as a formal rule."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the general tool still stands alone",
    "task": "Confirm the general tool from step 1 still works completely on its own, for a purpose that has nothing to do with disabling anything.",
    "prefill": "",
    "chips": [
      {
        "text": "Find-InactiveADUser -DaysInactive 30",
        "hint": "A different threshold, and used purely for a report, no disabling involved at all."
      },
      {
        "text": "| Export-Csv -Path inactive-report.csv -NoTypeInformation",
        "hint": "A completely different purpose than step 2's disabling action."
      }
    ],
    "check": function(c){ return /find-inactiveaduser/i.test(c) && /export-csv/i.test(c) && !/disable-adaccount/i.test(c); },
    "misses": [],
    "hint": "Find-InactiveADUser -DaysInactive 30 | Export-Csv -Path inactive-report.csv -NoTypeInformation, using the general tool for a report, proving it's genuinely useful beyond just the disabling scenario from step 2.",
    "tokens": [
      {
        "text": "Find-InactiveADUser",
        "cat": "cmdlet",
        "note": "The general tool from step 1, used here for something entirely unrelated to disabling anything."
      },
      {
        "text": "-DaysInactive 30",
        "cat": "param",
        "note": "A different threshold than step 2, proof the tool is genuinely flexible, not hardcoded to one specific use."
      },
      {
        "text": "Export-Csv -Path inactive-report.csv -NoTypeInformation",
        "cat": "value",
        "note": "A completely different downstream purpose, a report, not an action, confirming the tool's genuine reusability."
      }
    ],
    "output": "(inactive-report.csv written, a list of accounts inactive 30+ days, for review purposes, nothing disabled, nothing acted on)",
    "order": "This is last, direct proof the entire point of this lesson held up: the general piece from step 1 is genuinely useful on its own, for a purpose that has nothing to do with the specific action built in step 2.",
    "notice": [
      {
        "field": "No disabling anywhere in this step",
        "note": "Confirms the general tool genuinely stands on its own, useful for reporting, review, or any other purpose, not permanently welded to the one specific action from step 2."
      }
    ],
    "distractor": {
      "name": "Only ever testing the tool combined with Disable-ADAccount",
      "why": "Wouldn't actually prove the finding logic is genuinely general and reusable, it might as well have been built specifically for the disabling scenario. Using it for something entirely different, a report, is the real proof of the separation this chapter is about.",
      "better": "Better fit for: never as the only test, a genuinely unrelated use case is the real confirmation."
    },
    "concepts": [
      {
        "term": "Proof of genuine separation",
        "explain": "A general tool is only proven genuinely general once it's demonstrated working for a purpose different from the one that originally motivated building it, exactly what this step's report-only use case confirms."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - expand aliases into real cmdlet names",
    "task": "Replace shorthand aliases with their real, full cmdlet names throughout the script.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-Process | Where-Object { $_.CPU -gt 50 } | Sort-Object CPU -Descending",
        "hint": "Full cmdlet names, spelled out completely."
      },
      {
        "text": "gps | ? { $_.CPU -gt 50 } | sort CPU -desc",
        "hint": "The alias-shorthand version, fast to type interactively, but unclear to a stranger reading it later."
      }
    ],
    "check": function(c){ return /get-process/i.test(c) && /where-object/i.test(c) && /sort-object/i.test(c) && !/\bgps\b/i.test(c) && !/\b\?\s*\{/.test(c); },
    "misses": [
      {
        "test": function(c){ return /\bgps\b/i.test(c) || /\?\s*\{/.test(c); },
        "output": "(runs fine interactively, gps and ? are real, valid aliases, but someone unfamiliar with PowerShell shorthand has to look each one up before understanding what this line even does)",
        "note": "Aliases like gps and ? work perfectly fine when you're typing quickly and interactively. But a script meant to be maintained by someone else should spell out real cmdlet names, gps could mean Get-Process to you and be a total mystery to a teammate seeing it for the first time."
      }
    ],
    "hint": "Replace gps with Get-Process, ? with Where-Object, sort with Sort-Object, and -desc with -Descending, full names throughout.",
    "tokens": [
      {
        "text": "Get-Process",
        "cat": "cmdlet",
        "note": "The full name, instead of the gps alias, immediately recognizable to anyone reading it."
      },
      {
        "text": "Where-Object",
        "cat": "cmdlet",
        "note": "Instead of the ? alias, self-explanatory rather than requiring alias knowledge to decode."
      },
      {
        "text": "Sort-Object",
        "cat": "cmdlet",
        "note": "Instead of sort, and -Descending instead of -desc, spelled out fully."
      }
    ],
    "output": "(identical behavior to the alias-shorthand version, but immediately readable by someone who's never memorized PowerShell's alias list)",
    "order": "This is the first cleanup pass, and arguably the highest-impact one, aliases are the single most common thing that makes a working script hard for someone else to read at a glance.",
    "notice": [
      {
        "field": "Same behavior, completely different readability",
        "note": "Nothing about what the script actually does changed, only how quickly a stranger could understand it just by reading."
      }
    ],
    "distractor": {
      "name": "Leaving the fast alias-shorthand version as-is",
      "why": "Runs identically, but forces anyone unfamiliar with PowerShell's aliases to look each one up before understanding the script, exactly the friction professional-grade code is meant to avoid for whoever inherits it.",
      "better": "Better fit for: quick, throwaway interactive commands you're typing for yourself, never for a script meant to be handed off."
    },
    "concepts": [
      {
        "term": "Avoiding aliases in scripts",
        "explain": "Aliases like gps, ?, and sort are fine for fast interactive typing, but a script meant to be read and maintained by someone else should spell out full cmdlet names, removing the need for the reader to already know PowerShell's alias shorthand."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - rename vague variables",
    "task": "Rename vague, single-letter variables into names that actually describe what they hold.",
    "prefill": "",
    "chips": [
      {
        "text": "$highCpuProcesses = Get-Process | Where-Object { $_.CPU -gt 50 }",
        "hint": "A name that describes exactly what's stored, self-explanatory to a stranger reading it."
      },
      {
        "text": "$x = Get-Process | Where-Object { $_.CPU -gt 50 }",
        "hint": "Meaningless outside the immediate context of whoever wrote it, and forgettable even to that same person a few weeks later."
      }
    ],
    "check": function(c){ return /\$highcpuprocesses/i.test(c) && !/\$x\s*=/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /\$x\s*=/i.test(c) && /get-process/i.test(c); },
        "output": "(runs identically, but $x tells a reader nothing about what it holds, they'd have to trace back to the assignment every single time it's referenced later in the script)",
        "note": "$x works exactly the same functionally, but carries zero information about what it actually holds. A descriptive name like $highCpuProcesses means a reader instantly understands every later reference to it, without tracing back to find the original assignment."
      }
    ],
    "hint": "$highCpuProcesses = Get-Process | Where-Object { $_.CPU -gt 50 }, a name that describes exactly what's being stored, not a meaningless single letter.",
    "tokens": [
      {
        "text": "$highCpuProcesses",
        "cat": "value",
        "note": "A name that immediately describes what this variable holds, no need to trace back to its assignment to understand later references."
      },
      {
        "text": "=",
        "cat": "param",
        "note": "Assignment."
      },
      {
        "text": "Get-Process | Where-Object { $_.CPU -gt 50 }",
        "cat": "value",
        "note": "The actual value being stored, unchanged from before, only the variable's name improved."
      }
    ],
    "output": "(identical behavior, but every later reference to $highCpuProcesses is now instantly understandable, unlike $x)",
    "order": "This comes right after expanding aliases, both cleanup passes about the same underlying goal, removing the need for a reader to decode shorthand, whether that's a cmdlet alias or a meaningless variable name.",
    "notice": [
      {
        "field": "Descriptive name, same underlying value",
        "note": "Nothing about the script's actual logic changed, purely a readability improvement for whoever inherits this code."
      }
    ],
    "distractor": {
      "name": "Keeping short, single-letter variable names",
      "why": "Saves a few keystrokes while writing, but costs a stranger real time and effort every time they encounter that variable later, having to trace back to its original assignment to understand what it holds.",
      "better": "Better fit for: a tight loop counter used and discarded within a couple of lines, like $i in a simple for loop, genuinely conventional and clear in that narrow context."
    },
    "concepts": [
      {
        "term": "Meaningful variable names",
        "explain": "A variable's name should describe what it holds, well enough that a reader understands every later reference without needing to trace back to the original assignment. Costs nothing extra to write, saves real time for whoever reads it later."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - remove Write-Host and Read-Host from the reusable function",
    "task": "Finally, remove Write-Host and Read-Host from the reusable function itself, they don't belong in something meant to be called by other scripts.",
    "prefill": "",
    "chips": [
      {
        "text": "function Get-HighCpuProcesses { param ([int]$Threshold = 50) Get-Process | Where-Object { $_.CPU -gt $Threshold } }",
        "hint": "A parameter instead of Read-Host, real pipeline output instead of Write-Host."
      },
      {
        "text": "function Get-HighCpuProcesses { $Threshold = Read-Host \"Enter CPU threshold\"; Write-Host \"Checking...\"; Get-Process | Where-Object { $_.CPU -gt $Threshold } }",
        "hint": "Forces anyone calling this function to sit at an interactive console, and mixes a status message into what should be a clean, pipeline-friendly tool."
      }
    ],
    "check": function(c){ return /function\s+get-highcpuprocesses/i.test(c) && /param/i.test(c) && !/read-host/i.test(c) && !/write-host/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /read-host/i.test(c) && /function/i.test(c); },
        "output": "(a script calling this function from a scheduled task, or any other unattended context, hangs forever waiting for interactive input that will never come)",
        "note": "Read-Host inside a reusable function forces an interactive prompt every single time it's called, including from a scheduled task or another script with no human present to answer it, exactly the kind of thing that turns a tool into something unusable outside a live interactive session."
      }
    ],
    "hint": "Replace Read-Host with a real parameter, [int]$Threshold = 50, and remove Write-Host entirely, a reusable function should be fully usable without any human sitting at a console.",
    "tokens": [
      {
        "text": "function Get-HighCpuProcesses {",
        "cat": "cmdlet",
        "note": "The reusable function, being made genuinely reusable."
      },
      {
        "text": "param ([int]$Threshold = 50)",
        "cat": "param",
        "note": "A real parameter, replacing Read-Host, callable from anywhere, interactive session or not."
      },
      {
        "text": "Get-Process | Where-Object { $_.CPU -gt $Threshold }",
        "cat": "value",
        "note": "Real pipeline output, with no Write-Host status message mixed in."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(Get-HighCpuProcesses -Threshold 75 now works identically whether called interactively, from another script, or from an unattended scheduled task, no human input required anywhere)",
    "order": "This is last, and the most consequential of the three cleanup passes, a function still depending on Read-Host or Write-Host isn't genuinely reusable at all, it only works in exactly the interactive context it was first written in.",
    "notice": [
      {
        "field": "No Read-Host, no Write-Host, anywhere in the function",
        "note": "This is what actually makes the function usable from a scheduled task, another script, or any unattended context, not just an interactive console session."
      }
    ],
    "distractor": {
      "name": "Keeping Read-Host and Write-Host for a friendlier interactive experience",
      "why": "Feels friendlier when calling the function directly at a console, but makes it completely unusable from a scheduled task or any other script calling it programmatically, exactly the reusability this whole lesson is about.",
      "better": "Better fit for: a standalone interactive script meant to only ever be run directly by a human at a console, never called as a reusable piece by anything else."
    },
    "concepts": [
      {
        "term": "Avoiding Write-Host and Read-Host in reusable functions",
        "explain": "A function meant to be called by other scripts, scheduled tasks, or anything unattended shouldn't depend on Read-Host (which blocks waiting for input that may never come) or Write-Host (which can't be captured or piped). Parameters and real pipeline output are what make a function genuinely reusable."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - initialize the repository",
    "task": "Turn the ScriptingMOL folder into an actual Git repository.",
    "prefill": "",
    "chips": [
      {
        "text": "git init",
        "hint": "Initializes a new, empty Git repository in the current folder, the first step before anything can be tracked."
      }
    ],
    "check": function(c){ return /git init/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /git commit/i.test(c) && !/git init/i.test(c); },
        "output": "fatal: not a git repository (or any of the parent directories): .git",
        "note": "Git needs a repository to actually exist before anything can be committed to it. git init creates that initial, empty repository structure, the required first step before any of the tracking or committing this request needs."
      }
    ],
    "hint": "git init, run inside the ScriptingMOL folder, creates the initial, empty repository structure everything else depends on.",
    "tokens": [
      {
        "text": "git init",
        "cat": "cmdlet",
        "note": "Creates a new, empty Git repository in the current folder, the required first step."
      }
    ],
    "output": "Initialized empty Git repository in C:/.../ScriptingMOL/.git/",
    "order": "This runs first, since nothing else, staging, committing, viewing history, is possible until an actual repository exists in this folder.",
    "notice": [
      {
        "field": ".git folder created",
        "note": "A hidden folder now exists holding the entire repository's history and configuration, invisible in normal file listings but the actual foundation everything else builds on."
      }
    ],
    "distractor": {
      "name": "git commit before git init",
      "why": "Git has no repository to commit anything into yet. Every Git operation depends on a repository already existing in this folder, created first with git init.",
      "better": "Better fit for: never as the first command, init always comes before anything else Git-related in a brand new folder."
    },
    "concepts": [
      {
        "term": "git init",
        "explain": "Creates a new, empty Git repository in the current folder, represented by a hidden .git subfolder holding all future history and configuration. The required first step before any file can be tracked or committed."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - commit the current working version",
    "task": "Now stage and commit the current, working version of the module as a real, recorded snapshot.",
    "prefill": "",
    "chips": [
      {
        "text": "git add .",
        "hint": "Stages every file in the current folder, preparing them to be included in the next commit."
      },
      {
        "text": "git commit -m \"Initial working version of ScriptingMOL\"",
        "hint": "Actually records the staged files as a permanent snapshot in the repository's history."
      }
    ],
    "check": function(c){ return /git add/i.test(c) && /git commit/i.test(c) && /-m/.test(c); },
    "misses": [
      {
        "test": function(c){ return /git commit/i.test(c) && !/git add/i.test(c); },
        "output": "On branch main\nnothing to commit, working tree clean\n(nothing was ever staged, so there's nothing for commit to actually record)",
        "note": "git commit only records whatever's already been staged with git add. Skipping the staging step means there's nothing for commit to actually capture, the working directory stays completely untracked."
      }
    ],
    "hint": "git add . stages everything, then git commit -m \"Initial working version of ScriptingMOL\" actually records that snapshot permanently.",
    "tokens": [
      {
        "text": "git add .",
        "cat": "cmdlet",
        "note": "Stages all files in the current folder, preparing them for the next commit."
      },
      {
        "text": "git commit",
        "cat": "cmdlet",
        "note": "Permanently records the staged files as a snapshot in the repository's history."
      },
      {
        "text": "-m",
        "cat": "param",
        "note": "Attaches a message describing what this snapshot represents."
      },
      {
        "text": "\"Initial working version of ScriptingMOL\"",
        "cat": "value",
        "note": "A clear, descriptive commit message, future you, or a teammate, will read this later trying to understand the history."
      }
    ],
    "output": "[main (root-commit) 4a92f1c] Initial working version of ScriptingMOL\n 2 files changed, 45 insertions(+)\n create mode 100644 ScriptingMOL.psd1\n create mode 100644 ScriptingMOL.psm1",
    "order": "This comes right after initializing the repository, actually recording the first real snapshot before anything gets changed further in step 3.",
    "notice": [
      {
        "field": "root-commit, 2 files changed",
        "note": "Confirms this is the very first snapshot in the repository's history, both the manifest and the module code captured together."
      }
    ],
    "distractor": {
      "name": "git commit without staging first",
      "why": "Commit only ever records what's already been staged with git add. Without that step, there's nothing tracked for commit to actually snapshot.",
      "better": "Better fit for: never on its own, git add and git commit are a required two-step sequence for recording any change."
    },
    "concepts": [
      {
        "term": "git add and git commit",
        "explain": "A two-step process: git add stages which changes should be included, git commit actually records them permanently as a snapshot with a descriptive message. Together, this is how a real, inspectable history gets built one recorded change at a time."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - make a change and see it tracked",
    "task": "Now make a small change to the module, and confirm Git actually shows it as a tracked difference.",
    "prefill": "",
    "chips": [
      {
        "text": "git diff",
        "hint": "Shows exactly what changed in tracked files since the last commit, line by line."
      }
    ],
    "check": function(c){ return /git diff/i.test(c); },
    "misses": [],
    "hint": "git diff, after making a small edit to ScriptingMOL.psm1, shows exactly what changed since the last commit, line by line.",
    "tokens": [
      {
        "text": "git diff",
        "cat": "cmdlet",
        "note": "Shows the exact difference between the working files and the last commit, line by line."
      }
    ],
    "output": "diff --git a/ScriptingMOL.psm1 b/ScriptingMOL.psm1\nindex 3f2a1b9..7c8d2e4 100644\n--- a/ScriptingMOL.psm1\n+++ b/ScriptingMOL.psm1\n@@ -12,7 +12,7 @@\n-        Write-Verbose \"Querying $computer...\"\n+        Write-Verbose \"Connecting to $computer, please wait...\"",
    "order": "This is last, the actual payoff of the whole lesson: a real, inspectable record of exactly what changed, line by line, made possible only because step 2 committed a known-good starting point to compare against.",
    "notice": [
      {
        "field": "- and + lines, exact line-by-line change",
        "note": "This is the concrete value of source control: not just 'something changed', but exactly what, on exactly which line, compared against the last recorded snapshot."
      }
    ],
    "distractor": {
      "name": "Just comparing the file visually against memory of what it used to say",
      "why": "Unreliable and doesn't scale past a tiny change, and impossible at all once more time has passed or more people have touched the file. git diff gives an exact, automatic, line-by-line comparison against the actual last commit.",
      "better": "Better fit for: never once a real repository with commit history exists, git diff is strictly better."
    },
    "concepts": [
      {
        "term": "git diff",
        "explain": "Shows the exact line-by-line difference between current working files and the last commit, the concrete payoff of maintaining commit history: precise, automatic answers to 'what actually changed', not guesswork."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - write a basic Pester test",
    "task": "Write a basic Pester test confirming Get-MachineInfo returns an object with a ComputerName property.",
    "prefill": "",
    "chips": [
      {
        "text": "Describe 'Get-MachineInfo' {",
        "hint": "Groups related tests together under a clear description."
      },
      {
        "text": "It 'returns an object with a ComputerName property' {",
        "hint": "One specific, individually named test."
      },
      {
        "text": "(Get-MachineInfo -ComputerName SRV01).ComputerName | Should -Be 'SRV01'",
        "hint": "The actual assertion: does the real output match what's expected?"
      },
      {
        "text": "} }",
        "hint": "Closes both blocks."
      }
    ],
    "check": function(c){ return /describe/i.test(c) && /it\s+['"]/.test(c) && /should\s+-be/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && !/describe/i.test(c) && !/should/i.test(c); },
        "output": "(runs the function once and shows the result, but there's no actual pass/fail assertion recorded anywhere, nothing to automatically re-check the next time this changes)",
        "note": "Just running the function and looking at the result manually is exactly the by-hand retesting this whole request wanted to move away from. A real Pester test wraps the check in Describe/It/Should, producing an actual automated pass or fail, repeatable every time without a human having to look at the output themselves."
      }
    ],
    "hint": "Describe 'Get-MachineInfo' { It 'returns an object with a ComputerName property' { (Get-MachineInfo -ComputerName SRV01).ComputerName | Should -Be 'SRV01' } }",
    "tokens": [
      {
        "text": "Describe 'Get-MachineInfo' {",
        "cat": "cmdlet",
        "note": "Groups related tests under one clear, named heading."
      },
      {
        "text": "It 'returns an object with a ComputerName property' {",
        "cat": "cmdlet",
        "note": "One specific, individually named and reportable test."
      },
      {
        "text": "(Get-MachineInfo -ComputerName SRV01).ComputerName | Should -Be 'SRV01'",
        "cat": "value",
        "note": "The actual assertion, comparing real output against the expected value automatically."
      },
      {
        "text": "} }",
        "cat": "cmdlet",
        "note": "Closes the It and Describe blocks."
      }
    ],
    "output": "(a test file, Get-MachineInfo.Tests.ps1, now exists, describing exactly what correct behavior looks like, ready to be run automatically instead of checked by hand)",
    "order": "This runs first, writing down exactly what 'correct' means as an automated, repeatable check, before actually running the test suite in the next steps.",
    "notice": [
      {
        "field": "Should -Be",
        "note": "The actual assertion mechanism, comparing real output against an expected value and automatically reporting pass or fail, no human judgment required each time."
      }
    ],
    "distractor": {
      "name": "Manually running the function and eyeballing the result",
      "why": "Exactly the slow, forgettable, by-hand process the original request wanted to move away from. A real Pester test, once written, can be re-run automatically every single time the function changes, with no chance of forgetting to check something.",
      "better": "Better fit for: quick, one-off sanity checks while actively developing, never as a substitute for a real, repeatable automated test."
    },
    "concepts": [
      {
        "term": "Describe / It / Should",
        "explain": "Pester's core test structure: Describe groups related tests, It names one specific test, Should makes the actual assertion comparing real output against an expected value. Together they turn manual, by-hand verification into a repeatable, automated check."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - add a second test for a different property",
    "task": "Now add a second, separate test confirming the BuildNumber property is also correct.",
    "prefill": "",
    "chips": [
      {
        "text": "It 'returns an object with a BuildNumber property' {",
        "hint": "A second, separately named test, not crammed into the first one."
      },
      {
        "text": "(Get-MachineInfo -ComputerName SRV01).BuildNumber | Should -Not -BeNullOrEmpty",
        "hint": "A different kind of assertion, this time just confirming the value isn't blank, rather than checking an exact match."
      },
      {
        "text": "}",
        "hint": "Closes this second It block."
      }
    ],
    "check": function(c){ return /it\s+['"].*buildnumber/i.test(c) && /should\s+-not\s+-benullorempty/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /buildnumber/i.test(c) && /should/i.test(c) && !/it\s+['"]/.test(c); },
        "output": "(the assertion runs, but without its own separate It block, a failure here wouldn't be individually reported, it would just show up folded into whatever test block it was crammed into)",
        "note": "Cramming a second, unrelated assertion into an existing It block means a failure there gets reported against the wrong test name, confusing when trying to figure out exactly what broke. Each distinct thing worth checking deserves its own separately named It block."
      }
    ],
    "hint": "A separate It block for BuildNumber, using Should -Not -BeNullOrEmpty since an exact match isn't the right check here, just confirming it's actually populated.",
    "tokens": [
      {
        "text": "It 'returns an object with a BuildNumber property' {",
        "cat": "cmdlet",
        "note": "A second, distinct, separately named test."
      },
      {
        "text": "(Get-MachineInfo -ComputerName SRV01).BuildNumber",
        "cat": "value",
        "note": "The specific property being checked this time."
      },
      {
        "text": "Should -Not -BeNullOrEmpty",
        "cat": "param",
        "note": "A different assertion type than step 1, confirming presence rather than an exact match."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes this It block."
      }
    ],
    "output": "(a second, separately named test now exists alongside the first, each checking one specific, distinct thing)",
    "order": "This comes right after the first test, deliberately as its own separate It block, so each individual thing worth checking gets its own clearly reported result.",
    "notice": [
      {
        "field": "A second, distinct It block, not folded into the first",
        "note": "This is what lets Pester report exactly which specific check passed or failed, rather than one vague combined result."
      }
    ],
    "distractor": {
      "name": "Adding this check inside the first It block instead of a new one",
      "why": "A failure here would get reported against the first test's name, confusing when trying to figure out exactly what actually broke. Separate, clearly named It blocks for each distinct thing worth checking give much clearer results.",
      "better": "Better fit for: multiple assertions that are all genuinely testing the exact same specific behavior, not two different properties."
    },
    "concepts": [
      {
        "term": "One It block per distinct check",
        "explain": "Each individually meaningful thing worth verifying deserves its own It block, so a failure is reported clearly against exactly the right, specific test name, not folded confusingly into an unrelated one."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - run the test suite",
    "task": "Now actually run the whole test suite and confirm both tests pass.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Pester",
        "hint": "Runs every Describe/It block in the test file and reports pass/fail for each."
      },
      {
        "text": "-Path .\\Get-MachineInfo.Tests.ps1",
        "hint": "The test file written in steps 1 and 2."
      }
    ],
    "check": function(c){ return /invoke-pester/i.test(c); },
    "misses": [],
    "hint": "Invoke-Pester -Path .\\Get-MachineInfo.Tests.ps1, running the full test suite and reporting each test's result automatically.",
    "tokens": [
      {
        "text": "Invoke-Pester",
        "cat": "cmdlet",
        "note": "Runs the entire test suite automatically, reporting a clear pass or fail for every individually named test."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Which test file to run."
      },
      {
        "text": ".\\Get-MachineInfo.Tests.ps1",
        "cat": "value",
        "note": "The test file containing both It blocks written in steps 1 and 2."
      }
    ],
    "output": "Describing Get-MachineInfo\n  [+] returns an object with a ComputerName property 45ms\n  [+] returns an object with a BuildNumber property 32ms\nTests completed in 77ms\nTests Passed: 2, Failed: 0, Skipped: 0",
    "order": "This is last, the actual payoff of writing real tests: a single command that automatically confirms every check written in steps 1 and 2, no manual, by-hand verification required.",
    "notice": [
      {
        "field": "Tests Passed: 2, Failed: 0",
        "note": "This is the concrete result the original request was about, an automatic, repeatable confirmation, not something a human had to manually check and remember to redo every time."
      }
    ],
    "distractor": {
      "name": "Only ever writing the tests, never actually running them",
      "why": "A test that's never run provides zero actual verification, it's just unexecuted code sitting in a file. The real value only exists once Invoke-Pester actually runs it and reports results.",
      "better": "Better fit for: never as a final step, writing tests without ever running them accomplishes nothing."
    },
    "concepts": [
      {
        "term": "Invoke-Pester",
        "explain": "Runs an entire Pester test file, executing every Describe/It block and reporting a clear pass/fail summary. This is what turns written test code into an actual, repeatable verification, run any time the underlying function changes."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - find the code-signing certificate",
    "task": "Before signing anything, find the actual code-signing certificate available on this machine.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-ChildItem",
        "hint": "The same cmdlet from way back in an earlier lesson, here pointed at the certificate provider."
      },
      {
        "text": "-Path Cert:\\CurrentUser\\My",
        "hint": "The certificate store, accessed through PowerShell's Cert: provider, exactly like a filesystem path."
      },
      {
        "text": "-CodeSigningCert",
        "hint": "Filters specifically to certificates valid for code signing, not just any certificate sitting in the store."
      }
    ],
    "check": function(c){ return /get-childitem/i.test(c) && /cert:/i.test(c) && /-codesigningcert/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-childitem/i.test(c) && /cert:/i.test(c) && !/-codesigningcert/i.test(c); },
        "output": "Subject                  Thumbprint                                EnhancedKeyUsageList\n-------                  ----------                                ---------------------\nCN=jsmith                A1B2C3D4E5F6...                            Client Authentication\nCN=IT Code Signing       F6E5D4C3B2A1...                            Code Signing",
        "note": "Without -CodeSigningCert, every certificate in the store shows up, including ones meant for entirely different purposes, like client authentication. -CodeSigningCert filters specifically to certificates actually valid for signing scripts, avoiding the risk of picking the wrong one."
      }
    ],
    "hint": "Get-ChildItem -Path Cert:\\CurrentUser\\My -CodeSigningCert, filtering specifically to certificates actually valid for signing scripts.",
    "tokens": [
      {
        "text": "Get-ChildItem",
        "cat": "cmdlet",
        "note": "The same discovery cmdlet from way back in an earlier lesson, here pointed at PowerShell's certificate provider instead of the filesystem."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Where to look, this time a certificate store instead of a folder."
      },
      {
        "text": "Cert:\\CurrentUser\\My",
        "cat": "value",
        "note": "The current user's personal certificate store, accessed through the same path-like syntax as any filesystem provider."
      },
      {
        "text": "-CodeSigningCert",
        "cat": "param",
        "note": "Filters specifically to certificates valid for code signing, avoiding unrelated certificates in the same store."
      }
    ],
    "output": "Subject                  Thumbprint                                EnhancedKeyUsageList\n-------                  ----------                                ---------------------\nCN=IT Code Signing       F6E5D4C3B2A1...                            Code Signing",
    "order": "This runs first, confirming the actual certificate to use exists and is genuinely valid for code signing, before attempting to sign anything with it.",
    "notice": [
      {
        "field": "Thumbprint: F6E5D4C3B2A1...",
        "note": "A unique identifier for this specific certificate, needed to reference it precisely in the actual signing step next."
      }
    ],
    "distractor": {
      "name": "Get-ChildItem Cert:\\CurrentUser\\My without -CodeSigningCert",
      "why": "Returns every certificate in the store regardless of purpose, including ones for client authentication or other unrelated uses, risking picking the wrong certificate entirely.",
      "better": "Better fit for: browsing every certificate in the store generally, not specifically finding one suited to code signing."
    },
    "concepts": [
      {
        "term": "The Cert: provider",
        "explain": "PowerShell exposes the certificate store through a provider, accessed with the same path-like syntax as the filesystem, Cert:\\CurrentUser\\My. -CodeSigningCert filters specifically to certificates valid for signing scripts."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - sign the module file",
    "task": "Now actually sign ScriptingMOL.psm1 with the certificate found in step 1.",
    "prefill": "",
    "chips": [
      {
        "text": "$cert = Get-ChildItem -Path Cert:\\CurrentUser\\My -CodeSigningCert",
        "hint": "Storing the certificate from step 1 in a variable, ready to actually use."
      },
      {
        "text": "Set-AuthenticodeSignature",
        "hint": "Applies a digital signature to a file, using a specific certificate."
      },
      {
        "text": "-FilePath 'ScriptingMOL\\ScriptingMOL.psm1' -Certificate $cert",
        "hint": "The file being signed, and the certificate signing it."
      }
    ],
    "check": function(c){ return /set-authenticodesignature/i.test(c) && /scriptingmol\.psm1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-authenticodesignature/i.test(c) && !/set-authenticodesignature/i.test(c); },
        "output": "(this only checks the current signature status, exactly what's needed later in step 3, it doesn't actually apply a new signature to anything)",
        "note": "Get-AuthenticodeSignature checks a file's current signature status, useful, but not the same command that actually applies one. Set-AuthenticodeSignature is the cmdlet that performs the real signing, using the certificate found in step 1."
      }
    ],
    "hint": "$cert = Get-ChildItem -Path Cert:\\CurrentUser\\My -CodeSigningCert, then Set-AuthenticodeSignature -FilePath 'ScriptingMOL\\ScriptingMOL.psm1' -Certificate $cert, actually applying the signature.",
    "tokens": [
      {
        "text": "$cert = Get-ChildItem -Path Cert:\\CurrentUser\\My -CodeSigningCert",
        "cat": "value",
        "note": "The certificate from step 1, stored in a variable for actual use."
      },
      {
        "text": "Set-AuthenticodeSignature",
        "cat": "cmdlet",
        "note": "Applies a real digital signature to a file, using a specific certificate."
      },
      {
        "text": "-FilePath",
        "cat": "param",
        "note": "The file being signed."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psm1'",
        "cat": "value",
        "note": "The actual module file."
      },
      {
        "text": "-Certificate",
        "cat": "param",
        "note": "Which certificate to sign with."
      },
      {
        "text": "$cert",
        "cat": "value",
        "note": "The certificate found and stored in step 1."
      }
    ],
    "output": "SignerCertificate                        Status                                    Path\n------------------                       ------                                    ----\nF6E5D4C3B2A1...                          Valid                                     ScriptingMOL.psm1",
    "order": "This comes right after finding the certificate, actually applying it to the module file that step 3 will then independently confirm is genuinely valid.",
    "notice": [
      {
        "field": "Status: Valid, right after signing",
        "note": "An early positive signal, though step 3 confirms this more thoroughly rather than just trusting this immediate result."
      }
    ],
    "distractor": {
      "name": "Get-AuthenticodeSignature instead of Set-AuthenticodeSignature",
      "why": "Only checks a file's current signature status, useful, and exactly what step 3 uses, but it doesn't actually apply a new signature to anything. Set-AuthenticodeSignature is the cmdlet that performs the real signing.",
      "better": "Better fit for: confirming a signature's status after it's already been applied, exactly step 3's purpose."
    },
    "concepts": [
      {
        "term": "Set-AuthenticodeSignature",
        "explain": "Applies a real digital signature to a script or module file using a specific certificate. Distinct from Get-AuthenticodeSignature, which only checks an existing signature's current status without applying anything new."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the signature is genuinely valid",
    "task": "Now independently confirm the signature is genuinely valid, not just present.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-AuthenticodeSignature",
        "hint": "Checks a file's actual signature status, the same cmdlet from an earlier lesson checking the unsigned gist script."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psm1'",
        "hint": "The just-signed module file."
      }
    ],
    "check": function(c){ return /get-authenticodesignature/i.test(c) && /scriptingmol\.psm1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /scriptingmol\.psm1/i.test(c) && !/get-authenticodesignature/i.test(c); },
        "output": "(trusting step 2's own immediate output rather than independently checking, a script can carry a signature that's technically present but expired, revoked, or otherwise not genuinely trustworthy)",
        "note": "A file can technically carry a signature that's present but not actually valid, expired, revoked, or otherwise broken. Independently checking with Get-AuthenticodeSignature, the exact same cmdlet from an earlier lesson, confirms genuine validity rather than just trusting that signing appeared to succeed."
      }
    ],
    "hint": "Get-AuthenticodeSignature 'ScriptingMOL\\ScriptingMOL.psm1', the same cmdlet from an earlier lesson, now independently confirming this signature is genuinely valid.",
    "tokens": [
      {
        "text": "Get-AuthenticodeSignature",
        "cat": "cmdlet",
        "note": "The same cmdlet from an earlier lesson, checking a file's actual current signature status, independent of whatever step 2 reported."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psm1'",
        "cat": "value",
        "note": "The module file just signed in step 2."
      }
    ],
    "output": "SignerCertificate                        Status                                    StatusMessage\n------------------                       ------                                    -------------\nF6E5D4C3B2A1...                          Valid                                     Signature verified.",
    "order": "This is last, an independent confirmation rather than just trusting step 2's own immediate report, exactly the same 'check directly, don't just trust' habit from the earlier lesson checking the unsigned gist script.",
    "notice": [
      {
        "field": "Status: Valid, StatusMessage: Signature verified.",
        "note": "An independent, explicit confirmation, not just re-displaying what step 2 already claimed, closing the loop on genuine trust rather than assumed trust."
      }
    ],
    "distractor": {
      "name": "Trusting step 2's own output as sufficient confirmation",
      "why": "A signing operation reporting apparent success doesn't independently rule out a certificate issue, expiration, or revocation. A separate, independent check with Get-AuthenticodeSignature is the real confirmation.",
      "better": "Better fit for: never as the only confirmation, an independent check afterward costs nothing and removes any doubt."
    },
    "concepts": [
      {
        "term": "Independently verifying a signature",
        "explain": "Checking a signature's status with Get-AuthenticodeSignature after signing, separately from whatever the signing operation itself reported, is the genuine confirmation that a signature is actually valid, not merely present."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - confirm the module is actually ready",
    "task": "Before publishing anything, confirm the module's manifest is genuinely valid and complete.",
    "prefill": "",
    "chips": [
      {
        "text": "Test-ModuleManifest",
        "hint": "The same validation cmdlet from an earlier lesson, worth re-checking specifically before publishing."
      },
      {
        "text": "-Path 'ScriptingMOL\\ScriptingMOL.psd1'",
        "hint": "The manifest being confirmed ready."
      }
    ],
    "check": function(c){ return /test-modulemanifest/i.test(c) && /scriptingmol\.psd1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /publish-module/i.test(c) && !/test-modulemanifest/i.test(c); },
        "output": "Publish-Module : The specified module 'ScriptingMOL' was not published because the module manifest is missing the required 'Description' key.",
        "note": "Publishing without confirming manifest readiness first means discovering problems only once the publish attempt itself fails. Test-ModuleManifest, the same cmdlet from an earlier lesson, catches exactly this kind of issue before ever attempting to publish."
      }
    ],
    "hint": "Test-ModuleManifest -Path 'ScriptingMOL\\ScriptingMOL.psd1', re-checking readiness specifically before publishing, not just trusting it's still fine.",
    "tokens": [
      {
        "text": "Test-ModuleManifest",
        "cat": "cmdlet",
        "note": "The same validation cmdlet from an earlier lesson, worth re-running specifically before a real publish attempt."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Which manifest to check."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psd1'",
        "cat": "value",
        "note": "The module's manifest file."
      }
    ],
    "output": "ModuleType Version    Name           ExportedCommands\n---------- -------    ----           -----------------\nScript     1.0.0      ScriptingMOL   {Get-MachineInfo}",
    "order": "This runs first, confirming genuine readiness before attempting an actual publish, exactly the same discipline as checking a script's help or signature before trusting it, applied here to publishing.",
    "notice": [
      {
        "field": "Valid manifest output, no errors",
        "note": "Confirms the module is genuinely ready, before spending effort on an actual publish attempt that could otherwise fail partway through."
      }
    ],
    "distractor": {
      "name": "Publishing directly without re-checking the manifest first",
      "why": "Risks discovering a missing or malformed field only once the actual publish attempt fails, later and more disruptively than catching it with a quick, direct check first.",
      "better": "Better fit for: a module you've already re-verified very recently, though a quick recheck immediately before publishing costs almost nothing."
    },
    "concepts": [
      {
        "term": "Confirming readiness before publishing",
        "explain": "Publishing a module makes it available for others to discover and install, worth confirming its manifest is genuinely valid and complete first, rather than discovering a problem only once the publish attempt itself fails."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - actually publish it",
    "task": "Now actually publish the module to a real repository.",
    "prefill": "",
    "chips": [
      {
        "text": "Publish-Module",
        "hint": "Actually pushes a module to a repository, making it installable by anyone with access."
      },
      {
        "text": "-Path 'ScriptingMOL'",
        "hint": "The module folder being published."
      },
      {
        "text": "-Repository InternalGallery",
        "hint": "The team's internal repository, not necessarily the public PowerShell Gallery."
      }
    ],
    "check": function(c){ return /publish-module/i.test(c) && /scriptingmol/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /copy-item/i.test(c) && /scriptingmol/i.test(c) && !/publish-module/i.test(c); },
        "output": "(copies the files somewhere, but doesn't register the module with an actual repository, Find-Module and Install-Module won't discover it, exactly the emailing-files problem the request wanted to move past)",
        "note": "Copying files somewhere isn't the same as publishing to a real repository. Find-Module and Install-Module specifically query registered repositories, a plain file copy is invisible to them entirely, essentially the same 'sharing files directly' problem the request wanted to move past."
      }
    ],
    "hint": "Publish-Module -Path 'ScriptingMOL' -Repository InternalGallery, actually registering the module with a real, discoverable repository.",
    "tokens": [
      {
        "text": "Publish-Module",
        "cat": "cmdlet",
        "note": "Actually pushes a module to a repository, making it genuinely installable via Install-Module, not just copied files."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Which module folder to publish."
      },
      {
        "text": "'ScriptingMOL'",
        "cat": "value",
        "note": "The module being published."
      },
      {
        "text": "-Repository",
        "cat": "param",
        "note": "Which repository to publish to."
      },
      {
        "text": "InternalGallery",
        "cat": "value",
        "note": "The team's internal repository, a common choice over the public PowerShell Gallery for internal tools."
      }
    ],
    "output": "(ScriptingMOL version 1.0.0 published to InternalGallery)",
    "order": "This comes right after confirming readiness, actually performing the real publish now that step 1 confirmed there was nothing wrong with the manifest.",
    "notice": [
      {
        "field": "Published to InternalGallery, not emailed anywhere",
        "note": "This is the actual substance of the original request, a real, centrally discoverable location instead of files passed around directly."
      }
    ],
    "distractor": {
      "name": "Copying the module files to a shared network folder",
      "why": "Puts the files somewhere reachable, but doesn't register the module with an actual repository. Find-Module and Install-Module query registered repositories specifically, a plain file copy is invisible to them.",
      "better": "Better fit for: a genuinely informal, one-off file share, not the real, discoverable publishing the request specifically asked for."
    },
    "concepts": [
      {
        "term": "Publish-Module",
        "explain": "Pushes a module to a real, registered repository, making it discoverable through Find-Module and installable through Install-Module, genuinely different from simply copying files somewhere reachable."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it's genuinely discoverable",
    "task": "Now confirm the published module is genuinely discoverable, the way any real module would be.",
    "prefill": "",
    "chips": [
      {
        "text": "Find-Module",
        "hint": "Searches a repository for a module by name, the same discovery habit from an earlier lesson finding the Az module."
      },
      {
        "text": "-Name ScriptingMOL",
        "hint": "The just-published module."
      },
      {
        "text": "-Repository InternalGallery",
        "hint": "The specific repository it was published to."
      }
    ],
    "check": function(c){ return /find-module/i.test(c) && /scriptingmol/i.test(c); },
    "misses": [],
    "hint": "Find-Module -Name ScriptingMOL -Repository InternalGallery, the same discovery habit from an earlier lesson, now confirming this module is genuinely findable.",
    "tokens": [
      {
        "text": "Find-Module",
        "cat": "cmdlet",
        "note": "The same discovery cmdlet from an earlier lesson finding the Az module, now confirming a module you published yourself."
      },
      {
        "text": "-Name",
        "cat": "param",
        "note": "Which module to search for."
      },
      {
        "text": "ScriptingMOL",
        "cat": "value",
        "note": "The just-published module."
      },
      {
        "text": "-Repository",
        "cat": "param",
        "note": "Which repository to search."
      },
      {
        "text": "InternalGallery",
        "cat": "value",
        "note": "The specific repository from step 2."
      }
    ],
    "output": "Version    Name              Repository         Description\n-------    ----              ----------         -----------\n1.0.0      ScriptingMOL      InternalGallery    Provides Get-MachineInfo for querying basic OS details from remote computers.",
    "order": "This is last, the real proof that publishing genuinely worked, someone else, using the exact same Find-Module habit from an earlier lesson, could now discover this module without ever being emailed a file directly.",
    "notice": [
      {
        "field": "Description shows the real text written in the manifest lesson",
        "note": "Direct proof this is the same properly documented module built across earlier lessons, now genuinely discoverable by anyone with repository access, not something anyone had to hand them directly."
      }
    ],
    "distractor": {
      "name": "Just trusting Publish-Module's success message from step 2",
      "why": "A publish operation reporting success doesn't independently confirm the module is actually discoverable afterward. Find-Module is the real, independent test that someone else could genuinely find this module on their own.",
      "better": "Better fit for: never as the only confirmation, an independent Find-Module check afterward is what proves genuine discoverability."
    },
    "concepts": [
      {
        "term": "Find-Module confirms genuine discoverability",
        "explain": "The real proof that publishing worked isn't the publish command's own success message, it's confirming independently, with Find-Module, that anyone else could actually discover this module on their own, exactly like any other real, published module."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - diagnose the bug that won't even run",
    "task": "The first report says the script won't run at all. Confirm this is a syntax bug, and find exactly where.",
    "prefill": "",
    "chips": [
      {
        "text": "powershell -File Get-MachineInfo.ps1 -NoExit",
        "hint": "Running the raw script directly often surfaces the exact parse error and line number immediately."
      },
      {
        "text": "Get-Content Get-MachineInfo.ps1 | Select-Object -First 5",
        "hint": "Reading the file wouldn't confirm anything about whether it actually parses correctly."
      }
    ],
    "check": function(c){ return /powershell.*-file|(-file)/i.test(c) && /get-machineinfo\.ps1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-content/i.test(c) && /get-machineinfo\.ps1/i.test(c) && !/-file/i.test(c); },
        "output": "(shows the file's text just fine, but doesn't confirm anything about whether PowerShell can actually parse it, which is the entire question for a syntax bug)",
        "note": "Reading a script's raw text tells you nothing about whether PowerShell can actually parse it. A syntax bug is specifically about the script failing before it even begins running, actually attempting to run it is what surfaces the real parse error and its exact line number."
      }
    ],
    "hint": "Actually attempt to run the script directly, PowerShell -File Get-MachineInfo.ps1, a syntax bug typically surfaces an immediate parse error with a specific line number.",
    "tokens": [
      {
        "text": "powershell -File",
        "cat": "cmdlet",
        "note": "Attempts to actually run the script, surfacing a parse error immediately if the syntax itself is broken."
      },
      {
        "text": "Get-MachineInfo.ps1",
        "cat": "value",
        "note": "The script being diagnosed."
      }
    ],
    "output": "At C:\\Scripts\\Get-MachineInfo.ps1:14 char:45\n+ ... ject @{ ComputerName = $computer OSVersion = $os.Version }\n+                                              ~~~~~~~~~\nMissing statement separator after this expression.",
    "order": "This is the first bug type to diagnose, and the most immediately obvious once you actually try running it: a syntax bug prevents the script from even beginning to execute.",
    "notice": [
      {
        "field": "Missing statement separator, exact line 14",
        "note": "A syntax bug reveals itself immediately and specifically, a missing comma between two hashtable entries, right down to the exact character position."
      }
    ],
    "distractor": {
      "name": "Reading the script's text and trying to spot the problem by eye",
      "why": "Possible for an experienced reader, but slow and error-prone compared to just attempting to run it, which surfaces the exact line and character of a genuine syntax problem immediately and precisely.",
      "better": "Better fit for: a results or logic bug, where the script does run, and reading the code is genuinely how you'd trace the actual problem."
    },
    "concepts": [
      {
        "term": "Syntax bugs",
        "explain": "Prevent a script from running at all. PowerShell catches these before execution even begins, and actually attempting to run the script is usually the fastest way to see the exact error and line number."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - diagnose the bug where the numbers look wrong",
    "task": "The second report says the script runs, but the BuildNumber values look wrong. Confirm this is a results bug.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV01",
        "hint": "Going back to the raw underlying command, exactly the habit from an earlier lesson: verify the source data directly, not just the wrapping function."
      },
      {
        "text": "| Select-Object BuildNumber",
        "hint": "Confirming specifically what the real, correct BuildNumber value actually is."
      }
    ],
    "check": function(c){ return /get-ciminstance/i.test(c) && /buildnumber/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && !/get-ciminstance/i.test(c); },
        "output": "(re-running the same function that's already suspected of producing wrong results doesn't independently confirm what the correct value should actually be)",
        "note": "Re-running the same function under suspicion doesn't tell you what the actual correct value should be, only that this function keeps producing the same output. Going back to the raw underlying command, the same 'start with a command' habit from an earlier lesson, confirms what the real data genuinely is."
      }
    ],
    "hint": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV01 | Select-Object BuildNumber, going back to the raw source data to confirm what the correct value actually is.",
    "tokens": [
      {
        "text": "Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName SRV01",
        "cat": "value",
        "note": "The raw underlying command, bypassing the function under suspicion entirely."
      },
      {
        "text": "Select-Object BuildNumber",
        "cat": "cmdlet",
        "note": "Confirming specifically what the actual, correct value is from the source."
      }
    ],
    "output": "BuildNumber\n-----------\n20348\n\n(Get-MachineInfo -ComputerName SRV01 was returning BuildNumber: 20348.0, a results bug, likely from an unintended type conversion somewhere in the function's own code)",
    "order": "This comes right after diagnosing a purely syntax-level bug in step 1, a genuinely different kind of problem, the script runs cleanly but produces incorrect data somewhere along the way.",
    "notice": [
      {
        "field": "Raw source says 20348, function returns 20348.0",
        "note": "A results bug confirmed: the script runs without error, but something inside it is subtly altering correct source data into an incorrect result."
      }
    ],
    "distractor": {
      "name": "Assuming the function's output must be correct since it ran without an error",
      "why": "A results bug specifically produces output with no error at all, that's exactly what makes it a distinct, trickier category than a syntax bug. Running cleanly doesn't guarantee correctness.",
      "better": "Better fit for: never assuming, always confirm against the actual raw source when a result looks even slightly suspicious."
    },
    "concepts": [
      {
        "term": "Results bugs",
        "explain": "A script that runs without any error, but produces subtly incorrect output. Diagnosed by comparing against the actual, raw underlying source data, not just re-running the same suspect function again."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - diagnose the bug that runs fine but still isn't right",
    "task": "The third report says the script runs cleanly and looks right, but somehow doesn't do what was actually asked. Confirm this is a logic bug.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 | Measure-Object",
        "hint": "Counting the actual results returned, to compare against how many were genuinely expected."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /measure-object/i.test(c); },
    "misses": [],
    "hint": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 | Measure-Object, comparing the actual count of results returned against what was genuinely expected, a logic bug often reveals itself this way.",
    "tokens": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03",
        "cat": "value",
        "note": "Run against three known machines."
      },
      {
        "text": "Measure-Object",
        "cat": "cmdlet",
        "note": "Counts the actual results, comparing against the expected count reveals whether the logic itself is doing what was actually intended."
      }
    ],
    "output": "Count    : 1\nAverage  :\nSum      :\n\n(only 1 result came back for 3 requested machines, no error anywhere, this is a logic bug, likely a break statement left inside the foreach loop from a much earlier lesson, stopping after just the first successful result)",
    "order": "This is last, the trickiest category to diagnose because nothing about it looks broken on the surface, the script runs cleanly, produces plausible-looking output, and still isn't doing what was actually asked.",
    "notice": [
      {
        "field": "Count: 1, for 3 requested machines",
        "note": "No error message anywhere, output that looks perfectly reasonable at a glance, but a genuine logic bug once you compare it against what was actually expected."
      }
    ],
    "distractor": {
      "name": "Trusting the output looks fine and moving on",
      "why": "This is exactly what makes a logic bug the hardest category to catch, everything about the output looks legitimate at a glance. Actually comparing the result count, or any other concrete expectation, against reality is what reveals it.",
      "better": "Better fit for: never as a substitute for actually verifying against a concrete, known expectation."
    },
    "concepts": [
      {
        "term": "Logic bugs",
        "explain": "The trickiest category: a script runs cleanly, produces no errors, and even looks plausible, but doesn't actually do what was intended. Caught by comparing real output against a concrete, known expectation, not by how clean or error-free it looks."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - give the object a real, distinct type name",
    "task": "First, give the returned object a real, distinct type name instead of the generic PSCustomObject label.",
    "prefill": "",
    "chips": [
      {
        "text": "$obj = [PSCustomObject]@{ ComputerName = $computer; OSVersion = $os.Version; BuildNumber = $os.BuildNumber }",
        "hint": "The object from an earlier lesson."
      },
      {
        "text": "$obj.PSObject.TypeNames.Insert(0, 'ScriptingMOL.MachineInfo')",
        "hint": "Inserts a custom, distinct type name at the front of the object's type list, without changing any of its actual properties."
      }
    ],
    "check": function(c){ return /pstypenames|typenames/i.test(c) && /scriptingmol\.machineinfo/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /add-member/i.test(c) && /typename/i.test(c) === false && /scriptingmol/i.test(c); },
        "output": "(adds a new property instead of actually changing the object's recognized type name, Update-TypeData in the next step still wouldn't have a real type name to attach a default view to)",
        "note": "Adding a property named something like 'TypeName' doesn't actually change what PowerShell considers this object's real type, it's just another ordinary property. Inserting into $obj.PSObject.TypeNames is what genuinely gives the object a distinct, recognized type name, the actual prerequisite for defining a custom default view."
      }
    ],
    "hint": "$obj.PSObject.TypeNames.Insert(0, 'ScriptingMOL.MachineInfo') gives the object a genuine, distinct type name, the required first step before a custom default view can be attached to it.",
    "tokens": [
      {
        "text": "$obj",
        "cat": "value",
        "note": "The custom object from an earlier lesson."
      },
      {
        "text": ".PSObject.TypeNames.Insert(0, ...)",
        "cat": "param",
        "note": "Inserts a custom type name at the front of the object's recognized type list."
      },
      {
        "text": "'ScriptingMOL.MachineInfo'",
        "cat": "value",
        "note": "A distinct, meaningful type name, not the generic PSCustomObject label everything gets by default."
      }
    ],
    "output": "(Get-Member on $obj now shows TypeName: ScriptingMOL.MachineInfo, instead of the generic System.Management.Automation.PSCustomObject label)",
    "order": "This runs first, since a custom default view, built in the next steps, has to be attached to a specific, recognized type name, one that doesn't exist yet until this step creates it.",
    "notice": [
      {
        "field": "TypeName: ScriptingMOL.MachineInfo",
        "note": "Confirms the object now carries a genuine, distinct type identity, the actual prerequisite for the custom formatting built in the remaining steps."
      }
    ],
    "distractor": {
      "name": "Adding a regular property that just says what type it is",
      "why": "A property holding descriptive text isn't the same as the object's actual, recognized type name. PowerShell's formatting system looks at .PSObject.TypeNames specifically, not an arbitrary property, when deciding how to display something.",
      "better": "Better fit for: never as a substitute, .PSObject.TypeNames.Insert() is the genuine mechanism for this."
    },
    "concepts": [
      {
        "term": ".PSObject.TypeNames",
        "explain": "The actual list PowerShell's formatting system consults to decide how an object should display. Inserting a custom name here gives an object a genuine, distinct type identity, the prerequisite for attaching a custom default view."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - define a default view for that type",
    "task": "Now define an actual default view for the ScriptingMOL.MachineInfo type, specifying which columns show by default.",
    "prefill": "",
    "chips": [
      {
        "text": "Update-TypeData",
        "hint": "Registers formatting rules, among other things, for a specific type name, applying automatically to every object of that type from then on."
      },
      {
        "text": "-TypeName 'ScriptingMOL.MachineInfo'",
        "hint": "The exact type name created in step 1."
      },
      {
        "text": "-DefaultDisplayPropertySet 'ComputerName','OSVersion','BuildNumber'",
        "hint": "Exactly the columns that should display by default, no Format-Table required from the caller."
      }
    ],
    "check": function(c){ return /update-typedata/i.test(c) && /scriptingmol\.machineinfo/i.test(c) && /defaultdisplaypropertyset/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /format-table/i.test(c) && /computername/i.test(c) && !/update-typedata/i.test(c); },
        "output": "(this shows the right columns exactly once, for this specific call, but the very next time Get-MachineInfo runs, without manually piping into Format-Table again, the default view is right back to the generic, unformatted list)",
        "note": "Piping into Format-Table manually works for exactly this one call, but doesn't change anything about the object's actual default behavior going forward. Update-TypeData registers a real, lasting default view for the entire type, so every future call displays correctly with zero formatting required."
      }
    ],
    "hint": "Update-TypeData -TypeName 'ScriptingMOL.MachineInfo' -DefaultDisplayPropertySet 'ComputerName','OSVersion','BuildNumber', registering a lasting default view for the type.",
    "tokens": [
      {
        "text": "Update-TypeData",
        "cat": "cmdlet",
        "note": "Registers formatting rules for a specific type name, applying automatically and permanently to every future object of that type."
      },
      {
        "text": "-TypeName",
        "cat": "param",
        "note": "Which type this rule applies to."
      },
      {
        "text": "'ScriptingMOL.MachineInfo'",
        "cat": "value",
        "note": "The exact type name created in step 1."
      },
      {
        "text": "-DefaultDisplayPropertySet",
        "cat": "param",
        "note": "Which properties display by default, with no Format-Table required from the caller."
      },
      {
        "text": "'ComputerName','OSVersion','BuildNumber'",
        "cat": "value",
        "note": "Exactly the three properties that should show automatically."
      }
    ],
    "output": "(a formatting rule now registered for ScriptingMOL.MachineInfo, applying automatically to every future object of that type, not just this one)",
    "order": "This comes right after establishing the type name in step 1, registering the actual formatting rule that step 3 will confirm works automatically, with zero manual formatting from the caller.",
    "notice": [
      {
        "field": "A registered, lasting rule, not a one-time format",
        "note": "This is what makes the fix permanent, unlike manually piping into Format-Table, which would only ever affect that one specific call."
      }
    ],
    "distractor": {
      "name": "Manually piping into Format-Table for this one call",
      "why": "Fixes the display for exactly this one call, but changes nothing about the object's actual default behavior. The very next time Get-MachineInfo runs without that manual formatting, it's right back to the plain, unformatted default.",
      "better": "Better fit for: a genuine one-off display need, different from every future call of a finished, polished tool."
    },
    "concepts": [
      {
        "term": "Update-TypeData and DefaultDisplayPropertySet",
        "explain": "Registers a lasting formatting rule for a specific type name, so every future object of that type displays with the specified default columns automatically, no manual Format-Table required from whoever's calling it."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it displays correctly with zero manual formatting",
    "task": "Now confirm the finished function displays cleanly by default, with no Format-Table piped in at all.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01",
        "hint": "Called plainly, no formatting cmdlet piped in anywhere."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && !/format-table/i.test(c); },
    "misses": [],
    "hint": "Get-MachineInfo -ComputerName SRV01, called completely plainly, confirming steps 1 and 2 actually made the default display clean with zero manual formatting needed.",
    "tokens": [
      {
        "text": "Get-MachineInfo",
        "cat": "cmdlet",
        "note": "The finished function, now with a real type name and registered default view."
      },
      {
        "text": "-ComputerName",
        "cat": "param",
        "note": "Same parameter as always."
      },
      {
        "text": "SRV01",
        "cat": "value",
        "note": "A single target, called with nothing else piped in."
      }
    ],
    "output": "ComputerName OSVersion  BuildNumber\n------------ ---------  -----------\nSRV01        10.0.20348 20348",
    "order": "This is last, the actual proof that steps 1 and 2 worked together: a clean, correctly formatted display, with absolutely nothing piped into Format-Table by the caller.",
    "notice": [
      {
        "field": "Clean table output, no Format-Table anywhere in this command",
        "note": "This is the exact original complaint, resolved. Anyone calling Get-MachineInfo now gets a readable default display automatically, exactly like a real built-in cmdlet."
      }
    ],
    "distractor": {
      "name": "Piping into Format-Table one more time just to be safe",
      "why": "Would work, but defeats the entire point of steps 1 and 2, proving the object now displays correctly on its own, with zero manual formatting required from the caller.",
      "better": "Better fit for: never here, this final step exists specifically to confirm formatting is no longer necessary."
    },
    "concepts": [
      {
        "term": "Confirming default formatting works",
        "explain": "The real test of a custom default view isn't checking Update-TypeData ran without error, it's calling the actual function plainly, with nothing piped in, and confirming it displays cleanly on its own, exactly like this final step did."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - find the right .NET class",
    "task": "Before writing anything, find the actual .NET class capable of generating cryptographically strong random values.",
    "prefill": "",
    "chips": [
      {
        "text": "[System.Web.Security.Membership]",
        "hint": "A .NET class with a built-in method specifically for generating random passwords."
      },
      {
        "text": "::GeneratePassword(16, 4)",
        "hint": "Calling a static method directly on the class, 16 characters long, at least 4 non-alphanumeric characters."
      }
    ],
    "check": function(c){ return /\[system\.web\.security\.membership\]/i.test(c) && /generatepassword/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /-join\s*\(/i.test(c) && /get-random/i.test(c) && !/generatepassword/i.test(c); },
        "output": "(works, technically, but requires manually building a character set, looping, and joining results, real, workable code, just reinventing something a purpose-built .NET method already does directly)",
        "note": "Building a random password manually with Get-Random and -join works, but it's real effort spent reinventing something a single .NET method already does directly and more reliably. Checking for an existing .NET class first, before writing custom logic, is the actual habit this chapter is about."
      }
    ],
    "hint": "[System.Web.Security.Membership]::GeneratePassword(16, 4), a .NET class with a method built specifically for this exact purpose.",
    "tokens": [
      {
        "text": "[System.Web.Security.Membership]",
        "cat": "value",
        "note": "A .NET class, accessed directly from PowerShell using square-bracket syntax, exactly the same syntax used earlier for [Security.Principal.WindowsPrincipal]."
      },
      {
        "text": "::GeneratePassword(16, 4)",
        "cat": "value",
        "note": "Calling a static method directly on the class: 16 characters long, with at least 4 non-alphanumeric characters."
      }
    ],
    "output": "K7#mQ2$xR9!vL4@p",
    "order": "This runs first, finding an existing .NET solution before writing any custom logic, exactly the discipline this chapter recommends before assuming something needs to be built entirely from scratch.",
    "notice": [
      {
        "field": "A genuinely random, complex password, from one line",
        "note": "Confirms the .NET class handles the real complexity, character variety, true randomness, that manually rolling your own logic would have to carefully reimplement."
      }
    ],
    "distractor": {
      "name": "Manually building a password with Get-Random and a custom character set",
      "why": "Works, but requires carefully building a character set, looping the right number of times, and joining the results correctly, real effort spent reinventing something a single, purpose-built .NET method already does directly.",
      "better": "Better fit for: when no existing .NET class or cmdlet actually covers the specific thing you need, genuinely necessary in that case."
    },
    "concepts": [
      {
        "term": "Reaching into .NET directly",
        "explain": "PowerShell is built directly on top of .NET, and any .NET class can be accessed with square-bracket syntax, [ClassName]::Method(), even when no PowerShell cmdlet wraps it. Worth checking for before writing custom logic to solve something from scratch."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - wrap it in a reusable function",
    "task": "Now wrap the .NET call in a small, reusable function instead of leaving raw .NET syntax scattered wherever it's needed.",
    "prefill": "",
    "chips": [
      {
        "text": "function New-RandomPassword {",
        "hint": "A small wrapper function, Verb-Noun named."
      },
      {
        "text": "param ([int]$Length = 16, [int]$NonAlphanumericCount = 4)",
        "hint": "Parameterized, instead of the raw .NET call's fixed numbers."
      },
      {
        "text": "[System.Web.Security.Membership]::GeneratePassword($Length, $NonAlphanumericCount)",
        "hint": "The same underlying .NET call, now driven by real parameters."
      },
      {
        "text": "}",
        "hint": "Closes the function."
      }
    ],
    "check": function(c){ return /function\s+new-randompassword/i.test(c) && /generatepassword/i.test(c) && /\$length/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /generatepassword\(16,\s*4\)/i.test(c) && !/function/i.test(c); },
        "output": "(the raw .NET call from step 1, copy-pasted wherever a password is needed, with hardcoded 16 and 4 values repeated everywhere, and no single place to change the defaults later)",
        "note": "Copy-pasting the raw .NET syntax everywhere it's needed means hardcoded values repeated in multiple places, and no single spot to change a default later. Wrapping it in a small, parameterized function is what actually makes it reusable, exactly like every tool built across this whole phase."
      }
    ],
    "hint": "function New-RandomPassword { param ([int]$Length = 16, [int]$NonAlphanumericCount = 4) [System.Web.Security.Membership]::GeneratePassword($Length, $NonAlphanumericCount) }",
    "tokens": [
      {
        "text": "function New-RandomPassword {",
        "cat": "cmdlet",
        "note": "A small, Verb-Noun named wrapper, hiding the raw .NET syntax behind a genuine PowerShell-style interface."
      },
      {
        "text": "param ([int]$Length = 16, [int]$NonAlphanumericCount = 4)",
        "cat": "param",
        "note": "Real parameters with sensible defaults, instead of hardcoded numbers scattered wherever the .NET call is used."
      },
      {
        "text": "[System.Web.Security.Membership]::GeneratePassword($Length, $NonAlphanumericCount)",
        "cat": "value",
        "note": "The exact same underlying .NET call from step 1, now driven by real, adjustable parameters."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(New-RandomPassword, or New-RandomPassword -Length 24 -NonAlphanumericCount 6, now callable like any other PowerShell tool, the raw .NET syntax entirely hidden behind it)",
    "order": "This comes right after finding the .NET class, wrapping it exactly like every other tool built across this phase, a clean, parameterized interface hiding whatever implementation happens to sit underneath.",
    "notice": [
      {
        "field": "Verb-Noun name, real parameters, one place to change defaults",
        "note": "This is the same tool-building discipline from earlier lessons, applied here to wrapping raw .NET instead of a cmdlet."
      }
    ],
    "distractor": {
      "name": "Leaving the raw .NET call as a one-liner used directly wherever needed",
      "why": "Works exactly once, but scattering the same raw syntax with hardcoded values everywhere it's needed means no single place to change a default, and no clean, memorable name to call it by.",
      "better": "Better fit for: a genuine one-off, throwaway need, never something meant to be reused more than once."
    },
    "concepts": [
      {
        "term": "Wrapping .NET in a PowerShell function",
        "explain": "Once a useful .NET class or method is found, wrapping it in a small, parameterized, Verb-Noun named function turns raw .NET syntax into something that looks and behaves exactly like any other PowerShell tool."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm it generates several genuinely different passwords",
    "task": "Confirm the finished tool generates several genuinely different, random passwords, not the same one repeated.",
    "prefill": "",
    "chips": [
      {
        "text": "1..5 | ForEach-Object { New-RandomPassword }",
        "hint": "Generating five separately, to confirm genuine randomness rather than a fixed, repeated result."
      }
    ],
    "check": function(c){ return /new-randompassword/i.test(c) && /foreach-object/i.test(c); },
    "misses": [],
    "hint": "1..5 | ForEach-Object { New-RandomPassword }, generating five separate passwords, confirming they're genuinely different each time, not one fixed value repeated.",
    "tokens": [
      {
        "text": "1..5",
        "cat": "value",
        "note": "A simple range, used purely to trigger five separate calls."
      },
      {
        "text": "ForEach-Object",
        "cat": "cmdlet",
        "note": "Calls the new function five separate times."
      },
      {
        "text": "{ New-RandomPassword }",
        "cat": "value",
        "note": "The finished tool from step 2, called repeatedly to confirm genuine randomness."
      }
    ],
    "output": "K7#mQ2$xR9!vL4@p\nT3!wZ8&nB1#kY6@d\nF9%jH2!qC5&mN8@r\nX4#pL7$vD1!wK3@t\nR6&sM9!bG2#hJ5@y",
    "order": "This is last, direct proof that the finished tool from step 2 genuinely works as intended, five calls, five distinct, complex, random results, not a repeated or predictable value.",
    "notice": [
      {
        "field": "Five genuinely distinct passwords",
        "note": "Confirms the wrapped .NET method is actually behaving randomly, exactly what a password generator needs to be trusted for."
      }
    ],
    "distractor": {
      "name": "Only ever calling it once and assuming it's fine",
      "why": "One call can't distinguish a genuinely random generator from one that happens to look random the first time but secretly returns the same or a predictable value. Several calls in a row is the real confirmation.",
      "better": "Better fit for: never as the only test for something specifically meant to be random."
    },
    "concepts": [
      {
        "term": "Confirming genuine randomness",
        "explain": "A single successful call doesn't prove a generator is actually random, only that it produced one plausible-looking result. Calling it several times and confirming genuinely distinct output is the real test."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - save results into a real table",
    "task": "Save the results of Get-MachineInfo into an actual SQL Server table, instead of pasting them into Excel.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03",
        "hint": "The real results being saved."
      },
      {
        "text": "| Write-SqlTableData",
        "hint": "Writes objects directly into a SQL Server table, no manual INSERT statements needed."
      },
      {
        "text": "-ServerInstance SQL01 -DatabaseName Inventory -SchemaName dbo -TableName MachineInfo",
        "hint": "Exactly where the data actually lands."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /write-sqltabledata/i.test(c) && /machineinfo/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /export-csv/i.test(c) && /get-machineinfo/i.test(c) && !/write-sqltabledata/i.test(c); },
        "output": "(a CSV file is written, technically not Excel directly, but still just another single, exportable file someone has to open, edit, and potentially conflict with someone else's copy of)",
        "note": "A CSV file solves the exact same problem Excel had, one file, one person editing at a time, real risk of conflicting versions. Write-SqlTableData actually saves the data into a genuine, shared database table multiple people can query and update reliably at the same time."
      }
    ],
    "hint": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03 | Write-SqlTableData -ServerInstance SQL01 -DatabaseName Inventory -SchemaName dbo -TableName MachineInfo, saving results into a real, shared table.",
    "tokens": [
      {
        "text": "Get-MachineInfo -ComputerName SRV01,SRV02,SRV03",
        "cat": "value",
        "note": "The real results to be saved, from the tool built across this whole phase."
      },
      {
        "text": "Write-SqlTableData",
        "cat": "cmdlet",
        "note": "Writes piped-in objects directly into a SQL Server table, no manual INSERT statements required."
      },
      {
        "text": "-ServerInstance",
        "cat": "param",
        "note": "Which SQL Server to connect to."
      },
      {
        "text": "SQL01",
        "cat": "value",
        "note": "The actual server."
      },
      {
        "text": "-DatabaseName Inventory -SchemaName dbo -TableName MachineInfo",
        "cat": "value",
        "note": "Exactly where the data lands, a genuine, shared database table."
      }
    ],
    "output": "(3 rows written to Inventory.dbo.MachineInfo on SQL01)",
    "order": "This runs first, actually solving the original problem: results genuinely saved to a shared, reliable database table instead of another fragile, single-owner file.",
    "notice": [
      {
        "field": "3 rows written to a real database table",
        "note": "This is the actual substance of the request, results genuinely stored somewhere multiple people can reliably access at once, not a file anyone could accidentally overwrite."
      }
    ],
    "distractor": {
      "name": "Exporting to a CSV file instead",
      "why": "Solves the exact same underlying problem Excel had, a single file someone has to open and edit, with real risk of conflicting versions if two people touch it around the same time. A real database table is built specifically for reliable, simultaneous shared access.",
      "better": "Better fit for: a quick, one-off export meant to be opened by exactly one person, not ongoing shared data storage."
    },
    "concepts": [
      {
        "term": "Write-SqlTableData",
        "explain": "Writes piped-in PowerShell objects directly into a SQL Server table, no manual INSERT statements required, turning a real object collection into stored, shared, queryable data."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - query the data back out",
    "task": "Now confirm the data actually made it in, by querying it back out.",
    "prefill": "",
    "chips": [
      {
        "text": "Invoke-Sqlcmd",
        "hint": "Runs a real SQL query against a server and returns the results as PowerShell objects."
      },
      {
        "text": "-ServerInstance SQL01 -Database Inventory",
        "hint": "Same server and database from step 1."
      },
      {
        "text": "-Query \"SELECT * FROM dbo.MachineInfo\"",
        "hint": "An actual SQL query, pulling every row back out."
      }
    ],
    "check": function(c){ return /invoke-sqlcmd/i.test(c) && /machineinfo/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /write-sqltabledata/i.test(c) && !/invoke-sqlcmd/i.test(c); },
        "output": "(re-running the write from step 1 doesn't confirm anything about whether the data can actually be queried back out, only that writing itself still works)",
        "note": "Re-running the write operation confirms writing still works, but says nothing about whether the data can actually be queried back out successfully, the other half of what this request specifically asked to see. Invoke-Sqlcmd is what runs a real query and confirms the data is genuinely retrievable."
      }
    ],
    "hint": "Invoke-Sqlcmd -ServerInstance SQL01 -Database Inventory -Query \"SELECT * FROM dbo.MachineInfo\", actually querying the data back out, confirming the other half of this request.",
    "tokens": [
      {
        "text": "Invoke-Sqlcmd",
        "cat": "cmdlet",
        "note": "Runs a real SQL query against a server and returns the results as usable PowerShell objects."
      },
      {
        "text": "-ServerInstance SQL01 -Database Inventory",
        "cat": "param",
        "note": "Same target as step 1's write."
      },
      {
        "text": "-Query",
        "cat": "param",
        "note": "The actual SQL query to run."
      },
      {
        "text": "\"SELECT * FROM dbo.MachineInfo\"",
        "cat": "value",
        "note": "Pulls every row back out of the table."
      }
    ],
    "output": "ComputerName OSVersion  BuildNumber\n------------ ---------  -----------\nSRV01        10.0.20348 20348\nSRV02        10.0.19045 19045\nSRV03        10.0.22621 22621",
    "order": "This comes right after saving the data, confirming the other genuinely necessary half of the request, that the data isn't just written somewhere but actually retrievable afterward too.",
    "notice": [
      {
        "field": "All 3 rows returned, matching step 1's write exactly",
        "note": "Confirms the entire round trip, save and retrieve, genuinely works, not just one half of it."
      }
    ],
    "distractor": {
      "name": "Only confirming step 1's write succeeded, without ever querying it back",
      "why": "The original request specifically asked to see both the saving and the querying-it-back-out sides working. Confirming only the write leaves the actually more meaningful half, can this data genuinely be used later, unverified.",
      "better": "Better fit for: never as the only confirmation when both halves were explicitly requested."
    },
    "concepts": [
      {
        "term": "Invoke-Sqlcmd",
        "explain": "Runs a real SQL query against a server and returns the results as genuine PowerShell objects, the natural counterpart to Write-SqlTableData, confirming data saved to a database is actually retrievable afterward, not just written."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - confirm the whole round trip against fresh data",
    "task": "Run the entire save-then-query round trip once more, against a fresh machine, confirming the whole workflow genuinely holds up.",
    "prefill": "",
    "chips": [
      {
        "text": "Get-MachineInfo -ComputerName SRV04 | Write-SqlTableData -ServerInstance SQL01 -DatabaseName Inventory -SchemaName dbo -TableName MachineInfo",
        "hint": "The full save step from step 1, now against a brand new machine."
      },
      {
        "text": "Invoke-Sqlcmd -ServerInstance SQL01 -Database Inventory -Query \"SELECT * FROM dbo.MachineInfo WHERE ComputerName = 'SRV04'\"",
        "hint": "Querying specifically for the newly added row."
      }
    ],
    "check": function(c){ return /get-machineinfo/i.test(c) && /write-sqltabledata/i.test(c) && /invoke-sqlcmd/i.test(c) && /srv04/i.test(c); },
    "misses": [],
    "hint": "Run the full save-then-query round trip once more, against SRV04, a machine never used in steps 1 or 2, confirming the whole workflow genuinely holds up, not just for the original test data.",
    "tokens": [
      {
        "text": "Get-MachineInfo -ComputerName SRV04 | Write-SqlTableData ...",
        "cat": "value",
        "note": "The complete save step, against a genuinely new machine."
      },
      {
        "text": "Invoke-Sqlcmd ... WHERE ComputerName = 'SRV04'",
        "cat": "value",
        "note": "Querying specifically for the newly added row, confirming it's genuinely there."
      }
    ],
    "output": "ComputerName OSVersion  BuildNumber\n------------ ---------  -----------\nSRV04        10.0.19045 19045",
    "order": "This is last, a genuine end-to-end confirmation using a completely fresh machine, proving the entire save-then-query workflow works reliably, not just for the specific data used in steps 1 and 2.",
    "notice": [
      {
        "field": "SRV04, a machine never used in steps 1 or 2, successfully round-tripped",
        "note": "This is the strongest possible confirmation, the whole workflow genuinely works for new data, not just the specific data already used to build and test it."
      }
    ],
    "distractor": {
      "name": "Only re-querying the same three original machines from step 2",
      "why": "Wouldn't actually prove the full save-then-query workflow works for new data, only that data already confirmed once is still sitting there. A genuinely new machine is the real end-to-end test.",
      "better": "Better fit for: never as the only confirmation, fresh data is the real test of the whole round trip."
    },
    "concepts": [
      {
        "term": "Testing the full round trip with fresh data",
        "explain": "The strongest confirmation a save-then-query workflow genuinely works is running it end to end against data that's never touched the system before, not just re-checking data already confirmed in an earlier step."
      }
    ]
  },
  {
    "title": "Step 1 of 3 - the advanced function, with real help",
    "task": "Start with the advanced function itself, CmdletBinding, real parameters, and comment-based help, all from earlier in this phase.",
    "prefill": "",
    "chips": [
      {
        "text": "<# .SYNOPSIS Gets basic OS information from one or more computers. .PARAMETER ComputerName One or more computer names to query. #>",
        "hint": "Comment-based help, from chapter 14."
      },
      {
        "text": "function Get-MachineInfo {",
        "hint": "Verb-Noun, from way back in chapter 3's WWPD lesson."
      },
      {
        "text": "[CmdletBinding()]",
        "hint": "From chapter 11, unlocking -Verbose and the rest of the common parameters."
      },
      {
        "text": "param ([Parameter(ValueFromPipeline=$True)][string[]]$ComputerName)",
        "hint": "A real, pipeline-aware parameter, chapters 11 and 20 combined."
      },
      {
        "text": "}",
        "hint": "Closes the function."
      }
    ],
    "check": function(c){ return /<#/.test(c) && /\.synopsis/i.test(c) && /function\s+get-machineinfo/i.test(c) && /\[cmdletbinding\(\)\]/i.test(c) && /valuefrompipeline/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /function\s+get-machineinfo/i.test(c) && !/<#/.test(c); },
        "output": "(a working function, but Get-Help Get-MachineInfo shows nothing useful, exactly the undocumented-tool problem chapter 14 was about fixing)",
        "note": "A function without comment-based help works fine to call directly, but leaves Get-Help with nothing useful to show, exactly the gap chapter 14 addressed. Every piece here, the help block, CmdletBinding, the pipeline-aware parameter, already exists somewhere earlier in this phase."
      }
    ],
    "hint": "Comment-based help, [CmdletBinding()], and a ValueFromPipeline parameter, all individually taught earlier in this phase, now landing together in one function.",
    "tokens": [
      {
        "text": "<# .SYNOPSIS ... .PARAMETER ComputerName ... #>",
        "cat": "value",
        "note": "Comment-based help, from chapter 14, making Get-Help actually useful on this tool."
      },
      {
        "text": "function Get-MachineInfo {",
        "cat": "cmdlet",
        "note": "Verb-Noun naming, from chapter 3's WWPD lesson."
      },
      {
        "text": "[CmdletBinding()]",
        "cat": "param",
        "note": "From chapter 11, unlocking common parameters like -Verbose."
      },
      {
        "text": "param ([Parameter(ValueFromPipeline=$True)][string[]]$ComputerName)",
        "cat": "param",
        "note": "A real, pipeline-aware parameter, chapters 11 and 20 combined."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the function."
      }
    ],
    "output": "(Get-Help Get-MachineInfo now shows a real synopsis and parameter description; Get-Content servers.txt | Get-MachineInfo now works directly, thanks to ValueFromPipeline)",
    "order": "This is the foundation, and every single piece of it, naming, CmdletBinding, help, pipeline input, was already taught individually across this phase, only now combined into one real function.",
    "notice": [
      {
        "field": "Nothing new here, all previously taught pieces",
        "note": "This entire step is a direct combination of chapters 3, 11, and 14, exactly the point of this final synthesis lesson."
      }
    ],
    "distractor": {
      "name": "Skipping comment-based help since the function already works",
      "why": "A function that runs correctly and a function that's genuinely usable by someone else are two different things. Working is necessary, documented and discoverable is what chapter 14 specifically added on top of that.",
      "better": "Better fit for: never skipping, for any tool meant to be used by someone other than the person who wrote it."
    },
    "concepts": [
      {
        "term": "Combining, not inventing",
        "explain": "This entire step reuses exactly three previously taught patterns: Verb-Noun naming, CmdletBinding with a pipeline-aware parameter, and comment-based help. Nothing here is new syntax, only recognizing where each piece fits."
      }
    ]
  },
  {
    "title": "Step 2 of 3 - handle a bad computer name gracefully",
    "task": "Now add the error handling from earlier in this phase, so a bad or unreachable computer name doesn't crash the whole function.",
    "prefill": "",
    "chips": [
      {
        "text": "foreach ($computer in $ComputerName) {",
        "hint": "The loop."
      },
      {
        "text": "try { $os = Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $computer -ErrorAction Stop }",
        "hint": "-ErrorAction Stop, from chapter 24, making this failure genuinely catchable."
      },
      {
        "text": "catch { Write-Error \"Failed to query $computer\" }",
        "hint": "Write-Error, from chapter 15, a real, tagged error, not plain text mixed into normal output."
      },
      {
        "text": "}",
        "hint": "Closes the loop."
      }
    ],
    "check": function(c){ return /foreach\s*\(/i.test(c) && /try\s*\{/i.test(c) && /-erroraction\s+stop/i.test(c) && /catch/i.test(c) && /write-error/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /foreach\s*\(/i.test(c) && /get-ciminstance/i.test(c) && !/try/i.test(c); },
        "output": "(one bad computer name partway through a piped-in list from Get-Content stops the entire function, exactly the fragile behavior chapters 15 and 24 addressed)",
        "note": "Without Try/Catch, a single bad name stops the whole loop, exactly the fragility earlier lessons on error handling specifically fixed. Every piece needed to prevent this, -ErrorAction Stop, Try/Catch, Write-Error, was already taught individually earlier in this phase."
      }
    ],
    "hint": "try { ... -ErrorAction Stop } catch { Write-Error \"Failed to query $computer\" }, inside the loop, combining chapters 15 and 24's error-handling patterns.",
    "tokens": [
      {
        "text": "foreach ($computer in $ComputerName) {",
        "cat": "cmdlet",
        "note": "The per-computer loop, working with the pipeline-aware array from step 1."
      },
      {
        "text": "try { ... -ErrorAction Stop }",
        "cat": "value",
        "note": "From chapter 24, makes the query's failure genuinely catchable."
      },
      {
        "text": "catch { Write-Error \"Failed to query $computer\" }",
        "cat": "value",
        "note": "From chapter 15, a real, distinct, tagged error instead of plain output."
      },
      {
        "text": "}",
        "cat": "cmdlet",
        "note": "Closes the loop."
      }
    ],
    "output": "(Get-Content servers.txt | Get-MachineInfo, where one line has a typo'd or offline machine, now reports that one failure clearly and keeps processing every other line)",
    "order": "This comes right after the foundational function structure, adding the resilience that makes a real tool genuinely trustworthy against messy, real-world input, like a file with one bad line in it.",
    "notice": [
      {
        "field": "One failure reported, everything else still processes",
        "note": "Direct proof this function can survive genuinely messy real-world input, exactly like a piped-in file with one typo'd or offline machine name."
      }
    ],
    "distractor": {
      "name": "No error handling, since 'it usually works fine'",
      "why": "A tool meant to be reused by other people, or fed real-world input like a file of server names, will eventually hit a bad value. Handling it gracefully, rather than crashing the whole run over one bad entry, is what makes a tool genuinely trustworthy.",
      "better": "Better fit for: a truly disposable, one-time script you're running once yourself against input you've already manually verified."
    },
    "concepts": [
      {
        "term": "Resilience is combined, not new",
        "explain": "Every piece needed to make this function survive a bad input gracefully, -ErrorAction Stop, Try/Catch, Write-Error, was taught individually earlier in this phase. Combining them here is what turns a fragile script into a genuinely trustworthy tool."
      }
    ]
  },
  {
    "title": "Step 3 of 3 - package it as a real, documented module",
    "task": "Finally, confirm the whole thing is packaged as a real module with a manifest, installable and trustworthy, not just a function sitting in a console.",
    "prefill": "",
    "chips": [
      {
        "text": "Test-ModuleManifest",
        "hint": "From an earlier lesson, confirming the manifest is genuinely valid."
      },
      {
        "text": "-Path 'ScriptingMOL\\ScriptingMOL.psd1'",
        "hint": "The manifest wrapping this entire finished function."
      }
    ],
    "check": function(c){ return /test-modulemanifest/i.test(c) && /scriptingmol\.psd1/i.test(c); },
    "misses": [
      {
        "test": function(c){ return /get-machineinfo/i.test(c) && !/test-modulemanifest/i.test(c); },
        "output": "(the function works fine typed directly into a console, but that's not the same as a real, documented, installable module someone else could trust and load with Import-Module)",
        "note": "A function that works when typed directly into a console session isn't the same as a real, packaged module. Confirming the manifest with Test-ModuleManifest is the final proof this whole journey, function, help, error handling, ends as something genuinely shareable, not just console-only code."
      }
    ],
    "hint": "Test-ModuleManifest -Path 'ScriptingMOL\\ScriptingMOL.psd1', the final confirmation that everything built across this entire phase is genuinely packaged, not just working code in a console.",
    "tokens": [
      {
        "text": "Test-ModuleManifest",
        "cat": "cmdlet",
        "note": "From an earlier lesson, the final validation that this is a genuine, correctly structured module."
      },
      {
        "text": "-Path",
        "cat": "param",
        "note": "Which manifest to validate."
      },
      {
        "text": "'ScriptingMOL\\ScriptingMOL.psd1'",
        "cat": "value",
        "note": "The manifest wrapping the entire finished function built across this whole phase."
      }
    ],
    "output": "ModuleType Version    Name           ExportedCommands\n---------- -------    ----           -----------------\nScript     1.0.0      ScriptingMOL   {Get-MachineInfo}",
    "order": "This is last, closing the entire phase's journey: a well-designed advanced function, with real help and genuine error resilience, properly packaged as a module someone else could actually install and trust, every piece already learned, only now genuinely finished.",
    "notice": [
      {
        "field": "ExportedCommands: {Get-MachineInfo}",
        "note": "The complete, finished result of this entire phase: one properly designed, documented, resilient, packaged tool, built entirely from pieces taught individually along the way."
      }
    ],
    "distractor": {
      "name": "Considering the function finished once it just runs correctly",
      "why": "Working correctly is necessary but not sufficient. A genuinely finished tool is documented, resilient to bad input, and packaged so someone else could actually install and trust it, exactly what this final step confirms.",
      "better": "Better fit for: never as the actual finish line, though it's a meaningful milestone along the way."
    },
    "concepts": [
      {
        "term": "Never the end",
        "explain": "This entire lesson combined pieces from chapters 3, 11, 14, 15, 16, and 24, nothing new, only recognition of which already-known piece fits where. That is the actual skill this whole curriculum was building toward, and it's exactly the skill that keeps working on the next tool, and the one after that."
      }
    ]
  }
];

