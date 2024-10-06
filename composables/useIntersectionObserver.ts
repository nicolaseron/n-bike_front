/**
 * useIntersectionObserver helps to set up an intersection observer object
 * Returns an observer with an initial element to watch (can be either an Element or a class)
 * @param elementToWatch
 * @param callback
 * @param outCallback
 * @param once
 * @param options
 */
export const useIntersectionObserver = (
    elementToWatch: Element | string,
    callback = (target: Element) => {},
    outCallback = (target: Element) => {},
    once: boolean = true,
    options: IntersectionObserverInit = {threshold: 1.0}
) => {
    // Initiate the observer
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(function (entry) {
            // If the element to watch is intersecting within the threshold
            if (entry && entry.isIntersecting) {
                // Run the callback
                callback(entry.target);

                // If the callback should only run once, unobserve the element
                if (once) {
                    observer.unobserve(entry.target);
                }
            }

            // If the element is not intersecting, run the (optional) unintersecting callback
            else {
                outCallback(entry.target);
            }
        })
    }, options);

    // Observe the element

    if (elementToWatch instanceof Element) {
        observer.observe(elementToWatch);
    } else {
        document
            .querySelectorAll(elementToWatch)
            .forEach(function (r) {
                observer.observe(r);
            })
    }

    // Returns the observer, so it can be further used in the component
    return observer;
};
