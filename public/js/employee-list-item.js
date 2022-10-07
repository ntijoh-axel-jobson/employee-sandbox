class EmployeeListItem extends HTMLElement {
    constructor(employee){
        super()
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.#template().content.cloneNode(true));

        this.name = this.shadowRoot.querySelector('span.name')
        this.name.textContent = employee.name
        this.buttonSpan = this.shadowRoot.querySelector('span.button')
        this.employee = employee
    }
    
    #template() {
        const template = document.createElement('template')
        template.innerHTML = `
        <li class="listItem">
            <span class="name"></span>
            <span class="button">
            <button class="log">Show</button>
            <button class="ban">Banish</button>
            </span>
        </li>
        `
        return template;
    }

    connectedCallback() {
        this.buttonSpan.addEventListener('click', this.#clicked.bind(this))
    }

    async #clicked(e) {
        e.stopPropagation;
        if (e.target.classList.contains('ban')) {
            await fetch(`/api/employees/${this.employee.id}`, {method: 'DELETE'})
            
            // if everything went ok
            const deleteEvent = new CustomEvent('deleteEmployeeEvent', {
                bubbles: true,
                composed: true
            });
            e.target.dispatchEvent(deleteEvent);
        }
        else if (e.target.classList.contains('log')) {
            console.log(e.target)
        }
    }

}

window.customElements.define('employee-list-item', EmployeeListItem)