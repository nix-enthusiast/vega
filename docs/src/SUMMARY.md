# Summary

<!--
  not used:
  &
  ~
  $
  @
  <<
  >>
-->

<!--
|        category        |      rust     |    vega   |                                                     rationale                                                    |
|:----------------------:|:-------------:|:---------:|:----------------------------------------------------------------------------------------------------------------:|
| file extension         | .rs           | .vg       | already perfect — short, mnemonic, elegant.                                                                      |
| compiler               | rustc         | vec       | good symmetry: same 3-letter truncation pattern, evokes vector and Vega compiler.                                |
| JIT / execution engine | _             | vex       | excellent — “Vega Executor,” and the word vex has a mischievous bite, like “jit with attitude.”                  |
| linter / analyzer      | rust-analyzer | vegis     | from “Vega Insight System.” Smoothly plural-sounding; evokes analysis and intelligence.                          |
| formatter              | rustfmt       | vegafmt   | keeps the motif, clear and transparent. The long form avoids ambiguity (since vgfmt might look too cryptic).     |
| package                | crate         | orb       | fits the celestial theme (Vega → Lyra → stars → orbits). Compact and symbolic: “your code orbits the Vega core.” |
| package manager        | cargo         | orbit     | natural continuation — “orbit” manages “orbs.” The verbs even align: cargo run → orbit launch.                   |
| package registry       | crates.io     | orbits.io | consistent, readable, and cosmically on-theme.                                                                   |
-->

[Welcome](./welcome.md)

[Preamble](./preamble.md)

---

- [Keywords](./keywords.md)

- [Data Types](./data_types.md)
  - [Primitives](./data_types/primitives.md)
  - [Composite Data Types](./data_types/composite_data_types.md)
  - [Mathematical Data Types](./data_types/mathematical_data_types.md)

- [Notations](./notations.md)

- [Variables and Scopes](./variables_and_scopes.md)
  - [Variables](./variables_and_scopes/variables.md)
  - [Scopes](./variables_and_scopes/scopes.md)

- [Control Flow](./control_flow.md)
  - [Conditional Branching](./control_flow/conditional_branching.md)
  - [Looping](./control_flow/looping.md)

- [Functions](./functions.md)
  - [Functions](./functions/functions.md)
  - [Call Dispatching](./functions/call_dispatching.md)

- [Error Handling](./error_handling.md)
  - [Exceptions](./error_handling/exceptions.md)
  - [Handling the Exceptions](./error_handling/handling_the_exceptions.md)

- [Polymorphism](./polymorphism.md)
  - [Any Type](./polymorphism/any_type.md)
  - [Generics](./polymorphism/generics.md)
  - [Reflection](./polymorphism/reflection.md)
  - [Function Overloading](./polymorphism/function_overloading.md)
  - [Behaviors](./polymorphism/behaviors.md)

- [Memory Management](./memory_management.md)
  - [Garbage Collection](./memory_management/garbage_collection.md)
  - [Referencing](./memory_management/referencing.md)

- [Multithreading and Concurrency](./multithreading_and_concurrency.md)
  - [Actors](./multithreading_and_concurrency/actors.md)
  - [Scheduler](./multithreading_and_concurrency/scheduler.md)
  - [Mutable Variables Across Actors](./multithreading_and_concurrency/mutable_variables_across_actors.md)

- [FFI](./ffi.md)
  - [External Functions](./ffi/external_functions.md)
  - [Raw Pointers](./ffi/raw_pointers.md)
  - [Scheduling External Functions](./ffi/scheduling_external_functions.md)

- [Standard Library](./standard_library.md)
  - [str](./standard_library/str.md)
  - [math](./standard_library/math.md)
  - [num](./standard_library/num.md)
  - [behaviors](./standard_library/behaviors.md)
  - [collections](./standard_library/collections.md)
  - [env](./standard_library/env.md)
  - [os](./standard_library/os.md)
  - [io](./standard_library/io.md)
  - [net](./standard_library/net.md)
  - [testing](./standard_library/testing.md)
  - [ffi](./standard_library/ffi.md)

- [Compilation and Execution](./compilation_and_execution.md)
  - [Compilation Pipeline](./compilation_and_execution/compilation_pipeline.md)
  - [Ahead-Of-Time Compilation](./compilation_and_execution/ahead-of-time_compilation.md)
  - [Just-In-Time Compilation](./compilation_and_execution/jut-in-time_compilation.md)
  - [Compiling As A Library](./compilation_and_execution/compiling_as_a_library.md)

- [The Orbit Package Manager](./the_orbit_package_manager.md)
  - [Orb](./the_orbit_package_manager/orb.md)
  - [Orb.vg](./the_orbit_package_manager/orb.vg.md)
  - [Orbits.io](./the_orbit_package_manager/orbits.io.md)
  - [Importing Orbs](./the_orbit_package_manager/importing_orbs.md)
