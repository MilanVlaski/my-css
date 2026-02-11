class ThemeSelect extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */`
            <select name="theme-select">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        `;

        const select = this.querySelector('select');
        
        const savedTheme = localStorage.getItem('theme') || 'system';
        select.value = savedTheme;

        select.addEventListener('change', (e) => {
            const theme = e.target.value;

            if (theme === 'system') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.removeItem('theme');
            } else {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        });
    }
}

customElements.define('theme-select', ThemeSelect);
