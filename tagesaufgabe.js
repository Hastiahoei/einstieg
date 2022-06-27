const createEl = (type, content, parent) => {
    const newEl = document.createElement(type);
    newEl.innerHTML = content;
    parent.append(newEl);
}

const init = () => {
    
}


document.addEventListener('DOMContentLoaded', init);

//////////////////

const createEl = (type, content, parent) => {
    const newEl = document.createElement(type);
    newEl.innerHTML = content;
    parent.append(newEl);
}

const init = () => {
    createEl('div', 'Hallo Welt', document.querySelector('main'));
}


document.addEventListener('DOMContentLoaded', init);

///////////////////  
       
    const createEl = (type, content, parent) => {
        const newEl = document.createElement(type);
        newEl.innerHTML = content;
        parent.append(newEl);
    }

    const domMapping = () => {
        elements.main = document.querySelector('main');
    }

    const init = () => {
        domMapping();
        createEl('div', 'Hallo Welt', elements.main);
    }

    
    document.addEventListener('DOMContentLoaded', init);

////////////////////

const createEl = (type, content, parent) => {
    const newEl = document.createElement(type);
    newEl.innerHTML = content;
    parent.append(newEl);
    return newEl;
}

const domMapping = () => {
    elements.main = document.querySelector('main');
}

const init = () => {
    domMapping();
    elements.containerForP = createEl('div', 'Hallo Welt', elements.main);

    createEl('p', 'abc', elements.containerForP);
    createEl('p', 'def', elements.containerForP);
    createEl('p', 'ghi', elements.containerForP);
    createEl('p', 'jkl', elements.containerForP);
    createEl('p', 'mno', elements.containerForP);
}


document.addEventListener('DOMContentLoaded', init);


////////////
            const createEl = (type, content, parent) => {
            const newEl = document.createElement(type);
            newEl.innerHTML = content;
            parent.append(newEl);
            return newEl;
        }

        const DOMMapping = () => {
            elements.main = document.querySelector('main');
        }

        const fillDOM = () => {
            elements.containerForP = createEl('div', 'Hallo Welt', elements.main);

            createEl('p', 'abc', elements.containerForP);
            createEl('p', 'def', elements.containerForP);
            createEl('p', 'ghi', elements.containerForP);
            createEl('p', 'jkl', elements.containerForP);
            createEl('p', 'mno', elements.containerForP);

            elements.containerContents = createEl('article', '', elements.main);
            for (let content of contents) {
                createEl('p', content, elements.containerContents);
            }
        }

        const init = () => {
            DOMMapping();
            fillDOM();
        }

        document.addEventListener('DOMContentLoaded', init);

        //////////

        const createEl = (type, content, parent) => {
            const newEl = document.createElement(type);
            newEl.innerHTML = content;
            parent.append(newEl);
            return newEl;
        }

        const DOMMapping = () => {
            elements.main = document.querySelector('main');
        }

        const fillDOM = () => {
            elements.containerForP = createEl('div', 'Hallo Welt', elements.main);

            createEl('p', 'abc', elements.containerForP);
            createEl('p', 'def', elements.containerForP);
            createEl('p', 'ghi', elements.containerForP);
            createEl('p', 'jkl', elements.containerForP);
            createEl('p', 'mno', elements.containerForP);

            
            elements.containerContents = createEl('article', '', elements.main);
            for (let content of contents) {
                createEl('p', content, elements.containerContents);
            }
        }

        const init = () => {
            DOMMapping();
            fillDOM();
        }

        
        document.addEventListener('DOMContentLoaded', init);


