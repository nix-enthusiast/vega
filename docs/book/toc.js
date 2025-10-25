// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="welcome.html">Welcome</a></li><li class="chapter-item expanded affix "><a href="preamble.html">Preamble</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="keywords.html"><strong aria-hidden="true">1.</strong> Keywords</a></li><li class="chapter-item expanded "><a href="data_types.html"><strong aria-hidden="true">2.</strong> Data Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="data_types/primitives.html"><strong aria-hidden="true">2.1.</strong> Primitives</a></li><li class="chapter-item expanded "><a href="data_types/composite_data_types.html"><strong aria-hidden="true">2.2.</strong> Composite Data Types</a></li><li class="chapter-item expanded "><a href="data_types/mathematical_data_types.html"><strong aria-hidden="true">2.3.</strong> Mathematical Data Types</a></li></ol></li><li class="chapter-item expanded "><a href="notations.html"><strong aria-hidden="true">3.</strong> Notations</a></li><li class="chapter-item expanded "><a href="variables_and_scopes.html"><strong aria-hidden="true">4.</strong> Variables and Scopes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="variables_and_scopes/variables.html"><strong aria-hidden="true">4.1.</strong> Variables</a></li><li class="chapter-item expanded "><a href="variables_and_scopes/scopes.html"><strong aria-hidden="true">4.2.</strong> Scopes</a></li></ol></li><li class="chapter-item expanded "><a href="control_flow.html"><strong aria-hidden="true">5.</strong> Control Flow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="control_flow/conditional_branching.html"><strong aria-hidden="true">5.1.</strong> Conditional Branching</a></li><li class="chapter-item expanded "><a href="control_flow/looping.html"><strong aria-hidden="true">5.2.</strong> Looping</a></li></ol></li><li class="chapter-item expanded "><a href="functions.html"><strong aria-hidden="true">6.</strong> Functions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="functions/functions.html"><strong aria-hidden="true">6.1.</strong> Functions</a></li><li class="chapter-item expanded "><a href="functions/call_dispatching.html"><strong aria-hidden="true">6.2.</strong> Call Dispatching</a></li></ol></li><li class="chapter-item expanded "><a href="error_handling.html"><strong aria-hidden="true">7.</strong> Error Handling</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="error_handling/exceptions.html"><strong aria-hidden="true">7.1.</strong> Exceptions</a></li><li class="chapter-item expanded "><a href="error_handling/handling_the_exceptions.html"><strong aria-hidden="true">7.2.</strong> Handling the Exceptions</a></li></ol></li><li class="chapter-item expanded "><a href="polymorphism.html"><strong aria-hidden="true">8.</strong> Polymorphism</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="polymorphism/any_type.html"><strong aria-hidden="true">8.1.</strong> Any Type</a></li><li class="chapter-item expanded "><a href="polymorphism/generics.html"><strong aria-hidden="true">8.2.</strong> Generics</a></li><li class="chapter-item expanded "><a href="polymorphism/reflection.html"><strong aria-hidden="true">8.3.</strong> Reflection</a></li><li class="chapter-item expanded "><a href="polymorphism/function_overloading.html"><strong aria-hidden="true">8.4.</strong> Function Overloading</a></li><li class="chapter-item expanded "><a href="polymorphism/behaviors.html"><strong aria-hidden="true">8.5.</strong> Behaviors</a></li></ol></li><li class="chapter-item expanded "><a href="memory_management.html"><strong aria-hidden="true">9.</strong> Memory Management</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="memory_management/garbage_collection.html"><strong aria-hidden="true">9.1.</strong> Garbage Collection</a></li><li class="chapter-item expanded "><a href="memory_management/referencing.html"><strong aria-hidden="true">9.2.</strong> Referencing</a></li></ol></li><li class="chapter-item expanded "><a href="multithreading_and_concurrency.html"><strong aria-hidden="true">10.</strong> Multithreading and Concurrency</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="multithreading_and_concurrency/actors.html"><strong aria-hidden="true">10.1.</strong> Actors</a></li><li class="chapter-item expanded "><a href="multithreading_and_concurrency/scheduler.html"><strong aria-hidden="true">10.2.</strong> Scheduler</a></li><li class="chapter-item expanded "><a href="multithreading_and_concurrency/mutable_variables_across_actors.html"><strong aria-hidden="true">10.3.</strong> Mutable Variables Across Actors</a></li></ol></li><li class="chapter-item expanded "><a href="ffi.html"><strong aria-hidden="true">11.</strong> FFI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ffi/external_functions.html"><strong aria-hidden="true">11.1.</strong> External Functions</a></li><li class="chapter-item expanded "><a href="ffi/raw_pointers.html"><strong aria-hidden="true">11.2.</strong> Raw Pointers</a></li><li class="chapter-item expanded "><a href="ffi/scheduling_external_functions.html"><strong aria-hidden="true">11.3.</strong> Scheduling External Functions</a></li></ol></li><li class="chapter-item expanded "><a href="standard_library.html"><strong aria-hidden="true">12.</strong> Standard Library</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="standard_library/str.html"><strong aria-hidden="true">12.1.</strong> str</a></li><li class="chapter-item expanded "><a href="standard_library/math.html"><strong aria-hidden="true">12.2.</strong> math</a></li><li class="chapter-item expanded "><a href="standard_library/num.html"><strong aria-hidden="true">12.3.</strong> num</a></li><li class="chapter-item expanded "><a href="standard_library/behaviors.html"><strong aria-hidden="true">12.4.</strong> behaviors</a></li><li class="chapter-item expanded "><a href="standard_library/collections.html"><strong aria-hidden="true">12.5.</strong> collections</a></li><li class="chapter-item expanded "><a href="standard_library/env.html"><strong aria-hidden="true">12.6.</strong> env</a></li><li class="chapter-item expanded "><a href="standard_library/os.html"><strong aria-hidden="true">12.7.</strong> os</a></li><li class="chapter-item expanded "><a href="standard_library/io.html"><strong aria-hidden="true">12.8.</strong> io</a></li><li class="chapter-item expanded "><a href="standard_library/net.html"><strong aria-hidden="true">12.9.</strong> net</a></li><li class="chapter-item expanded "><a href="standard_library/testing.html"><strong aria-hidden="true">12.10.</strong> testing</a></li><li class="chapter-item expanded "><a href="standard_library/ffi.html"><strong aria-hidden="true">12.11.</strong> ffi</a></li></ol></li><li class="chapter-item expanded "><a href="compilation_and_execution.html"><strong aria-hidden="true">13.</strong> Compilation and Execution</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="compilation_and_execution/compilation_pipeline.html"><strong aria-hidden="true">13.1.</strong> Compilation Pipeline</a></li><li class="chapter-item expanded "><a href="compilation_and_execution/ahead-of-time_compilation.html"><strong aria-hidden="true">13.2.</strong> Ahead-Of-Time Compilation</a></li><li class="chapter-item expanded "><a href="compilation_and_execution/jut-in-time_compilation.html"><strong aria-hidden="true">13.3.</strong> Just-In-Time Compilation</a></li><li class="chapter-item expanded "><a href="compilation_and_execution/compiling_as_a_library.html"><strong aria-hidden="true">13.4.</strong> Compiling As A Library</a></li></ol></li><li class="chapter-item expanded "><a href="the_orbit_package_manager.html"><strong aria-hidden="true">14.</strong> The Orbit Package Manager</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="the_orbit_package_manager/orb.html"><strong aria-hidden="true">14.1.</strong> Orb</a></li><li class="chapter-item expanded "><a href="the_orbit_package_manager/orb.vg.html"><strong aria-hidden="true">14.2.</strong> Orb.vg</a></li><li class="chapter-item expanded "><a href="the_orbit_package_manager/orbits.io.html"><strong aria-hidden="true">14.3.</strong> Orbits.io</a></li><li class="chapter-item expanded "><a href="the_orbit_package_manager/importing_orbs.html"><strong aria-hidden="true">14.4.</strong> Importing Orbs</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
