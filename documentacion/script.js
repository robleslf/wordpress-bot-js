function toggleCode(preElement) {
    if (preElement.classList.contains("pre-expanded")) {
        preElement.classList.remove("pre-expanded");
        preElement.classList.add("pre-collapsed");
    } else {
        preElement.classList.remove("pre-collapsed");
        preElement.classList.add("pre-expanded");
    }
}
