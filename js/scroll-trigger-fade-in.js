const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);  
        }
    });
});

document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    fadeInObserver.observe(el);
});

const mutationFadeInObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.classList.contains('fade-in') && !node.classList.contains('visible')) {
                    fadeInObserver.observe(node);
                }
                node.querySelectorAll && node.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
                    fadeInObserver.observe(el);
                });
            }
        });
    });
});

mutationFadeInObserver.observe(document.body, {
    childList: true,
    subtree: true
});
  