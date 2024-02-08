window.onload = function() {
    const lightTheme = 'noborder_light';
    const darkTheme = 'noborder_dark';

    let theme = lightTheme;
    const html = document.documentElement;
    if ((html.hasAttribute('data-mode') && html.getAttribute('data-mode') === 'dark') || (!html.hasAttribute('data-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        theme = darkTheme;
    }

    let giscusAttributes = {
        src: 'https://giscus.app/client.js',
        'data-repo': 'papertoy1127/papertoy1127.github.io',
        'data-repo-id': 'R_kgDOLOs4pw',
        'data-category': 'Comments',
        'data-category-id': 'DIC_kwDOLOs4p84Cc_S6',
        'data-mapping': 'pathname',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'bottom',
        'data-theme': theme,
        'data-lang': 'ko',
        crossorigin: 'anonymous',
        async: ''
    };

    let giscusScript = document.createElement('script');
    Object.entries(giscusAttributes).forEach(([key, value]) =>
    giscusScript.setAttribute(key, value)
    );
    try {
        document.getElementById('giscus-script').appendChild(giscusScript);
    } catch { }

    document.getElementsByClassName('mode-toggle')[0].addEventListener('click', function() {
        location.reload();
    })
}