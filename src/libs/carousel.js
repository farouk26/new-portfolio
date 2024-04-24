export default function animateProjects() {
  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px", // no margin
    threshold: 0.6, // 50% of the target element must be visible
  }
  // Select all image wrappers
  const imageWrappers = document.querySelectorAll(".left-side .image-wrapper")

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const currentContentWrapper = entry.target
      const index = parseInt(currentContentWrapper.dataset.index)

      if (entry.isIntersecting) {
        currentContentWrapper.classList.add("in-view")

        if (imageWrappers[index]) {
          imageWrappers[index].classList.add("show")
          for (let i = index + 1; i < imageWrappers.length; i++) {
            imageWrappers[i].classList.remove("show")
          }
        }
      } else {
        currentContentWrapper.classList.remove("in-view")
      }
    })
  }

  // Interaction Observer for each content section (right side)
  const observer = new IntersectionObserver(callback, options)
  const contentWrappers = document.querySelectorAll(
    ".right-side .content-wrapper",
  )

  contentWrappers.forEach((wrapper) => {
    observer.observe(wrapper)
  })
}
