const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated-dot');
                experienceObserver.unobserve(entry.target);
            }, 3500);
        }
    });
});

document.querySelectorAll('.borderAnimation:not(.animated-dot)').forEach(el => {
    experienceObserver.observe(el);
});

const mutationExperienceInObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.classList.contains('borderAnimation') && !node.classList.contains('animated-dot')) {
                    experienceObserver.observe(node);
                }
                node.querySelectorAll && node.querySelectorAll('.borderAnimation:not(.animated-dot)').forEach(el => {
                    experienceObserver.observe(el);
                });
            }
        });
    });
});

mutationExperienceInObserver.observe(document.body, {
    childList: true,
    subtree: true
});
  

