
        const domMapping = () => {
            elements.main = dom.$('main');
        }

        const renderData = data => {
            for (let q of data.questions) {
                dom.createEl(q.question, 'h3', elements.main);
            }
        }

        const processData = evt => {
            if (evt.target.status == 200) renderData(JSON.parse(evt.target.responseText))

            // Bei einem Fehler eine Warnung ausgeben
            else console.warn(evt.target.statusText);
        }

        const loadData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', './data/data.json');
            xhr.addEventListener('load', processData);
            xhr.send();
        }

        const init = () => {
            domMapping();
            loadData();
        }

        document.addEventListener('DOMContentLoaded', init);

        ///////////


        