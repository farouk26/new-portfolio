export default function animateProjects() {
  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px", // no margin
    threshold: 0.5, // 60% of the target element must be visible
  }

  const imageWrappers = document.querySelectorAll(".left-side .image-wrapper")
  const contentWrappers = document.querySelectorAll(
    ".right-side .content-wrapper",
  )

  // Throttle scroll event
  let throttleTimeout
  function throttleScroll(callback) {
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        callback()
        throttleTimeout = null
      }, 100) // Adjust throttle time as needed
    }
  }

  function handleScroll() {
    throttleScroll(() => {
      // Trigger animation based on scroll position
      animateOnScroll()
    })
  }

  function animateOnScroll() {
    const visibleIndexes = []

    contentWrappers.forEach((wrapper, index) => {
      const rect = wrapper.getBoundingClientRect()
      const visible = rect.top < window.innerHeight * 0.6 && rect.bottom >= 0
      if (visible) {
        visibleIndexes.push(index)
      }
    })

    // Add/remove classes based on visibility
    contentWrappers.forEach((wrapper, index) => {
      if (visibleIndexes.includes(index)) {
        wrapper.classList.add("in-view")
        imageWrappers[index]?.classList.add("show")

        for (let i = index + 1; i < imageWrappers.length; i++) {
          imageWrappers[i]?.classList.remove("show")
        }
      } else {
        wrapper.classList.remove("in-view")
      }
    })
  }

  // Intersection Observer for each content section (right side)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view")
      } else {
        entry.target.classList.remove("in-view")
      }
    })
  }, options)

  contentWrappers.forEach((wrapper) => {
    observer.observe(wrapper)
  })

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll)

  // Initial animation on page load
  animateOnScroll()
}
