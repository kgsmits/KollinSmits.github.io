const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-border');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.visualparadigm:not(.animated-border), .html:not(.animated-border)').forEach(el => {
    observer.observe(el);
});

const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                if ((node.classList.contains('visualparadigm') || node.classList.contains('html')) &&
                    !node.classList.contains('animated-border')) {
                    observer.observe(node);
                }
                node.querySelectorAll &&
                    node.querySelectorAll('.visualparadigm:not(.animated-border), .html:not(.animated-border)').forEach(el => {
                        observer.observe(el);
                    });
            }
        });
    });
});

mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});