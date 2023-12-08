window.onload = function() {
    // Check if 'marked' is loaded
    if (typeof marked !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log('hi');
        console.log(id);

        document.title = id + " Blog | Vignesh Venkatesh Portfolio"

        // Fetch the Markdown file
        fetch(`../Blogs/${id}.md`)
            .then(response => response.text())
            .then(data => {
                const parse = data;
                console.log(parse);

                // Convert Markdown to HTML and insert into the content div
                document.getElementById('content').innerHTML += marked.parse(parse);

                // Apply Highlight.js syntax highlighting to all code blocks
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.error("Marked library not loaded");
    }
};
