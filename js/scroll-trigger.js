const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  
        }
    });
});

document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    observer.observe(el);
});

const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.classList.contains('fade-in') && !node.classList.contains('visible')) {
                    observer.observe(node);
                }
                node.querySelectorAll && node.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
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
  