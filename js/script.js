
    // 1. Select the container
    const highlights = document.getElementById('highlights');

    // 2. Create the button
    const btn = document.createElement('button');
    btn.id = 'rotate-btn';
    btn.textContent = 'Rotate Grid';

    // 3. Insert button at the beginning of #highlights
    highlights.insertBefore(btn, highlights.firstChild);

    // 4. The Rotation Logic
    btn.addEventListener('click', () => {
        // Select the specific rows (2nd and 3rd children, index 1 and 2 because we inserted the button)
        // Note: Since we inserted the button, the "rows" are now indices 1, 2, and 3.
        // Row 2 is highlights.children[2], Row 3 is highlights.children[3]

        const row2 = highlights.children[2];
        const row3 = highlights.children[3];

        // Collect the 6 target divs into an array
        // We use spread syntax to convert HTMLCollections to Arrays
        const items = [
            ...Array.from(row2.children),
            ...Array.from(row3.children)
        ];

        // Perform the rotation: Move last element to front
        // [a, b, c, d, e, f] -> [f, a, b, c, d, e]
        const lastItem = items.pop();
        items.unshift(lastItem);

        // Redistribute the items
        // First 3 go to Row 2, Last 3 go to Row 3

        // Clear current contents
        row2.innerHTML = '';
        row3.innerHTML = '';

        // Add first 3 to Row 2
        items.slice(0, 3).forEach(item => {
            item.classList.add('rotating');
            // Remove animation class after it plays so it can play again
            setTimeout(() => item.classList.remove('rotating'), 500);
            row2.appendChild(item);
        });

        // Add last 3 to Row 3
        items.slice(3, 6).forEach(item => {
            item.classList.add('rotating');
            setTimeout(() => item.classList.remove('rotating'), 500);
            row3.appendChild(item);
        });
    });
